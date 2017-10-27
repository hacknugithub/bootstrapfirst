
  $(document).ready(function(){
    // $('[data-toggle="tooltip"]').tooltip();
    $("#mycarousel").carousel( { interval: 4000 } );

    $("#carousel-button").click(function(){
      if($("#carousel-button").children("span").hasClass("fa-pause")){
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass("fa-pause");
        $("#carousel-button").removeClass("btn-default");
        $("#carousel-button").children("span").addClass("fa-play");
        $("#carousel-button").addClass("btn-success");
      } else{
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass("fa-play");
        $("#carousel-button").removeClass("btn-success");
        $("#carousel-button").children("span").addClass("fa-pause");
        $("#carousel-button").addClass("btn-default");
      }
    });

    $("#loginModTrig").click(function(){
      $("#loginModal").modal();
    });

    $("#resModTrig").click(function(){
      $("#reservationModal").modal();
    });
  });
function initMap(){

    var location = new google.maps.LatLng(	22.334204, 	114.217638);

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: location,
      zoom: 15,
      panControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
            position: location,
            map: map
            // icon: markerImage
        });

        google.maps.event.addDomListener(window, 'load', initMap);
};
