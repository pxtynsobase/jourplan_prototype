const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('web/app.js', 'utf8');
test('website has no backend requests or embedded service keys', () => {
  assert.doesNotMatch(source, /fetch\s*\(|\/api\/|AIza[\w-]+|google\.maps/);
  assert.doesNotMatch(fs.readFileSync('web/index.html','utf8'), /maps\.googleapis\.com|AIza/);
});
const prefix = source.slice(0, source.indexOf('const state ='));
const planner = source.slice(source.indexOf('function buildLocalPlan'), source.indexOf('async function createTrip'));
const dayCount = source.slice(source.indexOf('function dateDayCount'), source.indexOf('function routeEstimate'));
const context = vm.createContext({document:{getElementById:()=>null},localStorage:{getItem:()=>null}});
vm.runInContext(prefix + dayCount + planner, context);
test('creates a multi-day plan using places from the chosen city', () => {
  const plan = vm.runInContext("buildLocalPlan(CITIES.find(c => c.name === 'Tokyo'), '2026-10-23', '2026-10-25', 2, ['Food & Dining'])", context);
  assert.equal(plan.dailyItinerary.length,3);
  assert.ok(plan.dailyItinerary.every(d => d.attractions.every(p => p.latitude > 35 && p.latitude < 36)));
  assert.ok(plan.dailyItinerary.every(d => d.restaurants.length > 0));
  assert.equal(plan.dailyItinerary[0].accommodations.length, 0);
});
test('unsupported destinations do not receive unrelated fallback places', () => {
  assert.throws(() => vm.runInContext("buildLocalPlan({name:'Unknown'}, '2026-10-23', '2026-10-23', 2, [])",context), /supported destinations/);
});
