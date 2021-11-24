    // directions distance and duration
    // initiate a direction request to the Direction service
    // https://developers.google.com/maps/documentation/javascript/directions
    // const directionsService = new google.maps.DirectionsService();

    // direction service renderer handels the display of lines/pathways and any associated markers
    // const directionsRenderer = new google.maps.DirectionsRenderer();

    
    // directionsRenderer.setMap(map);

    // document.getElementById('submit').addEventListener('click', () => {
    //     calculateAndDisplayRoute(directionsService, directionsRenderer);
    // });

// Old initMap

    // function initMap(){

    //     $('#checkIn').datepicker({
    //         // dateFormat formats the date
    //         dateFormat: 'dd-mm-yy',
    //         // changeMonth lets us change the month
    //         changeMonth: true,
    //         minDate: new Date(),
    //         maxDate: '+2y',
    //         onselect: function(date){
    //             let selectDate = new Date(date);
    //             let msecInADay = 86400000;
    //             let stDate = new Date(selectDate.getTime() + msecInADay);
                
    //             $('#checkOut').datepicker('option', 'minDate', stDate);
    //             let enDate = new Date(selectDate.getTime() + 15 * msecInADay);
    
    //             $('#checkOut').datepicker('option', 'maxDate', enDate);
    //         }
    //     });
    
    //     $('#checkOut').datepicker({
    //         dateFormat: 'yy-mm-dd',
    //         changeMonth: true,
    //         minDate: new Date(),
    //     });
    
    //     $('#calculateDays').click(function(){
    //         dateDiff();
    //     });
    
    //     function dateDiff(){
    //         let start = $(startDate).datepicker('getDate');
    //         let end = $(endDate).datepicker('getDate');
    
    //         // Calculation to get readable days
    //         let days = (end - start)/1000/60/60/24;
    //         // $('#days').val(days);
    //     };
    
    
    //     // Auto Complete Form
    //     let start = new google.maps.places.Autocomplete(
    //         document.getElementById('location'),
    //         {
    //             types: ['(cities)']
    //         }
            
    //     ); //Auto complete Start
    
    //     // Calling the map function
    //     const map = new google.maps.Map(document.getElementById('map'),{
    //         zoom: 3,
    //         center: {lat:64.2008, lng:-149.4937},
    //         mapTypeId: 'satellite'
    //     });
    // };

    // Old iniMap ends

    // for (let i = 0; i <document.length; i++){
    //     const mainSearch = document.getElementsByClassName(".mainSearch");
    //     mainSearch.addEventListener("click", mainFilters);
    //     };