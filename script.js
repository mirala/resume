  $(document).ready(function(){
    
    $(".accordion p:not(:first)").hide();

    $(".accordion h3").click(function(){

        $(this).next(".accordion p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
     });
 
 });
