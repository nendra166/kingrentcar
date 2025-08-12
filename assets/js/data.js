// Tempat simpen data mobil
const carsData = [
    {   
        name: 'Toyota Zenix Hybrid',
        category: 'luxury',
        image: 'assets/images/zenix.jpg',
        price: 1100000,
        type: 'Dengan Supir',
        seats: 6,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Camry',
        category: 'luxury',
        image: 'assets/images/camry.jpg',
        price: 1500000,
        type: 'Dengan Supir',
        seats: 4,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Alphard Gen4',
        category: 'luxury',
        image: 'assets/images/alphard.jpg',
        price: 2000000,
        type: 'Dengan Supir',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Mitsubishi Pajero Sport 4x2',
        category: 'luxury',
        image: 'assets/images/mitsubishi.jpg',
        price: 1600000,
        type: 'Dengan Supir',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Fortuner Gr 2.8',
        category: 'luxury',
        image: 'assets/images/fortuner.jpg',
        price: 1600000,
        type: 'Dengan Supir',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Yaris Gr',
        category: 'city-car',
        image: 'assets/images/yaris.jpg',
        price: 550000,
        type: 'Lepas Kunci',
        seats: 4,
        transmission: 'Matic'
    },
    {
        name: 'Honda Brio Satya',
        category: 'city-car',
        image: 'assets/images/brio.jpg',
        price: 300000,
        type: 'Lepas Kunci',
        seats: 4,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Agya Gr',
        category: 'city-car',
        image: 'assets/images/agya.jpg',
        price: 285000,
        type: 'Lepas Kunci',
        seats: 4,
        transmission: 'Matic'
    },
    {
        name: 'Honda Jazz Rs (Facelift)',
        category: 'city-car',
        image: 'assets/images/jazz.jpg',
        price: 550000,
        type: 'Lepas Kunci',
        seats: 4,
        transmission: 'Matic'
    },
    {
        name: 'Honda HRV Rs',
        category: 'city-car',
        image: 'assets/images/hrv.jpg',
        price: 700000,
        type: 'Lepas Kunci',
        seats: 5,
        transmission: 'Matic'
    },
    {
        name: 'Mitsubishi XPander Ultimate',
        category: 'mpv',
        image: 'assets/images/xpander.jpg',
        price: 550000,
        type: 'Lepas Kunci',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Hyundai Stargazer Prime',
        category: 'mpv',
        image: 'assets/images/Stargazer.jpg',
        price: 600000,
        type: 'Lepas Kunci',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Grand New Avanza G',
        category: 'mpv',
        image: 'assets/images/avanza.jpg',
        price: 450000,
        type: 'Lepas Kunci',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Innova Reborn Bensin',
        category: 'mpv',
        image: 'assets/images/innova.jpg',
        price: 700000,
        type: 'Lepas Kunci/Dengan Supir',
        seats: 7,
        transmission: 'Matic'
    },
    {
        name: 'Toyota Innova Reborn Venturer (diesel)',
        category: 'mpv',
        image: 'assets/images/venturer.jpg',
        price: 950000,
        type: 'Lepas Kunci/Dengan Supir',
        seats: 6,
        transmission: 'Matic'
    },
];