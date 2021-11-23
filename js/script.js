console.log('big up da udem');

const mainSearch = document.querySelector("#mainSearch");

// Maps API

let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';

$(document).ready(function(){
    $('body').append(script);
});


// Global Variables

let map;
let markers = [];

// =====================================
// Start of Accommodation array
// =====================================

let acom = [
    {
        id: 101,
        // name: 'The Ranch',
        location: 'queenstown',
        rating: 4.5,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'house',
        bio: 'Welcome to our beautiful home, located in the secluded outskirts of Queenstown. Our home has everything you need to make your perfect Queenstown holiday memories. We live locally, so if you have any issues during your stay we will do our absolute best to address them and ensure your stay is wonderful.',
        header: 'Great value secluded getaway',
        subHeader: 'Secluded snow home 20 minutes from Queenstown',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 245,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'John Smith',
        hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -44.965397,
        longitude: 168.621975,
    },
    {
       id: 102,
    //    name: 'The Hilton',
       location: 'queenstown',
       rating: 4.4,
       beds: 1,
       rooms: 1,
       baths: 1,
       type: 'hotel',
       bio: 'Find The Hilton on the shores of the Frankton Arm of Lake Wakatipu, three kilometers from Queenstown Airport. Queenstown is 10 kilometers away and there\'s a water taxi for rides across the lake. We have a heated indoor pool, full-service spa, fitness center with Precor equipment, outdoor terrace with lake views, and multiple dining options.',
       header: 'Luxury in the heart of Queenstown',
       subHeader: 'Premium hotel offering dining, a spa & an indoor pool.',
       minGuest: 1,
       maxGuest: 2,
       minNight: 1,
       maxNight: 10,
       priceNight: 160,
       images: [],
       amenities: ['','','','','','',''],
       hostName: 'Chris Ehmann',
       hostBio: 'I\'m the manager of Hilton Hotel\'s world wide, I can guarantee only the absolute best when guests choose to stay with us, I find myself personally responsible for the reputation of every single Hilton',
       breakfastHeading: 'Breakfast - 22',
       breakfastPicture1: '',
       breakfastBio1: 'Eggs & Avacado on toast',
       breakfastDiet1: 'V',
       lunchHeading: 'Lunch - $25',
       lunchPicture1: '',
       lunchBio1: 'Burger w/ fries & aioli',
       lunchDiet1: 'V*, VG*',
       dinnerHeading: 'Dinner - $30',
       dinnerPicture1: '',
       dinnerBio1: 'Spaghetti Bolognese',
       dinnerDiet1: 'V*, VG*',
       breakfastPicture2: '',
       breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
       breakfastDiet2: 'V, VG*',
       lunchPicture2: '',
       lunchBio2: 'Pizza, specify on day',
       lunchDiet2: 'V*, VG*',
       dinnerPicture2: '',
       dinnerBio2: 'Steak Dinner',
       dinnerDiet2: '',
       latitude: -45.028776,
       longitude: 168.728284,
    },
    {
       id: 103,
    //    name: 'Four Seasons',
       location: 'queenstown',
       rating: 4.0,
       beds: 4,
       rooms: 2,
       baths: 1,
       type: 'motel',
       bio: 'Nestled on the banks of Lake Wakatipu, the Four Seasons Motel combines heritage and charm with untamed natural beauty. Every guest suite includes modern amenities, while a wealth of delicious cuisine, culture and adventure await you just a short walk away in central Queenstown.',
       header: 'The best place for the Winter Festival Fireworks',
       subHeader: 'Affordable stays amongst natural beauty',
       minGuest: 2,
       maxGuest: 4,
       minNight: 3,
       maxNight: 10,
       priceNight: 90,
       images: [],
       amenities: ['','','','','','',''],
       hostName: 'John Smith',
       hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
       breakfastHeading: 'Breakfast - 22',
       breakfastPicture1: '',
       breakfastBio1: 'Eggs & Avacado on toast',
       breakfastDiet1: 'V',
       lunchHeading: 'Lunch - $25',
       lunchPicture1: '',
       lunchBio1: 'Burger w/ fries & aioli',
       lunchDiet1: 'V*, VG*',
       dinnerHeading: 'Dinner - $30',
       dinnerPicture1: '',
       dinnerBio1: 'Spaghetti Bolognese',
       dinnerDiet1: 'V*, VG*',
       breakfastPicture2: '',
       breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
       breakfastDiet2: 'V, VG*',
       lunchPicture2: '',
       lunchBio2: 'Pizza, specify on day',
       lunchDiet2: 'V*, VG*',
       dinnerPicture2: '',
       dinnerBio2: 'Steak Dinner',
       dinnerDiet2: '',
       latitude: -45.028776,
       longitude: 168.728284,
    },
    {
        id: 104,
        // name: 'YHA',
        location: 'queenstown',
        rating: 3.9,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'hostel',
        bio: 'If you want to experience the excitement of Queenstown and still get a good night’s sleep, then YHA Queenstown Lakefront is the hostel for you. Accommodation with enchanting views, a picturesque lakeside stroll into town and a welcoming atmosphere without the price tag! This lakefront beauty has modern décor and facilities – plus it’s only a 10 minute walk to the heart of town!',
        header: 'Cheap accommodation by the water',
        subHeader: 'Trusted and friendly hostel',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 30,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Sue Fairclough',
        hostBio: 'Our warm and attentive staff are at your service to assure your stay at the Four Seasons Motel is nothing short of delightful. Our facilities are clean and well maintained, and guest amenities like heated blankets during winter and select bus services are offered to ensure convenience and comfort in any season.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 105,
        // name: 'My Home',
        location: 'auckland',
        rating: 4.9,
        beds: 4,
        rooms: 3,
        baths: 2,
        type: 'house',
        bio: 'This newly renovated, rare home\'s prime location in Grafton is a few minutes away from the City Centre, Parnell, Newmarket, and Mt Eden. Contemporary styling makes it perfect for any business trip, family getaway or holiday.',
        header: 'Entire residential home',
        subHeader: 'The perfect spot to start exploring the city',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 255,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Stefan',
        hostBio: 'Hi! My name is Stefan and I live in Auckland city, New Zealand. My favourite thing about living here is that Auckland is a vibrant and buzzing city, but that it also has beautiful beaches and forests on its doorstep when I want a break from the city life.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 106,
        // name: 'Sky City',
        location: 'auckland',
        rating: 4.6,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'hotel',
        bio: 'Explore the sights and sounds of vibrant Auckland, including the iconic Sky Tower. Pamper yourself at rejuvenating spa facilities. Experience magnificent dining with over 20 restaurants, cafes and bars close by, not to mention theatres and the exciting SkyCity Casino. Before you return, relax and refresh with our world-class facilities and services, where your comfort is our priority.',
        header: 'Absolute luxury in the heart of Auckland City',
        subHeader: 'SkyCity Hotel. Everything\'s right here.',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 115,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Brad Burnett',
        hostBio: 'Group General Manager - SKYCITY Hotels - SkyCity Entertainment Group',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 107,
        // name: 'Fernz',
        location: 'auckland',
        rating: 4.2,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'motel',
        bio: 'With panoramic views of Auckland Harbour, Fernz Motel gives you the best of everything. Just a few minutes from great local cafes, shops and charming walks in Birkenhead, it’s also only a short ferry or car ride from the central city – so you can be close to the hustle and bustle, without being right in it.',
        header: 'Relax at Fernz Motel',
        subHeader: 'Convenient to the city and local eateries',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 100,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Christine Leaf',
        hostBio: 'Looking after people is what we do best so we’ve made sure you’ll have all the fun of being somewhere new, with all the comforts of being in your own home.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 108,
        // name: 'Haka Lodge',
        location: 'auckland',
        rating: 4.8,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'hostel',
        bio: 'Haka Lodge Auckland provides a range of sleeping options from the funky 20 bed dorm, to private rooms with en-suites, 4-person rooms, and everything in between. All the beds, in every room type are custom made solid wooden beds. The dorms range to suit everyone\'s budget, from one very trendy 20 bed dorm, right down to a 5 bed dorm. All beds have their own power points for each guest and curtains for each bed, to give all guests privacy.',
        header: 'The heart of Auckland City',
        subHeader: 'Located in Auckland\'s renowned K\'Road',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 45,
        images: [],
        amenities: ['','','','','','',''],
        hostImg: '',
        hostName: 'Susie Spain',
        hostBio: 'I\'ve been managing Haka Lodge for over 5 years, I take pride in creating the most welcoming environment possible, either me or another trusted staff member will always only be a call away!',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 109,
        // name: 'Te Whare iti',
        location: 'wellngton',
        rating: 4.5,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'house',
        bio: 'The Little house is a brand new self contained guest house in Ngaio. Two minute walk to Ngaio train station into Wellington city and Sky stadium which is a 12 min train ride. Two cafe\'s and a Supermarket within a 10min walk. Surrounded by hills, we have many beautiful walks on our doorstep - the northern walkway, Trellisick park and Otari Wilton bush.',
        header: 'Te Whare iti - The little house',
        subHeader: 'Located just outside of the city in neighbouring Ngaio',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 240,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Megan',
        hostBio: 'We\'re located just next door, we\'ll always be happy to help if needed!!',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 110,
        // name: '',
        location: 'wellington',
        rating: 4.8,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'hotel',
        bio: 'As the world’s first international luxury hotel brand, InterContinental Hotels & Resorts has been pioneering travel across the globe for more than 75 years. With a privileged location adjacent to the waterfront, InterContinental Wellington is a global five-star hotel in the heart of New Zealand\'s Capital City.',
        header: 'InterContinental | Wellington',
        subHeader: 'Luxury on Wellington\'s capital',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 180,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Scott Hamilton',
        hostBio: 'I\'ve been the InterContinental manager for over 9 years and love to deliver the best quality service I possible can! I take lots of pride in my work and ensure that we only hire the best staff',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 111,
        // name: 'Bella Vista Motel',
        location: 'wellington',
        rating: 4.5,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'motel',
        bio: 'We are easy to find on Evans Bay, just minutes from Wellington Airport. From our motel, Wellington waterfront is easily accessible by car, full of restaurants, cafes, shops, galleries and, most famously Te Papa, the Museum of New Zealand. The city also hosts various performing arts, festivals, international and national sporting events and conferences.',
        header: 'Right by the airport!',
        subHeader: 'Barney and Bhagi welcome you to the Bella Vista Motel Wellington',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 95,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Barney and Bhagi',
        hostBio: 'You can be assured of a warm welcome at Bella Vista Motel Wellington where we will assist you in every way possible!',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 112,
        // name: 'Nomads',
        location: 'queenstown',
        rating: 5.0,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'hostel',
        bio: 'Nomads Capital, our Wellington hostel, is a Qualmark 5-star rated hostel, so you know that you will be staying in top quality budget accommodation. It is ideally located in Wellington’s central bohemian quarter, with comfy communal areas to meet other backpackers, making Nomads Wellington the best value place to stay on your arrival.',
        header: 'Stay at Nomads Wellington',
        subHeader: 'Voted third best Hostel in New Zealand',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 37,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Ryan Coward',
        hostBio: 'I\'m a dedicated Hostel manager who\'s committed to creating the best stay for locals and visitors.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 113,
        // name: '',
        location: 'Christchurch',
        rating: 4.8,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'house',
        bio: 'The Townhouse is stand a lone, even in the middle of town you will be surprised at how peaceful and quiet this location is. There are doors to an outdoor area - with a table and chairs where you can enjoy a glass of wine. There is free parking on site.',
        header: 'Entire Townhouse',
        subHeader: 'Peace & quiet in the city',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 230,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Anne',
        hostBio: 'I love to travel, and having just returned from the UK after living there for 7 years, I am now living in Christchurch which is my home town. The city is a beautiful place to live and be part off.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 114,
        // name: 'Wyndham',
        location: 'Christchurch',
        rating: 4.5,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'hotel',
        bio: 'Surrounded by bars and restaurants, 10 kilometers from Christchurch International Airport (CHC), Wyndham Garden Christchurch Kilmore Street offers convenient amenities like a gym, café, and free WiFi. Pick up local goods at Riverside Market, learn about the area’s history in the Canterbury Museum, or try your luck at Christchurch Casino. You’ll be walking distance from attractions like Quake City, the Bridge of Remembrance, and Cathedral Square. Our central business district hotel is also minutes from Te Pae The Christchurch Convention Centre.',
        header: 'Get Comfortable in Christchurch',
        subHeader: 'Modern CBD hotel by Riverside Market and Christchurch Casino',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 157,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Peter Wyndham',
        hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 115,
        // name: 'Christchurch Motel',
        location: 'queenstown',
        rating: 3.7,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'motel',
        bio: 'Offering outstanding accommodation in the Garden City, the Christchurch Motel\'s convenient Riccarton Road location is within walking distance of two major shopping centres, Canterbury University and Riccarton Bush. We offer comfortable, modern accommodation and a commitment to good service that extends from a warm friendly greeting to an immediate hands-on response to the needs of our guests.',
        header: 'Welcome to the Christchurch Motel',
        subHeader: 'FREE High-Speed Broadband Internet and Netflix',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 98,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Brian and Bridget',
        hostBio: 'We are committed in ensuring you have a clean, comfortable and enjoyable stay at Christchurch Motel.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
    {
        id: 116,
        // name: 'Jailhouse Accomodation',
        location: 'Christchurch',
        rating: 4.5,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'hostel',
        bio: 'We have been voted Top Backpacker Hostel in Oceania once again by Hostelworld guests this year, as well as being consistently highly recommended in Lonely Planet and Rough Guides. Our renovated heritage accommodation has had a very fascinating history as the Addington Prison from 1874 to 1999, and since opening as a backpackers hostel in 2006 our amazing accommodation has become renowned as a must-stay on the backpacker circuit. Our suburb of Addington has become an entertainment hub with awesome new cafés and bars having recently opened, as well as being very close to the Railway Station, Orangetheory Stadium, Horncastle Arena, Court Theatre, Addington Raceway, Tower Junction and Hagley Park.',
        header: 'Award-winning Backpackers Accommodation',
        subHeader: 'The best budget accommodation in Christchurch',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 230,
        images: [],
        amenities: ['','','','','','',''],
        hostName: 'Pete Davidson',
        hostBio: 'The Jailhouse has rooms available to suit everyone and we welcome children, youth and adults of all ages to experience our special budget accommodation. Our hostel is clean, warm and friendly with super-comfortable inner-sprung beds.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: '',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: '',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: '',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: '',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: '',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: '',
        dinnerBio2: 'Steak Dinner',
        dinnerDiet2: '',
        latitude: -45.028776,
        longitude: 168.728284,
    },
];

// =====================================
// End of Accommodation array
// =====================================

// maps function

function initMap(){
    let wellington = {lat: -41.2924, lng: 174.7787};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8, 
        center: wellington,
    });

            // Auto Complete Form
        let start = new google.maps.places.Autocomplete(
            document.getElementById('location'),
            {
                types: ['(cities)']
            }
        )

}
// end of maps function


// function results(){
//     let i = 0;
//     for(i = 0; i < acom.length; i++){
//            generateCard(i);
//     }
// };

// =====================================
// Start of filter function
// =====================================

function mainFilters(event){

    event.preventDefault();
    console.log("clicked");

    let msDay = 100 * 36000 * 24;

    let checkInDate = new Date($("#checkIn").val());
    let checkOutDate = new Date($("#checkOut").val());
    console.log(checkInDate);
    console.log(checkOutDate);

    let dateDifference = checkOutDate.getTime() - checkInDate.getTime();
    let numberOfDays = dateDifference/msDay;
    console.log(numberOfDays);

    let numberOfPeople = $("#visitors").val();
    console.log(numberOfPeople);

    displayOptions(numberOfDays, numberOfPeople);
}


function displayOptions(nights, guests){
    
    reloadMarkers();

    console.log(nights);
    console.log(guests);

    $("#searchResults").empty();

    for(let i = 0; i<acom.length; i++){
        if((nights >= acom[i].minNight && nights <= acom[i].maxNight) && (guests >= acom[i].minGuest && guests <= acom[i].maxGuest)){
           generateCard(i);
           
           let location = {lat: acom[i].latitude, lng: acom[i].longitude};
           console.log(location);

           let marker = new google.maps.Marker({
               position: location,
               map: map
           });

           console.log(marker);

           markers.push(marker);
        }
    }
}
// =====================================
// End of filter function
// =====================================

// results();






function reloadMarkers(){
    // loop through our array and set the map to null value
    for(let i =0; i<markers.length; i++){
        markers[i].setMap(null);
    }
    markers=[];
}

// =====================================
// start of card generator
// =====================================

function generateCard(x){
    // let x = i;
    $('#searchResults').append(
        `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <div class="card-top">
                        <h6 class="card-subheading">${acom[x].subHeader}</h6>
                        <div class="card-rating">${acom[x].rating}</div>
                    </div>
                    <h5 class="card-title">${acom[x].header}</h5>
                <div class="card-amenities">
                    <p></p>
                </div>
                <div class="card-price-section">
                    <p class="card-price-day">${acom[x].price}</p>
                    <p class="card-price-stay"></p>
                </div>
            </div>
        </div>
        `
    );
    // modal();
}

// =====================================
// end of card generator
// =====================================


// =====================================
// Event Listeners
// =====================================


mainSearch.addEventListener("click", mainFilters);