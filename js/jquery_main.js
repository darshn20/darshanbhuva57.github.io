$(document).ready(function(){


  $("table").hide();
  
  

  

  $("#view").click(function(){
    $("table").show(1000);
  });

  
  


  $("tr").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "white");
    }, 
    click: function(){
      $(this).css("background-color", "lightblue");
    }  
  });
  
});