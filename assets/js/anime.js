$(document).ready(function(){
    $(".btnAll").click(function(){
        $(".slidePolicier").fadeToggle('slow'); 
        $(".slideAction").fadeToggle("slow");   
    });
    $(".btnAction").click(function(){   
        $(".slideAction").fadeToggle("slow");    
    });
    $(".btnPolicier").click(function(){   
        $(".slidePolicier").fadeToggle("slow");    
    });
    $(".btnPlus").click(function(){   
        $(".slidePolicier2").fadeToggle("slow");
        $(".slideAction2").fadeToggle("slow");
        $(".btnPlus").text("Plus de films");
    });
});