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
let checkInTransfer;
let checkOutTransfer;
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
        serviceFee: 125,
        image1: './img/queenstownHouse1.jpg',
        image2: './img/queenstownHouse2.jpg',
        image3: './img/queenstownHouse3.jpg',
        image4: './img/queenstownHouse4.jpg',
        image5: './img/queenstownHouse5.jpg',
        image6: './img/queenstownHouse6.jpg',
        carouselId: 'carouselExampleControls1',
        amenities: ['Wifi','Parking','Workspace','Garage','Meals', 'Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'John Smith',
        hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
       subHeader: 'Premium hotel offering dining, a spa & pool.',
       minGuest: 1,
       maxGuest: 2,
       minNight: 1,
       maxNight: 10,
       priceNight: 160,
       serviceFee: 95,
       image1: './img/hilton1.jpg',
       image2: './img/hilton2.jpg',
       image3: './img/hilton3.jpg',
       image4: './img/hilton4.jpg',
       image5: './img/hilton5.jpg',
       image6: './img/hilton6.jpg',
       carouselId: 'carouselExampleControls2',
       amenities: ['Wifi','Parking','Gym','Pool','Spa','Meals','EV Charger','Laundry'],
       hostImg: './img/hostImg.jfif',
       hostName: 'Chris Ehmann',
       hostBio: 'I\'m the manager of Hilton Hotel\'s world wide, I can guarantee only the absolute best when guests choose to stay with us, I find myself personally responsible for the reputation of every single Hilton',
       reviewImg1: './img/staunchCat.jfif',
       reviewName1: 'Normal Guy',
       reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
       reviewImg2: './img/staunchCat.jfif',
       reviewName2: 'Normal Gal',
       reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
       reviewImg3: './img/staunchCat.jfif',
       reviewName3: 'Normal They',
       reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
       breakfastHeading: 'Breakfast - 22',
       breakfastPicture1: './img/avoToast.jpg',
       breakfastBio1: 'Eggs & Avacado on toast',
       breakfastDiet1: 'V',
       lunchHeading: 'Lunch - $25',
       lunchPicture1: './img/burger.jpg',
       lunchBio1: 'Burger w/ fries & aioli',
       lunchDiet1: 'V*, VG*',
       dinnerHeading: 'Dinner - $30',
       dinnerPicture1: './img/spagBol.jpg',
       dinnerBio1: 'Spaghetti Bolognese',
       dinnerDiet1: 'V*, VG*',
       breakfastPicture2: './img/pancakes.jpg',
       breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
       breakfastDiet2: 'V, VG*',
       lunchPicture2: './img/pizza.jpg',
       lunchBio2: 'Pizza, specify on day',
       lunchDiet2: 'V*, VG*',
       dinnerPicture2: './img/steakDinner.jpg',
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
       serviceFee: 45,
       image1: './img/fourSeasons1.jpg',
       image2: './img/fourSeasons2.jpg',
       image3: './img/fourSeasons3.jpg',
       image4: './img/fourSeasons4.jpg',
       image5: './img/fourSeasons5.jpg',
       image6: './img/fourSeasons6.jpg',
       carouselId: 'carouselExampleControls3',
       amenities: ['Parking','Wifi','Pool','Meals'],
       hostImg: './img/hostImg.jfif',
       hostName: 'John Smith',
       hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
       reviewImg1: './img/staunchCat.jfif',
       reviewName1: 'Normal Guy',
       reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
       reviewImg2: './img/staunchCat.jfif',
       reviewName2: 'Normal Gal',
       reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
       reviewImg3: './img/staunchCat.jfif',
       reviewName3: 'Normal They',
       reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
       breakfastHeading: 'Breakfast - 22',
       breakfastPicture1: './img/avoToast.jpg',
       breakfastBio1: 'Eggs & Avacado on toast',
       breakfastDiet1: 'V',
       lunchHeading: 'Lunch - $25',
       lunchPicture1: './img/burger.jpg',
       lunchBio1: 'Burger w/ fries & aioli',
       lunchDiet1: 'V*, VG*',
       dinnerHeading: 'Dinner - $30',
       dinnerPicture1: './img/spagBol.jpg',
       dinnerBio1: 'Spaghetti Bolognese',
       dinnerDiet1: 'V*, VG*',
       breakfastPicture2: './img/pancakes.jpg',
       breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
       breakfastDiet2: 'V, VG*',
       lunchPicture2: './img/pizza.jpg',
       lunchBio2: 'Pizza, specify on day',
       lunchDiet2: 'V*, VG*',
       dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 10,
        image1: './img/fourSeasons1.jpg',
        image2: './img/fourSeasons2.jpg',
        image3: './img/fourSeasons3.jpg',
        image4: './img/fourSeasons4.jpg',
        image5: './img/fourSeasons5.jpg',
        image6: './img/fourSeasons6.jpg',
        carouselId: 'carouselExampleControls4',
        amenities: ['Wifi','Meals','Parking'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Sue Fairclough',
        hostBio: 'Our warm and attentive staff are at your service to assure your stay at the Four Seasons Motel is nothing short of delightful. Our facilities are clean and well maintained, and guest amenities like heated blankets during winter and select bus services are offered to ensure convenience and comfort in any season.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 125,
        image1: './img/aucklandHouse1.jpg',
        image2: './img/aucklandHouse2.jpg',
        image3: './img/aucklandHouse3.jpg',
        image4: './img/aucklandHouse4.jpg',
        image5: './img/aucklandHouse5.jpg',
        image6: './img/aucklandHouse6.jpg',
        carouselId: 'carouselExampleControls5',
        amenities: ['Wifi','Parking','Workspace','Garage','Meals', 'Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Stefan',
        hostBio: 'Hi! My name is Stefan and I live in Auckland city, New Zealand. My favourite thing about living here is that Auckland is a vibrant and buzzing city, but that it also has beautiful beaches and forests on its doorstep when I want a break from the city life.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',  
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 95,
        image1: './img/skyCity1.jpg',
        image2: './img/skyCity2.jpg',
        image3: './img/skyCity3.jpg',
        image4: './img/skyCity4.jpg',
        image5: './img/skyCity5.jpg',
        image6: './img/skyCity6.jpg',
        carouselId: 'carouselExampleControls6',
        amenities: ['Wifi','Parking','Gym','Pool','Spa','Meals','EV Charger','Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Brad Burnett',
        hostBio: 'Group General Manager - SKYCITY Hotels - SkyCity Entertainment Group',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',       
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 45,
        image1: './img/fernz1.jpg',
        image2: './img/fernz2.jpg',
        image3: './img/fernz3.jpg',
        image4: './img/fernz4.jpg',
        image5: './img/fernz5.jpg',
        image6: './img/fernz6.jpg',
        carouselId: 'carouselExampleControls7',
        amenities: ['Parking','Wifi','Pool','Meals'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Christine Leaf',
        hostBio: 'Looking after people is what we do best so we’ve made sure you’ll have all the fun of being somewhere new, with all the comforts of being in your own home.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 10,
        image1: './img/hakaLodgeAKL1.jpg',
        image2: './img/hakaLodgeAKL2.jpg',
        image3: './img/hakaLodgeAKL3.jpg',
        image4: './img/hakaLodgeAKL4.jpg',
        image5: './img/hakaLodgeAKL5.jpg',
        image6: './img/hakaLodgeAKL6.jpg',
        carouselId: 'carouselExampleControls8',
        amenities: ['Wifi','Meals'],
        hostImg: './img/hostImg.jfif',
        hostImg: '',
        hostName: 'Susie Spain',
        hostBio: 'I\'ve been managing Haka Lodge for over 5 years, I take pride in creating the most welcoming environment possible, either me or another trusted staff member will always only be a call away!',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        subHeader: 'Located just outside of the city in Ngaio',
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        priceNight: 240,
        serviceFee: 125,
        image1: './img/wellyHouse1.jpg',
        image2: './img/wellyHouse2.jpg',
        image3: './img/wellyHouse3.jpg',
        image4: './img/wellyHouse4.jpg',
        image5: './img/wellyHouse5.jpg',
        image6: './img/wellyHouse6.jpg',
        carouselId: 'carouselExampleControls9',
        amenities: ['Wifi', 'Parking', 'Workspace', 'Garage', 'Meals', 'Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Megan',
        hostBio: 'We\'re located just next door, we\'ll always be happy to help if needed!!',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 95,
        image1: './img/interContinental1.jpg',
        image2: './img/interContinental2.jpg',
        image3: './img/interContinental3.jpg',
        image4: './img/interContinental4.jpg',
        image5: './img/interContinental5.jpg',
        image6: './img/interContinental6.jpg',
        carouselId: 'carouselExampleControls10',
        amenities: ['Wifi','Parking','Gym','Pool','Spa','Meals','EV Charger','Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Scott Hamilton',
        hostBio: 'I\'ve been the InterContinental manager for over 9 years and love to deliver the best quality service I possible can! I take lots of pride in my work and ensure that we only hire the best staff',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        subHeader: 'Welcome to the Bella Vista Motel Wellington',
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        priceNight: 95,
        serviceFee: 45,
        image1: './img/bellaVistaWellington1.jpg',
        image2: './img/bellaVistaWellington2.jpg',
        image3: './img/bellaVistaWellington3.jpg',
        image4: './img/bellaVistaWellington4.jpg',
        image5: './img/bellaVistaWellington5.jpg',
        image6: './img/bellaVistaWellington6.jpg',
        // image6: './img/bellaVistaWellington6.jpg',
        carouselId: 'carouselExampleControls11',
        amenities: ['Parking','Wifi','Pool','Meals'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Barney and Bhagi',
        hostBio: 'You can be assured of a warm welcome at Bella Vista Motel Wellington where we will assist you in every way possible!',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 10,
        image1: './img/nomadsWellington1.jpg',
        image2: './img/nomadsWellington2.jpg',
        image3: './img/nomadsWellington3.jpg',
        image4: './img/nomadsWellington4.jpg',
        image5: './img/nomadsWellington5.jpg',
        image6: './img/nomadsWellington6.jpg',
        carouselId: 'carouselExampleControls12',
        amenities: ['Wifi','Meals'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Ryan Coward',
        hostBio: 'I\'m a dedicated Hostel manager who\'s committed to creating the best stay for locals and visitors.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 125,
        image1: './img/christchurchMotel1.jpeg',
        image2: './img/christchurchMotel2.jpeg',
        image3: './img/christchurchMotel3.jpeg',
        image4: './img/christchurchMotel4.jpeg',
        image5: './img/christchurchMotel5.jpeg',
        image6: './img/christchurchMotel6.jpeg',
        carouselId: 'carouselExampleControls13',
        amenities: ['Wifi','Parking','Workspace','Garage','Meals', 'Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Anne',
        hostBio: 'I love to travel, and having just returned from the UK after living there for 7 years, I am now living in Christchurch which is my home town. The city is a beautiful place to live and be part off.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        subHeader: 'CBD hotel by Riverside Market',
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 10,
        priceNight: 157,
        serviceFee: 95,
        image1: './img/wyndhamChristchurch1.jpg',
        image2: './img/wyndhamChristchurch2.jpg',
        image3: './img/wyndhamChristchurch3.jpg',
        image4: './img/wyndhamChristchurch4.jpg',
        image5: './img/wyndhamChristchurch5.jpg',
        image6: './img/wyndhamChristchurch6.jpg',
        carouselId: 'carouselExampleControls14',
        amenities: ['Wifi','Parking','Gym','Pool','Spa','Meals','EV Charger','Laundry'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Peter Wyndham',
        hostBio: 'I\'ve been a host for over 5 years and love to deliver the best quality service I possible can! I take lots of pride in my work and will always be just a phone call away!',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 45,
        image1: './img/christchurchMotel1.jpeg',
        image2: './img/christchurchMotel2.jpeg',
        image3: './img/christchurchMotel3.jpeg',
        image4: './img/christchurchMotel4.jpeg',
        image5: './img/christchurchMotel5.jpeg',
        image6: './img/christchurchMotel6.jpeg',
        carouselId: 'carouselExampleControls15',
        amenities: ['Parking','Wifi','Pool','Meals'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Brian and Bridget',
        hostBio: 'We are committed in ensuring you have a clean, comfortable and enjoyable stay at Christchurch Motel.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
       breakfastPicture1: './img/avoToast.jpg',
       breakfastBio1: 'Eggs & Avacado on toast',
       breakfastDiet1: 'V',
       lunchHeading: 'Lunch - $25',
       lunchPicture1: './img/burger.jpg',
       lunchBio1: 'Burger w/ fries & aioli',
       lunchDiet1: 'V*, VG*',
       dinnerHeading: 'Dinner - $30',
       dinnerPicture1: './img/spagBol.jpg',
       dinnerBio1: 'Spaghetti Bolognese',
       dinnerDiet1: 'V*, VG*',
       breakfastPicture2: './img/pancakes.jpg',
       breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
       breakfastDiet2: 'V, VG*',
       lunchPicture2: './img/pizza.jpg',
       lunchBio2: 'Pizza, specify on day',
       lunchDiet2: 'V*, VG*',
       dinnerPicture2: './img/steakDinner.jpg',
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
        serviceFee: 10,
        image1: './img/jailhouseChristchurch1.jpg',
        image2: './img/jailhouseChristchurch2.jpg',
        image3: './img/jailhouseChristchurch3.jpg',
        image4: './img/jailhouseChristchurch4.jpg',
        image5: './img/jailhouseChristchurch5.jpg',
        image6: './img/jailhouseChristchurch6.jpg',
        carouselId: 'carouselExampleControls16',
        amenities: ['Wifi','Meals','Parking'],
        hostImg: './img/hostImg.jfif',
        hostName: 'Pete Davidson',
        hostBio: 'The Jailhouse has rooms available to suit everyone and we welcome children, youth and adults of all ages to experience our special budget accommodation. Our hostel is clean, warm and friendly with super-comfortable inner-sprung beds.',
        reviewImg1: './img/staunchCat.jfif',
        reviewName1: 'Normal Guy',
        reviewText1: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg2: './img/staunchCat.jfif',
        reviewName2: 'Normal Gal',
        reviewText2: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        reviewImg3: './img/staunchCat.jfif',
        reviewName3: 'Normal They',
        reviewText3: 'Sed quis diam nunc. Morbi ac justo pulvinar, convallis purus eget, elementum arcu. Phasellus vitae sollicitudin nisi, vitae semper diam. Duis ullamcorper arcu eu quam sagittis mattis. Nulla at enim rutrum, rhoncus sem non, rhoncus dui. Aliquam vehicula scelerisque mauris vel tempus. Nulla porta ultrices fermentum. Nunc vel lectus ex. Integer at efficitur turpis. Suspendisse potenti.',
        breakfastHeading: 'Breakfast - 22',
        breakfastPicture1: './img/avoToast.jpg',
        breakfastBio1: 'Eggs & Avacado on toast',
        breakfastDiet1: 'V',
        lunchHeading: 'Lunch - $25',
        lunchPicture1: './img/burger.jpg',
        lunchBio1: 'Burger w/ fries & aioli',
        lunchDiet1: 'V*, VG*',
        dinnerHeading: 'Dinner - $30',
        dinnerPicture1: './img/spagBol.jpg',
        dinnerBio1: 'Spaghetti Bolognese',
        dinnerDiet1: 'V*, VG*',
        breakfastPicture2: './img/pancakes.jpg',
        breakfastBio2: 'Buckwheat pancakes w/ fruit & syrup',
        breakfastDiet2: 'V, VG*',
        lunchPicture2: './img/pizza.jpg',
        lunchBio2: 'Pizza, specify on day',
        lunchDiet2: 'V*, VG*',
        dinnerPicture2: './img/steakDinner.jpg',
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
                        <label for="amenity">Meals
                            <input type="checkbox" name="amenity" value="Meals">
                        </label>
                        <label for="amenity">EV Charger
                            <input type="checkbox" name="amenity" value="EV Charger">
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
// Start of filter function
// =====================================



function mainFilters(event){

    event.preventDefault();
    console.log("clicked");

    let msDay = 100 * 36000 * 24;

    let checkInDate = new Date($("#checkIn").val());
    let checkOutDate = new Date($("#checkOut").val());

    checkInTransfer = checkInDate;
    checkOutTransfer = checkOutDate;

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
};


function displayOptions(nights, guests, city){
    
    reloadMarkers();

    // console.log(nights);
    // console.log(guests);

    $("#searchResults").empty();

    for(let i = 0; i < acom.length; i++){
        if((nights >= acom[i].minNight && nights <= acom[i].maxNight) && (guests >= acom[i].minGuest && guests <= acom[i].maxGuest) && (city === acom[i].location)){
           generateCard(i);
           
           firstSelection.push(acom[i]);

           let location = {lat: acom[i].latitude, lng: acom[i].longitude};
        //    console.log(location);

           let marker = new google.maps.Marker({
               position: location,
               map: map
           });

           console.log(parseInt(acom[i].priceNight) * parseInt(totalNights));
        //    fuck this lmao
        
        //    console.log(5*5);

            markers.push(marker);
        }
    }
    // secondFilter.addEventListener("click", checkboxFilter);

}
displayOptions();



        // =====================================
        // Checkbox Filter Function Starts
        // =====================================

        function checkboxFilter(){
            $("#searchResults").empty();
            event.preventDefault();
            let selectedType = [];
    
            console.log(firstSelection);
        
            $('input[name = "property"]:checked').each(function(){
                selectedType.push(this.value);
                console.log(this.value);

    
            });

            
            for(i = 0; i < selectedType.length; i++){
                console.log(selectedType[i]);
                for(j = 0; j < firstSelection.length; j++){
                    if(selectedType[i] === firstSelection[j].type)
                    console.log(firstSelection[j].name);
                    console.log(generateCardFilter(j));
                };
            };
        
            console.log(selectedType);
        



        };
        // checkboxFilter();
            // =====================================
            // Checkbox Filter Function Ends
            // =====================================

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
        $(".footer-indicator__box:nth-child(1)").css("background", "#000000");
        $(".footer-indicator__box:nth-child(2)").css("background", "#00abdd");
    });

    $(".moreInformation").click(function(){
        // console.log("upto");
        let i = 0;
        for(i = 0; i < acom.length; i++){
            if(parseInt(this.id) === acom[i].id){
                // console.log(acom[i].name);

                $("#contentTwoLeft").empty().append(
                    `
                    <div id="carouselExampleControls" class="carousel slide content-two__carousel" data-ride="carousel">
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
                        <div class="content-two-amenitylist"></div>
                    </div>
                    <div class="content-two__sleeps">
                        <h5 class="content-two-headings">Sleeping Arrangements</h5>
                        <div class="content-two-rooms"></div>
                    </div>
                    <div class="content-two__review">
                        <h5 class="content-two-headings">Reviews</h5>
                        <div class="content-two__person">
                            <img src="${acom[i].reviewImg1}" alt="" class="content-two-img">
                            <div class="content-two__person-box">
                                <h6 class="content-two-names">${acom[i].reviewName1}</h6>
                                <p class="content-two-text">${acom[i].reviewText1}</p>
                            </div>
                        </div>
                        <div class="content-two__person">
                            <img src="${acom[i].reviewImg2}" alt="" class="content-two-img">
                            <div class="content-two__person-box">
                                <h6 class="content-two-names">${acom[i].reviewName2}</h6>
                                <p class="content-two-text">${acom[i].reviewText2}</p>
                            </div>
                        </div>
                        <div class="content-two__person">
                            <img src="${acom[i].reviewImg3}" alt="" class="content-two-img">
                            <div class="content-two__person-box">
                                <h6 class="content-two-names">${acom[i].reviewName3}</h6>
                                <p class="content-two-text">${acom[i].reviewText3}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-two__host">
                    <h5 class="content-two-headings">Meet the Host</h5>
                        <div class="content-two__person">
                            <img src="${acom[i].hostImg}" alt="" class="content-two-img">
                            <div class="content-two__person-box">
                                <h6 class="content-two-names">${acom[i].hostName}</h6>
                                <p class="content-two-text">${acom[i].hostBio}</p>
                            </div>
                        </div>
                    </div>
                    `
                );

                        
                $("#contentTwoRight").empty().append(
                    `
                    <div class="content-two__cart-sticky">
                    <div class="content-two__written">
                        <div class="content-two__header">
                            <div class="content-two__header-block">
                                <h3 class="content-two-heading">${acom[i].header}</h3>
                                <div class="content-two__rating"><p>${acom[i].rating}</p><i class="fas fa-star"></i></div>
                            </div>
                            <h4 class="content-two-subheading">${acom[i].subHeader}</h4>
                        </div>
                        <div class="content-two__amenitiesShort">
                        <p>${acom[i].amenities.join(' | ')}</p>
                    </div>
                    </div>
                    
                    <div class="content-two__cart" id="contentTwoCart">
                        <div class="content-two__search">
                            <div class="content-two__checkin">
                                <label for="checkIn">Check-In</label>
                                <input id="contentTwoCheckIn" name="checkIn" type="date" class="content-two-checkin">
                            </div>
                            <div class="content-two__checkout">
                                <label for="checkOut">Check-Out</label>
                                <input id="contentTwoCheckOut" name="checkOut" type="date" class="content-two-checkout">
                            </div>
                            <div class="content-two__visitors">
                            <label for="visitors">Visitors</label>
                                <select id="contentTwoVisitors" name="visitors" type="text" placeholder="Who's coming" class="content-two-visitors">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five +</option>
                                </select>
                            </div>
                            <div class="content-two__price"><p>${acom[i].priceNight}/night</p></div>
                        </div>
                        <div class="content-two__cart-bottom">
                            <div class="content-two__bottomleft">
                                <div class="content-two__calc">
                                <p>${acom[i].priceNight} X ${totalNights}</p>
                                <p>-</p>
                                <p>$${acom[i].priceNight * totalNights}</p>
                                </div>
                                <div class="content-two__calc">
                                <p>Service Fee</p>
                                <p>-</p>
                                <p>$${acom[i].serviceFee}</p>
                                </div>
                                <div class="content-two__calc">
                                <p>Total</p>
                                <p>-</p>
                                <p>$${acom[i].priceNight * totalNights + acom[i].serviceFee}</p>
                                </div>
                            </div>
                        <div class="content-two__bottomright">
                            <button id="${acom[i].id}" class="content-two-btn">Select This Stay</button>
                            <p class="content-two-disclaimer">This isn't a final selection</p>
                        </div>
                    </div>
                </div>
                   
                    `
                );

                // // =====================================
                // // Stick Function Begins
                // // =====================================

                // window.onscroll = function() {stickyFunction()};

                // let cartTwo = document.getElementById("contentTwoCart");
                // let sticky = cartTwo.offsetTop;
                
                // function stickyFunction() {
                //     if (window.pageYOffset >= sticky) {
                //         cartTwo.classList.add("sticky")
                //     } else {
                //         cartTwo.classList.remove("sticky");
                //     }
                  
                // }

                // // =====================================
                // // Stick Function Begins
                // // =====================================

            mealProgress();
            }
        }

        console.log(checkInTransfer);
        console.log(checkOutTransfer);       
        document.getElementById('contentTwoCheckIn').value = checkInTransfer;
        document.getElementById('contentTwoCheckOut').value = checkOutTransfer;
        // $('contentTwoCheckIn').datepicker('setDate', new Date(checkInTransfer));
        // $('contentTwoCheckOut').datepicker('setDate', new Date(checkOutTransfer));
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
                        <div class="content-three__heading-block">
                            <h3 class="content-three-heading">Please select your meal options</h3>
                            <h3 class="content-three-subheading">We have meals available for purchase</h4>
                        </div>
                        <div class="content-three__breakfast">
                            <h6 class="content-three-foodheading">Breakfast - $22</h6>
                                <img class="content-three-img" src="${acom[i].breakfastPicture1}">
                            <p class="content-three-description">${acom[i].breakfastBio1}</p>
                            <p class="content-three-dietary">${acom[i].breakfastDiet1}</p>
                                <img class="content-three-img1" src="${acom[i].breakfastPicture2}">
                            <p class="content-three-description">${acom[i].breakfastBio2}</p>
                            <p class="content-three-dietary">${acom[i].breakfastDiet2}</p>
                        </div>
                        <div class="content-three__lunch">
                            <h6 class="content-three-foodheading">Lunch - $25</h6>
                                <img class="content-three-img" src="${acom[i].lunchPicture1}">
                            <p class="content-three-description">${acom[i].lunchBio1}</p>
                            <p class="content-three-dietary">${acom[i].lunchDiet1}</p>
                                <img class="content-three-img1" src="${acom[i].lunchPicture2}">
                            <p class="content-three-description">${acom[i].lunchBio2}</p>
                            <p class="content-three-dietary">${acom[i].lunchDiet2}</p>
                        </div>
                        <div class="content-three__dinner">
                            <h6 class="content-three-foodheading">Dinner - $30</h6>
                                <img class="content-three-img" src="${acom[i].dinnerPicture1}">
                            <p class="content-three-description">${acom[i].dinnerBio1}</p>
                            <p class="content-three-dietary">${acom[i].dinnerDiet1}</p>
                                <img class="content-three-img1" src="${acom[i].dinnerPicture2}">
                            <p class="content-three-description">${acom[i].dinnerBio2}</p>
                            <p class="content-three-dietary">${acom[i].dinnerDiet2}</p>
                        </div>
                    `
                )

                $("#contentThreeRight").empty().append(
                    `
                    <div class="content-three__written">
                        <div class="content-thee__header">
                            <h3 class="content-three__heading"></h3>
                            <img src="" alt="" class="content-three-star">
                        </div>
                    </div>
                    <div class="content-three__cart">
                        <div class="content-three__search">
                            <div class="content-three-checkin">

                            </div>
                            <div class="content-three-checkout">

                            </div>
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

$( ".content-three-checkin" ).datepicker( "setDate", "10/12/2012" );

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

            <div class="card" style="width: 35rem;">
            <div id="${acom[x].carouselId}" class="carousel slide" data-ride="carousel">
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
                    <a class="carousel-control-prev" href="#${acom[x].carouselId}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#${acom[x].carouselId}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                    <div id="${acom[x].id}" class="card-body moreInformation">
                        <div class="card-top">
                            <h6 class="card-subheading">${acom[x].subHeader}</h6>
                            <div class="card-rating"><i class="fas fa-star"></i>${acom[x].rating}</div>
                        </div>
                        <h5 class="card-title">${acom[x].header}</h5>
                    <div class="card-amenities">
                        <p>${acom[x].amenities.slice(0,3).join(' | ')}</p>
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

function generateCardFilter(x){
    // let x = i;
    $('#searchResults').append(
        `

            <div class="card" style="width: 35rem;">
            <div id="${acom[x].carouselId}" class="carousel slide" data-ride="carousel">
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
                    <a class="carousel-control-prev" href="#${acom[x].carouselId}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#${acom[x].carouselId}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                    <div id="${acom[x].id}" class="card-body moreInformation">
                        <div class="card-top">
                            <h6 class="card-subheading">${acom[x].subHeader}</h6>
                            <div class="card-rating">${acom[x].rating}<i class="fas fa-star"></i></div>
                        </div>
                        <h5 class="card-title">${acom[x].header}</h5>
                    <div class="card-amenities">
                        <p>${acom[x].amenities.slice(0,3).join(' | ')}</p>
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