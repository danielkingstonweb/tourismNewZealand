console.log('big up da udem');

const mainSearch = document.querySelector("#mainSearch");
// const staySelected = document.querySelector("#selectStay");
// Maps API

let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';

$(document).ready(function(){
    $('body').append(script);
});


// Global Variables

let map;
let markers = [];
let firstSelection = [];
console.log(firstSelection);
let totalNights;
const secondFilter = document.getElementById("#modalFilter");

// =====================================
// Start of Accommodation array
// =====================================

let acom = [
    {
        id: 101,
        name: 'The Ranch',
        location: 'Queenstown, New Zealand',
        rating: 4.5,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'House',
        bio: 'Welcome to our beautiful home, located in the secluded outskirts of Queenstown. Our home has everything you need to make your perfect Queenstown holiday memories. We live locally, so if you have any issues during your stay we will do our absolute best to address them and ensure your stay is wonderful.',
        header: 'Great value secluded getaway',
        subHeader: 'Secluded snow home 20 minutes from Queenstown',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 245,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        // image6: './img/queenstownHouse6.jpg',
        amenities: ['','','','','','',''],
        hostName: 'John Smith',
        hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
       name: 'The Hilton',
       location: 'Queenstown, New Zealand',
       rating: 4.4,
       beds: 1,
       rooms: 1,
       baths: 1,
       type: 'Hotel',
       bio: 'Find The Hilton on the shores of the Frankton Arm of Lake Wakatipu, three kilometers from Queenstown Airport. Queenstown is 10 kilometers away and there\'s a water taxi for rides across the lake. We have a heated indoor pool, full-service spa, fitness center with Precor equipment, outdoor terrace with lake views, and multiple dining options.',
       header: 'Luxury in the heart of Queenstown',
       subHeader: 'Premium hotel offering dining, a spa & an indoor pool.',
       minGuest: 1,
       maxGuest: 2,
       minNight: 1,
       maxNight: 10,
       priceNight: 160,
       image1: '',
       image2: '',
       image3: '',
       image4: '',
       image5: '',
       image6: '',
       amenities: ['','','','','','',''],
       hostName: 'Chris Ehmann',
       hostBio: 'I\'m the manager of Hilton Hotel\'s world wide, I can guarantee only the absolute best when guests choose to stay with us, I find myself personally responsible for the reputation of every single Hilton',
       reviewImg1: '',
       reviewName1: '',
       reviewText1: '',
       reviewImg2: '',
       reviewName2: '',
       reviewText2: '',
       reviewImg3: '',
       reviewName3: '',
       reviewText3: '',
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
       name: 'Four Seasons',
       location: 'Queenstown, New Zealand',
       rating: 4.0,
       beds: 4,
       rooms: 2,
       baths: 1,
       type: 'Motel',
       bio: 'Nestled on the banks of Lake Wakatipu, the Four Seasons Motel combines heritage and charm with untamed natural beauty. Every guest suite includes modern amenities, while a wealth of delicious cuisine, culture and adventure await you just a short walk away in central Queenstown.',
       header: 'The best place for the Winter Festival Fireworks',
       subHeader: 'Affordable stays amongst natural beauty',
       minGuest: 2,
       maxGuest: 4,
       minNight: 3,
       maxNight: 10,
       priceNight: 90,
       image1: '',
       image2: '',
       image3: '',
       image4: '',
       image5: '',
       image6: '',
    //    image6: './img/fourSeasons6.jpg',
       amenities: ['','','','','','',''],
       hostName: 'John Smith',
       hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
       reviewImg1: '',
       reviewName1: '',
       reviewText1: '',
       reviewImg2: '',
       reviewName2: '',
       reviewText2: '',
       reviewImg3: '',
       reviewName3: '',
       reviewText3: '',
       breakfastHeading: 'Breakfast - 22',
       breakfastPicture1: './img/',
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
       latitude: -45.033135,
       longitude: 168.665212,
    },
    {
        id: 104,
        name: 'YHA',
        location: 'Queenstown, New Zealand',
        rating: 3.9,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'Hostel',
        bio: 'If you want to experience the excitement of Queenstown and still get a good night’s sleep, then YHA Queenstown Lakefront is the hostel for you. Accommodation with enchanting views, a picturesque lakeside stroll into town and a welcoming atmosphere without the price tag! This lakefront beauty has modern décor and facilities – plus it’s only a 10 minute walk to the heart of town!',
        header: 'Cheap accommodation by the water',
        subHeader: 'Trusted and friendly hostel',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 30,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Sue Fairclough',
        hostBio: 'Our warm and attentive staff are at your service to assure your stay at the Four Seasons Motel is nothing short of delightful. Our facilities are clean and well maintained, and guest amenities like heated blankets during winter and select bus services are offered to ensure convenience and comfort in any season.',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -45.032264,
        longitude: 168.659218,
    },
    {
        id: 105,
        name: 'My Home',
        location: 'Auckland, New Zealand',
        rating: 4.9,
        beds: 4,
        rooms: 3,
        baths: 2,
        type: 'House',
        bio: 'This newly renovated, rare home\'s prime location in Grafton is a few minutes away from the City Centre, Parnell, Newmarket, and Mt Eden. Contemporary styling makes it perfect for any business trip, family getaway or holiday.',
        header: 'Entire residential home',
        subHeader: 'The perfect spot to start exploring the city',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 255,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Stefan',
        hostBio: 'Hi! My name is Stefan and I live in Auckland city, New Zealand. My favourite thing about living here is that Auckland is a vibrant and buzzing city, but that it also has beautiful beaches and forests on its doorstep when I want a break from the city life.',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -36.861154,
        longitude: 174.767731,
    },
    {
        id: 106,
        name: 'Sky City',
        location: 'Auckland, New Zealand',
        rating: 4.6,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'Hotel',
        bio: 'Explore the sights and sounds of vibrant Auckland, including the iconic Sky Tower. Pamper yourself at rejuvenating spa facilities. Experience magnificent dining with over 20 restaurants, cafes and bars close by, not to mention theatres and the exciting SkyCity Casino. Before you return, relax and refresh with our world-class facilities and services, where your comfort is our priority.',
        header: 'Absolute luxury in the heart of Auckland City',
        subHeader: 'SkyCity Hotel. Everything\'s right here.',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 115,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
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
        latitude: -36.848445,
        longitude: 174.761848,
    },
    {
        id: 107,
        name: 'Fernz',
        location: 'Auckland, New Zealand',
        rating: 4.2,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'Motel',
        bio: 'With panoramic views of Auckland Harbour, Fernz Motel gives you the best of everything. Just a few minutes from great local cafes, shops and charming walks in Birkenhead, it’s also only a short ferry or car ride from the central city – so you can be close to the hustle and bustle, without being right in it.',
        header: 'Relax at Fernz Motel',
        subHeader: 'Convenient to the city and local eateries',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 100,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Christine Leaf',
        hostBio: 'Looking after people is what we do best so we’ve made sure you’ll have all the fun of being somewhere new, with all the comforts of being in your own home.',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -36.813536,
        longitude: 174.725902,
    },
    {
        id: 108,
        name: 'Haka Lodge',
        location: 'Auckland, New Zealand',
        rating: 4.8,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'Hostel',
        bio: 'Haka Lodge Auckland provides a range of sleeping options from the funky 20 bed dorm, to private rooms with en-suites, 4-person rooms, and everything in between. All the beds, in every room type are custom made solid wooden beds. The dorms range to suit everyone\'s budget, from one very trendy 20 bed dorm, right down to a 5 bed dorm. All beds have their own power points for each guest and curtains for each bed, to give all guests privacy.',
        header: 'The heart of Auckland City',
        subHeader: 'Located in Auckland\'s renowned K\'Road',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 45,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostImg: '',
        hostName: 'Susie Spain',
        hostBio: 'I\'ve been managing Haka Lodge for over 5 years, I take pride in creating the most welcoming environment possible, either me or another trusted staff member will always only be a call away!',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -36.858026,
        longitude: 174.756701,
    },
    {
        id: 109,
        name: 'Te Whare iti',
        location: 'Wellington, New Zealand',
        rating: 4.5,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'House',
        bio: 'The Little house is a brand new self contained guest house in Ngaio. Two minute walk to Ngaio train station into Wellington city and Sky stadium which is a 12 min train ride. Two cafe\'s and a Supermarket within a 10min walk. Surrounded by hills, we have many beautiful walks on our doorstep - the northern walkway, Trellisick park and Otari Wilton bush.',
        header: 'Te Whare iti - The little house',
        subHeader: 'Located just outside of the city in neighbouring Ngaio',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 240,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Megan',
        hostBio: 'We\'re located just next door, we\'ll always be happy to help if needed!!',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -41.253140,
        longitude: 174.773718,
    },
    {
        id: 110,
        name: 'InterContinental',
        location: 'Wellington, New Zealand',
        rating: 4.8,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'Hotel',
        bio: 'As the world’s first international luxury hotel brand, InterContinental Hotels & Resorts has been pioneering travel across the globe for more than 75 years. With a privileged location adjacent to the waterfront, InterContinental Wellington is a global five-star hotel in the heart of New Zealand\'s Capital City.',
        header: 'InterContinental | Wellington',
        subHeader: 'Luxury on Wellington\'s capital',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 180,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Scott Hamilton',
        hostBio: 'I\'ve been the InterContinental manager for over 9 years and love to deliver the best quality service I possible can! I take lots of pride in my work and ensure that we only hire the best staff',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude:-41.284855,
        longitude: 174.776839,
    },
    {
        id: 111,
        name: 'Bella Vista Motel',
        location: 'Wellington, New Zealand',
        rating: 4.5,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'Motel',
        bio: 'We are easy to find on Evans Bay, just minutes from Wellington Airport. From our motel, Wellington waterfront is easily accessible by car, full of restaurants, cafes, shops, galleries and, most famously Te Papa, the Museum of New Zealand. The city also hosts various performing arts, festivals, international and national sporting events and conferences.',
        header: 'Right by the airport!',
        subHeader: 'We welcome you to the Bella Vista Motel Wellington',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 95,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        // image6: './img/bellaVistaWellington6.jpg',
        amenities: ['','','','','','',''],
        hostName: 'Barney and Bhagi',
        hostBio: 'You can be assured of a warm welcome at Bella Vista Motel Wellington where we will assist you in every way possible!',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -41.302023,
        longitude: 174.804424,
    },
    {
        id: 112,
        name: 'Nomads',
        location: 'Wellington, New Zealand',
        rating: 5.0,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'Hostel',
        bio: 'Nomads Capital, our Wellington hostel, is a Qualmark 5-star rated hostel, so you know that you will be staying in top quality budget accommodation. It is ideally located in Wellington’s central bohemian quarter, with comfy communal areas to meet other backpackers, making Nomads Wellington the best value place to stay on your arrival.',
        header: 'Stay at Nomads Wellington',
        subHeader: 'Voted third best Hostel in New Zealand',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 37,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Ryan Coward',
        hostBio: 'I\'m a dedicated Hostel manager who\'s committed to creating the best stay for locals and visitors.',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude:-41.289617,
        longitude: 174.777075,
    },
    {
        id: 113,
        name: 'Christchurch Townhouse',
        location: 'Christchurch, New Zealand',
        rating: 4.8,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'House',
        bio: 'The Townhouse is stand a lone, even in the middle of town you will be surprised at how peaceful and quiet this location is. There are doors to an outdoor area - with a table and chairs where you can enjoy a glass of wine. There is free parking on site.',
        header: 'Entire Townhouse',
        subHeader: 'Peace & quiet in the city',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 230,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
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
        latitude: -43.544752,
        longitude: 172.644521,
    },
    {
        id: 114,
        name: 'Wyndham',
        location: 'Christchurch, New Zealand',
        rating: 4.5,
        beds: 1,
        rooms: 1,
        baths: 1,
        type: 'Hotel',
        bio: 'Surrounded by bars and restaurants, 10 kilometers from Christchurch International Airport (CHC), Wyndham Garden Christchurch Kilmore Street offers convenient amenities like a gym, café, and free WiFi. Pick up local goods at Riverside Market, learn about the area’s history in the Canterbury Museum, or try your luck at Christchurch Casino. You’ll be walking distance from attractions like Quake City, the Bridge of Remembrance, and Cathedral Square. Our central business district hotel is also minutes from Te Pae The Christchurch Convention Centre.',
        header: 'Get Comfortable in Christchurch',
        subHeader: 'CBD hotel by Riverside Market and Christchurch Casino',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 157,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Peter Wyndham',
        hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude:-43.526562,
        longitude: 172.632709,
    },
    {
        id: 115,
        name: 'Christchurch Motel',
        location: 'Christchurch, New Zealand',
        rating: 3.7,
        beds: 3,
        rooms: 2,
        baths: 2,
        type: 'Motel',
        bio: 'Offering outstanding accommodation in the Garden City, the Christchurch Motel\'s convenient Riccarton Road location is within walking distance of two major shopping centres, Canterbury University and Riccarton Bush. We offer comfortable, modern accommodation and a commitment to good service that extends from a warm friendly greeting to an immediate hands-on response to the needs of our guests.',
        header: 'Welcome to the Christchurch Motel',
        subHeader: 'FREE High-Speed Broadband Internet and Netflix',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 98,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Brian and Bridget',
        hostBio: 'We are committed in ensuring you have a clean, comfortable and enjoyable stay at Christchurch Motel.',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude:-43.530893,
        longitude: 172.585291,
    },
    {
        id: 116,
        name: 'Jailhouse Accommodation',
        location: 'Christchurch, New Zealand',
        rating: 4.5,
        beds: 5,
        rooms: 4,
        baths: 2.5,
        type: 'Hostel',
        bio: 'We have been voted Top Backpacker Hostel in Oceania once again by Hostelworld guests this year, as well as being consistently highly recommended in Lonely Planet and Rough Guides. Our renovated heritage accommodation has had a very fascinating history as the Addington Prison from 1874 to 1999, and since opening as a backpackers hostel in 2006 our amazing accommodation has become renowned as a must-stay on the backpacker circuit. Our suburb of Addington has become an entertainment hub with awesome new cafés and bars having recently opened, as well as being very close to the Railway Station, Orangetheory Stadium, Horncastle Arena, Court Theatre, Addington Raceway, Tower Junction and Hagley Park.',
        header: 'Award-winning Backpackers Accommodation',
        subHeader: 'The best budget accommodation in Christchurch',
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        priceNight: 230,
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        amenities: ['','','','','','',''],
        hostName: 'Pete Davidson',
        hostBio: 'The Jailhouse has rooms available to suit everyone and we welcome children, youth and adults of all ages to experience our special budget accommodation. Our hostel is clean, warm and friendly with super-comfortable inner-sprung beds.',
        reviewImg1: '',
        reviewName1: '',
        reviewText1: '',
        reviewImg2: '',
        reviewName2: '',
        reviewText2: '',
        reviewImg3: '',
        reviewName3: '',
        reviewText3: '',
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
        latitude: -43.542727,
        longitude: 172.613301,
    },
];

// =====================================
// End of Accommodation array
// =====================================




// maps function

function initMap(){
    let wellington = {lat: -41.2924, lng: 174.7787};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.5, 
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

// =====================================
// Start of Hide Shows
// =====================================

$("#mainSearch").click(function(){
    $("#heroTop").hide();
    $("#nav").show();
    $("#footer").show();
    $("#contentOne").show();
    $("#nav").css("display","flex");
    $("#footer").css("display","flex");
    $("#contentOne").css("display","flex");
});



// =====================================
// End of Hide Shows
// =====================================

function modal(){
    $(".nav-filters").click(function(){
        console.log("clickedDat");
        
        $("#modalHeader").empty().append(
            `
            <div id="modalHeader" class="modal-header">
            <h5 id="exampleModalTitle" class="modal-title">Filters</h5><i class="fas fa-filter"></i>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            `
        );

        $("#modalBody").empty().append(
            `
            <div class="modal-body">
                <form action="" class="modal-form">
                    <div class="modal-body__price">               
                    </div>
                    <div class="modal-body-title">
                        <h4 class="modal-body-header">Amenities</h4>
                    </div>
                    <div class="modal-body__amenities">
                        <label for="amenity">Free Wifi
                            <input type="checkbox" name="amenity" value="Wifi">
                        </label>
                        <label for="amenity">Pool
                            <input type="checkbox" name="amenity" value="Pool">
                        </label>
                        <label for="amenity">Laundry
                            <input type="checkbox" name="amenity" value="Laundry">
                        </label>
                        <label for="amenity">Parking
                            <input type="checkbox" name="amenity" value="Parking">
                        </label>
                        <label for="amenity">Spa
                            <input type="checkbox" name="amenity" value="Spa">
                        </label>        
                        <label for="amenity">Breakfast
                            <input type="checkbox" name="amenity" value="Breakfast">
                        </label>
                        <label for="amenity">EV Charger
                            <input type="checkbox" name="amenity" value="EVCharger">
                        </label>
                        <label for="amenity">Garage
                            <input type="checkbox" name="amenity" value="Garage">
                        </label>
                        <label for="amenity">Gym
                            <input type="checkbox" name="amenity" value="Gym">
                        </label>
                        <label for="amenity">Workspace
                            <input type="checkbox" name="amenity" value="Workspace">
                        </label>
                    </div>
                    <div class="modal-body-title">
                        <h4 class="modal-body-header">Amenities</h4>
                    <div/>
                    <div class="modal-body__type">
                        <label for="property">House
                            <input type="checkbox" name="property" value="House">
                        </label>
                        <label for="property">Hotel
                            <input type="checkbox" name="property" value="Hotel">
                        </label>
                        <label for="property">Motel
                            <input type="checkbox" name="property" value="Motel">
                        </label>
                        <label for="property">Hostel
                            <input type="checkbox" name="property" value="Hostel">
                        </label>
                    </div>
                    <button id="modalFilter" type="submit" onClick="checkboxFilter()" class="btn btn-secondary modal-form-btn">Submit Changes</button>
                </form>
            </div>
            `
        );

        $("#modalFooter").empty().append(
            `
            <div class="modal-footer" id="modalFooter">
                <button href="#" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            `
        );


    });
    

};

modal();

        // =====================================
        // Checkbox Filter Function Starts
        // =====================================

        function checkboxFilter(){
            $("#searchResults").empty();
            event.preventDefault();
            let selectedType = [];
            let selectionArray = firstSelection;
            console.log(selectionArray);
        
            $('input[name = "property"]:checked').each(function(){
                selectedType.push(this.value);
                console.log(this.value);
            });
        
            console.log(selectedType);
        
            let i = 0;
            for(i = 0; i < selectionArray.length; i++){
                if(selectedType === selectionArray[i].type)
                generateCard(i);
            }
        };

        // =====================================
        // Checkbox Filter Function Ends
        // =====================================

        // checkboxFilter();









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

    let location = $("#location").val();
    console.log(location);

    let numberOfPeople = $("#visitors").val();
    console.log(numberOfPeople);

    displayOptions(numberOfDays, numberOfPeople, location);

    totalNights = numberOfDays;
    console.log(totalNights);
    console.log(typeof totalNights);

}


function displayOptions(nights, guests, city){
    
    reloadMarkers();

    // console.log(nights);
    // console.log(guests);

    $("#searchResults").empty();

    for(let i = 0; i < acom.length; i++){
        if((nights >= acom[i].minNight && nights <= acom[i].maxNight) && (guests >= acom[i].minGuest && guests <= acom[i].maxGuest) && (city === acom[i].location)){
           generateCard(i);
           
           firstSelection.push(i);

           let location = {lat: acom[i].latitude, lng: acom[i].longitude};
        //    console.log(location);

           let marker = new google.maps.Marker({
               position: location,
               map: map
           });

           console.log(parseInt(acom[i].priceNight) * parseInt(totalNights));
           console.log(5*5);

            markers.push(marker);
        }
    }
    // secondFilter.addEventListener("click", checkboxFilter);

}
displayOptions();

// =====================================
// End of filter function
// =====================================

// results();

// =====================================
// Card Selection Function Starts
// =====================================

function selection(){

    $(".moreInformation").click(function(){
        // console.log("clickedDat")
        $("#contentOne").hide();
        $("#contentTwo").show();
        $("#contentTwo").css("display", "flex");
        $("#contentTwo").css("flex-direction", "row");
    });

    $(".moreInformation").click(function(){
        // console.log("upto");
        let i = 0;
        for(i = 0; i < acom.length; i++){
            if(parseInt(this.id) === acom[i].id){
                // console.log(acom[i].name);

                $("#contentTwoLeft").empty().append(
                    `
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="${acom[i].image1}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${acom[i].image2}" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${acom[i].image3}" alt="Third slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="${acom[i].image4}" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${acom[i].image5}" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="content-two__place">
                        <h5 class="content-two-headings">The Place</h5>
                        <p class="content-two-text">${acom[i].bio}</p>
                    </div>
                    <div class="content-two__amenities">
                        <h5 class="content-two-headings">Amenities</h5>
                        <div class="content-two-amenitylist></div>
                    </div>
                    <div class="content-two__sleeps">
                        <h5 class="content-two-headings">Sleeping Arrangements</h5>
                        <div class="content-two-rooms"></div>
                    </div>
                    <div class="content-two-review">
                        <h5 class="content-two-headings">Reviews</h5>
                        <div class="content-two__person">
                            <img src="" alt="" class="content-two-img">
                            <div class="content-two-person__box">
                                <h6 class="content-two-names"></h6>
                                <p class="content-two-text"></p>
                            </div>
                        </div>
                        <div class="content-two__person">
                            <img src="" alt="" class="content-two-img">
                            <div class="content-two-person__box">
                                <h6 class="content-two-names"></h6>
                                <p class="content-two-text"></p>
                            </div>
                        </div>
                        <div class="content-two__person">
                            <img src="" alt="" class="content-two-img">
                            <div class="content-two-person__box">
                                <h6 class="content-two-names"></h6>
                                <p class="content-two-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="content-two__host">
                        <div class="content-two__person">
                            <img src="" alt="" class="content-two-img">
                            <div class="content-two-person__box">
                                <h6 class="content-two-names"></h6>
                                <p class="content-two-text"></p>
                            </div>
                        </div>
                    </div>
                    `
                );

                        
                $("#contentTwoRight").empty().append(
                    `
                    <div class="content-two__written">
                        <div class="content-two__header">
                            <h3 class="content-two__heading"></h3>
                            <img src="" alt="" class="content-two-star">
                            <div class="content-two-rating">${acom[i].rating}</div>
                            <h4 class="content-two__subheading">${acom[i].subHeader}</h4>
                        </div>
                    </div>
                    <div class="content-two__cart">
                        <div class="content-two__search">
                            <div class="content-two-checkin"></div>
                            <div class="content-two-checkout"></div>
                            <div class="content-two-visitors"></div>
                            <div class="content-two-night"></div>
                        </div>
                    <div class="content-two__cart-bottom">
                        <div class="content-two-bottomleft">
                            <div class="content-two__calc">
                            </div>
                            <div class="content-two__calc">
                            </div>
                            <div class="content-two__calc">
                            </div>
                        </div>
                        <div class="content-two-bottomright">
                        <button id="${acom[i].id}" class="content-two-btn">Select This Stay</button>
                            <p class="content-two-disclaimer">This isn't a final selection</p>
                        </div>
                    </div>
                    `
                );
            mealProgress();
            }
        }
    })
   
};
selection();
// =====================================
// Card Selection Function Ends
// =====================================


// =====================================
// Meal Selection Page Function Begins
// =====================================

function mealProgress(){

    $(".content-two-btn").click(function(){
        // console.log("clickedDat")
        $("#contentTwo").hide();
        $("#contentThree").show();
        $("#contentThree").css("display", "flex");
        $("#contentThree").css("flex-direction", "row");
    });

    $(".content-two-btn").click(function(){
        console.log("heyBro");
        let i = 0;
        for(i = 0; i < acom.length; i++){
            if(parseInt(this.id) === acom[i].id){
                console.log(acom[i].name);

                $("#contentThreeLeft").empty().append(
                    `
                    <h3 class="content-three-heading"></h3>
                    <h3 class="content-three-subheading"></h4>
                        <div class="content-three__breakfast">
                            <h6 class="content-three-foodheading">Breakfast - $22</h6>
                            <img src="" alt="" class="content-three-img1">
                            <p class="content-three-description1"></p>
                            <p class="content-three-dietary1"></p>
                            <img src="" alt="" class="content-three-img1">
                            <p class="content-three-description2"></p>
                            <p class="content-three-dietary2"></p>
                        </div>
                        <div class="content-three__lunch">
                            <h6 class="content-three-foodheading">Lunch - $22</h6>
                            <img src="" alt="" class="content-three-img1">
                            <p class="content-three-description1"></p>
                            <p class="content-three-dietary1"></p>
                            <img src="" alt="" class="content-three-img1">
                            <p class="content-three-description2"></p>
                            <p class="content-three-dietary2"></p>
                        </div>
                        <div class="content-three__dinner">
                            <h6 class="content-three-foodheading">Dinner - $22</h6>
                            <img src="" alt="" class="content-three-img1">
                            <p class="content-three-description1"></p>
                            <p class="content-three-dietary1"></p>
                            <img src="" alt="" class="content-three-img1">
                            <p class="content-three-description2"></p>
                            <p class="content-three-dietary2"></p>
                        </div>
                    `
                )

                $("#contentThreeRight").empty().append(
                    `
                    <div class="content-three__written">
                        <div class="content-thee__header">
                            <h3 class="content-three__heading"></h3>
                            <img src="" alt="" class="content-three-star">
                            <div class="content-three-rating">${acom[i].rating}</div>
                            <h4 class="content-three__subheading">${acom[i].subHeader}</h4>
                        </div>
                    </div>
                    <div class="content-three__cart">
                        <div class="content-three__search">
                            <div class="content-three-checkin"></div>
                            <div class="content-three-checkout"></div>
                            <div class="content-three-visitors"></div>
                            <div class="content-three-night"></div>
                        </div>
                    <div class="content-three__cart-bottom">
                        <div class="content-three-bottomleft">
                            <div class="content-three__calc">
                            </div>
                            <div class="content-three__calc">
                            </div>
                            <div class="content-three__calc">
                            </div>
                        </div>
                        <div class="content-three-bottomright">
                        <button id="${acom[i].id}" class="content-three-btn">Continue</button>
                        </div>
                    </div>
                    `
                )
            }
        }
    })
};
mealProgress();
// =====================================
// Meal Selection Page Function Ends
// =====================================


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

            <div id="${acom[x].id}" class="card moreInformation" style="width: 35rem;">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${acom[x].image1}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${acom[x].image2}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${acom[x].image3}" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="${acom[x].image4}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${acom[x].image5}" alt="Third slide">
                    </div>
                </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                    <div class="card-body">
                        <div class="card-top">
                            <h6 class="card-subheading">${acom[x].subHeader}</h6>
                            <div class="card-rating"><i class="fas fa-star"></i>${acom[x].rating}</div>
                        </div>
                        <h5 class="card-title">${acom[x].header}</h5>
                    <div class="card-amenities">
                        <p></p>
                    </div>
                    <div class="card-price-section">
                        <p class="card-price-day">$${acom[x].priceNight} NZD/night</p>
                        <p>|</p>
                        <p class="card-price-stay">$${acom[x].priceNight * totalNights} NZD/total</p>
                    </div>
                </div>
            </div>


        `
    );
    selection();
};

// =====================================
// end of card generator
// =====================================


// =====================================
// Event Listeners
// =====================================


mainSearch.addEventListener("click", mainFilters);


// staySelected.addEventListener("click", mealProgress);



// =====================================
// 
// =====================================


// =====================================
// 
// =====================================