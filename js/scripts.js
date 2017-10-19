<script>
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
  });

</script>
