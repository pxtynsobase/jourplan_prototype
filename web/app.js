const phone = document.getElementById('phone');


const CITIES = [
  { name: 'Bangkok', country: 'Thailand', flag: '🇹🇭', lat: 13.7563, lng: 100.5018, currency: 'THB', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Chiang Mai', country: 'Thailand', flag: '🇹🇭', lat: 18.7883, lng: 98.9853, currency: 'THB', image: 'https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Phuket', country: 'Thailand', flag: '🇹🇭', lat: 7.8804, lng: 98.3923, currency: 'THB', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Tokyo', country: 'Japan', flag: '🇯🇵', lat: 35.6762, lng: 139.6503, currency: 'JPY', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Kyoto', country: 'Japan', flag: '🇯🇵', lat: 35.0116, lng: 135.7681, currency: 'JPY', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Osaka', country: 'Japan', flag: '🇯🇵', lat: 34.6937, lng: 135.5023, currency: 'JPY', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Seoul', country: 'South Korea', flag: '🇰🇷', lat: 37.5665, lng: 126.9780, currency: 'USD', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Singapore', country: 'Singapore', flag: '🇸🇬', lat: 1.3521, lng: 103.8198, currency: 'SGD', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Paris', country: 'France', flag: '🇫🇷', lat: 48.8566, lng: 2.3522, currency: 'EUR', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Rome', country: 'Italy', flag: '🇮🇹', lat: 41.9028, lng: 12.4964, currency: 'EUR', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80' },
  { name: 'London', country: 'United Kingdom', flag: '🇬🇧', lat: 51.5074, lng: -0.1278, currency: 'USD', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80' },
  { name: 'New York', country: 'United States', flag: '🇺🇸', lat: 40.7128, lng: -74.0060, currency: 'USD', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80' },
];

const BUDGETS = [
  ['Shoestring', 'Spend as little as possible, street food & hostels', 900],
  ['Budget', 'Great value, thoughtful local choices', 1500],
  ['Moderate', 'A comfortable balance, 3-4 star stays', 3000],
  ['Upscale', 'Premium comfort and scenic dining', 5500],
  ['Luxury', 'Unforgettable VIP & luxury experience', 10000],
];

const PREFS = [
  ['Landmarks', 'sparkles'],
  ['Food & Dining', 'fork.knife'],
  ['Culture & History', 'building.columns'],
  ['Shopping', 'bag'],
  ['Relaxation', 'leaf'],
  ['Nightlife', 'moon.stars'],
];

// Rich curated places database for destinations around the world with real photos & coordinates
const CITY_RECOMMENDATIONS = {
  bangkok: [
    { id: 'bkk-grand-palace', name: 'The Grand Palace', subtitle: 'Phra Nakhon · Historic Old City', category: 'Things to do', key: 'attraction', lat: 13.7500, lng: 100.4913, image: 'https://images.unsplash.com/photo-1587308688353-bc58083be441?auto=format&fit=crop&w=1200&q=82', description: 'Spectacular royal palace complex with the revered Temple of the Emerald Buddha.', rating: '4.8', walk: 12, drive: 8, bus: 16, train: 14 },
    { id: 'bkk-wat-arun', name: 'Wat Arun (Temple of Dawn)', subtitle: 'Riverside Landmark', category: 'Things to do', key: 'attraction', lat: 13.7437, lng: 100.4889, image: 'https://images.unsplash.com/photo-1666418096686-da94c2e70e6d?auto=format&fit=crop&w=1200&q=82', description: 'Porcelain-encrusted riverside prang offering sweeping views of Chao Phraya river.', rating: '4.8', walk: 18, drive: 12, bus: 22, train: 16 },
    { id: 'bkk-yaowarat', name: 'Yaowarat Chinatown', subtitle: 'Street Food & Neon Streets', category: 'Food', key: 'food', lat: 13.7394, lng: 100.5101, image: 'https://images.unsplash.com/photo-1753272379004-2c2b342073f7?auto=format&fit=crop&w=1200&q=82', description: 'World-famous street food paradise with family-run seafood stalls and desserts.', rating: '4.7', walk: 14, drive: 10, bus: 18, train: 12 },
    { id: 'bkk-thipsamai', name: 'Thipsamai Pad Thai', subtitle: 'Pratu Phi · Michelin Bib Gourmand', category: 'Food', key: 'food', lat: 13.7527, lng: 100.5048, image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=82', description: 'Legendary eatery renowned for authentic egg-wrapped prawn Pad Thai.', rating: '4.6', walk: 10, drive: 7, bus: 14, train: 11 },
    { id: 'bkk-chatuchak', name: 'Chatuchak Weekend Market', subtitle: 'Shopping & Vintage Finds', category: 'Things to do', key: 'attraction', lat: 13.7999, lng: 100.5507, image: 'https://images.unsplash.com/photo-1672934324126-257a393a9aa8?auto=format&fit=crop&w=1200&q=82', description: 'Massive market with 15,000+ stalls selling fashion, crafts, and street snacks.', rating: '4.6', walk: 9, drive: 8, bus: 16, train: 11 },
    { id: 'bkk-riverside-hotel', name: 'Riva Surya Bangkok', subtitle: 'Riverside Boutique Hotel', category: 'Hotels', key: 'hotel', lat: 13.7609, lng: 100.4938, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=82', description: 'Calm riverside boutique stay with river view pool and easy boat ferry access.', rating: '4.7', walk: 11, drive: 8, bus: 16, train: 13, price: 3200 }
  ],
  tokyo: [
    { id: 'tky-sensoji', name: 'Senso-ji Temple', subtitle: 'Asakusa · Historic Tokyo', category: 'Things to do', key: 'attraction', lat: 35.7148, lng: 139.7967, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80', description: 'Tokyo’s oldest Buddhist temple featuring the iconic Kaminarimon red lantern.', rating: '4.8', walk: 10, drive: 8, bus: 14, train: 6 },
    { id: 'tky-skytree', name: 'Tokyo Skytree', subtitle: 'Oshiage · Tower & Observation', category: 'Things to do', key: 'attraction', lat: 35.7101, lng: 139.8107, image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80', description: 'World’s tallest freestanding tower with breathtaking 360-degree city views.', rating: '4.7', walk: 15, drive: 10, bus: 18, train: 8 },
    { id: 'tky-shibuya', name: 'Shibuya Scramble Crossing', subtitle: 'Shibuya · Iconic Intersection', category: 'Things to do', key: 'attraction', lat: 35.6595, lng: 139.7005, image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80', description: 'The busiest pedestrian intersection in the world, surrounded by vibrant neon screens.', rating: '4.7', walk: 8, drive: 12, bus: 20, train: 4 },
    { id: 'tky-ichiran', name: 'Ichiran Ramen Asakusa', subtitle: 'Asakusa · Tonkotsu Ramen', category: 'Food', key: 'food', lat: 35.7118, lng: 139.7972, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80', description: 'World-renowned private booth ramen experience serving rich pork broth noodles.', rating: '4.6', walk: 5, drive: 6, bus: 10, train: 4 },
    { id: 'tky-shinjuku-hotel', name: 'Shinjuku Granbell Hotel', subtitle: 'Kabukicho · City Center', category: 'Hotels', key: 'hotel', lat: 35.6968, lng: 139.7047, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', description: 'Modern hotel located steps from Shinjuku nightlife, restaurants, and shopping.', rating: '4.6', walk: 12, drive: 10, bus: 16, train: 8, price: 4200 }
  ],
  chiangmai: [
    { id: 'cnx-doi-suthep', name: 'Wat Phra That Doi Suthep', subtitle: 'Mountain Temple · Golden Chedi', category: 'Things to do', key: 'attraction', lat: 18.8049, lng: 98.9216, image: 'https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=1200&q=80', description: 'Sacred mountaintop temple with shimmering golden stupa and panoramic views.', rating: '4.8', walk: 35, drive: 20, bus: 25, train: 20 },
    { id: 'cnx-tha-phae', name: 'Tha Phae Gate', subtitle: 'Old City Wall · Night Market', category: 'Things to do', key: 'attraction', lat: 18.7877, lng: 98.9931, image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80', description: 'Historic brick gate of the walled city and hub for weekend walking street markets.', rating: '4.7', walk: 8, drive: 6, bus: 12, train: 8 },
    { id: 'cnx-khao-soi', name: 'Khao Soi Mae Sai', subtitle: 'Northern Thai Curry Noodles', category: 'Food', key: 'food', lat: 18.7981, lng: 98.9764, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', description: 'Beloved local kitchen famous for coconut curry egg noodles with tender chicken.', rating: '4.7', walk: 10, drive: 8, bus: 12, train: 8 },
    { id: 'cnx-pingviman', name: 'Pingviman Hotel Chiang Mai', subtitle: 'Old City · Lanna Architecture', category: 'Hotels', key: 'hotel', lat: 18.7816, lng: 98.9818, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', description: 'Traditional Lanna wooden boutique retreat with pool inside the ancient city walls.', rating: '4.8', walk: 10, drive: 6, bus: 10, train: 8, price: 2800 }
  ],
  phuket: [
    { id: 'pkt-big-buddha', name: 'The Big Buddha Phuket', subtitle: 'Nakkerd Hill · Marble Landmark', category: 'Things to do', key: 'attraction', lat: 7.8276, lng: 98.3129, image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80', description: '45-meter tall white Burmese marble Buddha statue atop Nakkerd Hill.', rating: '4.8', walk: 30, drive: 18, bus: 25, train: 20 },
    { id: 'pkt-old-town', name: 'Old Phuket Town', subtitle: 'Sino-Portuguese Heritage', category: 'Things to do', key: 'attraction', lat: 7.8849, lng: 98.3892, image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80', description: 'Charming historic street lined with colourful shophouses, cafes, and street art.', rating: '4.7', walk: 8, drive: 6, bus: 10, train: 8 },
    { id: 'pkt-raya', name: 'Raya Restaurant Phuket', subtitle: 'Dibuk Rd · Heritage Dining', category: 'Food', key: 'food', lat: 7.8861, lng: 98.3912, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', description: 'Famed heritage house restaurant serving authentic Phuket crab curry.', rating: '4.7', walk: 6, drive: 5, bus: 10, train: 6 },
    { id: 'pkt-hotel', name: 'The Memory at On On Hotel', subtitle: 'Phuket Town · Boutique Heritage', category: 'Hotels', key: 'hotel', lat: 7.8837, lng: 98.3881, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', description: 'Phuket’s oldest heritage hotel, beautifully restored in Sino-Portuguese style.', rating: '4.7', walk: 5, drive: 4, bus: 8, train: 5, price: 2200 }
  ],
  paris: [
    { id: 'par-eiffel', name: 'Eiffel Tower', subtitle: 'Champ de Mars · Landmark', category: 'Things to do', key: 'attraction', lat: 48.8584, lng: 2.2945, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80', description: 'The timeless iron lattice tower symbol of Paris with breathtaking city vistas.', rating: '4.8', walk: 12, drive: 10, bus: 16, train: 8 },
    { id: 'par-louvre', name: 'Louvre Museum', subtitle: 'Rue de Rivoli · Fine Arts', category: 'Things to do', key: 'attraction', lat: 48.8606, lng: 2.3376, image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80', description: 'The world’s largest art museum and home to the Mona Lisa and Venus de Milo.', rating: '4.8', walk: 14, drive: 12, bus: 18, train: 6 },
    { id: 'par-flore', name: 'Café de Flore', subtitle: 'Saint-Germain-des-Prés', category: 'Food', key: 'food', lat: 48.8542, lng: 2.3325, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', description: 'One of the oldest coffeehouses in Paris, frequented by historic writers and artists.', rating: '4.6', walk: 10, drive: 8, bus: 14, train: 6 },
    { id: 'par-hotel', name: 'Hotel Regina Louvre', subtitle: '1st Arrondissement · Luxury', category: 'Hotels', key: 'hotel', lat: 48.8637, lng: 2.3328, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', description: 'Elegant Belle Époque luxury hotel overlooking the Tuileries Garden and Louvre.', rating: '4.8', walk: 8, drive: 6, bus: 12, train: 4, price: 9500 }
  ],
  rome: [
    { id: 'rom-colosseum', name: 'The Colosseum', subtitle: 'Piazza del Colosseo · Ancient Rome', category: 'Things to do', key: 'attraction', lat: 41.8902, lng: 12.4922, image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80', description: 'The monumental ancient amphitheatre built in 70-80 AD, heart of Imperial Rome.', rating: '4.8', walk: 10, drive: 8, bus: 14, train: 6 },
    { id: 'rom-trevi', name: 'Trevi Fountain', subtitle: 'Piazza di Trevi · Baroque', category: 'Things to do', key: 'attraction', lat: 41.9009, lng: 12.4833, image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=80', description: 'Magnificent 18th-century Baroque fountain where visitors toss a coin to return to Rome.', rating: '4.8', walk: 12, drive: 10, bus: 15, train: 8 },
    { id: 'rom-enzo', name: 'Da Enzo al 29', subtitle: 'Trastevere · Roman Trattoria', category: 'Food', key: 'food', lat: 41.8887, lng: 12.4774, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', description: 'Beloved classic trattoria famous for Carbonara, Cacio e Pepe, and fried artichokes.', rating: '4.7', walk: 8, drive: 7, bus: 12, train: 6 },
    { id: 'rom-hotel', name: 'Hotel Artemide Rome', subtitle: 'Via Nazionale · City Center', category: 'Hotels', key: 'hotel', lat: 41.9015, lng: 12.4951, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', description: 'Charming 4-star boutique hotel with rooftop cocktail terrace and Turkish bath spa.', rating: '4.8', walk: 8, drive: 6, bus: 10, train: 4, price: 4800 }
  ],
  kyoto: [
    { id: 'kyo-fushimi', name: 'Fushimi Inari Taisha', subtitle: 'Fushimi Ward · Shinto Shrine', category: 'Things to do', key: 'attraction', lat: 34.9671, lng: 135.7727, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80', description: 'Famous shrine with thousands of vibrant vermilion torii gates winding through sacred mountaintop paths.', rating: '4.8', walk: 15, drive: 10, bus: 16, train: 6 },
    { id: 'kyo-kinkaku', name: 'Kinkaku-ji (Golden Pavilion)', subtitle: 'Kita Ward · Zen Temple', category: 'Things to do', key: 'attraction', lat: 35.0394, lng: 135.7292, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80', description: 'Breathtaking Zen temple whose top two floors are completely covered in gleaming gold leaf.', rating: '4.7', walk: 12, drive: 8, bus: 14, train: 10 },
    { id: 'kyo-gion-karyo', name: 'Gion Karyo', subtitle: 'Gion · Kaiseki Cuisine', category: 'Food', key: 'food', lat: 35.0037, lng: 135.7770, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', description: 'Refined seasonal Kyoto kaiseki multi-course dining in a historic Gion townhouse.', rating: '4.8', walk: 8, drive: 6, bus: 10, train: 5 },
    { id: 'kyo-hotel', name: 'Kyoto Ryokan Gion Sano', subtitle: 'Higashiyama · Traditional Stay', category: 'Hotels', key: 'hotel', lat: 35.0012, lng: 135.7801, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', description: 'Authentic Japanese ryokan experience with tatami mats, cypress bath, and warm hospitality.', rating: '4.8', walk: 7, drive: 5, bus: 8, train: 5, price: 5400 }
  ],
  osaka: [
    { id: 'osa-castle', name: 'Osaka Castle', subtitle: 'Chuo Ward · Historic Citadel', category: 'Things to do', key: 'attraction', lat: 34.6873, lng: 135.5262, image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80', description: 'Majestic 16th-century fortress surrounded by stone ramparts, moats, and cherry trees.', rating: '4.7', walk: 14, drive: 10, bus: 16, train: 7 },
    { id: 'osa-dotonbori', name: 'Dotonbori Canal & Glico Man', subtitle: 'Namba · Food & Neon', category: 'Things to do', key: 'attraction', lat: 34.6687, lng: 135.5013, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80', description: 'The beating gastronomic heart of Osaka known for illuminated billboards and sizzling street delicacies.', rating: '4.8', walk: 6, drive: 5, bus: 8, train: 3 },
    { id: 'osa-mizuno', name: 'Mizuno Okonomiyaki', subtitle: 'Dotonbori · Michelin Selected', category: 'Food', key: 'food', lat: 34.6680, lng: 135.5028, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', description: 'Osaka’s most acclaimed okonomiyaki parlour serving savory teppanyaki cabbage pancakes since 1945.', rating: '4.6', walk: 5, drive: 5, bus: 7, train: 4 },
    { id: 'osa-hotel', name: 'Swissotel Nankai Osaka', subtitle: 'Namba · Luxury City Stay', category: 'Hotels', key: 'hotel', lat: 34.6648, lng: 135.5020, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', description: 'High-rise 5-star hotel directly above Namba Station with rooftop fine dining and city panoramas.', rating: '4.7', walk: 4, drive: 3, bus: 6, train: 2, price: 6200 }
  ],
  seoul: [
    { id: 'sel-gyeongbok', name: 'Gyeongbokgung Palace', subtitle: 'Jongno-gu · Joseon Dynasty', category: 'Things to do', key: 'attraction', lat: 37.5796, lng: 126.9770, image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80', description: 'Main royal palace of the Joseon dynasty featuring grand pavilions, gardens, and royal guard ceremonies.', rating: '4.8', walk: 12, drive: 8, bus: 14, train: 6 },
    { id: 'sel-bukchon', name: 'Bukchon Hanok Village', subtitle: 'Samcheong · Traditional Hanok', category: 'Things to do', key: 'attraction', lat: 37.5826, lng: 126.9837, image: 'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1200&q=80', description: 'Scenic neighborhood with hundreds of preserved 600-year-old traditional Korean houses.', rating: '4.7', walk: 10, drive: 8, bus: 12, train: 6 },
    { id: 'sel-tosokchon', name: 'Tosokchon Samgyetang', subtitle: 'Jongno · Ginseng Chicken Soup', category: 'Food', key: 'food', lat: 37.5778, lng: 126.9718, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', description: 'Iconic restaurant celebrated for rich Korean ginseng chicken soup prepared with roasted nuts and herbs.', rating: '4.6', walk: 8, drive: 6, bus: 10, train: 5 },
    { id: 'sel-hotel', name: 'Lotte Hotel Seoul', subtitle: 'Myeongdong · Luxury', category: 'Hotels', key: 'hotel', lat: 37.5653, lng: 126.9814, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', description: 'Prestigious luxury hotel steps from Myeongdong shopping street and gourmet food alleys.', rating: '4.8', walk: 6, drive: 5, bus: 8, train: 4, price: 5800 }
  ],
  singapore: [
    { id: 'sin-gardens', name: 'Gardens by the Bay', subtitle: 'Marina South · Supertrees & Domes', category: 'Things to do', key: 'attraction', lat: 1.2816, lng: 103.8636, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80', description: 'Futuristic 101-hectare botanical park featuring iconic Supertree structures and the Cloud Forest waterfall.', rating: '4.9', walk: 12, drive: 8, bus: 15, train: 6 },
    { id: 'sin-mbs-skypark', name: 'Marina Bay Sands Observation Deck', subtitle: 'Bayfront · Skyline Views', category: 'Things to do', key: 'attraction', lat: 1.2834, lng: 103.8607, image: 'https://images.unsplash.com/photo-1506351421178-63b52a2d15c8?auto=format&fit=crop&w=1200&q=80', description: 'Cantilevered observation platform 57 levels above Singapore with panoramic views across the strait.', rating: '4.8', walk: 10, drive: 6, bus: 12, train: 5 },
    { id: 'sin-lau-pa-sat', name: 'Lau Pa Sat Hawker Center', subtitle: 'Raffles Quay · Satay Street', category: 'Food', key: 'food', lat: 1.2807, lng: 103.8504, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', description: 'Victorian cast-iron market famous for evening outdoor charcoal grilled satay skewers and chili crab.', rating: '4.7', walk: 8, drive: 5, bus: 10, train: 4 },
    { id: 'sin-hotel', name: 'Marina Bay Sands Hotel', subtitle: 'Marina Bay · World Icon', category: 'Hotels', key: 'hotel', lat: 1.2829, lng: 103.8585, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', description: 'World-famous luxury resort featuring the legendary 150-meter rooftop infinity pool and luxury dining.', rating: '4.8', walk: 8, drive: 6, bus: 12, train: 4, price: 14000 }
  ],
  london: [
    { id: 'lon-tower-bridge', name: 'Tower Bridge & Tower of London', subtitle: 'Southwark · Historic Landmark', category: 'Things to do', key: 'attraction', lat: 51.5055, lng: -0.0754, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', description: 'World-famous Victorian bascule bridge crossing the Thames adjacent to the historic fortress.', rating: '4.8', walk: 14, drive: 12, bus: 18, train: 6 },
    { id: 'lon-big-ben', name: 'Big Ben & Palace of Westminster', subtitle: 'Westminster · Parliament', category: 'Things to do', key: 'attraction', lat: 51.5007, lng: -0.1246, image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80', description: 'Iconic neo-Gothic clock tower standing majestically beside the British Houses of Parliament.', rating: '4.8', walk: 10, drive: 10, bus: 15, train: 5 },
    { id: 'lon-dishoom', name: 'Dishoom Covent Garden', subtitle: 'Upper St Martin’s · Bombay Cafe', category: 'Food', key: 'food', lat: 51.5126, lng: -0.1264, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', description: 'Atmospheric homage to old Bombay Irani cafés celebrated for house black daal and gunpowder potatoes.', rating: '4.7', walk: 7, drive: 8, bus: 12, train: 4 },
    { id: 'lon-hotel', name: 'The Savoy London', subtitle: 'Strand · Iconic Luxury', category: 'Hotels', key: 'hotel', lat: 51.5103, lng: -0.1206, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', description: 'Legendary British luxury hotel on the River Thames, embodying elegance, style, and bespoke service.', rating: '4.8', walk: 6, drive: 5, bus: 10, train: 4, price: 11500 }
  ],
  newyork: [
    { id: 'nyc-empire', name: 'Empire State Building', subtitle: 'Midtown Manhattan · Art Deco', category: 'Things to do', key: 'attraction', lat: 40.7484, lng: -73.9857, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80', description: 'Soaring 102-story Art Deco skyscraper providing unforgettable 360-degree views of New York City.', rating: '4.8', walk: 10, drive: 8, bus: 14, train: 4 },
    { id: 'nyc-central-park', name: 'Central Park & The Mall', subtitle: 'Manhattan · Urban Oasis', category: 'Things to do', key: 'attraction', lat: 40.7851, lng: -73.9683, image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=1200&q=80', description: 'Iconic 843-acre city park with winding tree-lined promenades, lakes, and romantic bridges.', rating: '4.9', walk: 12, drive: 10, bus: 16, train: 5 },
    { id: 'nyc-katz', name: 'Katz’s Delicatessen', subtitle: 'Lower East Side · Pastrami on Rye', category: 'Food', key: 'food', lat: 40.7222, lng: -73.9874, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', description: 'Legendary deli established in 1888, world-renowned for hand-carved steaming hot pastrami sandwiches.', rating: '4.6', walk: 8, drive: 7, bus: 12, train: 4 },
    { id: 'nyc-hotel', name: 'The Plaza New York', subtitle: 'Fifth Avenue & Central Park South', category: 'Hotels', key: 'hotel', lat: 40.7645, lng: -73.9744, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', description: 'Timeless luxury landmark opposite Central Park offering unmatched historic grandeur and white-glove service.', rating: '4.8', walk: 6, drive: 5, bus: 10, train: 3, price: 13500 }
  ]
};

const DEFAULT_PLACES = CITY_RECOMMENDATIONS.bangkok;

const DEFAULT_HOTELS = [
  { id: 'riverside-house', name: 'Riverside Boutique Hotel Bangkok', area: 'Chao Phraya Riverfront', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82', rating: '4.8', price: 2450, latitude: 13.7609, longitude: 100.4938, description: 'A calm riverside base with pool, breakfast, and easy ferry access.' },
  { id: 'citrus-sukhumvit', name: 'Citrus Sukhumvit Stay', area: 'Sukhumvit · City centre', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=82', rating: '4.6', price: 1890, latitude: 13.7420, longitude: 100.5560, description: 'A bright city stay close to shopping, dining, and the BTS sky-train.' },
  { id: 'old-city-hideaway', name: 'Old City Hideaway', area: 'Phra Nakhon · Historic quarter', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=82', rating: '4.7', price: 3150, latitude: 13.7540, longitude: 100.4990, description: 'A boutique retreat within easy reach of grand temples and local night markets.' },
];

const BUDGET_TIERS = [
  { id: 0, label: 'Shoestring', thai: 'ประหยัดสุด', range: '< 1,500', icon: '💰', min: 0, max: 1500, desc: 'Showing economical hostels & budget-friendly stays (< 1,500 THB)' },
  { id: 1, label: 'Budget', thai: 'ประหยัด', range: '1,500 - 2,800', icon: '🏷️', min: 1400, max: 2800, desc: 'Showing great value 3-star stays (1,500 – 2,800 THB)' },
  { id: 2, label: 'Moderate', thai: 'มาตรฐาน', range: '2,800 - 5,000', icon: '⚖️', min: 2500, max: 5000, desc: 'Showing comfortable 3-4 star stays (2,800 – 5,000 THB)' },
  { id: 3, label: 'Upscale', thai: 'พรีเมียม', range: '5,000 - 8,500', icon: '✨', min: 4800, max: 8500, desc: 'Showing premium boutique & 4-5 star stays (5,000 – 8,500 THB)' },
  { id: 4, label: 'Luxury', thai: 'หรูหรา', range: '8,500+', icon: '👑', min: 8000, max: 999999, desc: 'Showing 5-star iconic luxury stays (8,500+ THB)' },
  { id: 'all', label: 'All Budgets', thai: 'ทุกระดับราคา', range: 'All', icon: '🌐', min: 0, max: 999999, desc: 'Showing all accommodations in this area' }
];

function getHotelBudgetTier(price) {
  const p = Number(price) || 2500;
  if (p <= 1500) return 0;
  if (p <= 2800) return 1;
  if (p <= 5000) return 2;
  if (p <= 8500) return 3;
  return 4;
}

const CITY_HOTELS = {
  seoul: [
    { id: 'sel-time-travelers', name: 'Time Travelers Party Hostel In Hongdae', area: 'Hongdae · Youth & Social Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 790, latitude: 37.5582, longitude: 126.9255, description: 'Fun, ultra-budget social hostel near Hongik University with cozy dorms and private rooms.' },
    { id: 'sel-step-inn', name: 'Step Inn Myeongdong 1', area: 'Myeongdong · Budget & Capsule', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 1100, latitude: 37.5645, longitude: 126.9855, description: 'Immaculate, highly rated budget hostel with private pods and continental breakfast in Myeongdong.' },
    { id: 'sel-k-guesthouse', name: 'K-Guesthouse Insadong', area: 'Insadong · Cultural Budget Stay', image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80', rating: '4.5', price: 1650, latitude: 37.5732, longitude: 126.9859, description: 'Affordable and clean private rooms steps from Insadong Art Street and Anguk metro station.' },
    { id: 'sel-hotel-pj', name: 'Hotel PJ Myeongdong', area: 'Euljiro · Great Value 4-Star', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 2450, latitude: 37.5646, longitude: 126.9972, description: 'Exceptional value hotel with complimentary shuttle bus to Myeongdong and Dongdaemun.' },
    { id: 'sel-nine-tree', name: 'Nine Tree Premier Hotel Myeongdong II', area: 'Myeongdong · Smart Modern Stay', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 3400, latitude: 37.5651, longitude: 126.9902, description: 'Modern, well-appointed hotel with top-tier custom pillow menu and panoramic lounge.' },
    { id: 'sel-ryse-hotel', name: 'RYSE, Autograph Collection', area: 'Hongdae · Arts District', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 4600, latitude: 37.5539, longitude: 126.9219, description: 'Chic designer lifestyle hotel immersed in Hongdae culture, art galleries, and cafes.' },
    { id: 'sel-lotte-hotel', name: 'Lotte Hotel Seoul', area: 'Myeongdong · Central Seoul', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 5800, latitude: 37.5653, longitude: 126.9814, description: 'Prestigious 5-star luxury hotel steps from Myeongdong shopping and Namdaemun market.' },
    { id: 'sel-shilla-hotel', name: 'The Shilla Seoul', area: 'Jung-gu · Namsan Mountain', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 7200, latitude: 37.5561, longitude: 127.0053, description: 'Iconic luxury hotel combining traditional Korean hospitality with contemporary elegance.' },
    { id: 'sel-four-seasons', name: 'Four Seasons Hotel Seoul', area: 'Gwanghwamun · Historic Center', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 9200, latitude: 37.5707, longitude: 126.9754, description: 'Tranquil luxury sanctuary near Gyeongbokgung Palace with seven acclaimed restaurants and bars.' },
    { id: 'sel-signiel', name: 'Signiel Seoul', area: 'Songpa-gu · Lotte World Tower', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 9800, latitude: 37.5126, longitude: 127.1025, description: 'Ultra-luxury sky hotel in Lotte World Tower with breathtaking panoramic city views.' }
  ],
  bangkok: [
    { id: 'bkk-bed-station', name: 'Bed Station Hostel Ratchathewi', area: 'Ratchathewi · Industrial Chic Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 650, latitude: 13.7533, longitude: 100.5310, description: 'Trendy industrial hostel located 2 minutes from BTS Ratchathewi with cafe and pool.' },
    { id: 'bkk-lub-d', name: 'Lub d Bangkok Siam', area: 'Siam · Central Budget Stay', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 980, latitude: 13.7469, longitude: 100.5298, description: 'Fun, ultra-convenient budget accommodation right opposite National Stadium BTS station.' },
    { id: 'bkk-citrus-sukhumvit', name: 'Citrus Sukhumvit Stay', area: 'Sukhumvit · City centre', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=82', rating: '4.6', price: 1890, latitude: 13.7420, longitude: 100.5560, description: 'A bright city stay close to shopping, dining, and the BTS sky-train.' },
    { id: 'bkk-ibis-khaosan', name: 'ibis Styles Bangkok Khaosan Viengtai', area: 'Khaosan Rd · Vibrant Boutique', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 2150, latitude: 13.7594, longitude: 100.4996, description: 'Retro-chic hotel with colourful rainbow pool in the heart of historic Banglamphu.' },
    { id: 'bkk-old-city-hideaway', name: 'Old City Hideaway', area: 'Phra Nakhon · Historic quarter', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=82', rating: '4.7', price: 3150, latitude: 13.7540, longitude: 100.4990, description: 'A boutique retreat within easy reach of grand temples and local night markets.' },
    { id: 'bkk-riva-surya', name: 'Riva Surya Bangkok', area: 'Chao Phraya Riverfront', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82', rating: '4.8', price: 3400, latitude: 13.7609, longitude: 100.4938, description: 'A calm riverside boutique base with pool, breakfast, and easy ferry access.' },
    { id: 'bkk-so-bangkok', name: 'SO/ Bangkok Hotel', area: 'Sathorn · Lumphini Park View', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 6200, latitude: 13.7262, longitude: 100.5430, description: 'Luxury design hotel inspired by the 5 natural elements with infinity pool over Lumphini Park.' },
    { id: 'bkk-siam-kempinski', name: 'Siam Kempinski Hotel Bangkok', area: 'Siam · Urban Resort Sanctuary', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 9800, latitude: 13.7485, longitude: 100.5348, description: 'Resort sanctuary in downtown Bangkok featuring multiple landscaped pools and luxury suites.' },
    { id: 'bkk-mandarin-oriental', name: 'Mandarin Oriental Bangkok', area: 'Chao Phraya · Legendary Palace', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 16500, latitude: 13.7235, longitude: 100.5146, description: 'World-renowned legendary luxury hotel that has defined Thai hospitality for over 145 years.' }
  ],
  tokyo: [
    { id: 'tky-unplan', name: 'UNPLAN Kagurazaka Hostel', area: 'Kagurazaka · Cozy Minimalist Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 1100, latitude: 35.7032, longitude: 139.7345, description: 'Modern, peaceful hostel in traditional Kagurazaka with cozy bunks and popular cafe lounge.' },
    { id: 'tky-apa', name: 'APA Hotel Shinjuku Kabukicho', area: 'Shinjuku · Smart Budget Hotel', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', rating: '4.5', price: 2300, latitude: 35.6955, longitude: 139.7022, description: 'Efficient and spotless city hotel with rooftop public bath in central Shinjuku.' },
    { id: 'tky-granbell', name: 'Shinjuku Granbell Hotel', area: 'Kabukicho · City Center', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 4200, latitude: 35.6968, longitude: 139.7047, description: 'Modern hotel located steps from Shinjuku nightlife, restaurants, and shopping.' },
    { id: 'tky-hotel-ryumeikan', name: 'Hotel Ryumeikan Tokyo', area: 'Tokyo Station · Marunouchi', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 4900, latitude: 35.6823, longitude: 139.7708, description: 'Elegant Japanese-accented hotel just a 3-minute stroll from Tokyo Central Station.' },
    { id: 'tky-palace-hotel', name: 'Palace Hotel Tokyo', area: 'Marunouchi · Imperial Palace Moat', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 9800, latitude: 35.6865, longitude: 139.7610, description: 'Preeminent luxury hotel with balconies overlooking the Imperial Palace gardens.' },
    { id: 'tky-park-hyatt', name: 'Park Hyatt Tokyo', area: 'Shinjuku · High-rise Oasis', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 12500, latitude: 35.6857, longitude: 139.6911, description: 'Iconic luxury high-rise hotel featuring panoramic Mount Fuji views and New York Grill.' }
  ],
  chiangmai: [
    { id: 'cnx-stamps', name: 'Stamps Backpackers Chiang Mai', area: 'Old City · Social Community Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 550, latitude: 18.7905, longitude: 98.9950, description: 'Legendary backpacker hostel famed for friendly atmosphere, semi-private dorm pods, and tours.' },
    { id: 'cnx-bed-chang-kian', name: 'BED Changkian Hotel', area: 'Nimman · Modern Minimalist', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 1350, latitude: 18.8078, longitude: 98.9610, description: 'Adults-only minimalist hotel with free espresso and bottled water near Nimman and Maya Mall.' },
    { id: 'cnx-pingviman', name: 'Pingviman Hotel Chiang Mai', area: 'Old City · Lanna Architecture', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 2800, latitude: 18.7816, longitude: 98.9818, description: 'Traditional Lanna wooden boutique retreat with pool inside the ancient city walls.' },
    { id: 'cnx-rachamankha', name: 'Rachamankha Boutique Hotel', area: 'Old City · Heritage Sanctuary', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 4500, latitude: 18.7885, longitude: 98.9812, description: 'Colonnaded heritage courtyard sanctuary designed by renowned Thai architect Ong-ard Satrabhandhu.' },
    { id: 'cnx-four-seasons', name: 'Four Seasons Resort Chiang Mai', area: 'Mae Rim · Rice Paddies Sanctuary', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 14500, latitude: 18.9189, longitude: 98.9272, description: 'Idyllic luxury resort overlooking terraced emerald rice fields in mystical Mae Rim valley.' }
  ],
  phuket: [
    { id: 'pkt-bearpacker', name: 'Bearpacker Patong Hostel', area: 'Patong · Beachside Backpacker', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 600, latitude: 7.8965, longitude: 98.2970, description: 'Modern beach hostel 200m from Patong beach with rooftop swimming pool and cozy pod beds.' },
    { id: 'pkt-onon', name: 'The Memory at On On Hotel', area: 'Phuket Town · Boutique Heritage', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 2200, latitude: 7.8837, longitude: 98.3881, description: 'Phuket’s oldest heritage hotel, beautifully restored in Sino-Portuguese style.' },
    { id: 'pkt-slate', name: 'The Slate Phuket', area: 'Nai Yang Beach · Industrial Chic', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 6800, latitude: 8.0935, longitude: 98.3005, description: 'Luxury Bill Bensley designed resort inspired by Phuket tin-mining heritage on tranquil Nai Yang beach.' },
    { id: 'pkt-trisara', name: 'Trisara Phuket Ocean Villas', area: 'Choeng Thale · Private Pool Villas', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 16500, latitude: 8.0410, longitude: 98.2770, description: 'Exclusive hillside private pool sanctuary with Michelin-starred dining on a secluded bay.' }
  ],
  kyoto: [
    { id: 'kyo-piece-hostel', name: 'Piece Hostel Sanjo', area: 'Sanjo · Modern Minimalist Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 1250, latitude: 35.0089, longitude: 135.7645, description: 'Award-winning design hostel located near Nishiki Market with stylish terrace lounge.' },
    { id: 'kyo-hotel-sano', name: 'Kyoto Ryokan Gion Sano', area: 'Higashiyama · Traditional Stay', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 5400, latitude: 35.0012, longitude: 135.7801, description: 'Authentic Japanese ryokan experience with tatami mats, cypress bath, and warm hospitality.' },
    { id: 'kyo-celestine', name: 'Hotel The Celestine Kyoto Gion', area: 'Gion · Historic Quarter', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 6200, latitude: 34.9984, longitude: 135.7739, description: 'Peaceful retreat nestled in the temple district of Gion with serene courtyard gardens.' },
    { id: 'kyo-hoshinoya', name: 'Hoshinoya Kyoto', area: 'Arashiyama · Riverside Sanctuary', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 18500, latitude: 35.0125, longitude: 135.6705, description: 'Riverside pavilion accessed by boat with tranquil cedar rooms and seasonal kaiseki.' }
  ],
  osaka: [
    { id: 'osa-j-hoppers', name: 'J-Hoppers Osaka Universal', area: 'Fukushima · Social Backpacker', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 920, latitude: 34.6970, longitude: 135.4850, description: 'Welcoming budget hostel near Fukushima station and 15 mins to USJ.' },
    { id: 'osa-cross', name: 'Cross Hotel Osaka', area: 'Dotonbori · Dining & Shopping', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 3800, latitude: 34.6698, longitude: 135.5015, description: 'Stylishly located designer hotel moments from Dotonbori food canal and Shinsaibashi.' },
    { id: 'osa-swissotel', name: 'Swissotel Nankai Osaka', area: 'Namba · Luxury City Stay', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 6200, latitude: 34.6648, longitude: 135.5020, description: 'High-rise 5-star hotel directly above Namba Station with rooftop fine dining and city panoramas.' },
    { id: 'osa-conrad', name: 'Conrad Osaka', area: 'Nakanoshima · Sky Palace', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 13500, latitude: 34.6925, longitude: 135.4960, description: 'Dramatic panoramic floor-to-ceiling river and city vistas in central Osaka.' }
  ],
  singapore: [
    { id: 'sin-pod-capsule', name: 'The Pod Boutique Capsule Hotel', area: 'Beach Road · Stylish Pods', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 1350, latitude: 1.3015, longitude: 103.8598, description: 'Chic boutique capsule hotel offering privacy, premium cotton sheets, and hot breakfast.' },
    { id: 'sin-hotel-boss', name: 'Hotel Boss Singapore', area: 'Lavender · Smart City Stay', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', rating: '4.5', price: 2750, latitude: 1.3055, longitude: 103.8590, description: 'Convenient hotel with sky terrace swimming pool minutes from Bugis and Arab Street.' },
    { id: 'sin-fullerton-hotel', name: 'The Fullerton Hotel Singapore', area: 'Marina Bay · Historic Riverfront', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 8900, latitude: 1.2863, longitude: 103.8538, description: 'Grand heritage hotel located at the mouth of the Singapore River with infinity pool.' },
    { id: 'sin-mbs-hotel', name: 'Marina Bay Sands Hotel', area: 'Marina Bay · World Icon', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 14000, latitude: 1.2829, longitude: 103.8585, description: 'World-famous luxury resort featuring the legendary 150-meter rooftop infinity pool.' },
    { id: 'sin-raffles-hotel', name: 'Raffles Hotel Singapore', area: 'Colonial District · Heritage', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 16500, latitude: 1.2952, longitude: 103.8545, description: 'Legendary 19th-century colonial hotel and birthplace of the famous Singapore Sling.' }
  ],
  paris: [
    { id: 'par-generator', name: 'Generator Paris', area: 'Canal Saint-Martin · Designer Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.5', price: 1450, latitude: 48.8785, longitude: 2.3705, description: 'Vibrant design hostel with rooftop bar offering views across Montmartre and Sacré-Cœur.' },
    { id: 'par-regina', name: 'Hotel Regina Louvre', area: '1st Arrondissement · Luxury', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 9500, latitude: 48.8637, longitude: 2.3328, description: 'Elegant Belle Époque luxury hotel overlooking the Tuileries Garden and Louvre.' },
    { id: 'par-meurice', name: 'Le Meurice Paris', area: 'Rue de Rivoli · Palatial', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.9', price: 18000, latitude: 48.8650, longitude: 2.3292, description: 'Historic palace hotel where 18th-century opulence meets contemporary design by Philippe Starck.' }
  ],
  rome: [
    { id: 'rom-yellowsquare', name: 'YellowSquare Rome', area: 'Termini · Fun & Friendly Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 1200, latitude: 41.9055, longitude: 12.5020, description: 'High-energy social hostel near Termini with private rooms, co-working space, and rooftop lounge.' },
    { id: 'rom-artemide', name: 'Hotel Artemide Rome', area: 'Via Nazionale · City Center', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 4800, latitude: 41.9015, longitude: 12.4951, description: 'Charming 4-star boutique hotel with rooftop cocktail terrace and Turkish bath spa.' },
    { id: 'rom-pantheon', name: 'The Pantheon Iconic Rome Hotel', area: 'Piazza Navona · Historic', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 6500, latitude: 41.8986, longitude: 12.4769, description: 'Luxurious boutique hotel just steps from the Pantheon with Michelin-starred dining.' }
  ],
  london: [
    { id: 'lon-wombats', name: 'Wombat’s City Hostel London', area: 'Tower Bridge · Historic Cellar Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 1400, latitude: 51.5110, longitude: -0.0680, description: 'Converted 19th-century sailors home with vaulted brick bar minutes from the Tower of London.' },
    { id: 'lon-hoxton', name: 'The Hoxton, Holborn', area: 'Central London · Boutique', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.6', price: 5400, latitude: 51.5173, longitude: -0.1197, description: 'Vibrant boutique hotel with welcoming communal spaces near Covent Garden and West End theatres.' },
    { id: 'lon-savoy', name: 'The Savoy London', area: 'Strand · Iconic Luxury', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 11500, latitude: 51.5103, longitude: -0.1206, description: 'Legendary British luxury hotel on the River Thames, embodying elegance, style, and bespoke service.' }
  ],
  newyork: [
    { id: 'nyc-hi-hostel', name: 'HI New York City Hostel', area: 'Upper West Side · Historic Victorian', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80', rating: '4.5', price: 1490, latitude: 40.7995, longitude: -73.9665, description: 'Landmark Victorian Gothic hostel near Central Park with private rooms and outdoor courtyard.' },
    { id: 'nyc-hotel-standard', name: 'The Standard, High Line', area: 'Meatpacking District · Hudson View', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', rating: '4.7', price: 7800, latitude: 40.7409, longitude: -74.0080, description: 'Trendsetting hotel straddling the High Line elevated park with floor-to-ceiling river views.' },
    { id: 'nyc-plaza', name: 'The Plaza New York', area: 'Fifth Avenue & Central Park South', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', rating: '4.8', price: 13500, latitude: 40.7645, longitude: -73.9744, description: 'Timeless luxury landmark opposite Central Park offering unmatched historic grandeur and white-glove service.' }
  ]
};

function isHotelMatchingCity(h, cityName) {
  if (!h || !h.name) return false;
  const c = (cityName || '').toLowerCase().trim();
  const text = `${h.name} ${h.area || ''} ${h.address || ''} ${h.subtitle || ''}`.toLowerCase();

  const isThaiTrip = c.includes('bangkok') || c.includes('chiang mai') || c.includes('phuket') || c.includes('thailand');
  if (!isThaiTrip) {
    // If not a Thai trip, exclude all Thai landmarks and cities
    const thaiWords = ['bangkok', 'sukhumvit', 'chao phraya', 'phra nakhon', 'chiang mai', 'phuket', 'thailand', 'silom', 'siam', 'lanna', 'wat '];
    if (thaiWords.some(w => text.includes(w))) return false;
  }

  // Cross-city filter: do not allow hotels from other destinations
  const majorCities = [
    'seoul', 'tokyo', 'kyoto', 'osaka', 'singapore', 'paris', 'rome', 'london', 'new york', 'bangkok', 'chiang mai', 'phuket'
  ];
  for (const mc of majorCities) {
    if (!c.includes(mc) && text.includes(mc)) {
      return false;
    }
  }

  return true;
}

const CURRENCIES = [
  ['THB', 'Thai Baht', '🇹🇭', '฿'],
  ['USD', 'US Dollar', '🇺🇸', '$'],
  ['JPY', 'Japanese Yen', '🇯🇵', '¥'],
  ['EUR', 'Euro', '🇪🇺', '€'],
  ['KRW', 'South Korean Won', '🇰🇷', '₩'],
  ['SGD', 'Singapore Dollar', '🇸🇬', 'S$'],
  ['CNY', 'Chinese Yuan', '🇨🇳', '¥'],
  ['GBP', 'British Pound', '🇬🇧', '£'],
  ['AUD', 'Australian Dollar', '🇦🇺', 'A$'],
  ['HKD', 'Hong Kong Dollar', '🇭🇰', 'HK$'],
  ['TWD', 'Taiwan Dollar', '🇹🇼', 'NT$'],
];

const ICON_PATHS = {
  'location.fill': '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  'suitcase.rolling': '<rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M8 20v2m8-2v2M8 10v7m8-7v7"/>',
  'bed.double': '<path d="M3 20v-8m18 8v-5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m0 0v5m0-3h18M7 12V8a2 2 0 0 1 2-2h3v6m0-6h3a2 2 0 0 1 2 2v4"/>',
  'map': '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
  'banknote': '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'textformat.size': '<path d="M4 7V4h16v3M12 4v16m-4 0h8M3 20l3-9 3 9m-5-3h4"/>',
  'arrow.right': '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  'chevron.down': '<path d="m6 9 6 6 6-6"/>',
  'chevron.right': '<path d="m9 18 6-6-6-6"/>',
  'chevron.left': '<path d="m15 18-6-6 6-6"/>',
  'ellipsis': '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
  'speaker.wave.2': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  'speaker.slash': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="1" x2="1" y2="23"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
  'arrow.up.arrow.down': '<path d="m7 4-4 4m4-4 4 4M7 4v16M17 20l4-4m-4 4-4-4m4 4V4"/>',
  'slider.horizontal.3': '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6"/>',
  'sparkles': '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z"/>',
  'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  'spots': '<circle cx="12" cy="5" r="2.5"/><path d="M12 7.5V19m-5-4 5 5 5-5M6 11h12"/>',
  'navigation': '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  'share': '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6-4-4-4 4m4-4v13"/>',
  'fork.knife': '<path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3m-3 7v11m10-18v18m0-18c-2 2-3 5-3 8h3"/>',
  'building.columns': '<path d="M3 9h18M5 9v10m4-10v10m6-10v10m4-10v10M3 21h18M12 3 3 7h18l-9-4Z"/>',
  'leaf': '<path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16ZM4 21c3-5 7-8 12-11"/>',
  'moon.stars': '<path d="M19 15A8 8 0 0 1 9 5a8 8 0 1 0 10 10Z"/><path d="m17 3 .7 1.8L20 5.5l-2.3.7L17 8l-.7-1.8L14 5.5l2.3-.7L17 3Zm4 7 .5 1.2L23 12l-1.5.5L21 14l-.5-1.5L19 12l1.5-.8L21 10Z"/>',
  'viewfinder': '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3M8 8h8v8H8z"/>',
  'clock.arrow.circlepath': '<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8m0-5v5h5m4-1v5l3 2"/>',
  'bag': '<path d="M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2"/>',
  'cart.fill': '<path d="M3 4h2l2.2 11.5A2 2 0 0 0 9.2 17H18a2 2 0 0 0 1.9-1.4L22 9H6M10 21h.01M18 21h.01"/>',
  'cart.badge.plus': '<path d="M3 4h2l2.2 11.5A2 2 0 0 0 9.2 17H17m-9-4h10l1-4H6m5 10h.01M18 19h.01M17 5h5m-2.5-2.5v5"/>',
  'pencil': '<path d="m16 4 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/>',
  'heart': '<path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>',
  'heart.fill': '<path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" fill="currentColor"/>',
  'checkmark': '<path d="m5 12 4 4L19 6"/>',
  'checkmark.circle.fill': '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  'checkmark.seal.fill': '<path d="m12 2 2 1 2.3-.2 1.2 2 2 1.2-.2 2.3 1 2-1 2 .2 2.3-2 1.2-1.2 2-2.3-.2-2 1-2-1-2.3.2-1.2-2-2-1.2.2-2.3-1-2 1-2-.2-2.3 2-1.2 1.2-2 2.3.2 2-1Z"/><path d="m8 12 2.4 2.4L16 9"/>',
  'exclamationmark.circle.fill': '<circle cx="12" cy="12" r="9"/><path d="M12 7v6m0 3h.01"/>',
  'chart.pie.fill': '<path d="M11 3a9 9 0 1 0 10 10H11V3Z"/><path d="M14 3v7h7a9 9 0 0 0-7-7Z"/>',
  'wallet': '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18m-6 5h3"/>',
  'xmark': '<path d="m6 6 12 12M18 6 6 18"/>',
  'star.fill': '<path d="m12 2 3 6 7 1-5 5 1.2 7L12 18l-6.2 3L7 14l-5-5 7-1 3-6Z" fill="currentColor"/>',
  'flame.fill': '<path d="M13 2c1 5-4 5-2 10 1-2 3-3 4-5 4 4 5 8 2 12a7 7 0 0 1-12-5c0-3 2-6 5-8-.4 3 .5 4 1 5 2-3 1-6 2-9Z"/>',
  'bed.double.fill': '<path d="M3 20v-8m18 8v-5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m0 0v5m0-3h18M7 12V8a2 2 0 0 1 2-2h3v6m0-6h3a2 2 0 0 1 2 2v4"/>',
  'bus.fill': '<path d="M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v13H5V5Zm0 3h14M7 18v3m10-3v3M8 12h.01M16 12h.01"/><path d="M7 5h10v3H7z"/>',
  'tram.fill': '<rect x="5" y="2" width="14" height="17" rx="4"/><path d="M5 8h14m-10 4h.01M15 12h.01M8 19l-2 3m10-3 2 3M8 16h8"/>',
  'car.fill': '<path d="m5 11 1.4-5A2 2 0 0 1 8.3 4h7.4a2 2 0 0 1 1.9 2l1.4 5v7H5v-7Zm0 0h14M7 14h.01M17 14h.01M8 18v2m8-2v2"/>',
  'figure.walk': '<circle cx="14" cy="4" r="2"/><path d="m12 8-3 4 3 2-1 6m1-12 4 3 3 1m-9-1-3 4-3 1m10-5-2 5 4 3"/>',
  'arrow.up.right': '<path d="M7 17 17 7M7 7h10v10"/>',
  'arrow.counterclockwise': '<path d="M4 7V3m0 4h4m-4 0a8 8 0 1 1-1 8"/>',
  'bag.fill': '<path d="M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2Z"/>',
  'map.fill': '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
  'trash': '<path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"/>',
  'magnifyingglass': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
};

function icon(name, size = 20) {
  const p = ICON_PATHS[name] || ICON_PATHS.sparkles;
  const filled = /\.fill$/.test(name);
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${filled ? 1.65 : 1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function uid() { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`; }

function load(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(`planner.${key}`)); return value ?? fallback; }
  catch { return fallback; }
}

const state = {
  tab: 'trip',
  priceCurrency: load('priceCurrency', 'THB'),
  changeCurrency: load('changeCurrency', 'USD'),
  conversionRate: 0,
  rateLoading: false,
  rateUnavailable: false,
  trips: load('trips', []),
  selectedTrip: load('selectedTrip', null),
  bookings: load('bookings', []),
  history: load('history', []),
  favorites: load('favorites', []),
  cart: load('cart', []),
  textScale: load('textScale', 1),
  boldText: load('boldText', false),
  speechEnabled: load('speechEnabled', true),
  modal: null,
  parentModal: null,
  toast: '',
  showPlaces: true,
  placeFilter: 'All',
  loadingMore: false,
  placesPage: 1,
  extraPlaces: [],
  loadingMoreHotels: false,
  hotelsPage: 1,
  extraHotels: [],
  bookingBudgetFilter: null,
  hotelSortOrder: 'asc', // 'asc' = min->max (lowest first), 'desc' = max->min (highest first)
  hotelCustomMin: null,
  hotelCustomMax: null,
  userCoords: null,
  locationLoading: false,
  nearbyPlaces: [],
  nearbyPlacesPage: 1,
  extraAddAttractions: [],
  extraAddRestaurants: [],
  addPlaceAttractionsPage: 1,
  addPlaceRestaurantsPage: 1,
  loadingAddPlaces: false,
  showDayMap: false,
  selectedDay: null,
  routeExpandedKey: null,
  routeModes: {},
  composer: {
    step: 'where',
    query: '',
    city: 'Bangkok',
    country: 'Thailand',
    lat: 13.7563,
    lng: 100.5018,
    start: '',
    end: '',
    budget: 2,
    prefs: ['Landmarks', 'Food & Dining']
  },
  isPlanning: false,
  planProgress: '',
  hotelNights: 1,
  editingCart: null,
  scan: {
    active: false, step: 'price', price: 0, tendered: 0, received: 0,
    product: 'Scanned item', priceCard: false, tenderedCard: false, coinCard: false,
    isCartCheckout: false, message: '', ocrRunning: false, ocrProgress: 0,
    currentFavorite: false,
  },
  cameraError: '',
};

let mediaStream = null;
let ocrWorker = null;
let toastTimer = null;
let scanImageData = null;
let rateRequestNumber = 0;
let currentLeafletMap = null;

function persist(key, value) { try { localStorage.setItem(`planner.${key}`, JSON.stringify(value)); } catch {} }

function saveState() {
  ['priceCurrency', 'changeCurrency', 'trips', 'selectedTrip', 'bookings', 'history', 'favorites', 'cart', 'textScale', 'boldText', 'speechEnabled'].forEach(key => persist(key, state[key]));
}

function currencyFormat(amount, currency = state.priceCurrency, decimals = 0) {
  try { return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: decimals, minimumFractionDigits: 0 }).format(Number(amount) || 0); }
  catch { return `${Number(amount || 0).toFixed(decimals)} ${currency}`; }
}

function selectedTrip() {
  return state.trips.find(t => t.id === state.selectedTrip) || state.trips[0] || null;
}

function selectedBooking() {
  const trip = selectedTrip();
  return trip ? state.bookings.find(b => b.tripId === trip.id) || null : null;
}

function tripHistory() {
  const trip = selectedTrip();
  return trip ? state.history.filter(h => h.tripId === trip.id) : state.history;
}

function budgetFor(trip) {
  return BUDGETS[trip?.budget ?? 2] || BUDGETS[2];
}

function formatBEDate(dateStr, includeWeekday = false) {
  if (!dateStr) return '';
  const d = new Date(`${dateStr}T00:00:00`);
  if (isNaN(d.getTime())) return dateStr;
  const day = d.getDate();
  const beYear = d.getFullYear() + 543;
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (includeWeekday) {
    return `${weekDays[d.getDay()]}, ${day} ${fullMonthNames[d.getMonth()]} ${beYear} BE`;
  }
  return `${day} ${monthNames[d.getMonth()]} ${beYear} BE`;
}

function tripDateLabel(trip) {
  if (!trip?.start) return trip?.city || 'Trip';
  const startBE = formatBEDate(trip.start);
  if (trip.end && trip.end !== trip.start) {
    const endBE = formatBEDate(trip.end);
    return `${startBE} – ${endBE}`;
  }
  return startBE;
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function dateDayCount(start, end) {
  if (!start) return 1;
  const a = new Date(`${start}T00:00:00`), b = end ? new Date(`${end}T00:00:00`) : a;
  return Math.max(1, Math.round((b - a) / 86400000) + 1);
}

function routeEstimate(from, to, mode = 'walk') {
  if (!from || !to) return { distance: 1.2, minutes: 12 };
  const rad = n => n * Math.PI / 180;
  const fromLat = from.lat || from.latitude || 0;
  const fromLng = from.lng || from.longitude || 0;
  const toLat = to.lat || to.latitude || 0;
  const toLng = to.lng || to.longitude || 0;

  const dLat = rad(toLat - fromLat);
  const dLng = rad(toLng - fromLng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(fromLat)) * Math.cos(rad(toLat)) * Math.sin(dLng / 2) ** 2;
  const straight = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.max(0, 1 - a)));
  const factors = { walk: [1.28, 4.5, 0], transit: [1.42, 17, 8], drive: [1.36, 24, 5] }[mode] || [1.28, 4.5, 0];
  const distance = Math.max(straight * factors[0], 0.3);
  const minutes = Math.max(Math.ceil(distance / factors[1] * 60) + factors[2], 3);
  return { distance, minutes };
}

function toast(message) {
  state.toast = message;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { state.toast = ''; render(); }, 2600);
}

async function fetchRate() {
  // Illustrative rates only; never presented as live financial data.
  const sample = { USD: 1, THB: 35, JPY: 150, CNY: 7.2, EUR: 0.92, SGD: 1.35 };
  state.conversionRate = state.priceCurrency === state.changeCurrency ? 1 : (sample[state.changeCurrency] / sample[state.priceCurrency]);
  state.rateUnavailable = !Number.isFinite(state.conversionRate);
  state.rateLoading = false;
  render();
}

// Get places for the specific destination
function getTripPlaces(trip) {
  const currentTrip = trip || selectedTrip();
  const cityName = currentTrip?.city || 'Bangkok';
  const cityKey = cityName.toLowerCase().replace(/[^a-z]/g, '');

  const places = [];

  // 1. First add places from trip's daily itinerary if present
  if (currentTrip?.dailyItinerary) {
    currentTrip.dailyItinerary.forEach((day, dIdx) => {
      (day.attractions || []).forEach((a, aIdx) => {
        places.push({
          id: `attr-${dIdx}-${aIdx}`,
          name: a.name,
          subtitle: a.address || a.category || `${cityName} Attraction`,
          category: 'Things to do',
          key: 'attraction',
          lat: a.latitude || currentTrip.lat || 13.7563,
          lng: a.longitude || currentTrip.lng || 100.5018,
          image: a.imageUrl || 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
          description: a.description || 'Top-rated sightseeing landmark.',
          rating: String(a.rating || '4.8'),
          entryFee: a.entryFee || 'Free',
          duration: a.duration || '2 hours',
          walk: 10 + aIdx * 3,
          drive: 8 + aIdx * 2,
          bus: 14 + aIdx * 3,
          train: 12 + aIdx * 2,
        });
      });
      (day.restaurants || []).forEach((r, rIdx) => {
        places.push({
          id: `rest-${dIdx}-${rIdx}`,
          name: r.name,
          subtitle: `${r.cuisine || 'Local Food'} · ${r.address || cityName}`,
          category: 'Food',
          key: 'food',
          lat: r.latitude || currentTrip.lat || 13.7563,
          lng: r.longitude || currentTrip.lng || 100.5018,
          image: r.imageUrl || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
          description: r.description || 'Authentic local dining spot.',
          rating: String(r.rating || '4.6'),
          priceLevel: r.priceLevel || '$$',
          walk: 8 + rIdx * 3,
          drive: 6 + rIdx * 2,
          bus: 12 + rIdx * 3,
          train: 10 + rIdx * 2,
        });
      });
      (day.accommodations || []).forEach((h, hIdx) => {
        places.push({
          id: `hotel-${dIdx}-${hIdx}`,
          name: h.name,
          subtitle: h.address || `${cityName} Hotel`,
          category: 'Hotels',
          key: 'hotel',
          lat: h.latitude || currentTrip.lat || 13.7563,
          lng: h.longitude || currentTrip.lng || 100.5018,
          image: h.imageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          description: h.description || 'Quality hotel accommodation.',
          rating: String(h.rating || '4.7'),
          walk: 12,
          drive: 8,
          bus: 15,
          train: 11,
          price: parseInt(String(h.pricePerNight).replace(/[^0-9]/g, '')) || 2500
        });
      });
    });
  }

  // 2. Add or complement with curated recommendations for that specific city
  const cityCurated = CITY_RECOMMENDATIONS[cityKey] || CITY_RECOMMENDATIONS.bangkok;
  cityCurated.forEach(cp => {
    if (!places.some(p => p.name.toLowerCase() === cp.name.toLowerCase())) {
      places.push(cp);
    }
  });

  // 3. Add dynamically loaded API places
  if (state.extraPlaces && state.extraPlaces.length > 0) {
    state.extraPlaces.forEach(ep => {
      if (!places.some(p => p.name.toLowerCase() === ep.name.toLowerCase())) {
        places.push(ep);
      }
    });
  }

  return places;
}

// Initial trip setup
function ensureInitialTrip() {
  if (state.trips.length === 0 || (state.trips[0] && state.trips[0].city === 'Bangkok' && state.trips[0].dailyItinerary?.length < 4)) {
    const initialTrip = {
      id: uid(),
      city: 'Bangkok',
      country: 'Thailand',
      countryCode: 'TH',
      start: '2026-10-16',
      end: '2026-10-19',
      budget: 2,
      prefs: ['Landmarks', 'Food & Dining'],
      currency: 'THB',
      created: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=82',
      lat: 13.7563,
      lng: 100.5018,
      dailyItinerary: [
        {
          day: 1,
          date: '2026-10-16',
          summary: 'Arrival, riverside check-in, and temple exploration.',
          accommodations: [
            {
              name: 'Riverside Boutique Stay',
              address: 'Chao Phraya Riverfront, Bangkok',
              description: 'Calm riverside boutique stay with river view pool and easy boat ferry access.',
              pricePerNight: 'THB 3,200',
              rating: 4.8,
              latitude: 13.7609,
              longitude: 100.4938,
              type: 'hotel',
              imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82'
            }
          ],
          attractions: [
            {
              name: 'Wat Arun (Temple of Dawn)',
              address: 'Arun Amarin Rd, Bangkok Yai, Bangkok',
              description: 'Iconic riverside temple famed for its porcelain-encrusted central spire.',
              category: 'Things to do',
              duration: '1.5 hours',
              rating: 4.8,
              latitude: 13.7437,
              longitude: 100.4889,
              entryFee: '100 THB',
              imageUrl: 'https://images.unsplash.com/photo-1666418096686-da94c2e70e6d?auto=format&fit=crop&w=1200&q=82'
            },
            {
              name: 'Wat Pho (Reclining Buddha)',
              address: 'Sanam Chai Rd, Phra Nakhon, Bangkok',
              description: 'Historic royal temple with a 46-meter gold-plated reclining Buddha.',
              category: 'Things to do',
              duration: '1.5 hours',
              rating: 4.8,
              latitude: 13.7466,
              longitude: 100.4933,
              imageUrl: 'https://images.unsplash.com/photo-1587308688353-bc58083be441?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          restaurants: [
            {
              name: 'Thipsamai Pad Thai',
              address: 'Maha Chai Rd, Samran Rat, Bangkok',
              description: 'Legendary Bangkok restaurant celebrated for quintessential egg-wrapped Pad Thai.',
              cuisine: 'Authentic Thai Pad Thai',
              priceLevel: '$$',
              rating: 4.6,
              latitude: 13.7527,
              longitude: 100.5048,
              imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          routes: [
            { from: 'Wat Arun (Temple of Dawn)', to: 'Wat Pho (Reclining Buddha)', mode: 'transit', distance: '1.2 km', duration: '10 mins' },
            { from: 'Wat Pho (Reclining Buddha)', to: 'Thipsamai Pad Thai', mode: 'driving', distance: '2.1 km', duration: '11 mins' }
          ]
        },
        {
          day: 2,
          date: '2026-10-17',
          summary: 'Grand Palace architecture, artisanal café, and riverside boutique experience.',
          accommodations: [
            {
              name: 'Riverside Boutique Stay',
              address: 'Chao Phraya, Bangkok',
              description: 'Refined riverside hideaway with panoramic river view terrace.',
              pricePerNight: 'THB 3,400',
              rating: 4.8,
              latitude: 13.7609,
              longitude: 100.4938,
              type: 'hotel',
              imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82'
            }
          ],
          attractions: [
            {
              name: 'The Grand Palace',
              address: 'Historic · Old City',
              description: 'Magnificent complex of royal halls and revered temples in Bangkok old quarter.',
              category: 'Things to do',
              duration: '2 hours',
              rating: 4.8,
              latitude: 13.7500,
              longitude: 100.4913,
              entryFee: '500 THB',
              imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          restaurants: [
            {
              name: 'Ari Café Quarter',
              address: 'Cafés · Neighbourhood',
              description: 'Chic tree-lined neighborhood roastery with craft coffee and brunch plates.',
              cuisine: 'Cafés · Modern Brunch',
              priceLevel: '$$',
              rating: 4.7,
              latitude: 13.7797,
              longitude: 100.5447,
              imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          routes: [
            { from: 'The Grand Palace', to: 'Ari Café Quarter', mode: 'transit', distance: '1.9 km', duration: '15 mins' },
            { from: 'Ari Café Quarter', to: 'Riverside Boutique Stay', mode: 'driving', distance: '9.0 km', duration: '28 mins' },
            { from: 'Riverside Boutique Stay', to: 'Riverside Promenade', mode: 'walking', distance: '9.3 km', duration: '125 mins' }
          ]
        },
        {
          day: 3,
          date: '2026-10-18',
          summary: 'Chinatown street markets, Michelin street bites, and shopping.',
          accommodations: [],
          attractions: [
            {
              name: 'Yaowarat Chinatown',
              address: 'Samphanthawong, Bangkok',
              description: 'Buzzing neon-lit streets full of historic shop-houses, gold shops, and street eats.',
              category: 'Things to do',
              duration: '2.5 hours',
              rating: 4.7,
              latitude: 13.7394,
              longitude: 100.5101,
              imageUrl: 'https://images.unsplash.com/photo-1753272379004-2c2b342073f7?auto=format&fit=crop&w=1200&q=82'
            },
            {
              name: 'Chatuchak Weekend Market',
              address: 'Chatuchak, Bangkok',
              description: 'World famous sprawling weekend market with thousands of stalls and vintage finds.',
              category: 'Things to do',
              duration: '3 hours',
              rating: 4.6,
              latitude: 13.7999,
              longitude: 100.5507,
              imageUrl: 'https://images.unsplash.com/photo-1672934324126-257a393a9aa8?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          restaurants: [
            {
              name: 'Jeh O Chula',
              address: 'Banthat Thong Rd, Bangkok',
              description: 'Famous Michelin Bib Gourmand supper spot known for crispy pork belly and Tom Yum Mama.',
              cuisine: 'Thai Street Food',
              priceLevel: '$$',
              rating: 4.6,
              latitude: 13.7427,
              longitude: 100.5238,
              imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          routes: [
            { from: 'Yaowarat Chinatown', to: 'Jeh O Chula', mode: 'driving', distance: '1.9 km', duration: '9 mins' },
            { from: 'Jeh O Chula', to: 'Chatuchak Weekend Market', mode: 'driving', distance: '8.2 km', duration: '22 mins' }
          ]
        },
        {
          day: 4,
          date: '2026-10-19',
          summary: 'Modern art, sky train ride, and sunset river cruise.',
          accommodations: [],
          attractions: [
            {
              name: 'Jim Thompson House',
              address: 'Kasem San 2 Alley, Bangkok',
              description: 'Traditional teakwood Thai house turned museum amidst lush tropical gardens.',
              category: 'Things to do',
              duration: '2 hours',
              rating: 4.7,
              latitude: 13.7492,
              longitude: 100.5286,
              imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=82'
            },
            {
              name: 'ICONSIAM Riverfront',
              address: 'Charoen Nakhon Rd, Bangkok',
              description: 'Iconic luxury riverside mega-complex featuring indoor floating market SookSiam.',
              category: 'Things to do',
              duration: '2.5 hours',
              rating: 4.8,
              latitude: 13.7267,
              longitude: 100.5108,
              imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          restaurants: [
            {
              name: 'Supanniga Eating Room',
              address: 'Tha Tien, Chao Phraya View',
              description: 'Traditional home-cooked Trat and Isan cuisine overlooking Wat Arun.',
              cuisine: 'Authentic Thai & Views',
              priceLevel: '$$$',
              rating: 4.7,
              latitude: 13.7441,
              longitude: 100.4912,
              imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=82'
            }
          ],
          routes: [
            { from: 'Jim Thompson House', to: 'ICONSIAM Riverfront', mode: 'driving', distance: '4.8 km', duration: '16 mins' },
            { from: 'ICONSIAM Riverfront', to: 'Supanniga Eating Room', mode: 'transit', distance: '2.5 km', duration: '14 mins' }
          ]
        }
      ]
    };
    state.trips = [initialTrip];
    state.selectedTrip = initialTrip.id;
    state.selectedDay = 2; // Default to Day 2 as shown in user screenshot!
    state.bookings = [
      {
        tripId: initialTrip.id,
        hotelId: 'riverside-boutique',
        name: 'Riverside Boutique Stay',
        area: 'Chao Phraya, Bangkok',
        price: 3400,
        nights: 3,
        guests: 1
      }
    ];
    saveState();
  }
}
ensureInitialTrip();

function statusBar() {
  return '';
}

function navBar() {
  const items = [
    ['trip', 'Trip', 'suitcase.rolling'],
    ['booking', 'Booking', 'bed.double'],
    ['recommend', 'Recommend', 'map'],
    ['money', 'Money', 'banknote'],
  ];
  return `<nav class="nav-dock" aria-label="Main navigation">
    ${items.slice(0, 2).map(([id, title, symbol]) => `<button class="nav-item ${state.tab === id ? 'active' : ''}" data-action="tab" data-tab="${id}">${icon(symbol)}<span>${title}</span></button>`).join('')}
    <button class="nav-add" data-action="new-trip" aria-label="New Trip">${icon('plus', 22)}</button>
    ${items.slice(2).map(([id, title, symbol]) => `<button class="nav-item ${state.tab === id ? 'active' : ''}" data-action="tab" data-tab="${id}">${icon(symbol)}<span>${title}</span></button>`).join('')}
  </nav>`;
}

function settingsButton() {
  return `<button class="settings-button" data-action="settings" aria-label="Text settings">${icon('textformat.size')}</button>`;
}

function tripHome() {
  const current = selectedTrip();
  const trips = state.trips.map(t => {
    const days = dateDayCount(t.start, t.end);
    const stopsCount = (t.dailyItinerary || []).reduce((acc, d) => acc + (d.attractions?.length || 0) + (d.restaurants?.length || 0), 0) || (days * 3);
    const dateLabel = t.start ? formatBEDate(t.start) : `${days} days · ${t.city}`;
    return `<article class="trip-card">
      <button class="trip-card-main" data-action="trip-detail" data-id="${t.id}">
        <img class="trip-thumb" src="${t.image || CITIES.find(c => c.name === t.city)?.image || DEFAULT_PLACES[0].image}" alt="${escapeHtml(t.city)}" />
        <span class="trip-card-copy">
          <span class="trip-card-top-row">
            <h3>${days} Days in ${escapeHtml(t.city)}</h3>
            <span class="trip-menu-dots" data-action="trip-options" data-id="${t.id}" aria-label="Trip options">•••</span>
          </span>
          <span class="trip-chip-row">
            <span class="chip"><span class="chip-icon">${icon('calendar', 12)}</span> ${days}d</span>
            <span class="chip blue"><span class="chip-icon">${icon('location.fill', 12)}</span> ${stopsCount} Spots</span>
          </span>
          <p class="trip-card-date">${escapeHtml(dateLabel)}</p>
        </span>
      </button>
    </article>`;
  }).join('');

  // Collect aggregated guides from all user-created trips
  const aggregatedGuides = [];
  const seenGuideNames = new Set();

  (state.trips || []).forEach(t => {
    const tPlaces = getTripPlaces(t).filter(p => p.category !== 'Hotels' && p.category !== 'Hotel');
    tPlaces.forEach(p => {
      const norm = (p.name || '').trim().toLowerCase();
      if (norm && !seenGuideNames.has(norm)) {
        seenGuideNames.add(norm);
        aggregatedGuides.push({
          ...p,
          cityName: t.city
        });
      }
    });
  });

  // If no user trips or few places, supplement with default curated recommendations
  if (aggregatedGuides.length < 4) {
    const defaultCurated = CITY_RECOMMENDATIONS.bangkok || [];
    defaultCurated.forEach(p => {
      const norm = (p.name || '').trim().toLowerCase();
      if (norm && !seenGuideNames.has(norm)) {
        seenGuideNames.add(norm);
        aggregatedGuides.push({ ...p, cityName: 'Bangkok' });
      }
    });
  }

  const displayGuides = aggregatedGuides.slice(0, 12);

  const guides = displayGuides.map(p => {
    const img = p.imageUrl || p.image || DEFAULT_PLACES[0].image;
    const catLabel = (p.category === 'Food' || p.key === 'food') ? 'FOOD' : 'THINGS TO DO';
    const cityLabel = p.cityName ? `${p.cityName.toUpperCase()} · ` : '';
    return `<div class="guide-card" data-action="place-detail" data-id="${p.id || p.name}">
      <img src="${img}" alt="${escapeHtml(p.name)}"/>
      <button class="guide-corner-btn" data-action="place-detail" data-id="${p.id || p.name}" aria-label="View ${escapeHtml(p.name)}">
        <span class="arrow-diag">↗</span>
      </button>
      <div class="guide-overlay">
        <span class="guide-category">${cityLabel}${catLabel}</span>
        <strong class="guide-title">${escapeHtml(p.name)}</strong>
        <span class="guide-rating">★ ${p.rating || '4.8'}</span>
      </div>
    </div>`;
  }).join('');

  return `<main class="page"><div class="page-stack">
    <header class="header-row home-header">
      <div class="header-location">
        <span class="header-nav-arrow">${icon('navigation', 19)}</span>
        <h1 class="header-location-title">${escapeHtml(current ? `${current.city}, ${current.country || 'Thailand'}` : 'Bangkok, Thailand')}</h1>
      </div>
      ${settingsButton()}
    </header>
    <section class="trip-section">
      <h2 class="section-title">My Trips</h2>
      ${trips ? `<div class="trip-list">${trips}</div>` : `<div class="card empty-card"><h3>Start your adventure</h3><p>Create a trip to generate a itinerary from curated recommendations.</p></div>`}
      <button class="create-trip-dashed-btn" data-action="new-trip">
        <span class="plus-icon">+</span> Create New Trip
      </button>
    </section>
    <section class="trip-section">
      <h2 class="section-title">Guides</h2>
      <div class="guide-row" data-scroller="horizontal">${guides}</div>
    </section>
  </div></main>`;
}

function bookingPage() {
  const trip = selectedTrip();
  if (!trip) {
    return `<main class="page"><div class="page-stack">
      <header class="header-row"><h1 class="page-title">Booking</h1>${settingsButton()}</header>
      <div class="card empty-card" style="padding:28px;text-align:center">
        <div style="color:var(--blue);margin-bottom:10px">${icon('bed.double.fill', 32)}</div>
        <h3>No trip selected</h3>
        <p>Create a trip first to explore hotel accommodations.</p>
        <button class="primary-button" style="margin-top:16px" data-action="new-trip">Create New Trip</button>
      </div>
    </div></main>`;
  }

  const days = dateDayCount(trip.start, trip.end);
  const isOneDay = days <= 1;
  const booking = selectedBooking();

  // 1. Gather all attractions from trip to determine neighborhood & proximity
  const tripAttractions = (trip.dailyItinerary || []).flatMap(d => d.attractions || []);
  const tripCenterLat = tripAttractions.length
    ? (tripAttractions.reduce((s, a) => s + (a.latitude || trip.lat || 13.7563), 0) / tripAttractions.length)
    : (trip.lat || 13.7563);
  const tripCenterLng = tripAttractions.length
    ? (tripAttractions.reduce((s, a) => s + (a.longitude || trip.lng || 100.5018), 0) / tripAttractions.length)
    : (trip.lng || 100.5018);

  const isHotelItem = (item) => {
    if (!item || !item.name) return false;
    const cat = (item.category || item.primaryType || item.key || '').toLowerCase();
    if (cat.includes('food') || cat.includes('restaurant') || cat.includes('cafe') || cat.includes('things to do') || cat.includes('attraction') || cat.includes('tourist')) {
      return false;
    }
    const name = (item.name || '').toLowerCase();
    const nonHotelKeywords = ['wat ', 'temple', 'museum', 'palace', 'market', 'cafe', 'coffee', 'restaurant', 'bar', 'bistro', 'street food', 'kitchen'];
    const hotelKeywords = ['hotel', 'resort', 'hostel', 'stay', 'inn', 'suites', 'suite', 'guesthouse', 'villa', 'lodge', 'boutique', 'retreat', 'residence'];
    const hasHotelKeyword = hotelKeywords.some(k => name.includes(k)) || cat.includes('hotel') || cat.includes('lodging') || cat.includes('accommodation');
    const hasNonHotelKeyword = nonHotelKeywords.some(k => name.includes(k));
    if (hasNonHotelKeyword && !hasHotelKeyword) return false;
    return true;
  };

  // 2. Collect potential hotels strictly for this destination city
  const rawHotels = [];
  const cityKey = (trip.city || '').toLowerCase().replace(/[^a-z]/g, '');

  // 2a. From trip itinerary plan
  (trip.dailyItinerary || []).forEach(d => {
    (d.accommodations || []).forEach(h => {
      if (isHotelItem(h) && isHotelMatchingCity(h, trip.city)) rawHotels.push(h);
    });
  });

  // 2b. From dedicated CITY_HOTELS list
  const cityHotels = CITY_HOTELS[cityKey] || [];
  cityHotels.forEach(h => {
    if (isHotelItem(h) && isHotelMatchingCity(h, trip.city)) rawHotels.push(h);
  });

  // 2c. From CITY_RECOMMENDATIONS (curated for this city only, NO fallback to Bangkok for foreign trips)
  const cityCurated = CITY_RECOMMENDATIONS[cityKey] || [];
  cityCurated.filter(p => (p.category === 'Hotels' || p.key === 'hotel') && isHotelItem(p) && isHotelMatchingCity(p, trip.city)).forEach(h => rawHotels.push(h));

  // 2d. From dynamic extraHotels
  if (state.extraHotels && state.extraHotels.length) {
    state.extraHotels.filter(h => isHotelItem(h) && isHotelMatchingCity(h, trip.city)).forEach(h => rawHotels.push(h));
  }

  // 2e. Fallback ONLY if trip is in Bangkok or Thailand
  const isThai = (trip.city || '').toLowerCase().includes('bangkok') || (trip.country || '').toLowerCase().includes('thailand');
  if (rawHotels.length === 0 && isThai) {
    DEFAULT_HOTELS.filter(h => isHotelItem(h) && isHotelMatchingCity(h, trip.city)).forEach(h => rawHotels.push(h));
  }

  // 3. DEDUPLICATE HOTELS (ห้ามมีซ้ำ)
  const getHotelDedupeKey = (name) => {
    return (name || '')
      .toLowerCase()
      .replace(/\b(hotel|resort|boutique|stay|suites|suite|spa|the|inn|hostel|bangkok|chiang mai|phuket|pattaya|seoul|tokyo|kyoto|osaka|singapore|paris|rome|london)\b/gi, '')
      .replace(/[^a-z0-9]/g, '');
  };

  const seenHotelKeys = new Set();

  // If a hotel is already booked, register its keys so it will NEVER appear twice in the list below
  if (booking) {
    if (booking.name) {
      seenHotelKeys.add(booking.name.trim().toLowerCase());
      const bkKey = getHotelDedupeKey(booking.name);
      if (bkKey) seenHotelKeys.add(bkKey);
    }
    if (booking.hotelId) seenHotelKeys.add(String(booking.hotelId));
    if (booking.id) seenHotelKeys.add(String(booking.id));
  }

  const uniqueHotels = [];
  rawHotels.forEach(h => {
    if (!h || !h.name) return;
    const rawKey = h.name.trim().toLowerCase();
    const dedupeKey = getHotelDedupeKey(h.name);
    const hid = h.id ? String(h.id) : null;

    if (seenHotelKeys.has(rawKey) || (dedupeKey && seenHotelKeys.has(dedupeKey)) || (hid && seenHotelKeys.has(hid))) {
      return;
    }

    seenHotelKeys.add(rawKey);
    if (dedupeKey) seenHotelKeys.add(dedupeKey);
    if (hid) seenHotelKeys.add(hid);

    // Calculate proximity to the places visited on this trip
    const hLat = h.latitude || h.lat || tripCenterLat;
    const hLng = h.longitude || h.lng || tripCenterLng;
    let minDist = 999;
    let closestSpot = null;
    tripAttractions.forEach(a => {
      const aLat = a.latitude || tripCenterLat;
      const aLng = a.longitude || tripCenterLng;
      const dist = distanceKm(hLat, hLng, aLat, aLng);
      if (dist < minDist) {
        minDist = dist;
        closestSpot = a;
      }
    });

    const distFromCenter = minDist < 50 ? minDist : (tripCenterLat ? distanceKm(hLat, hLng, tripCenterLat, tripCenterLng) : 0);
    const hasCloseSpot = closestSpot && minDist < 50;
    uniqueHotels.push({
      ...h,
      _dist: distFromCenter,
      _closestSpot: hasCloseSpot ? closestSpot.name : `${trip.city} Center`,
      _hasCloseSpot: hasCloseSpot
    });
  });

  // 4. Custom Price Range Filtering & Sorting
  const isCustomPriceActive = (state.hotelCustomMin !== null && state.hotelCustomMin !== undefined) ||
                              (state.hotelCustomMax !== null && state.hotelCustomMax !== undefined);

  let filteredHotels = [...uniqueHotels];

  // Apply custom price range if set
  if (isCustomPriceActive) {
    const minP = state.hotelCustomMin !== null && state.hotelCustomMin !== undefined ? Number(state.hotelCustomMin) : 0;
    const maxP = state.hotelCustomMax !== null && state.hotelCustomMax !== undefined ? Number(state.hotelCustomMax) : Infinity;

    filteredHotels = filteredHotels.filter(h => {
      const p = parseInt(String(h.price || h.pricePerNight).replace(/[^0-9]/g, '')) || 2500;
      return p >= minP && p <= maxP;
    });
  }

  // Sort by price: min->max (asc) or max->min (desc)
  const sortOrder = state.hotelSortOrder || 'asc';
  filteredHotels.sort((a, b) => {
    const pA = parseInt(String(a.price || a.pricePerNight).replace(/[^0-9]/g, '')) || 2500;
    const pB = parseInt(String(b.price || b.pricePerNight).replace(/[^0-9]/g, '')) || 2500;
    return sortOrder === 'asc' ? (pA - pB) : (pB - pA);
  });

  const tierBadgeHtml = (priceNum) => {
    const tier = getHotelBudgetTier(priceNum);
    const tierInfo = BUDGET_TIERS.find(b => b.id === tier) || BUDGET_TIERS[2];
    return `<span class="hotel-budget-pill tier-${tier}">${tierInfo.icon} ${tierInfo.label}</span>`;
  };

  const hotelCards = isOneDay ? '' : (filteredHotels.length ? filteredHotels.map(h => {
    const priceNum = parseInt(String(h.price || h.pricePerNight).replace(/[^0-9]/g, '')) || 2500;
    return `
      <button class="hotel-card" data-action="hotel" data-id="${escapeHtml(h.id || h.name)}" data-name="${escapeHtml(h.name)}">
        <img src="${h.imageUrl || h.image || DEFAULT_HOTELS[0].image}" alt="${escapeHtml(h.name)}"/>
        <span class="hotel-copy">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:3px">
            ${tierBadgeHtml(priceNum)}
            <span class="hotel-rating">${icon('star.fill', 12)} ${h.rating || 4.7}</span>
          </div>
          <strong>${escapeHtml(h.name)}</strong>
          <small class="hotel-proximity-tag">📍 ${h._hasCloseSpot ? `Near ${escapeHtml(h._closestSpot)} (~${h._dist.toFixed(1)} km)` : `Central ${escapeHtml(trip.city)}`}</small>
          <small>${escapeHtml(h.area || h.address || h.subtitle || trip.city)}</small>
          <span class="hotel-price">${currencyFormat(priceNum, trip.currency || 'THB')} <span>/ night</span></span>
        </span>
      </button>
    `;
  }).join('') : `
    <div class="card empty-card" style="padding:24px;text-align:center;background:#f9fbfe;border:1.5px dashed #cfe0f5">
      <div style="font-size:26px;margin-bottom:6px">🏨</div>
      <h4 style="margin:0 0 4px;font-size:15px;color:#182943">No hotels found in this price range</h4>
      <p style="margin:0 0 12px;font-size:12px;color:var(--secondary)">Try adjusting your Min / Max filter or tap "Reset Filter" below.</p>
      <button class="secondary-button" style="min-height:38px;padding:0 14px;border-radius:12px;display:inline-flex;width:auto;font-size:13px" data-action="reset-hotel-price-filter">
        Reset Price Filter
      </button>
    </div>
  `);

  const curSymbol = trip.currency || 'THB';
  const customFilterLabel = isCustomPriceActive
    ? `${state.hotelCustomMin ? currencyFormat(state.hotelCustomMin, curSymbol) : '0'} – ${state.hotelCustomMax ? currencyFormat(state.hotelCustomMax, curSymbol) : 'Any'}`
    : 'All Prices';

  return `<main class="page"><div class="page-stack">
    <header class="header-row"><h1 class="page-title">Booking</h1>${settingsButton()}</header>
    ${state.trips.length > 0 ? `
      <div class="booking-trip-selector-wrap">
        <label class="field-label" style="margin-bottom:6px">Select Trip:</label>
        <div class="booking-trip-pills-row" data-scroller="horizontal">
          ${state.trips.map(t => {
            const isSel = t.id === trip.id;
            const tDays = dateDayCount(t.start, t.end);
            return `
              <button class="booking-trip-pill ${isSel ? 'active' : ''}" data-action="select-booking-trip" data-id="${t.id}">
                <span class="booking-trip-pill-dot" style="background:${isSel ? '#1a66d1' : '#a0b3c6'}"></span>
                <strong>${escapeHtml(t.city)}</strong>
                <small>${tDays}d</small>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}
    <div class="booking-context">
      ${icon('suitcase.rolling', 19)}
      <div>
        <strong>For your ${escapeHtml(trip.city)} trip</strong>
        <span>${isOneDay ? '1-day trip (no overnight stay)' : `${days - 1} night${days === 2 ? '' : 's'} · ${tripDateLabel(trip)}`}</span>
      </div>
    </div>

    ${isOneDay ? `
      <div class="card empty-card" style="padding:22px;background:#f8fbff;border:1px dashed #b9d5fb">
        <div style="color:var(--blue);margin-bottom:8px">${icon('checkmark.circle.fill', 24)}</div>
        <h3 style="font-size:16px;margin:0 0 4px">No Hotel Required</h3>
        <p style="margin:0;color:var(--secondary);font-size:12px;line-height:1.5">
          This is a 1-day trip (day trip). Overnight accommodation is not needed!
        </p>
      </div>
    ` : `
      ${booking ? `
        <div class="booking-saved" data-action="hotel" data-id="${escapeHtml(booking.hotelId || booking.id || booking.name)}" data-name="${escapeHtml(booking.name)}" style="cursor:pointer">
          <div class="eyebrow">${icon('checkmark.seal.fill', 13)} Booking Saved · Tap to view details</div>
          <h3>${escapeHtml(booking.name)}</h3>
          <p>${booking.nights} night${booking.nights === 1 ? '' : 's'} · ${currencyFormat(booking.price * booking.nights, trip.currency || 'THB')} total</p>
        </div>
      ` : ''}
      <section class="trip-section">
        <div class="hotel-section-header-row">
          <div style="min-width:0;flex:1">
            <h2 class="section-title" style="font-size:19px;margin:0">
              Hotels in ${escapeHtml(trip.city)}
            </h2>
            <p class="section-subtitle" style="margin:2px 0 0">
              ${filteredHotels.length} places · ${sortOrder === 'asc' ? 'Min → Max' : 'Max → Min'} ${isCustomPriceActive ? `· ${customFilterLabel}` : ''}
            </p>
          </div>

          <!-- Icon-only Sort & Filter Controls inline with title -->
          <div class="hotel-header-actions">
            <!-- Min/Max Sort Icon Button (arrow up down parallel) -->
            <button class="hotel-icon-action-btn ${sortOrder === 'desc' ? 'desc' : 'asc'}" data-action="toggle-hotel-price-sort" title="${sortOrder === 'asc' ? 'Sorted: Lowest price first (Min → Max). Tap for Max → Min' : 'Sorted: Highest price first (Max → Min). Tap for Min → Max'}" aria-label="Toggle price sort order">
              ${icon('arrow.up.arrow.down', 17)}
            </button>

            <!-- Custom Min/Max Filter Sheet Icon Button -->
            <button class="hotel-icon-action-btn filter ${isCustomPriceActive ? 'active' : ''}" data-action="open-price-filter-sheet" title="Filter by price range (${customFilterLabel})" aria-label="Filter by price range">
              ${icon('slider.horizontal.3', 17)}
              ${isCustomPriceActive ? '<span class="filter-active-dot"></span>' : ''}
            </button>
          </div>
        </div>
        <div class="hotel-list">${hotelCards}</div>
        <button class="outline-button" data-action="load-more-hotels" style="margin:16px auto;display:block;width:95%;padding:13px;border-radius:16px;font-weight:700;font-size:14px">
          ${state.loadingMoreHotels ? '<span class="spinner" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:6px"></span> Finding hotels nearby...' : `🔍 Load More Hotels in This Area`}
        </button>
      </section>
    `}
  </div></main>`;
}

function computeDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round((R * c) * 10) / 10;
}

async function fetchNearbyPlaces(lat, lng, city) {
  state.nearbyPlaces = Object.values(CITY_RECOMMENDATIONS).flat()
    .filter(p => p.key !== 'hotel')
    .map(p => ({ ...p, distanceKm: computeDistanceKm(lat, lng, p.lat, p.lng) }))
    .filter(p => p.distanceKm <= 50)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

function initUserNearbyRecommendation(forceRefresh = false) {
  if (state.locationLoading) return;
  if (!forceRefresh && state.userCoords && state.nearbyPlaces && state.nearbyPlaces.length > 0) return;

  state.locationLoading = true;
  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        state.locationLoading = false;
        state.userCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          isFallback: false
        };
        await fetchNearbyPlaces(state.userCoords.lat, state.userCoords.lng, 'near me');
        render();
      },
      async (err) => {
        console.warn('Geolocation denied or unavailable, using trip/Bangkok default:', err?.message);
        state.locationLoading = false;
        const trip = selectedTrip();
        const fallbackLat = trip?.lat || 13.7563;
        const fallbackLng = trip?.lng || 100.5018;
        state.userCoords = { lat: fallbackLat, lng: fallbackLng, isFallback: true };
        await fetchNearbyPlaces(fallbackLat, fallbackLng, trip?.city || 'Bangkok');
        render();
      },
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 }
    );
  } else {
    state.locationLoading = false;
    const trip = selectedTrip();
    const fallbackLat = trip?.lat || 13.7563;
    const fallbackLng = trip?.lng || 100.5018;
    state.userCoords = { lat: fallbackLat, lng: fallbackLng, isFallback: true };
    fetchNearbyPlaces(fallbackLat, fallbackLng, trip?.city || 'Bangkok').then(() => render());
  }
}

function initRecommendMap(centerLat, centerLng, places) {
  setTimeout(() => drawLocalMap('map-container', places, centerLat, centerLng), 60);
}

function drawLocalMap(id, places, lat, lng) {
  const container = document.getElementById(id);
  if (!container || !window.L) return;
  if (container._map) container._map.remove();
  const map = L.map(container).setView([lat, lng], 13);
  container._map = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors', maxZoom: 19
  }).addTo(map);
  const coords = [];
  places.forEach(p => {
    if (!Number.isFinite(p.lat) || !Number.isFinite(p.lng)) return;
    coords.push([p.lat, p.lng]);
    L.marker([p.lat, p.lng]).addTo(map).bindPopup(escapeHtml(p.name));
  });
  if (coords.length > 1) map.fitBounds(coords, { padding: [30, 30], maxZoom: 15 });
}

function mapPage() {
  if (!state.userCoords && !state.locationLoading) {
    initUserNearbyRecommendation();
  }

  const trip = selectedTrip();
  const cityName = trip?.city || 'Bangkok';

  const isNearby = Boolean(state.userCoords && !state.userCoords.isFallback && state.nearbyPlaces && state.nearbyPlaces.length > 0);
  const placesSource = (state.nearbyPlaces && state.nearbyPlaces.length > 0)
    ? state.nearbyPlaces
    : getTripPlaces(trip).filter(p => p.category !== 'Hotels' && p.category !== 'Hotel');

  const filters = ['All', 'Food', 'Things to do'];
  const visible = state.placeFilter === 'All' ? placesSource : placesSource.filter(p => p.category === state.placeFilter);

  // Compute map center
  let centerLat, centerLng;
  if (state.userCoords?.lat && state.userCoords?.lng) {
    centerLat = state.userCoords.lat;
    centerLng = state.userCoords.lng;
  } else {
    const lats = visible.map(p => p.lat).filter(Boolean);
    const lngs = visible.map(p => p.lng).filter(Boolean);
    centerLat = lats.length ? (Math.min(...lats) + Math.max(...lats)) / 2 : (trip?.lat || 13.7563);
    centerLng = lngs.length ? (Math.min(...lngs) + Math.max(...lngs)) / 2 : (trip?.lng || 100.5018);
  }

  // Initialize clean interactive Google Map anchored to real coordinates
  initRecommendMap(centerLat, centerLng, visible);

  const list = visible.map(p => `
    <button class="place-row" data-action="place-detail" data-id="${p.id || p.name}">
      <img src="${p.imageUrl || p.image || DEFAULT_PLACES[0].image}" alt=""/>
      <span class="place-row-copy">
        <span class="place-row-top">
          <span>${p.category}</span>
          <span>${icon('star.fill', 10)} ${p.rating}</span>
        </span>
        <h3>${escapeHtml(p.name)}</h3>
        <p>${escapeHtml(p.subtitle)}</p>
        <span class="place-times">
          ${p.distanceKm !== undefined ? `<strong>${p.distanceKm} km</strong> · ` : ''}
          ${icon('figure.walk', 11)} ${p.walk || 10}m
          ${icon('tram.fill', 11)} ${p.train || 12}m
          ${icon('car.fill', 11)} ${p.drive || 8}m
        </span>
      </span>
    </button>
  `).join('');

  const displayTitle = isNearby ? 'Near You (Current Location)' : `Around ${escapeHtml(cityName)}`;
  const displaySub = state.locationLoading
    ? 'Detecting your GPS location...'
    : (isNearby
        ? `Recommendations near your current position · ${visible.length} spots`
        : `Recommendations around ${escapeHtml(cityName)} · ${visible.length} spots`);

  return `<main class="page map-page">
    <div class="map-art">
      <div id="map-container"></div>
    </div>
    <div class="map-top">
      <div class="map-location">
        <div>
          <h1 class="location-title">${icon('location.fill', 17)} ${displayTitle}</h1>
          <p>${displaySub}</p>
        </div>
        <div style="display:flex;gap:6px;align-items:center">
          <button class="icon-button" data-action="refresh-location" title="Refresh nearby location" aria-label="Refresh nearby location" style="width:36px;height:36px;border-radius:12px;background:rgba(255,255,255,0.92);box-shadow:0 2px 8px rgba(0,0,0,0.08)">
            ${state.locationLoading ? '<span class="spinner" style="width:13px;height:13px;display:inline-block"></span>' : icon('arrow.clockwise', 15)}
          </button>
          ${settingsButton()}
        </div>
      </div>
      <div class="filter-row" data-scroller="horizontal">
        ${filters.map(f => `<button class="filter-pill ${state.placeFilter === f ? 'active' : ''}" data-action="place-filter" data-filter="${f}">${f}</button>`).join('')}
      </div>
    </div>
    ${state.showPlaces ? `
      <section class="place-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title-row">
          <div>
            <h2>${displayTitle}</h2>
            <p>${visible.length} recommended places</p>
          </div>
          <button class="icon-button" style="width:32px;height:32px" data-action="collapse-places" aria-label="Collapse places">${icon('chevron.down', 16)}</button>
        </div>
        <div class="filter-row" style="margin-bottom:8px" data-scroller="horizontal">
          ${filters.map(f => `<button class="filter-pill ${state.placeFilter === f ? 'active' : ''}" data-action="place-filter" data-filter="${f}" style="padding:7px 12px;font-size:11px">${f}</button>`).join('')}
        </div>
        <div class="places-list">${list}
          <button class="outline-button" data-action="load-more-places" style="margin:16px auto;display:block;width:90%;padding:12px;border-radius:14px;font-weight:650;font-size:13px">
            ${state.loadingMore ? '<span class="spinner" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:6px"></span> Loading...' : '🔍 Load More Places'}
          </button>
        </div>
      </section>
    ` : `
      <button class="filter-pill" style="position:absolute;z-index:15;bottom:28px;left:50%;transform:translateX(-50%)" data-action="collapse-places">
        ${icon('map')} ${displayTitle} · ${visible.length} places
      </button>
    `}
  </main>`;
}

function moneyPage() {
  const trip = selectedTrip(), entries = tripHistory();
  const spent = trip ? entries.reduce((sum, h) => sum + (h.priceCurrency === trip.currency ? h.price : (h.changeCurrency === trip.currency ? (h.converted ?? 0) : 0)), 0) : 0;
  const estimate = trip ? BUDGETS[trip.budget][2] * dateDayCount(trip.start, trip.end) : 0;
  const latest = entries[0];
  const progress = trip ? Math.min(spent / Math.max(estimate, 1), 1) * 100 : 0;
  return `<main class="page"><div class="page-stack">
    <header class="header-row"><h1 class="page-title">Money</h1>${settingsButton()}</header>
    <section class="spent-card">
      <div class="spent-label">${icon('chart.pie.fill', 13)} SPENT THIS TRIP <span style="margin-left:auto;color:rgba(255,255,255,.88)">${trip ? `${escapeHtml(trip.city)} · ${dateDayCount(trip.start, trip.end)}d` : ''}</span></div>
      <div class="spent-total">${currencyFormat(spent, trip?.currency || 'THB')}</div>
      ${trip ? `<div class="progress-track"><span style="width:${progress}%"></span></div><div class="progress-meta"><span>Trip budget estimate ${currencyFormat(estimate, trip?.currency || 'THB')}</span><span>${entries.length} scans</span></div>` : `<p class="spent-note">Create a trip to track your spending and budget.</p>`}
    </section>
    <button class="scan-link" data-action="start-scan">
      <span class="scan-link-icon">${icon('viewfinder')}</span>
      <span class="scan-link-copy"><strong>Receipt &amp; Price Scanner</strong><small>Check change &amp; real-time currency conversion</small></span>
      ${icon('arrow.right', 17)}
    </button>
    <section class="trip-section">
      <div class="header-row" style="align-items:end">
        <div><h2 class="section-title" style="font-size:19px">History</h2><p class="section-subtitle">${trip ? 'Recent scans for this trip' : 'Saved scan receipts'}</p></div>
        ${entries.length ? `<button class="secondary-button" style="width:auto;min-height:31px;padding:0 10px;border:0;background:transparent;font-size:12px" data-action="history">More</button>` : ''}
      </div>
      ${latest ? `
        <button class="history-card" data-action="history">
          <span class="history-top">
            <span>${icon('checkmark.circle.fill', 13)} ${latest.verified ? 'Change matched' : 'Review change'}</span>
            <span style="color:var(--secondary);font-weight:450">${new Date(latest.date).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</span>
          </span>
          <span class="history-details">
            ${latest.products?.[0]?.image ? `<img class="history-thumb" src="${latest.products[0].image}" alt=""/>` : `<span class="history-thumb">${icon('bag', 22)}</span>`}
            <span>
              <h4>${escapeHtml(latest.products?.[0]?.name || 'Scanned purchase')}</h4>
              <p>${new Date(latest.date).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})} · ${latest.products?.length || 1} item</p>
            </span>
            <span class="history-amount">${currencyFormat(latest.price, latest.priceCurrency)}<small>${latest.converted == null ? '' : `≈ ${currencyFormat(latest.converted, latest.changeCurrency)}`}</small></span>
          </span>
        </button>
      ` : `<div class="card empty-card"><h3>No scans recorded yet</h3><p>Your price and change checks will appear here.</p></div>`}
    </section>
  </div></main>`;
}

function currencyPill(label, value, dest = false) {
  const curr = CURRENCIES.find(c => c[0] === value) || [value, value, '🌐', ''];
  const flag = curr[2] || '🌐';
  const symbol = curr[3] || '';
  const disabled = !dest && state.cart.length > 0;
  return `
    <div class="currency-select-box ${dest ? 'destination' : ''} ${disabled ? 'disabled' : ''}">
      <span class="currency-badge-label">${label}</span>
      <div class="currency-pill-content">
        <span class="currency-flag">${flag}</span>
        <span class="currency-code">${value}</span>
        <span class="currency-symbol">${symbol}</span>
        ${icon('chevron.down', 11)}
      </div>
      <select class="currency-native-select" aria-label="${label} currency" data-field="${dest ? 'changeCurrency' : 'priceCurrency'}" ${disabled ? 'disabled' : ''}>
        ${CURRENCIES.map(([code, name, f, sym]) => `
          <option ${value === code ? 'selected' : ''} value="${code}">
            ${f} ${code} · ${name} (${sym})
          </option>
        `).join('')}
      </select>
    </div>
  `;
}

function priceScanCard() {
  const converted = state.rateUnavailable ? '—' : state.rateLoading ? '…' : currencyFormat(state.scan.price * state.conversionRate, state.changeCurrency, 2);
  const favorite = state.scan.currentFavorite || state.favorites.some(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - state.scan.price) < .001);
  return `<section class="scan-card">
    <div class="scan-card-head"><button data-action="keypad" data-target="price">${icon('pencil', 14)} Edit</button><span class="spacer"></span><button class="favorite ${favorite ? 'on' : ''}" data-action="favorite" aria-label="Save favorite">${icon(favorite ? 'heart.fill' : 'heart', 19)}</button></div>
    <div class="scan-values"><div class="scan-value"><label>PRICE FOUND</label><strong>${currencyFormat(state.scan.price, state.priceCurrency)}</strong></div><div class="scan-value converted"><label>CONVERTED</label><strong>${converted}</strong></div></div>
    <input class="text-input" aria-label="Scanned product name" data-field="product" value="${escapeHtml(state.scan.product)}" placeholder="Item name"/>
    <div class="scan-actions"><button class="secondary-button" data-action="add-cart">${icon('cart.badge.plus')} Add to cart</button><button class="primary-button" data-action="calculate-change">Calculate change ${icon('arrow.right')}</button></div>
  </section>`;
}

function tenderedCard() {
  const due = Math.max(0, state.scan.tendered - state.scan.price);
  return `<section class="scan-card compact">
    <div class="scan-card-head"><span class="spacer"></span><button data-action="keypad" data-target="tendered">${icon('pencil', 14)} Edit</button></div>
    <div class="value-row"><span>Price</span><strong>${currencyFormat(state.scan.price)}</strong></div>
    <div class="value-row"><span>Amount paid</span><strong class="blue-text">${currencyFormat(state.scan.tendered)}</strong></div>
    <div class="value-row" style="margin-top:8px;border-top:1px solid #e4eaf2;padding-top:12px;align-items:flex-start"><span style="font-size:16px;color:var(--ink);font-weight:700">Expected change <small>(sample exchange rate)</small></span><span style="text-align:right"><strong style="font-size:27px">${currencyFormat(due)}</strong><small style="display:block;color:var(--blue);margin-top:4px">≈ ${currencyFormat(due * state.conversionRate, state.changeCurrency)}</small></span></div>
    <button class="primary-button" style="margin-top:12px" data-action="verify-change">${due === 0 ? 'Finish' : 'Verify change'} ${icon(due === 0 ? 'checkmark' : 'arrow.right')}</button>
  </section>`;
}

function coinCard() {
  const due = Math.max(0, state.scan.tendered - state.scan.price), diff = state.scan.received - due;
  const matched = Math.abs(diff) < .01;
  return `<section class="scan-card compact">
    <div class="change-result"><div class="result-col"><label>EXPECTED</label><strong>${currencyFormat(due)}</strong></div><div class="result-col"><label>RECEIVED</label><strong style="color:#e59a32">${currencyFormat(state.scan.received)}</strong></div></div>
    <div class="result-status ${matched ? 'good' : 'warn'}">${icon(matched ? 'checkmark.circle.fill' : 'exclamationmark.circle.fill', 17)} ${matched ? 'Correct change' : `Difference: ${currencyFormat(Math.abs(diff))}`}</div>
    <button class="primary-button" data-action="keypad" data-target="coins">${icon('pencil')} Adjust amount</button>
    <p style="margin:9px 0 0;text-align:center;color:#7c8998;font-size:11px">Close to save this transaction to History</p>
  </section>`;
}

function scannerPage() {
  const step = state.scan.step;
  const hasCard = step === 'price' ? state.scan.priceCard : step === 'tendered' ? state.scan.tenderedCard : state.scan.coinCard;
  const title = step === 'price' ? 'Scan price' : step === 'tendered' ? 'Scan amount paid' : 'Scan change received';
  const hint = step === 'price' ? 'Point at the price tag and tap Scan' : step === 'tendered' ? 'Point at the paid cash and tap Scan' : 'Point at the returned change and tap Scan';
  const card = hasCard ? (step === 'price' ? priceScanCard() : step === 'tendered' ? tenderedCard() : coinCard()) : '';
  const dockAction = step === 'coin' && state.scan.coinCard ? 'complete' : step === 'tendered' && state.scan.tenderedCard ? 'return-price' : '';
  const shutter = dockAction ? `<button class="close-stage" data-action="${dockAction}" aria-label="Close">${icon('xmark', 22)}</button>` : `<button class="shutter ${step === 'price' && state.scan.priceCard ? 'reset' : ''}" data-action="capture" aria-label="Scan amount"></button>`;
  const showManual = step === 'price' || step === 'tendered' || (step === 'coin' && !state.scan.coinCard);
  const noCamera = !mediaStream;
  return `<div class="scanner"><video id="camera-preview" class="camera-video" autoplay playsinline muted></video><div class="camera-shade"></div><input id="camera-file" type="file" accept="image/*" capture="environment" hidden/>
    <div class="scanner-header">
      <button class="scanner-speech-toggle ${state.speechEnabled ? 'active' : 'muted'}" data-action="toggle-speech" title="${state.speechEnabled ? 'Voice readout enabled (Tap to mute)' : 'Voice readout muted (Tap to enable)'}" aria-label="Toggle voice readout">
        ${icon(state.speechEnabled ? 'speaker.wave.2' : 'speaker.slash', 16)}
      </button>
      <button class="scanner-close" data-action="close-scan" aria-label="Close scanner">${icon('xmark', 16)}</button>
      ${step === 'price' ? `<div class="currency-pair">${currencyPill('Price', state.priceCurrency)}<span>${icon('arrow.right', 14)}</span>${currencyPill('To', state.changeCurrency, true)}</div>` : `<div style="font-size:15px;font-weight:650">${state.priceCurrency} &nbsp;→&nbsp; ${state.changeCurrency}</div>`}
      <div class="scan-title">${title}</div>
    </div>
    ${noCamera ? `<div class="camera-message">${icon('viewfinder', 33)}<h3>${state.cameraError ? 'Camera is unavailable' : 'Camera access'}</h3><p>${state.cameraError ? escapeHtml(state.cameraError) : 'Allow camera access to scan a price, or choose an image from your gallery.'}</p><button class="secondary-button" style="width:auto;min-height:39px;padding:0 14px" data-action="request-camera">${icon('viewfinder', 15)} Enable camera</button><button class="manual-link" style="margin-top:9px" data-action="pick-image">Choose photo</button></div>` : ''}
    ${state.scan.ocrRunning ? `<div class="busy" style="position:absolute;z-index:4;top:52%;left:50%;transform:translate(-50%,-50%)"><span class="spinner"></span> Reading amount…</div>` : ''}
    ${state.scan.message ? `<div style="position:absolute;z-index:6;top:112px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:9px 15px;background:rgba(255,255,255,.88);border-radius:99px;color:var(--ink);font-size:12px;font-weight:650">${escapeHtml(state.scan.message)}</div>` : ''}
    ${card}
    <div class="scan-dock">
      ${!hasCard && !state.scan.ocrRunning ? `<div class="scan-hint-dock">${hint}</div>` : ''}
      <div class="dock-row"><button class="cart-button" data-action="cart" aria-label="Cart">${icon('cart.fill', 19)}${state.cart.length ? `<span class="cart-count">${state.cart.reduce((sum, item) => sum + item.quantity, 0)}</span>` : ''}</button>${shutter}<button class="dock-spacer" style="border:0;background:transparent" aria-hidden="true"></button></div>${showManual ? `<button class="manual-link" data-action="keypad" data-target="${step === 'price' ? 'price' : step === 'tendered' ? 'tendered' : 'coins'}">Enter amount</button>` : ''}
    </div>
  </div>`;
}

function planningModal() {
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack" style="padding:36px 24px;text-align:center">
    <div class="busy" style="display:inline-flex;margin:0 auto 16px"><span class="spinner" style="width:38px;height:38px;border-width:3.5px"></span></div>
    <h2 style="font-size:22px;margin:0 0 8px">Designing Your Trip</h2>
    <p class="modal-copy" style="font-size:14px;color:var(--secondary);margin:0 0 16px">${escapeHtml(state.planProgress || 'Preparing your curated itinerary...')}</p>
    <div class="inline-note" style="background:#f0f5ff;color:#1a66d1;border-radius:12px;padding:12px;text-align:left;line-height:1.6;font-size:12px">
      ✦ Selecting top attractions & restaurants with real internet photos<br>
      ✦ Estimating travel times between stops<br>
      ✦ Creating customized English itinerary
    </div>
  </div></section></div>`;
}

function render() {
  document.body.classList.toggle('bold-text', state.boldText);
  phone.style.setProperty('--text-scale', state.textScale);
  const page = state.scan.active ? scannerPage() : ({ trip: tripHome, booking: bookingPage, recommend: mapPage, money: moneyPage }[state.tab] || tripHome)();
  phone.innerHTML = `${statusBar()}<div class="app-layer ${state.scan.active ? 'scanner-layer' : ''}">${page}</div>${state.scan.active ? '' : navBar()}${modalView()}${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ''}`;
  if (state.scan.active && mediaStream) {
    const video = document.getElementById('camera-preview');
    if (video) { video.srcObject = mediaStream; video.play().catch(() => {}); }
  }
}

function modalHeader(title, left = 'Done', right = '', options = {}) {
  const leftAction = options.leftAction || 'close-modal';
  return `<div class="modal-head"><button data-action="${leftAction}">${left}</button><h2>${title}</h2><button class="right" data-action="${options.rightAction || 'noop'}">${right}</button></div>`;
}

function citySummary() { return state.composer.city || 'Choose destination'; }

function composerSummary(step) {
  if (step === 'where') return citySummary();
  if (step === 'when') return state.composer.start ? `${state.composer.start}${state.composer.end ? ` – ${state.composer.end}` : ''}` : 'Choose travel dates';
  if (step === 'budget') return BUDGETS[state.composer.budget][0];
  return state.composer.prefs.length ? state.composer.prefs.join(' · ') : 'Choose travel vibe';
}

function composerSection(step, title, content) {
  const active = state.composer.step === step;
  return `<section class="composer-section ${active ? 'active' : ''}"><button class="composer-heading" data-action="composer-step" data-step="${step}"><span><h3>${title}</h3>${active ? '' : `<p>${escapeHtml(composerSummary(step))}</p>`}</span>${active ? '' : `<span class="chev">${icon('chevron.down', 13)}</span>`}</button>${active ? `<div class="composer-content">${content}</div>` : ''}</section>`;
}

function composerBody() {
  const query = state.composer.query.toLowerCase().trim();
  const matching = CITIES.filter(c => `${c.name} ${c.country}`.toLowerCase().includes(query));
  const hasExact = matching.some(c => c.name.toLowerCase() === query);

  const cityContent = `
    <div class="country-dropdown-wrap">
      <label class="field-label" style="font-size:11px">Select Destination Dropdown</label>
      <select class="select-field" data-field="select-city-dropdown">
        <option value="">-- Choose a Country / City --</option>
        <optgroup label="Thailand">
          <option value="Bangkok" ${state.composer.city === 'Bangkok' ? 'selected' : ''}>🇹🇭 Bangkok, Thailand</option>
          <option value="Chiang Mai" ${state.composer.city === 'Chiang Mai' ? 'selected' : ''}>🇹🇭 Chiang Mai, Thailand</option>
          <option value="Phuket" ${state.composer.city === 'Phuket' ? 'selected' : ''}>🇹🇭 Phuket, Thailand</option>
        </optgroup>
        <optgroup label="Asia">
          <option value="Tokyo" ${state.composer.city === 'Tokyo' ? 'selected' : ''}>🇯🇵 Tokyo, Japan</option>
          <option value="Kyoto" ${state.composer.city === 'Kyoto' ? 'selected' : ''}>🇯🇵 Kyoto, Japan</option>
          <option value="Osaka" ${state.composer.city === 'Osaka' ? 'selected' : ''}>🇯🇵 Osaka, Japan</option>
          <option value="Seoul" ${state.composer.city === 'Seoul' ? 'selected' : ''}>🇰🇷 Seoul, South Korea</option>
          <option value="Singapore" ${state.composer.city === 'Singapore' ? 'selected' : ''}>🇸🇬 Singapore</option>
        </optgroup>
        <optgroup label="Europe &amp; Americas">
          <option value="Paris" ${state.composer.city === 'Paris' ? 'selected' : ''}>🇫🇷 Paris, France</option>
          <option value="Rome" ${state.composer.city === 'Rome' ? 'selected' : ''}>🇮🇹 Rome, Italy</option>
          <option value="London" ${state.composer.city === 'London' ? 'selected' : ''}>🇬🇧 London, United Kingdom</option>
          <option value="New York" ${state.composer.city === 'New York' ? 'selected' : ''}>🇺🇸 New York, United States</option>
        </optgroup>
      </select>
    </div>

    <div class="search-box">
      ${icon('magnifyingglass', 18)}
      <input data-field="city-query" value="${escapeHtml(state.composer.query)}" placeholder="Or type to search city..." />
    </div>

    <div class="city-list">
      <h4>${icon('flame.fill', 14)} Popular Destinations (Scrollable)</h4>
      ${query && !hasExact ? `
        <button class="city-row" data-action="select-city" data-city="${escapeHtml(state.composer.query)}" data-country="Global" data-lat="13.7563" data-lng="100.5018">
          <span class="city-flag">✈️</span>
          <span><strong>${escapeHtml(state.composer.query)}</strong><small>Custom Destination</small></span>
          ${state.composer.city?.toLowerCase() === query ? `<span class="soon" style="color:var(--blue)">${icon('checkmark.circle.fill', 18)}</span>` : ''}
        </button>
      ` : ''}
      ${matching.map(city => `
        <button class="city-row" data-action="select-city" data-city="${city.name}" data-country="${city.country}" data-lat="${city.lat}" data-lng="${city.lng}">
          <span class="city-flag">${city.flag}</span>
          <span><strong>${city.name}</strong><small>${city.country}</small></span>
          ${city.name === state.composer.city ? `<span class="soon" style="color:var(--blue)">${icon('checkmark.circle.fill', 18)}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `;

  const whenContent = `
    <span class="field-label">Choose your travel dates</span>
    <div class="date-fields">
      <label><span class="field-label" style="font-size:10px">Start</span><input type="date" data-field="trip-start" value="${state.composer.start}" min="${new Date().toISOString().slice(0, 10)}" /></label>
      <label><span class="field-label" style="font-size:10px">End</span><input type="date" data-field="trip-end" value="${state.composer.end}" min="${state.composer.start || new Date().toISOString().slice(0, 10)}" /></label>
    </div>
    ${state.composer.start ? `
      <p class="inline-note">${dateDayCount(state.composer.start, state.composer.end)} day${dateDayCount(state.composer.start, state.composer.end) === 1 ? '' : 's'} · ${tripDateLabel({ start: state.composer.start, end: state.composer.end })} ${dateDayCount(state.composer.start, state.composer.end) === 1 ? '(1-day trip)' : ''}</p>
      <button class="secondary-button" style="margin-top:10px;min-height:43px" data-action="composer-step" data-step="budget">Continue ${icon('arrow.right', 15)}</button>
    ` : `<p class="inline-note">Select 1 date for a day trip, or a range for a multi-day journey.</p>`}
  `;

  const b = BUDGETS[state.composer.budget];
  const budgetContent = `
    <h3 class="budget-title">${b[0]}</h3>
    <p class="budget-detail">${b[1]}</p>
    <input class="budget-slider" type="range" min="0" max="4" step="1" value="${state.composer.budget}" data-field="budget"/>
    <div class="budget-labels">${BUDGETS.map((x, i) => `<span class="${i === state.composer.budget ? 'selected' : ''}">${x[0]}</span>`).join('')}</div>

    <button class="secondary-button" style="margin-top:17px;min-height:43px" data-action="composer-step" data-step="preferences">Continue ${icon('arrow.right', 15)}</button>
  `;

  const prefsContent = `
    <div class="pref-grid">
      ${PREFS.map(([name, symbol]) => `
        <button class="pref-button ${state.composer.prefs.includes(name) ? 'selected' : ''}" data-action="toggle-pref" data-pref="${name}">
          ${icon(symbol, 18)} ${name}
        </button>
      `).join('')}
    </div>
  `;

  return `${composerSection('where', 'Where', cityContent)}${composerSection('when', 'When', whenContent)}${composerSection('budget', 'Budget', budgetContent)}${composerSection('preferences', 'Preferences', prefsContent)}`;
}

function createTripModal() {
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader('Create Trip', ' ', '×', { leftAction: 'close-modal', rightAction: 'close-modal' })}<div class="modal-body stack">${composerBody()}</div>${state.composer.step === 'preferences' ? `<footer class="modal-footer"><button class="primary-button" data-action="create-trip" ${state.composer.prefs.length ? '' : 'disabled'}>${icon('sparkles', 16)} Create Itinerary</button></footer>` : ''}</section></div>`;
}

function settingsModal() {
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Text settings')}<div class="modal-body stack"><div class="settings-panel"><h3>Make it easy to read</h3><p>Adjust text size across your trip and money screens.</p><div class="range-row">${icon('textformat.size', 15)}<input type="range" min="0.85" max="1.45" step="0.05" value="${state.textScale}" data-field="text-scale"/>${icon('textformat.size', 20)}</div><div class="settings-meta">Text size <strong>${Math.round(state.textScale * 100)}%</strong><button data-action="reset-scale">${icon('arrow.counterclockwise', 16)}</button></div></div><label class="toggle-row">Bold text<input type="checkbox" data-field="bold-text" ${state.boldText ? 'checked' : ''}/></label></div></section></div>`;
}

function historyModal() {
  const entries = tripHistory();
  const cards = entries.map(item => `<article class="history-entry ${item.verified ? '' : 'warn'}"><div class="history-entry-top"><span class="entry-status">${icon(item.verified ? 'checkmark.circle.fill' : 'exclamationmark.circle.fill', 13)} ${item.verified ? 'Matched' : 'Check difference'}</span><span class="muted">${new Date(item.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})} · ${new Date(item.date).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})}</span></div><p style="margin-top:10px"><strong>${escapeHtml(item.products?.[0]?.name || 'Scanned item')}</strong></p>${(item.products || []).map(product => `<div class="history-product-row">${product.image ? `<img src="${product.image}" alt=""/>` : `<span>${icon('bag', 16)}</span>`}<p>${escapeHtml(product.name)} · ${product.quantity || 1} × ${currencyFormat(product.price, product.currency || item.priceCurrency)}</p></div>`).join('')}<div class="value-row"><span>Price</span><strong>${currencyFormat(item.price, item.priceCurrency)}</strong></div><div class="value-row"><span>Paid</span><strong>${currencyFormat(item.paid, item.priceCurrency)}</strong></div><div class="value-row"><span>Expected change</span><strong>${currencyFormat(item.expected, item.priceCurrency)}</strong></div><div class="value-row"><span>Received</span><strong style="color:var(--success)">${currencyFormat(item.received, item.priceCurrency)}</strong></div>${item.converted == null ? '' : `<p style="color:var(--blue)">≈ ${currencyFormat(item.converted, item.changeCurrency)}</p>`}<button class="danger-button" data-action="delete-history" data-id="${item.id}">Delete</button></article>`).join('');
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader('History', entries.length ? 'Clear' : 'Done', '', { leftAction: entries.length ? 'clear-history' : 'close-modal' })}<div class="modal-body">${cards ? `<div class="history-list">${cards}</div>` : `<div class="card empty-card" style="text-align:center;margin-top:25px"><div style="color:var(--secondary);margin-bottom:10px">${icon('clock.arrow.circlepath', 30)}</div><h3>No history yet</h3><p>Completed change checks will appear here.</p></div>`}</div></section></div>`;
}

function cartModal() {
  const items = state.cart.map(item => `<article class="cart-item"><div class="cart-item-row"><span class="cart-thumb">${item.image ? `<img src="${item.image}" alt=""/>` : icon('bag', 23)}</span><span class="cart-main"><strong>${escapeHtml(item.name)}</strong><small>Each · ${currencyFormat(item.price, item.currency, 2)}</small><b>Total · ${currencyFormat(item.price * item.quantity, item.currency, 2)}</b></span><button class="icon-button" style="width:37px;height:37px" data-action="edit-cart" data-id="${item.id}">${icon('pencil', 15)}</button></div><div class="quantity-row"><span>Quantity</span><span class="grow"></span><button data-action="quantity" data-id="${item.id}" data-delta="-1">−</button><strong>${item.quantity}</strong><button data-action="quantity" data-id="${item.id}" data-delta="1">＋</button></div></article>`).join('');
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader(`Cart · ${state.cart.reduce((s,i) => s+i.quantity,0)}`, 'Done', state.cart.length ? 'Clear' : '', { leftAction: 'close-modal', rightAction: 'clear-cart' })}<div class="modal-body">${items ? `<div class="cart-list">${items}</div><div class="cart-total"><span>Total · ${state.priceCurrency}</span><strong>${currencyFormat(state.cart.reduce((sum,i) => sum+i.price*i.quantity,0), state.priceCurrency, 2)}</strong></div><button class="primary-button" data-action="checkout">Checkout · Calculate change ${icon('arrow.right')}</button>` : `<div class="card empty-card" style="text-align:center;margin-top:20px"><div style="color:var(--secondary);margin-bottom:10px">${icon('cart.fill', 30)}</div><h3>Your cart is empty</h3><p>Scan a price and tap Add to cart.</p></div>`}</div></section></div>`;
}

function keypadModal() {
  const target = state.modal.target;
  const value = state.modal.value ?? '';
  const title = target === 'price' ? `Amount · ${state.priceCurrency}` : target === 'tendered' ? `Amount paid · ${state.priceCurrency}` : `Amount · ${state.priceCurrency}`;
  const keys = ['1','2','3','4','5','6','7','8','9','.','0','⌫'];
  return `<div class="modal-backdrop"><section class="modal full" style="height:92%">${modalHeader(title, 'Cancel', '', { leftAction: 'close-modal' })}<div class="modal-body" style="display:flex;flex-direction:column;justify-content:center"><div class="keypad-value"><strong>${escapeHtml(value || '0')}</strong><p>Sample rate · ≈ ${currencyFormat((Number(value) || 0) * state.conversionRate, state.changeCurrency)}</p></div><div class="quick-chips"><button data-action="quick-add" data-add="100">+100</button><button data-action="quick-add" data-add="10">+10</button><button data-action="key-clear" style="color:#d65d5d">Clear</button></div><div class="keypad-grid">${keys.map(k => `<button data-action="key" data-key="${k}">${k}</button>`).join('')}</div><button class="primary-button" style="margin-top:16px" data-action="key-confirm">${target === 'coins' ? 'Save and finish' : 'Confirm'}</button></div></section></div>`;
}

function findHotelByIdOrName(targetId, targetName, trip) {
  const currentTrip = trip || selectedTrip();
  const idStr = targetId ? String(targetId).trim().toLowerCase() : '';
  const nameStr = targetName ? String(targetName).trim().toLowerCase() : idStr;
  const cityName = currentTrip?.city || '';
  const cityKey = cityName.toLowerCase().replace(/[^a-z]/g, '');

  // 1. Check in state.modal.hotel if already provided
  if (state.modal?.hotel && ((state.modal.hotel.id && String(state.modal.hotel.id).toLowerCase() === idStr) || (state.modal.hotel.name && state.modal.hotel.name.trim().toLowerCase() === nameStr))) {
    return state.modal.hotel;
  }

  // 2. Check in dedicated CITY_HOTELS
  const cityHotels = CITY_HOTELS[cityKey] || [];
  const foundCityHotel = cityHotels.find(h => (h.id && String(h.id).toLowerCase() === idStr) || (h.name && h.name.trim().toLowerCase() === nameStr));
  if (foundCityHotel && isHotelMatchingCity(foundCityHotel, cityName)) return foundCityHotel;

  // 3. Check in state.extraHotels
  if (state.extraHotels && state.extraHotels.length) {
    const found = state.extraHotels.find(h => (h.id && String(h.id).toLowerCase() === idStr) || (h.name && h.name.trim().toLowerCase() === nameStr));
    if (found && isHotelMatchingCity(found, cityName)) return found;
  }

  // 4. Check in trip.dailyItinerary accommodations
  if (currentTrip?.dailyItinerary) {
    const accs = currentTrip.dailyItinerary.flatMap(d => d.accommodations || []);
    const found = accs.find(h => (h.id && String(h.id).toLowerCase() === idStr) || (h.name && h.name.trim().toLowerCase() === nameStr));
    if (found && isHotelMatchingCity(found, cityName)) return found;
  }

  // 5. Check in state.bookings
  if (state.bookings && state.bookings.length) {
    const found = state.bookings.find(b => (b.hotelId && String(b.hotelId).toLowerCase() === idStr) || (b.id && String(b.id).toLowerCase() === idStr) || (b.name && b.name.trim().toLowerCase() === nameStr));
    if (found && isHotelMatchingCity(found, cityName)) return found;
  }

  // 6. Check in CITY_RECOMMENDATIONS for this city
  const cityCurated = CITY_RECOMMENDATIONS[cityKey] || [];
  const curatedHotels = cityCurated.filter(p => (p.category === 'Hotels' || p.key === 'hotel') && isHotelMatchingCity(p, cityName));
  const foundCurated = curatedHotels.find(h => (h.id && String(h.id).toLowerCase() === idStr) || (h.name && h.name.trim().toLowerCase() === nameStr));
  if (foundCurated) return foundCurated;

  // 7. Check in DEFAULT_HOTELS only if trip matches
  const isThai = cityName.toLowerCase().includes('bangkok') || (currentTrip?.country || '').toLowerCase().includes('thailand');
  if (isThai) {
    const foundDefault = DEFAULT_HOTELS.find(h => ((h.id && String(h.id).toLowerCase() === idStr) || (h.name && h.name.trim().toLowerCase() === nameStr)) && isHotelMatchingCity(h, cityName));
    if (foundDefault) return foundDefault;
  }

  // 8. Partial match by name (filtered by city)
  if (nameStr) {
    const all = [
      ...cityHotels,
      ...(state.extraHotels || []),
      ...(currentTrip?.dailyItinerary?.flatMap(d => d.accommodations || []) || []),
      ...(state.bookings || []),
      ...curatedHotels,
      ...(isThai ? DEFAULT_HOTELS : [])
    ].filter(h => isHotelMatchingCity(h, cityName));
    const partial = all.find(h => h.name && (h.name.toLowerCase().includes(nameStr) || nameStr.includes(h.name.toLowerCase())));
    if (partial) return partial;
  }

  return null;
}

function hotelModal() {
  const trip = selectedTrip();
  const days = dateDayCount(trip?.start, trip?.end);
  const targetId = state.modal?.id;
  const targetName = state.modal?.name || targetId;

  const foundHotel = findHotelByIdOrName(targetId, targetName, trip);
  const h = state.modal?.hotel || foundHotel || {
    id: targetId || uid(),
    name: targetName || 'Selected Hotel',
    area: trip?.city || 'City Center',
    price: 2500,
    rating: '4.7',
    image: DEFAULT_HOTELS[0].image
  };

  const priceNum = parseInt(String(h.price || h.pricePerNight).replace(/[^0-9]/g, '')) || 2500;
  const isBooked = state.bookings.some(b => b.tripId === trip?.id && (b.hotelId === h.id || b.name === h.name));

  const hLat = h.latitude || h.lat || trip?.lat;
  const hLng = h.longitude || h.lng || trip?.lng;

  const backLabel = `${icon('chevron.left', 14)} Back`;
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader(isBooked ? 'Booked Accommodation' : 'Hotel Details', backLabel)}<div class="modal-body stack">
    <img class="hotel-hero" src="${h.imageUrl || h.image || DEFAULT_HOTELS[0].image}" alt="${escapeHtml(h.name)}"/>
    <div class="place-detail-copy">
      ${isBooked ? `<div class="eyebrow" style="color:var(--success);margin-bottom:4px;font-weight:750;display:flex;align-items:center;gap:4px">${icon('checkmark.seal.fill', 13)} Currently Booked for this Trip</div>` : ''}
      <h2 style="font-size:21px">${escapeHtml(h.name)}</h2>
      <p>${escapeHtml(h.area || h.address || h.subtitle || trip.city)} · ${h.rating || 4.7} ★<br>${escapeHtml(h.description || 'Quality hotel accommodation conveniently located near your itinerary spots.')}</p>
    </div>
    <div class="cart-total">
      <span>Number of nights</span>
      <span style="display:flex;align-items:center;gap:12px">
        <button class="icon-button" style="width:31px;height:31px" data-action="hotel-night" data-delta="-1">−</button>
        <strong style="font-size:17px">${state.hotelNights}</strong>
        <button class="icon-button" style="width:31px;height:31px" data-action="hotel-night" data-delta="1">＋</button>
      </span>
    </div>
    <div class="card empty-card" style="display:flex;justify-content:space-between">
      <span>Total (${state.hotelNights} night${state.hotelNights === 1 ? '' : 's'})</span>
      <strong>${currencyFormat(priceNum * state.hotelNights, trip?.currency || 'THB')}</strong>
    </div>
    <button class="primary-button" data-action="confirm-hotel" data-id="${escapeHtml(h.id || h.name)}" data-name="${escapeHtml(h.name)}" ${days <= 1 ? 'disabled' : ''}>
      ${isBooked ? 'Update Booking' : 'Confirm Booking'}
    </button>
    ${hLat && hLng ? `
      <button class="secondary-button" data-action="navigation" data-lat="${hLat}" data-lng="${hLng}" style="margin-top:6px">
        ${icon('arrow.up.right', 15)} Open Location in Google Maps
      </button>
    ` : ''}
    <button class="secondary-button" data-action="close-modal" style="margin-top:4px;min-height:40px">${icon('chevron.left', 14)} ${state.parentModal?.type === 'trip' ? 'Back to Trip' : 'Back'}</button>
  </div></section></div>`;
}

function placeModal() {
  const trip = selectedTrip();
  const allPlaces = getTripPlaces(trip);
  const p = state.modal.place || allPlaces.find(x => x.id === state.modal.id || x.name === state.modal.id) || allPlaces[0] || DEFAULT_PLACES[0];
  const lat = p.lat || p.latitude || 13.7563;
  const lng = p.lng || p.longitude || 100.5018;
  const mapBox = `${(lng - .012).toFixed(4)}%2C${(lat - .010).toFixed(4)}%2C${(lng + .012).toFixed(4)}%2C${(lat + .010).toFixed(4)}`;

  const backLabel = `${icon('chevron.left', 14)} Back`;
  return `<div class="modal-backdrop"><section class="modal full" style="height:92%">${modalHeader('Place details', backLabel)}<div class="modal-body stack">
    <img class="hotel-hero" src="${p.imageUrl || p.image || DEFAULT_PLACES[0].image}" alt="${escapeHtml(p.name)}"/>
    <div class="place-detail-copy">
      <span class="eyebrow" style="color:#7899bb;font-size:10px;font-weight:750;letter-spacing:.08em;text-transform:uppercase">${p.category || 'Attraction'}</span>
      <h2>${escapeHtml(p.name)}</h2>
      <p>${escapeHtml(p.address || p.subtitle || '')}</p>
    </div>
    <div class="card empty-card" style="display:flex;justify-content:space-between;align-items:center">
      <span style="color:#d9a63f;font-weight:750">${icon('star.fill', 14)} ${p.rating || '4.8'}</span>
      <span style="color:var(--secondary);font-size:12px">${p.entryFee || p.priceLevel || p.duration || 'Open daily'}</span>
    </div>
    <p class="modal-copy">${escapeHtml(p.description || 'A must-visit spot on your itinerary.')}</p>
    <div class="transport-grid">
      <div class="transport">${icon('figure.walk')}<strong>${p.walk || 12} min</strong><small>Walk</small></div>
      <div class="transport">${icon('bus.fill')}<strong>${p.bus || 15} min</strong><small>Bus</small></div>
      <div class="transport">${icon('tram.fill')}<strong>${p.train || 10} min</strong><small>Train</small></div>
      <div class="transport">${icon('car.fill')}<strong>${p.drive || 8} min</strong><small>Drive</small></div>
    </div>
    <button class="primary-button" data-action="navigation" data-lat="${lat}" data-lng="${lng}">${icon('arrow.up.right')} Start Google Navigation</button>
    <button class="secondary-button" data-action="close-modal" style="margin-top:6px;min-height:42px">${icon('chevron.left', 14)} ${state.parentModal?.type === 'trip' ? 'Back to Itinerary' : 'Back'}</button>
    <div class="modal-map"><iframe class="map-embed" title="Map for ${escapeHtml(p.name)}" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${mapBox}&layer=mapnik&marker=${lat}%2C${lng}"></iframe></div>
    <small class="muted">Live coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)} · © OpenStreetMap</small>
  </div></section></div>`;
}

function getDayStops(dayData, trip) {
  if (!dayData) return [];
  const stops = [];
  const times = ['09:00 AM', '12:30 PM', '03:30 PM', '07:00 PM', '09:00 PM'];
  let tIdx = 0;

  const attractions = dayData.attractions || [];
  const restaurants = dayData.restaurants || [];

  let aIdx = 0, rIdx = 0;
  while (aIdx < attractions.length || rIdx < restaurants.length) {
    if (aIdx < attractions.length) {
      const a = attractions[aIdx];
      stops.push({
        name: a.name,
        category: a.category || 'Attraction',
        subtitle: a.address || `${a.duration || '2 hours'} visit`,
        description: a.description || '',
        rating: String(a.rating || 4.8),
        lat: a.latitude || trip.lat || 13.7563,
        lng: a.longitude || trip.lng || 100.5018,
        image: a.imageUrl || 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
        time: times[tIdx++ % times.length],
        entryFee: a.entryFee,
      });
      aIdx++;
    }
    if (rIdx < restaurants.length) {
      const r = restaurants[rIdx];
      stops.push({
        name: r.name,
        category: 'Food',
        subtitle: `${r.cuisine || 'Dining'} · ${r.address || trip.city}`,
        description: r.description || '',
        rating: String(r.rating || 4.6),
        lat: r.latitude || trip.lat || 13.7563,
        lng: r.longitude || trip.lng || 100.5018,
        image: r.imageUrl || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
        time: times[tIdx++ % times.length],
      });
      rIdx++;
    }
  }
  return stops;
}

function renderDayStops(dayNumber, dayData, trip) {
  const stops = getDayStops(dayData, trip);
  if (!stops.length) {
    return `
      <div class="card empty-card" style="padding:24px 16px;text-align:center">
        <div style="color:var(--secondary);margin-bottom:8px">${icon('map', 28)}</div>
        <h4 style="margin:0 0 4px;font-size:15px">No stops on Day ${dayNumber}</h4>
        <p style="margin:0;font-size:12px;color:var(--secondary)">Tap below to add attractions or dining spots.</p>
      </div>
      <button class="add-stop-btn" data-action="open-add-place" data-day="${dayNumber}">
        ${icon('plus', 16)} <span>Add Place / Restaurant</span>
      </button>
    `;
  }

  const routes = dayData.routes || [];

  const html = stops.map((place, i) => {
    const origin = i ? stops[i - 1] : { name: `${trip.city} Center`, lat: trip.lat || 13.7563, lng: trip.lng || 100.5018 };
    const key = `day-${dayNumber}-${i}`;
    const mode = state.routeModes[key] || (routes[i - 1]?.mode === 'walking' ? 'walk' : (routes[i - 1]?.mode === 'transit' ? 'transit' : 'drive'));

    const apiRoute = routes[i - 1];
    const estimate = apiRoute ? {
      distance: parseFloat(apiRoute.distance) || 1.5,
      minutes: parseInt(apiRoute.duration) || 12
    } : routeEstimate(origin, place, mode);

    const distanceStr = apiRoute ? apiRoute.distance : `${estimate.distance.toFixed(1)} km`;
    const durationStr = apiRoute ? apiRoute.duration : `${estimate.minutes} mins`;
    const modeName = mode === 'walk' ? 'Walk' : mode === 'transit' ? 'Bus' : 'Car';
    const modeIcon = mode === 'walk' ? 'figure.walk' : mode === 'transit' ? 'bus.fill' : 'car.fill';
    const expanded = state.routeExpandedKey === key;

    // Badge styling matching Image 1: pink for bus, blue for car, orange for walk
    const badgeClass = mode === 'transit' ? 'mode-pill-bus' : (mode === 'drive' ? 'mode-pill-car' : 'mode-pill-walk');

    // Category tag matching Image 1: Things to do, Food, Hotels
    let catTag = '';
    const catLower = (place.category || '').toLowerCase();
    if (catLower.includes('food') || catLower.includes('dining') || catLower.includes('restaurant')) {
      catTag = `<span class="itinerary-cat-tag food">${icon('fork.knife', 12)} Food</span>`;
    } else if (catLower.includes('hotel') || catLower.includes('stay') || catLower.includes('accommodation')) {
      catTag = `<span class="itinerary-cat-tag hotel">${icon('bed.double.fill', 12)} Hotels</span>`;
    } else {
      catTag = `<span class="itinerary-cat-tag things">${icon('sparkles', 12)} Things to do</span>`;
    }

    const modes = ['walk', 'transit', 'drive'].map(m => {
      const est = routeEstimate(origin, place, m);
      return `<button class="route-choice ${m === mode ? 'active' : ''}" data-action="route-mode" data-key="${key}" data-mode="${m}">
        <span>${icon({ walk: 'figure.walk', transit: 'bus.fill', drive: 'car.fill' }[m], 13)} ${({ walk: 'Walk', transit: 'Bus', drive: 'Car' }[m])}</span>
        <small>${est.minutes}m · ${est.distance.toFixed(1)}km</small>
      </button>`;
    }).join('');

    const routeLegHtml = (i < stops.length - 1) ? `
      <div class="itinerary-route-leg">
        <button class="route-summary-pill ${badgeClass}" data-action="route-expand" data-key="${key}">
          ${icon(modeIcon, 14)} <span>${modeName} ${durationStr} · ${distanceStr}</span> <span class="badge-chev">⌵</span>
        </button>
        <button class="route-circle-map-btn" data-action="route-map" data-origin="${escapeHtml(origin.name)}" data-destination="${escapeHtml(place.name)}" data-origin-lat="${origin.lat}" data-origin-lng="${origin.lng}" data-dest-lat="${place.lat}" data-dest-lng="${place.lng}" data-mode="${mode}" data-distance="${distanceStr}" data-duration="${durationStr}" aria-label="Show route on map">
          ${icon('map.fill', 16)}
        </button>
        ${expanded ? `<div class="route-choices">${modes}</div>` : ''}
      </div>
    ` : '';

    return `
      <div class="itinerary-stop-row">
        <span class="itinerary-time">${place.time}</span>
        <div class="itinerary-card-wrap">
          <button class="itinerary-card" data-action="place-detail" data-id="${escapeHtml(place.name)}">
            <img class="itinerary-card-img" src="${place.image}" alt="${escapeHtml(place.name)}"/>
            <div class="itinerary-card-info">
              <strong class="itinerary-card-title">${escapeHtml(place.name)}</strong>
              <p class="itinerary-card-sub">${escapeHtml(place.subtitle)}</p>
              ${catTag}
            </div>
          </button>
          <button class="itinerary-delete-btn" data-action="delete-stop" data-day="${dayNumber}" data-name="${escapeHtml(place.name)}" title="Remove stop" aria-label="Remove stop">
            ${icon('trash', 14)}
          </button>
        </div>
      </div>
      ${routeLegHtml}
    `;
  }).join('');

  return html + `
    <button class="add-stop-btn" data-action="open-add-place" data-day="${dayNumber}">
      ${icon('plus', 16)} <span>Add Place / Restaurant to Day ${dayNumber}</span>
    </button>
    <p class="itinerary-footer-note">Times and distances are approximate.</p>
  `;
}

function tripModal() {
  const trip = state.trips.find(t => t.id === state.modal.id) || selectedTrip();
  if (!trip) return '';

  window._initTripMap = function(id, stops, trip) {
    drawLocalMap(id, stops, trip.lat, trip.lng);
  };
  const days = dateDayCount(trip.start, trip.end);
  const isOneDay = days <= 1;
  const isDay = state.selectedDay != null;
  const title = `${days === 1 ? '1' : days} Days in ${trip.city}`;
  const booking = state.bookings.find(b => b.tripId === trip.id);
  const totalSpots = (trip.dailyItinerary || []).reduce((acc, d) => acc + (d.attractions?.length || 0) + (d.restaurants?.length || 0), 0) || (days * 3);

  let content = '';
  if (isDay) {
    const d = state.selectedDay;
    const dayData = trip.dailyItinerary?.[d - 1] || trip.dailyItinerary?.[0];
    const dayDateISO = trip.start
      ? new Date(new Date(`${trip.start}T00:00:00`).getTime() + (d - 1) * 86400000).toISOString().split('T')[0]
      : '';
    const dayDateStr = dayDateISO ? formatBEDate(dayDateISO, true) : `Day ${d}`;
    const dayStops = getDayStops(dayData, trip);

    content = `
      <div class="day-section-head">
        <div>
          <h2 class="day-section-title">Day ${d} in ${escapeHtml(trip.city)}</h2>
          <p class="day-section-date">${dayDateStr}</p>
        </div>
        <span class="day-spots-badge">${icon('location.fill', 13)} ${dayStops.length} spots</span>
      </div>

      <button class="view-day-route-btn" data-action="open-day-map" data-day="${d}" aria-label="View Day ${d} Route Map">
        ${icon('map', 15)} <span>View Day ${d} Route Map</span>
      </button>

      ${renderDayStops(d, dayData, trip)}
    `;
  } else {
    content = `
      <div class="overview-card">
        <h3>${icon('bed.double.fill', 17)} Hotel</h3>
        ${isOneDay ? `
          <p class="modal-copy">No overnight stay needed for a 1-day trip.</p>
        ` : `
          ${booking ? `
            <p class="modal-copy">${escapeHtml(booking.name)} · ${booking.nights} night${booking.nights === 1 ? '' : 's'}<br>${currencyFormat(booking.price * booking.nights, trip.currency || 'THB')}</p>
          ` : `
            <p class="modal-copy">No hotel confirmed yet.</p>
          `}
          <button class="secondary-button" style="min-height:42px;margin-top:10px" data-action="book-from-trip">
            ${icon('bed.double')} ${booking ? 'Change hotel' : 'Book hotel'}
          </button>
        `}
      </div>
      <div id="trip-overview-map" style="width:100%;height:220px;border-radius:18px;overflow:hidden;background:#e9f0e8;box-shadow:0 3px 12px rgba(20,40,70,0.06);"></div>
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <h3 style="margin:0;font-size:19px">Your Itinerary</h3>
          <p class="section-subtitle">Tap any day to see scheduled stops and turn-by-turn routes.</p>
        </div>
        ${icon('map.fill', 22)}
      </div>
      ${Array.from({ length: days }, (_, i) => {
        const dayData = trip.dailyItinerary?.[i];
        const dayStops = getDayStops(dayData, trip);
        const dayDateISO = trip.start
          ? new Date(new Date(`${trip.start}T00:00:00`).getTime() + i * 86400000).toISOString().split('T')[0]
          : '';
        const dayDate = dayDateISO ? formatBEDate(dayDateISO) : `${dayStops.length || 3} places to explore`;

        return `
          <button class="day-card" data-action="trip-day" data-day="${i + 1}">
            <span class="day-number" style="background:${['#d99a32', '#1a66d1', '#d96d9d', '#5e9a78', '#8877c7'][i % 5]}">Day ${i + 1}</span>
            <span class="day-copy">
              <strong>${escapeHtml(dayData?.summary?.slice(0, 48) || `Explore ${trip.city}`)}…</strong>
              <small>${dayDate}</small>
            </span>
            <span class="distance" style="display:inline-flex;align-items:center;gap:4px">${icon('location.fill', 11)} ${dayStops.length || 4} spots</span>
          </button>
        `;
      }).join('')}
    `;
  }

  return `<div class="modal-backdrop"><section class="modal full trip-detail-modal">
    <div class="trip-modal-top-bar">
      <div class="sheet-handle"></div>
      <div class="trip-modal-nav">
        <button class="trip-close-btn" data-action="close-modal" aria-label="Close modal">${icon('xmark', 16)}</button>
        <h2 class="trip-modal-title">My Trip</h2>
        <button class="trip-share-btn" data-action="share-trip" aria-label="Share trip">${icon('share', 18)}</button>
      </div>
    </div>
    <div class="modal-body stack" style="padding-top:10px">
      <div class="trip-hero-banner">
        <img class="trip-hero-thumb" src="${trip.image || CITIES.find(c => c.name === trip.city)?.image || DEFAULT_PLACES[0].image}" alt="${escapeHtml(trip.city)}"/>
        <div class="trip-hero-copy">
          <h3 class="trip-hero-title">${title}</h3>
          <p class="trip-hero-subtitle">${days} days · ${totalSpots} spots</p>
          <p class="trip-hero-date">${tripDateLabel(trip)}</p>
        </div>
      </div>
      <div class="day-pills-row" data-scroller="horizontal">
        <button class="day-pill-tab ${!isDay ? 'active' : ''}" data-action="trip-day" data-day="overview">${icon('map', 13)} Overview</button>
        ${Array.from({ length: days }, (_, i) => `
          <button class="day-pill-tab ${state.selectedDay === i + 1 ? 'active' : ''}" data-action="trip-day" data-day="${i + 1}">Day ${i + 1}</button>
        `).join('')}
      </div>
      ${content}
    </div>
  </section></div>`;
}

function addPlaceModal() {
  const trip = state.trips.find(t => t.id === (state.modal?.tripId || state.selectedTrip)) || selectedTrip();
  if (!trip) return '';
  const day = state.modal?.day || state.selectedDay || 1;
  const currentTab = state.modal?.tab || 'attractions';
  const query = (state.modal?.query || '').trim().toLowerCase();

  const allPlaces = getTripPlaces(trip);
  const baseAttractions = allPlaces.filter(p => p.category !== 'Food' && p.category !== 'Hotels' && p.category !== 'Hotel');
  const baseFood = allPlaces.filter(p => p.category === 'Food');

  const extraAttractions = (state.extraAddAttractions || []).filter(ea => !baseAttractions.some(ba => ba.name.trim().toLowerCase() === ea.name.trim().toLowerCase()));
  const extraFood = (state.extraAddRestaurants || []).filter(ef => !baseFood.some(bf => bf.name.trim().toLowerCase() === ef.name.trim().toLowerCase()));

  const targetList = currentTab === 'food' ? [...baseFood, ...extraFood] : [...baseAttractions, ...extraAttractions];
  const filteredList = query
    ? targetList.filter(p => (p.name || '').toLowerCase().includes(query) || (p.subtitle || '').toLowerCase().includes(query))
    : targetList;

  const dayData = trip.dailyItinerary?.[day - 1];
  const existingStops = getDayStops(dayData, trip).map(s => s.name.trim().toLowerCase());

  const listHtml = filteredList.map(p => {
    const isAdded = existingStops.includes((p.name || '').trim().toLowerCase());
    return `
      <article class="place-add-row">
        <img src="${p.imageUrl || p.image || DEFAULT_PLACES[0].image}" alt="${escapeHtml(p.name)}"/>
        <div class="place-add-info">
          <strong>${escapeHtml(p.name)}</strong>
          <small>${escapeHtml(p.subtitle || p.category || '')}</small>
          <span>${icon('star.fill', 11)} ${p.rating || '4.8'}</span>
        </div>
        ${isAdded ? `
          <button class="place-add-action-btn" style="background:#eaf2fd;color:#1a66d1;cursor:default" disabled>Added</button>
        ` : `
          <button class="place-add-action-btn" data-action="confirm-add-place" data-day="${day}" data-id="${escapeHtml(p.id || p.name)}" data-name="${escapeHtml(p.name)}" data-type="${currentTab}">
            Add
          </button>
        `}
      </article>
    `;
  }).join('');

  return `<div class="modal-backdrop"><section class="modal full add-place-modal">
    <div class="trip-modal-top-bar">
      <div class="sheet-handle"></div>
      <div class="trip-modal-nav">
        <button class="trip-close-btn" data-action="close-modal" aria-label="Close modal">${icon('xmark', 16)}</button>
        <h2 class="trip-modal-title">Add to Day ${day}</h2>
        <div style="width:36px"></div>
      </div>
    </div>
    <div class="modal-body stack" style="padding-top:10px">
      <!-- 2 Tabs: Attractions & Food (English) -->
      <div class="segmented" style="margin-bottom:8px">
        <button class="segment-button ${currentTab === 'attractions' ? 'active' : ''}" data-action="add-place-tab" data-tab="attractions">
          ${icon('sparkles', 13)} Attractions
        </button>
        <button class="segment-button ${currentTab === 'food' ? 'active' : ''}" data-action="add-place-tab" data-tab="food">
          ${icon('fork.knife', 13)} Restaurants
        </button>
      </div>

      <!-- Search box with beautiful modern font -->
      <div class="search-box" style="height:46px;background:white;margin-bottom:4px">
        ${icon('magnifyingglass', 15)}
        <input type="text" placeholder="Search ${currentTab === 'food' ? 'restaurants or food' : 'attractions or spots'} in English..." value="${escapeHtml(state.modal?.query || '')}" data-field="add-place-search"/>
      </div>

      <!-- Places List -->
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:6px">
        ${listHtml || `<div class="card empty-card" style="text-align:center;padding:24px"><p>No ${currentTab === 'food' ? 'restaurants' : 'attractions'} found matching "${escapeHtml(query)}".</p></div>`}
      </div>

      <!-- Load More Places in English Button -->
      <button class="outline-button" data-action="load-more-add-places" style="margin:10px auto 4px;display:flex;align-items:center;justify-content:center;width:100%;min-height:46px;padding:10px;border-radius:14px;font-weight:650;font-size:13px">
        ${state.loadingAddPlaces
          ? '<span class="spinner" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:6px"></span> Loading places in English...'
          : (currentTab === 'food' ? '🔍 Load More Restaurants' : '🔍 Load More Attractions')}
      </button>

      <button class="secondary-button" data-action="close-modal" style="margin-top:10px">
        Done Adding Places
      </button>
    </div>
  </section></div>`;
}

function dayMapModal() {
  const trip = state.trips.find(t => t.id === (state.modal?.tripId || state.modal?.id || state.selectedTrip)) || selectedTrip();
  if (!trip) return '';
  const day = state.modal?.day || state.selectedDay || 1;
  const dayData = trip.dailyItinerary?.[day - 1] || trip.dailyItinerary?.[0];
  const dayStops = getDayStops(dayData, trip);
  const dayDateISO = trip.start
    ? new Date(new Date(`${trip.start}T00:00:00`).getTime() + (day - 1) * 86400000).toISOString().split('T')[0]
    : '';
  const dayDateStr = dayDateISO ? formatBEDate(dayDateISO, true) : `Day ${day}`;

  return `<div class="modal-backdrop"><section class="modal full day-route-modal">
    <div class="trip-modal-top-bar">
      <div class="sheet-handle"></div>
      <div class="trip-modal-nav">
        <button class="trip-close-btn" data-action="close-modal" aria-label="Close modal">${icon('xmark', 16)}</button>
        <h2 class="trip-modal-title">Day ${day} Route Map</h2>
        <div style="width:36px"></div>
      </div>
    </div>
    <div class="modal-body stack" style="padding-top:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0 2px">
        <div>
          <h3 style="margin:0;font-size:18px;font-weight:750;color:#142945">Day ${day} in ${escapeHtml(trip.city)}</h3>
          <p style="margin:3px 0 0;color:#78899f;font-size:12px">${dayDateStr}</p>
        </div>
        <span class="day-spots-badge">${icon('location.fill', 13)} ${dayStops.length} spots</span>
      </div>

      <div id="day-route-popup-map" style="width:100%;height:340px;border-radius:20px;overflow:hidden;background:#e9f0e8;box-shadow:0 4px 16px rgba(20,40,70,0.1);border:1px solid #dce8f6;flex:none"></div>

      <div class="card" style="padding:14px 16px">
        <h4 style="margin:0 0 12px;font-size:14px;color:#142945;font-weight:750">Scheduled Stops</h4>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${dayStops.map((stop, i) => `
            <div style="display:flex;align-items:center;gap:12px">
              <span style="width:26px;height:26px;border-radius:50%;background:#1a66d1;color:white;display:grid;place-items:center;font-size:11px;font-weight:750;flex:none">${i + 1}</span>
              <div style="flex:1;min-width:0">
                <strong style="font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#142945">${escapeHtml(stop.name)}</strong>
                <small style="color:#78899f;font-size:11.5px">${escapeHtml(stop.category || '')} · ${stop.time || ''}</small>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <button class="secondary-button" data-action="close-modal" style="margin-top:4px">
        Back to Day ${day} Itinerary
      </button>
    </div>
  </section></div>`;
}

function routeMapModal() {
  const r = state.modal;
  const minLng = Math.min(r.originLng, r.destLng) - .008, maxLng = Math.max(r.originLng, r.destLng) + .008;
  const minLat = Math.min(r.originLat, r.destLat) - .008, maxLat = Math.max(r.originLat, r.destLat) + .008;
  const bbox = `${minLng.toFixed(4)}%2C${minLat.toFixed(4)}%2C${maxLng.toFixed(4)}%2C${maxLat.toFixed(4)}`;
  const mode = r.mode || 'walk', modeName = { walk: 'Walk', transit: 'Transit', drive: 'Drive' }[mode] || 'Walk';

  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Route Details')}
    <div class="modal-body stack">
      <div class="route-points">
        <div class="route-point"><span class="route-dot"></span><span><strong>${escapeHtml(r.origin)}</strong><small>Start point</small></span></div>
        <i></i>
        <div class="route-point"><span class="route-dot end"></span><span><strong>${escapeHtml(r.destination)}</strong><small>Destination</small></span></div>
      </div>
      <div class="route-summary large">
        ${icon({ walk: 'figure.walk', transit: 'bus.fill', drive: 'car.fill' }[mode] || 'figure.walk', 16)} ${modeName} ${r.duration || '12 mins'} · ${r.distance || '1.2 km'}
      </div>
      <div class="modal-map">
        <iframe class="map-embed" title="Route map" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${r.destLat}%2C${r.destLng}"></iframe>
      </div>
      <button class="primary-button" data-action="open-google-route" data-origin-lat="${r.originLat}" data-origin-lng="${r.originLng}" data-dest-lat="${r.destLat}" data-dest-lng="${r.destLng}" data-mode="${mode}">
        ${icon('arrow.up.right')} Open in Google Maps
      </button>
      <small class="muted">Travel times and distances are estimates · © OpenStreetMap</small>
    </div>
  </section></div>`;
}

function duplicateModal() {
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack"><h2 style="margin:2px 0;font-size:21px">Add another item?</h2><p class="modal-copy">A product with this price is already in your cart. Add 1 to its quantity or keep it separate.</p><button class="primary-button" data-action="duplicate-quantity">Add 1 to existing item</button><button class="secondary-button" data-action="duplicate-separate">Keep as separate item</button><button class="danger-button" data-action="close-modal">Cancel</button></div></section></div>`;
}

function deleteTripModal() {
  const trip = state.trips.find(t => t.id === state.modal.id); if (!trip) return '';
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack"><h2 style="margin:0;font-size:24px">Remove this trip?</h2><div class="card empty-card"><strong>${dateDayCount(trip.start, trip.end)} Days in ${escapeHtml(trip.city)}</strong><p>${tripDateLabel(trip)}</p></div><p class="modal-copy">Bookings for this trip will also be removed.</p><button class="danger-button" style="height:46px;border-radius:99px;background:#fff0ef" data-action="confirm-delete-trip">Delete trip</button><button class="secondary-button" data-action="close-modal">Cancel</button></div></section></div>`;
}

function tripOptionsModal() {
  const trip = state.trips.find(t => t.id === state.modal.id); if (!trip) return '';
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack"><h2 style="margin:0;font-size:20px">Trip options</h2><div class="card empty-card"><strong>${dateDayCount(trip.start, trip.end)} Days in ${escapeHtml(trip.city)}</strong><p>${tripDateLabel(trip)}</p></div><button class="secondary-button" data-action="duplicate-trip">${icon('plus', 16)} Duplicate</button><button class="danger-button" style="min-height:44px;border-radius:99px;background:#fff0ef" data-action="delete-trip">${icon('xmark', 14)} Delete</button><button class="secondary-button" data-action="close-modal">Cancel</button></div></section></div>`;
}

function editCartModal() {
  const item = state.cart.find(x => x.id === state.modal.id); if (!item) return '';
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Edit item')}<div class="modal-body stack"><div class="form-group"><label>Item name</label><input data-field="edit-name" value="${escapeHtml(item.name)}"/></div><div class="form-group"><label>Unit price (${item.currency})</label><input type="number" min="0.01" step="0.01" data-field="edit-price" value="${item.price}"/></div><div class="form-group"><label>Quantity</label><input type="number" min="1" step="1" data-field="edit-quantity" value="${item.quantity}"/></div><div class="card empty-card">Currency: ${item.currency}<br>Line total: ${currencyFormat(item.price*item.quantity,item.currency,2)}</div><button class="primary-button" data-action="save-cart-edit">Save</button></div></section></div>`;
}

function modalView() {
  if (state.isPlanning) return planningModal();
  if (!state.modal) return '';
  switch (state.modal.type) {
    case 'createTrip': return createTripModal();
    case 'settings': return settingsModal();
    case 'history': return historyModal();
    case 'cart': return cartModal();
    case 'keypad': return keypadModal();
    case 'hotel': return hotelModal();
    case 'place': return placeModal();
    case 'trip': return tripModal();
    case 'addPlace': return addPlaceModal();
    case 'dayMap': return dayMapModal();
    case 'routeMap': return routeMapModal();
    case 'duplicate': return duplicateModal();
    case 'deleteTrip': return deleteTripModal();
    case 'tripOptions': return tripOptionsModal();
    case 'editCart': return editCartModal();
    case 'priceFilter': return priceFilterModal();
    default: return '';
  }
}

function priceFilterModal() {
  const trip = selectedTrip() || { currency: 'THB' };
  const curSymbol = trip.currency || 'THB';
  const currentMin = state.hotelCustomMin !== null && state.hotelCustomMin !== undefined ? state.hotelCustomMin : '';
  const currentMax = state.hotelCustomMax !== null && state.hotelCustomMax !== undefined ? state.hotelCustomMax : '';

  return `
    <div class="modal-backdrop">
      <section class="modal" style="border-radius:28px 28px 0 0;max-height:85vh">
        <div class="sheet-handle" style="margin-top:10px"></div>
        <div class="modal-head" style="padding:14px 20px 8px">
          <button data-action="close-modal" style="font-weight:600;color:#64748b">Cancel</button>
          <h2 style="font-size:18px;font-weight:750">Filter by Price Range</h2>
          <button data-action="reset-hotel-price-filter" style="font-weight:700;color:#ef4444;font-size:13px">Reset</button>
        </div>
        <div class="modal-body stack" style="padding:16px 20px 28px">
          <p style="margin:0 0 14px;font-size:13px;color:#64748b;line-height:1.45">
            Enter your preferred minimum and maximum price per night (${curSymbol}) to filter accommodations.
          </p>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
            <div class="form-group">
              <label style="font-size:12px;font-weight:700;color:#334155;display:flex;align-items:center;gap:4px">
                Min Price (${curSymbol})
              </label>
              <div style="position:relative">
                <input id="custom-min-price-input" type="number" min="0" step="100" placeholder="e.g. 500" value="${currentMin}"
                  style="width:100%;height:48px;padding:0 12px;font-size:16px;font-weight:700;border:1.5px solid #cbd5e1;border-radius:14px;background:#f8fafc" />
              </div>
            </div>

            <div class="form-group">
              <label style="font-size:12px;font-weight:700;color:#334155;display:flex;align-items:center;gap:4px">
                Max Price (${curSymbol})
              </label>
              <div style="position:relative">
                <input id="custom-max-price-input" type="number" min="0" step="100" placeholder="e.g. 3500" value="${currentMax}"
                  style="width:100%;height:48px;padding:0 12px;font-size:16px;font-weight:700;border:1.5px solid #cbd5e1;border-radius:14px;background:#f8fafc" />
              </div>
            </div>
          </div>

          <!-- Quick presets -->
          <label style="font-size:11.5px;font-weight:700;color:#64748b;margin-bottom:6px;display:block">Quick Presets:</label>
          <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:20px">
            <button type="button" class="quick-chip-btn" data-action="set-price-preset" data-min="0" data-max="1000" style="padding:6px 12px;border-radius:99px;border:1px solid #cbd5e1;background:#f1f5f9;font-size:12px;font-weight:650;color:#334155">
              Under 1,000
            </button>
            <button type="button" class="quick-chip-btn" data-action="set-price-preset" data-min="1000" data-max="2500" style="padding:6px 12px;border-radius:99px;border:1px solid #cbd5e1;background:#f1f5f9;font-size:12px;font-weight:650;color:#334155">
              1,000 - 2,500
            </button>
            <button type="button" class="quick-chip-btn" data-action="set-price-preset" data-min="2500" data-max="5000" style="padding:6px 12px;border-radius:99px;border:1px solid #cbd5e1;background:#f1f5f9;font-size:12px;font-weight:650;color:#334155">
              2,500 - 5,000
            </button>
            <button type="button" class="quick-chip-btn" data-action="set-price-preset" data-min="5000" data-max="999999" style="padding:6px 12px;border-radius:99px;border:1px solid #cbd5e1;background:#f1f5f9;font-size:12px;font-weight:650;color:#334155">
              5,000+
            </button>
          </div>

          <button class="primary-button" data-action="apply-hotel-price-filter" style="min-height:50px;border-radius:16px;font-size:15px;font-weight:750">
            Apply Filter
          </button>
        </div>
      </section>
    </div>
  `;
}

function openComposer() {
  state.composer = {
    step: 'where',
    query: '',
    city: 'Bangkok',
    country: 'Thailand',
    lat: 13.7563,
    lng: 100.5018,
    start: new Date().toISOString().slice(0, 10),
    end: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 10),
    budget: 2,
    prefs: ['Landmarks', 'Food & Dining']
  };
  state.modal = { type: 'createTrip' };
  render();
}

function openScan() {
  state.modal = null;
  scanImageData = null;
  state.scan = { active: true, step: 'price', price: 0, tendered: 0, received: 0, product: 'Scanned item', priceCard: false, tenderedCard: false, coinCard: false, isCartCheckout: false, message: '', ocrRunning: false, ocrProgress: 0, currentFavorite: false };
  state.cameraError = '';
  render();
  requestCamera();
  fetchRate();
}

async function requestCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    state.cameraError = 'Camera preview needs HTTPS or localhost. You can upload an image or enter the amount.';
    render(); return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
    if (!state.scan.active) { stream.getTracks().forEach(track => track.stop()); return; }
    mediaStream = stream;
    state.cameraError = '';
    render();
  } catch (error) {
    mediaStream = null;
    state.cameraError = error?.name === 'NotAllowedError' ? 'Camera access is denied. Allow camera permissions or upload a receipt photo.' : 'The camera is unavailable. Upload a photo or enter amount manually.';
    render();
  }
}

function closeScan() {
  if (mediaStream) { mediaStream.getTracks().forEach(track => track.stop()); mediaStream = null; }
  scanImageData = null;
  state.scan.active = false;
  state.modal = null;
  render();
}

function pickImage() { document.getElementById('camera-file')?.click(); }

async function captureAmount() {
  if (!mediaStream) { pickImage(); return; }
  const video = document.getElementById('camera-preview');
  if (!video || !video.videoWidth) { pickImage(); return; }
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth; canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.toBlob(blob => { if (blob) performOCR(blob); else toast('Could not capture image.'); }, 'image/jpeg', .92);
}

async function compressedImageData(blob) {
  try {
    const bitmap = await createImageBitmap(blob);
    const scale = Math.min(1, 1024 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale); canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    return canvas.toDataURL('image/jpeg', .72);
  } catch {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('Could not save scan image.'));
      reader.readAsDataURL(blob);
    });
  }
}

function parseAmount(data) {
  const lines = data?.lines || [];
  const width = data?.image?.width || 1, height = data?.image?.height || 1;
  const candidates = [];
  for (const line of lines) {
    const text = String(line.text || '').replace(/,/g, '');
    const box = line.bbox || { x0: width / 2, y0: height / 2, x1: width / 2, y1: height / 2 };
    const distance = Math.hypot(((box.x0 + box.x1) / 2) / width - .5, ((box.y0 + box.y1) / 2) / height - .5);
    for (const match of text.matchAll(/\d+(?:\.\d{1,2})?/g)) {
      const amount = Number(match[0]);
      if (amount > 0) candidates.push({ amount, score: (Number(line.confidence) || 0) - distance * 20 });
    }
  }
  if (!candidates.length) {
    for (const match of String(data?.text || '').replace(/,/g, '').matchAll(/\d+(?:\.\d{1,2})?/g)) {
      const amount = Number(match[0]); if (amount > 0) candidates.push({ amount, score: 0 });
    }
  }
  candidates.sort((a, b) => b.score - a.score);
  return candidates[0]?.amount ?? null;
}

async function performOCR(image) {
  state.scan.ocrRunning = true; state.scan.ocrProgress = 0; state.scan.message = '';
  render();

  try {
    const recognizedImageData = await compressedImageData(image);

    let detectedAmount = null;
    let detectedProduct = '';
    // 2. Second attempt / Fallback: Client-side Tesseract OCR
    if (!detectedAmount) {
      if (window.Tesseract?.createWorker) {
        if (!ocrWorker) {
          ocrWorker = await window.Tesseract.createWorker('eng', 1, {
            logger: progress => {
              if (progress.status === 'recognizing text') {
                state.scan.ocrProgress = Math.round((progress.progress || 0) * 100);
                render();
              }
            },
          });
        }
        const result = await ocrWorker.recognize(image);
        detectedAmount = parseAmount(result.data);
      }
    }

    if (!detectedAmount) {
      if (state.scan.step === 'price') scanImageData = null;
      state.scan.ocrRunning = false;
      state.scan.message = 'No price found. Try again or enter amount manually.';
      render();
      setTimeout(() => { if (state.scan.active) { state.scan.message = ''; render(); } }, 2600);
      return;
    }

    if (state.scan.step === 'price') {
      scanImageData = recognizedImageData;
      if (detectedProduct && (!state.scan.product || state.scan.product === 'Scanned item')) {
        state.scan.product = detectedProduct;
      }
    }

    state.scan.ocrRunning = false;

    acceptAmount(detectedAmount);

  } catch (error) {
    if (state.scan.step === 'price') scanImageData = null;
    state.scan.ocrRunning = false;
    state.scan.message = error?.message || 'Could not read amount. Try again or enter manually.';
    render();
    setTimeout(() => { if (state.scan.active) { state.scan.message = ''; render(); } }, 2800);
  }
}

async function speakPriceTTS(price, originalCurrency, convertedPrice, targetCurrency) {
  if (state.speechEnabled === false) return;
  try {
    const origCurrObj = CURRENCIES.find(c => c[0] === originalCurrency) || [originalCurrency, originalCurrency];
    const targetCurrObj = CURRENCIES.find(c => c[0] === targetCurrency) || [targetCurrency, targetCurrency];

    const origName = origCurrObj[1] || originalCurrency;
    const targetName = targetCurrObj[1] || targetCurrency;

    // Natural speech phrase
    let speechText = '';
    if (convertedPrice && convertedPrice > 0 && originalCurrency !== targetCurrency) {
      speechText = `The price is ${price} ${origName}, which is approximately ${convertedPrice.toFixed(2)} ${targetName}.`;
    } else {
      speechText = `The price is ${price} ${origName}.`;
    }

    // 2. Fallback: Browser Web Speech API
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  } catch (err) {
    console.warn('Text-to-speech error:', err);
  }
}

function acceptAmount(amount) {
  const value = Number(amount);
  if (!(value > 0)) { state.scan.message = 'Enter an amount greater than zero.'; render(); return; }
  if (state.scan.step === 'price') {
    state.scan.price = value; state.scan.priceCard = true;
    state.scan.currentFavorite = state.favorites.some(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - value) < .001);

    // Speak out price and converted amount using ElevenLabs TTS
    const converted = (state.conversionRate && !state.rateUnavailable) ? (value * state.conversionRate) : 0;
    speakPriceTTS(value, state.priceCurrency, converted, state.changeCurrency);
  } else if (state.scan.step === 'tendered') {
    state.scan.tendered = value; state.scan.tenderedCard = true;
  } else { state.scan.received = value; state.scan.coinCard = true; }
  state.scan.message = '';
  render();
}

function openKeypad(target) {
  let current = target === 'price' ? state.scan.price : target === 'tendered' ? state.scan.tendered : state.scan.received;
  state.modal = { type: 'keypad', target, value: current ? String(current) : '' };
  render();
}

function confirmKeypad() {
  const target = state.modal.target, amount = Number(state.modal.value);
  if (!Number.isFinite(amount) || state.modal.value === '') { toast('Enter a valid amount.'); return; }
  if (target === 'price' && amount <= 0) { toast('Price must be greater than zero.'); return; }
  if (target === 'tendered' && amount <= 0) { toast('Amount paid must be greater than zero.'); return; }
  if (target === 'price') { state.scan.price = amount; state.scan.priceCard = true; state.scan.currentFavorite = state.favorites.some(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - amount) < .001); }
  if (target === 'tendered') { state.scan.tendered = amount; state.scan.tenderedCard = true; }
  if (target === 'coins') { state.scan.received = amount; state.scan.coinCard = amount > 0; state.modal = null; completeChangeFlow(); return; }
  state.modal = null; render();
}

function toggleFavorite() {
  const index = state.favorites.findIndex(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - state.scan.price) < .001);
  if (index >= 0) { state.favorites.splice(index, 1); state.scan.currentFavorite = false; }
  else { state.favorites.unshift({ id: uid(), price: state.scan.price, priceCurrency: state.priceCurrency, date: new Date().toISOString() }); state.scan.currentFavorite = true; }
  persist('favorites', state.favorites); render();
}

function addCurrentToCart(forceSeparate = false) {
  const match = state.cart.find(item => item.currency === state.priceCurrency && Math.abs(item.price - state.scan.price) < .001);
  if (match && !forceSeparate) { state.modal = { type: 'duplicate' }; render(); return; }
  const next = Math.max(0, ...state.cart.map(item => Number(String(item.name).match(/item\s+(\d+)/i)?.[1]) || 0)) + 1;
  state.cart.push({ id: uid(), name: `item ${next}`, price: state.scan.price, quantity: 1, currency: state.priceCurrency, image: scanImageData });
  state.modal = null; saveState(); render();
}

function completeChangeFlow() {
  const expected = Math.max(0, state.scan.tendered - state.scan.price);
  const received = state.scan.received;
  const products = state.scan.isCartCheckout
    ? state.cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity, currency: item.currency, image: item.image || null }))
    : [{ name: state.scan.product.trim() || 'Scanned item', price: state.scan.price, quantity: 1, currency: state.priceCurrency, image: scanImageData }];
  const entry = {
    id: uid(), date: new Date().toISOString(), price: state.scan.price,
    converted: state.rateUnavailable || state.rateLoading ? null : state.scan.price * state.conversionRate,
    paid: state.scan.tendered, expected, received,
    priceCurrency: state.priceCurrency, changeCurrency: state.changeCurrency,
    verified: Math.abs(received - expected) < .01, products,
    tripId: selectedTrip()?.id || null,
  };
  state.history.unshift(entry);
  if (state.scan.isCartCheckout) state.cart = [];
  scanImageData = null;
  state.scan = { active: true, step: 'price', price: 0, tendered: 0, received: 0, product: 'Scanned item', priceCard: false, tenderedCard: false, coinCard: false, isCartCheckout: false, message: 'Saved to History', ocrRunning: false, ocrProgress: 0, currentFavorite: false };
  saveState(); render();
  setTimeout(() => { if (state.scan.active && state.scan.message === 'Saved to History') { state.scan.message = ''; render(); } }, 2500);
}

function checkoutCart() {
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!(total > 0)) return;
  state.scan = { active: true, step: 'tendered', price: total, tendered: 0, received: 0, product: 'Scanned purchase', priceCard: false, tenderedCard: false, coinCard: false, isCartCheckout: true, message: '', ocrRunning: false, ocrProgress: 0, currentFavorite: false };
  state.modal = null; render();
}

function selectTrip(id) { state.selectedTrip = id; persist('selectedTrip', id); }


function buildLocalPlan(city, start, end, budget, preferences) {
  const key = city.name.toLowerCase().replace(/[^a-z]/g, '');
  const places = CITY_RECOMMENDATIONS[key] || [];
  if (!places.length) throw new Error('Choose one of the supported destinations to create a curated itinerary.');
  const attractions = places.filter(p => p.key === 'attraction');
  const food = places.filter(p => p.key === 'food');
  const converted = p => ({ ...p, latitude: p.lat, longitude: p.lng, imageUrl: p.image, address: p.subtitle, duration: '2 hours' });
  const days = dateDayCount(start, end);
  if (days > 30) throw new Error('Please choose a trip of 30 days or fewer.');
  const preferFood = preferences.includes('Food & Dining');
  return {
    summary: { destination: city.name, durationDays: days, budget: 'Illustrative local estimates', preferences },
    dailyItinerary: Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      attractions: attractions.length ? [0, 1].slice(0, attractions.length).map(n => converted(attractions[(i * 2 + n) % attractions.length])) : [],
      restaurants: food.length ? Array.from({length: preferFood ? Math.min(2, food.length) : 1}, (_, n) => converted(food[(i + n) % food.length])) : [],
      accommodations: []
    }))
  };
}

async function createTrip() {
  if (!state.composer.prefs.length) return;
  const start = state.composer.start || new Date().toISOString().slice(0, 10);
  const end = state.composer.end || start;
  const cityName = state.composer.city || 'Bangkok';
  const cityObj = CITIES.find(c => c.name.toLowerCase() === cityName.toLowerCase()) || {
    name: cityName,
    country: state.composer.country || 'Global',
    lat: state.composer.lat || 13.7563,
    lng: state.composer.lng || 100.5018,
    currency: 'USD',
    image: DEFAULT_PLACES[0].image
  };

  state.isPlanning = true;
  state.planProgress = `Generating travel plan for ${cityObj.name}...`;
  render();

  try {
    const plan = buildLocalPlan(cityObj, start, end, Number(state.composer.budget), state.composer.prefs);
    const days = dateDayCount(start, end);

    const trip = {
      id: uid(),
      city: cityObj.name,
      country: cityObj.country,
      start,
      end,
      budget: Number(state.composer.budget),
      prefs: [...state.composer.prefs],
      currency: cityObj.currency || 'USD',
      created: new Date().toISOString(),
      dailyItinerary: plan.dailyItinerary || [],
      summary: plan.summary || null,
      image: cityObj.image || DEFAULT_PLACES[0].image,
      lat: cityObj.lat,
      lng: cityObj.lng
    };

    // If multi-day and accommodations provided, save booking
    if (days > 1 && plan.dailyItinerary?.[0]?.accommodations?.length) {
      const hotel = plan.dailyItinerary[0].accommodations[0];
      const priceNum = parseInt(String(hotel.pricePerNight).replace(/[^0-9]/g, '')) || 2450;
      state.bookings = [
        {
          tripId: trip.id,
          hotelId: uid(),
          name: hotel.name,
          area: hotel.address || `${trip.city} Central`,
          price: priceNum,
          nights: days - 1,
          guests: 1,
          rating: hotel.rating || 4.7,
          image: hotel.imageUrl || DEFAULT_HOTELS[0].image,
          description: hotel.description || ''
        },
        ...state.bookings.filter(b => b.tripId !== trip.id)
      ];
    }

    state.trips.unshift(trip);
    state.selectedTrip = trip.id;
    state.tab = 'trip';
    state.selectedDay = 1;
    state.isPlanning = false;
    state.modal = { type: 'trip', id: trip.id };
    saveState();
    render();
    toast(`Plan for ${cityObj.name} ready!`);
  } catch (error) {
    console.error('Plan generation error:', error);
    state.isPlanning = false;
    toast(error.message || 'Error generating plan. Please try again.');
    render();
  }
}

function duplicateTrip(id) {
  const trip = state.trips.find(t => t.id === id); if (!trip) return;
  const copy = { ...trip, id: uid(), created: new Date().toISOString() };
  state.trips.unshift(copy); selectTrip(copy.id); state.modal = null; saveState(); render();
}

function removeTrip(id) {
  state.trips = state.trips.filter(t => t.id !== id);
  state.bookings = state.bookings.filter(b => b.tripId !== id);
  if (state.selectedTrip === id) state.selectedTrip = state.trips[0]?.id || null;
  state.modal = null; saveState(); render();
}

async function doAction(action, el) {
  const id = el.dataset.id;
  switch (action) {
    case 'tab':
      state.tab = el.dataset.tab;
      state.modal = null;
      if (state.tab === 'booking') {
        state.extraHotels = [];
        state.hotelsPage = 1;
        state.loadingMoreHotels = false;
        state.bookingBudgetFilter = null;
      }
      render();
      break;
    case 'select-booking-trip':
      selectTrip(el.dataset.id);
      state.extraHotels = [];
      state.hotelsPage = 1;
      state.loadingMoreHotels = false;
      state.bookingBudgetFilter = null;
      render();
      break;
    case 'toggle-hotel-price-sort':
      state.hotelSortOrder = state.hotelSortOrder === 'asc' ? 'desc' : 'asc';
      render();
      toast(state.hotelSortOrder === 'asc' ? 'Sorted: Lowest price first (Min → Max)' : 'Sorted: Highest price first (Max → Min)');
      break;
    case 'open-price-filter-sheet':
      state.modal = { type: 'priceFilter' };
      render();
      break;
    case 'set-price-preset': {
      const minVal = el.dataset.min;
      const maxVal = el.dataset.max;
      const minInput = document.getElementById('custom-min-price-input');
      const maxInput = document.getElementById('custom-max-price-input');
      if (minInput) minInput.value = minVal === '0' ? '' : minVal;
      if (maxInput) maxInput.value = maxVal === '999999' ? '' : maxVal;
      break;
    }
    case 'apply-hotel-price-filter': {
      const minInput = document.getElementById('custom-min-price-input');
      const maxInput = document.getElementById('custom-max-price-input');
      const minVal = minInput && minInput.value.trim() !== '' ? Number(minInput.value) : null;
      const maxVal = maxInput && maxInput.value.trim() !== '' ? Number(maxInput.value) : null;

      if (minVal !== null && maxVal !== null && minVal > maxVal) {
        toast('Min price cannot be greater than Max price');
        break;
      }

      state.hotelCustomMin = minVal;
      state.hotelCustomMax = maxVal;
      state.modal = null;
      render();
      toast('Price filter applied!');
      break;
    }
    case 'reset-hotel-price-filter':
      state.hotelCustomMin = null;
      state.hotelCustomMax = null;
      if (state.modal?.type === 'priceFilter') {
        const minInput = document.getElementById('custom-min-price-input');
        const maxInput = document.getElementById('custom-max-price-input');
        if (minInput) minInput.value = '';
        if (maxInput) maxInput.value = '';
      }
      state.modal = null;
      render();
      toast('Price filter reset');
      break;
    case 'new-trip': openComposer(); break;
    case 'settings': state.modal = { type: 'settings' }; render(); break;
    case 'start-scan': openScan(); break;
    case 'toggle-speech':
      state.speechEnabled = !state.speechEnabled;
      saveState();
      render();
      toast(state.speechEnabled ? 'Voice readout enabled 🔊' : 'Voice readout muted 🔇');
      break;
    case 'close-scan': closeScan(); break;
    case 'request-camera': requestCamera(); break;
    case 'pick-image': pickImage(); break;
    case 'capture':
      if (state.scan.step === 'price' && state.scan.priceCard) {
        state.scan.price = 0; state.scan.priceCard = false; state.scan.tendered = 0; state.scan.received = 0; scanImageData = null;
        state.scan.message = ''; render();
      } else captureAmount();
      break;
    case 'cart': state.modal = { type: 'cart' }; render(); break;
    case 'history': state.modal = { type: 'history' }; render(); break;
    case 'close-modal':
      if (state.parentModal) {
        state.modal = state.parentModal;
        state.parentModal = null;
      } else {
        state.modal = null;
        state.parentModal = null;
      }
      render(); break;
    case 'noop': break;
    case 'composer-step': state.composer.step = el.dataset.step; render(); break;
    case 'select-city': {
      state.composer.city = el.dataset.city;
      state.composer.country = el.dataset.country || 'Global';
      state.composer.lat = Number(el.dataset.lat) || 13.7563;
      state.composer.lng = Number(el.dataset.lng) || 100.5018;
      state.composer.step = 'when';
      render();
      break;
    }
    case 'select-budget': {
      const budgetIdx = Number(el.dataset.budget);
      state.composer.budget = budgetIdx;
      render();
      break;
    }
    case 'toggle-pref': {
      const pref = el.dataset.pref;
      state.composer.prefs = state.composer.prefs.includes(pref) ? state.composer.prefs.filter(p => p !== pref) : [...state.composer.prefs, pref];
      render(); break;
    }
    case 'create-trip': createTrip(); break;
    case 'place-filter': state.placeFilter = el.dataset.filter; render(); break;
    case 'refresh-location': {
      state.nearbyPlaces = [];
      state.nearbyPlacesPage = 1;
      state.userCoords = null;
      initUserNearbyRecommendation(true);
      break;
    }
    case 'load-more-add-places': toast('All bundled recommendations are already shown.'); break;
    case 'load-more-places': toast('All bundled recommendations are already shown.'); break;
    case 'collapse-places': state.showPlaces = !state.showPlaces; render(); break;
    case 'place-detail': {
      const trip = selectedTrip();
      const allPlaces = getTripPlaces(trip);
      let place = allPlaces.find(p => p.id === id || p.name === id);
      // Also check nearby and extra add-place lists
      if (!place) place = (state.nearbyPlaces || []).find(p => p.id === id || p.name === id);
      if (!place) place = (state.extraAddAttractions || []).find(p => p.id === id || p.name === id);
      if (!place) place = (state.extraAddRestaurants || []).find(p => p.id === id || p.name === id);
      if (state.modal) {
        state.parentModal = state.modal;
      }
      state.modal = { type: 'place', id, place: place || null };
      render();
      break;
    }
    case 'trip-detail': selectTrip(id); state.selectedDay = null; state.modal = { type: 'trip', id }; render(); break;
    case 'trip-options': state.modal = { type: 'tripOptions', id }; render(); break;
    case 'duplicate-trip': duplicateTrip(state.modal.id); break;
    case 'delete-trip': state.modal = { type: 'deleteTrip', id: state.modal.id }; render(); break;
    case 'confirm-delete-trip': removeTrip(state.modal.id); break;
    case 'trip-day':
      state.selectedDay = el.dataset.day === 'overview' ? null : Number(el.dataset.day);
      render();
      break;
    case 'open-day-map':
    case 'toggle-day-map': {
      const day = Number(el.dataset.day || state.selectedDay || 1);
      state.parentModal = state.modal;
      state.modal = {
        type: 'dayMap',
        tripId: state.modal?.id || state.selectedTrip,
        day: day
      };
      render();
      break;
    }
    case 'open-add-place': {
      const day = Number(el.dataset.day || state.selectedDay || 1);
      state.parentModal = state.modal;
      state.modal = {
        type: 'addPlace',
        tripId: state.modal?.id || state.selectedTrip,
        day: day,
        tab: 'attractions',
        query: ''
      };
      render();
      break;
    }
    case 'add-place-tab':
      if (state.modal?.type === 'addPlace') {
        state.modal.tab = el.dataset.tab;
        render();
      }
      break;
    case 'delete-stop': {
      const dayNum = Number(el.dataset.day || state.selectedDay || 1);
      const stopName = el.dataset.name;
      const trip = (state.modal?.id ? state.trips.find(t => t.id === state.modal.id) : null) || selectedTrip();
      if (trip && trip.dailyItinerary) {
        const dayData = trip.dailyItinerary[dayNum - 1];
        if (dayData) {
          if (dayData.attractions) dayData.attractions = dayData.attractions.filter(a => a.name !== stopName);
          if (dayData.restaurants) dayData.restaurants = dayData.restaurants.filter(r => r.name !== stopName);
          saveState();
          toast(`Removed "${stopName}" from Day ${dayNum}`);
          render();
        }
      }
      break;
    }
    case 'confirm-add-place': {
      const dayNum = Number(el.dataset.day || state.modal?.day || 1);
      const placeName = el.dataset.name;
      const type = el.dataset.type;
      const trip = (state.modal?.tripId ? state.trips.find(t => t.id === state.modal.tripId) : null) || selectedTrip();
      if (trip) {
        const allPlaces = getTripPlaces(trip);
        let place = allPlaces.find(p => p.name === placeName || p.id === placeName);
        if (!place) place = (state.extraAddAttractions || []).find(p => p.name === placeName || p.id === placeName);
        if (!place) place = (state.extraAddRestaurants || []).find(p => p.name === placeName || p.id === placeName);
        if (!trip.dailyItinerary) trip.dailyItinerary = [];
        while (trip.dailyItinerary.length < dayNum) {
          trip.dailyItinerary.push({ day: trip.dailyItinerary.length + 1, attractions: [], restaurants: [], summary: `Explore ${trip.city}` });
        }
        const dayData = trip.dailyItinerary[dayNum - 1];
        if (!dayData.attractions) dayData.attractions = [];
        if (!dayData.restaurants) dayData.restaurants = [];
        if (type === 'food' || place?.category === 'Food') {
          dayData.restaurants.push({
            name: place?.name || placeName,
            cuisine: place?.subtitle || 'Dining',
            address: place?.subtitle || trip.city,
            rating: parseFloat(place?.rating) || 4.7,
            latitude: place?.lat || trip.lat || 13.7563,
            longitude: place?.lng || trip.lng || 100.5018,
            imageUrl: place?.imageUrl || place?.image || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
          });
        } else {
          dayData.attractions.push({
            name: place?.name || placeName,
            category: place?.category || 'Things to do',
            address: place?.subtitle || trip.city,
            rating: parseFloat(place?.rating) || 4.8,
            latitude: place?.lat || trip.lat || 13.7563,
            longitude: place?.lng || trip.lng || 100.5018,
            imageUrl: place?.imageUrl || place?.image || 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
          });
        }
        saveState();
        toast(`Added "${place?.name || placeName}" to Day ${dayNum}!`);
        render();
      }
      break;
    }
    case 'share-trip':
      if (navigator.share) {
        navigator.share({ title: 'My Trip Plan', url: window.location.href }).catch(() => {});
      } else {
        navigator.clipboard?.writeText(window.location.href);
        toast('Trip link copied to clipboard!');
      }
      break;
    case 'load-more-hotels': toast('All bundled recommendations are already shown.'); break;
    case 'route-expand': state.routeExpandedKey = state.routeExpandedKey === el.dataset.key ? null : el.dataset.key; render(); break;
    case 'route-mode': state.routeModes[el.dataset.key] = el.dataset.mode; render(); break;
    case 'route-map':
      state.parentModal = state.modal;
      state.modal = {
        type: 'routeMap',
        origin: el.dataset.origin,
        destination: el.dataset.destination,
        originLat: Number(el.dataset.originLat),
        originLng: Number(el.dataset.originLng),
        destLat: Number(el.dataset.destLat),
        destLng: Number(el.dataset.destLng),
        mode: el.dataset.mode,
        distance: el.dataset.distance,
        duration: el.dataset.duration
      };
      render(); break;
    case 'open-google-route': {
      const { originLat, originLng, destLat, destLng, mode } = el.dataset;
      const travelMode = mode === 'walk' ? 'walking' : 'driving';
      const url = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${destLat},${destLng}&travelmode=${travelMode}`;
      window.open(url, '_blank');
      break;
    }
    case 'book-from-trip': {
      const trip = state.trips.find(t => t.id === state.modal?.id) || selectedTrip();
      if (!trip || dateDayCount(trip.start, trip.end) <= 1) break;
      selectTrip(trip.id);
      state.modal = null; state.tab = 'booking'; render(); break;
    }
    case 'hotel': {
      const trip = selectedTrip();
      const targetId = el.dataset.id || id;
      const targetName = el.dataset.name || targetId;
      const hotel = findHotelByIdOrName(targetId, targetName, trip);
      const booking = state.bookings.find(b => b.tripId === trip?.id && (b.hotelId === targetId || b.name === targetName || (hotel && (b.hotelId === hotel.id || b.name === hotel.name))));
      if (booking && booking.nights) {
        state.hotelNights = booking.nights;
      } else {
        state.hotelNights = Math.max(1, dateDayCount(trip?.start, trip?.end) - 1);
      }
      if (state.modal) {
        state.parentModal = state.modal;
      }
      state.modal = { type: 'hotel', id: targetId, name: targetName, hotel: hotel || null };
      render();
      break;
    }
    case 'hotel-night': {
      const trip = selectedTrip();
      const maxNights = Math.max(1, dateDayCount(trip?.start, trip?.end) - 1);
      state.hotelNights = Math.max(1, Math.min(maxNights, state.hotelNights + Number(el.dataset.delta)));
      render();
      break;
    }
    case 'confirm-hotel': {
      const trip = selectedTrip();
      if (!trip || dateDayCount(trip.start, trip.end) <= 1) break;
      const targetId = el.dataset.id || id;
      const targetName = el.dataset.name || targetId;
      const hotel = state.modal?.hotel || findHotelByIdOrName(targetId, targetName, trip) || {
        name: targetName || 'Selected Hotel',
        area: trip.city,
        price: 2500
      };
      const priceNum = parseInt(String(hotel.price || hotel.pricePerNight).replace(/[^0-9]/g, '')) || 2450;
      const booking = {
        tripId: trip.id,
        hotelId: hotel.id || targetId,
        name: hotel.name,
        area: hotel.area || hotel.address || hotel.subtitle || `${trip.city} Central`,
        price: priceNum,
        nights: Math.min(state.hotelNights, Math.max(1, dateDayCount(trip.start, trip.end) - 1)),
        guests: 1,
        imageUrl: hotel.imageUrl || hotel.image || DEFAULT_HOTELS[0].image,
        rating: hotel.rating || 4.7,
        description: hotel.description || ''
      };
      state.bookings = [booking, ...state.bookings.filter(b => b.tripId !== trip.id)];
      state.modal = null; saveState(); render(); toast(`Booking saved for ${hotel.name}!`);
      break;
    }
    case 'navigation': {
      const lat = el.dataset.lat, lng = el.dataset.lng;
      if (lat && lng) {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`, '_blank');
      } else {
        toast('Navigation started.');
      }
      break;
    }
    case 'favorite': toggleFavorite(); break;
    case 'keypad': openKeypad(el.dataset.target); break;
    case 'key': {
      const key = el.dataset.key; let val = state.modal.value || '';
      if (key === '⌫') val = val.slice(0, -1);
      else if (key === '.') { if (!val.includes('.')) val += '.'; }
      else val = val === '0' ? key : val + key;
      state.modal.value = val; render(); break;
    }
    case 'quick-add': state.modal.value = String((Number(state.modal.value) || 0) + Number(el.dataset.add)); render(); break;
    case 'key-clear': state.modal.value = '0'; render(); break;
    case 'key-confirm': confirmKeypad(); break;
    case 'calculate-change': state.scan.step = 'tendered'; state.scan.tenderedCard = false; render(); break;
    case 'verify-change': {
      const due = Math.max(0, state.scan.tendered - state.scan.price);
      if (due > 0) { state.scan.step = 'coin'; state.scan.coinCard = false; render(); }
      else { state.scan.received = 0; completeChangeFlow(); }
      break;
    }
    case 'return-price': state.scan.step = 'price'; state.scan.tenderedCard = false; render(); break;
    case 'complete': completeChangeFlow(); break;
    case 'add-cart': addCurrentToCart(false); break;
    case 'duplicate-quantity': {
      const match = state.cart.find(item => item.currency === state.priceCurrency && Math.abs(item.price - state.scan.price) < .001);
      if (match) match.quantity += 1;
      state.modal = null; saveState(); render(); break;
    }
    case 'duplicate-separate': addCurrentToCart(true); break;
    case 'quantity': {
      const item = state.cart.find(x => x.id === id); if (item) item.quantity += Number(el.dataset.delta);
      state.cart = state.cart.filter(x => x.quantity > 0); saveState(); render(); break;
    }
    case 'clear-cart': if (state.cart.length) { state.cart = []; saveState(); render(); } break;
    case 'checkout': checkoutCart(); break;
    case 'edit-cart': state.modal = { type: 'editCart', id }; render(); break;
    case 'save-cart-edit': {
      const item = state.cart.find(x => x.id === state.modal.id);
      const name = document.querySelector('[data-field="edit-name"]')?.value.trim();
      const price = Number(document.querySelector('[data-field="edit-price"]')?.value);
      const quantity = Number(document.querySelector('[data-field="edit-quantity"]')?.value);
      if (item && price > 0 && Number.isInteger(quantity) && quantity > 0) { item.name = name || item.name; item.price = price; item.quantity = quantity; state.modal = { type: 'cart' }; saveState(); render(); }
      else toast('Enter a valid price and quantity.');
      break;
    }
    case 'clear-history': if (confirm('Clear all saved transactions?')) { state.history = []; saveState(); render(); } break;
    case 'delete-history': state.history = state.history.filter(h => h.id !== id); saveState(); render(); break;
    case 'reset-scale': state.textScale = 1; saveState(); render(); break;
  }
}

// Global click delegation
phone.addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (target) { void doAction(target.dataset.action, target); return; }
  if (event.target.classList.contains('modal-backdrop')) {
    if (state.parentModal) {
      state.modal = state.parentModal;
      state.parentModal = null;
    } else {
      state.modal = null;
      state.parentModal = null;
    }
    render();
  }
});

// Real-time input handling (smooth drag & immediate updates)
phone.addEventListener('input', event => {
  const field = event.target.dataset.field;
  if (field === 'add-place-search' && state.modal?.type === 'addPlace') {
    state.modal.query = event.target.value;
    render();
    const input = phone.querySelector('[data-field="add-place-search"]');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
    return;
  }
  if (field === 'budget') {
    const val = Number(event.target.value);
    state.composer.budget = val;
    const titleEl = phone.querySelector('.budget-title');
    const detailEl = phone.querySelector('.budget-detail');
    if (titleEl && detailEl) {
      titleEl.textContent = BUDGETS[val][0];
      detailEl.textContent = BUDGETS[val][1];
    }
    phone.querySelectorAll('.budget-labels span').forEach((s, i) => {
      s.classList.toggle('selected', i === val);
    });
    phone.querySelectorAll('.budget-card-choice').forEach((c, i) => {
      c.classList.toggle('active', i === val);
    });
    return;
  }
  if (field === 'product') { state.scan.product = event.target.value; return; }
  if (field === 'text-scale') {
    state.textScale = Number(event.target.value);
    phone.style.setProperty('--text-scale', state.textScale);
    const badge = phone.querySelector('.settings-meta strong');
    if (badge) badge.textContent = `${Math.round(state.textScale * 100)}%`;
    return;
  }
  if (field === 'city-query') {
    const value = event.target.value, selection = event.target.selectionStart;
    state.composer.query = value; render();
    const input = phone.querySelector('[data-field="city-query"]');
    if (input) { input.focus(); input.setSelectionRange(selection, selection); }
  }
});

phone.addEventListener('change', event => {
  const field = event.target.dataset.field;
  if (field === 'select-city-dropdown') {
    const cityName = event.target.value;
    if (cityName) {
      const city = CITIES.find(c => c.name === cityName);
      if (city) {
        state.composer.city = city.name;
        state.composer.country = city.country;
        state.composer.lat = city.lat;
        state.composer.lng = city.lng;
        state.composer.step = 'when';
        render();
      }
    }
    return;
  }
  if (field === 'priceCurrency' || field === 'changeCurrency') {
    if (field === 'priceCurrency' && state.cart.length) { event.target.value = state.priceCurrency; return; }
    state[field] = event.target.value; saveState(); render(); fetchRate(); return;
  }
  if (field === 'product') { state.scan.product = event.target.value; return; }
  if (field === 'trip-start') {
    state.composer.start = event.target.value;
    if (state.composer.end && state.composer.end < state.composer.start) state.composer.end = '';
    render(); return;
  }
  if (field === 'trip-end') { state.composer.end = event.target.value; render(); return; }
  if (field === 'budget') { state.composer.budget = Number(event.target.value); render(); return; }
  if (field === 'text-scale') { state.textScale = Number(event.target.value); saveState(); render(); return; }
  if (field === 'bold-text') { state.boldText = event.target.checked; saveState(); render(); return; }
  if (event.target.id === 'camera-file') {
    const file = event.target.files?.[0];
    if (file) performOCR(file);
  }
});

// Enable smooth drag-to-scroll and mouse-wheel horizontal scrolling for horizontal sections (.guide-row, .filter-row)
function setupHorizontalScrollers() {
  document.querySelectorAll('[data-scroller="horizontal"], .guide-row, .filter-row').forEach(slider => {
    if (slider.dataset.scrollInit) return;
    slider.dataset.scrollInit = 'true';

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      hasMoved = false;
      slider.classList.add('dragging');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        slider.classList.remove('dragging');
        setTimeout(() => { hasMoved = false; }, 60);
      }
    });

    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.6;
      if (Math.abs(walk) > 6) hasMoved = true;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('click', e => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Translate vertical mouse-wheel to horizontal scroll
    slider.addEventListener('wheel', e => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  });
}

// Hook scroller after every render
const originalRender = render;
render = function() {
  originalRender();
  setupHorizontalScrollers();

  // Initialize Google Maps for trip overview or day route popup
  if ((state.modal?.type === 'trip' || state.modal?.type === 'dayMap') && window._initTripMap && window.L) {
    const trip = state.trips.find(t => t.id === (state.modal.tripId || state.modal.id)) || state.trips.find(t => t.id === state.selectedTrip);
    if (trip) {
      setTimeout(() => {
        if (state.modal?.type === 'dayMap') {
          const day = state.modal.day || state.selectedDay || 1;
          const dayData = trip.dailyItinerary?.[day - 1] || trip.dailyItinerary?.[0];
          const dayStops = getDayStops(dayData, trip);
          if (dayStops.length > 0) {
            window._initTripMap('day-route-popup-map', dayStops, trip);
          }
        } else if (state.selectedDay == null) {
          // Overview map — gather all stops from all days
          const allStops = [];
          (trip.dailyItinerary || []).forEach(dayData => {
            getDayStops(dayData, trip).forEach(s => {
              if (!allStops.some(x => x.name === s.name)) allStops.push(s);
            });
          });
          if (allStops.length > 0) {
            window._initTripMap('trip-overview-map', allStops, trip);
          }
        }
      }, 120);
    }
  }
};

render();
fetchRate();
