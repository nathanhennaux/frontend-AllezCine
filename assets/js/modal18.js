$( function() {
    $( "#dialog-message" ).dialog({
        resizable: false,
        height: "auto",
        width: 600,
        modal: true,
        buttons: {
            "+ de 18": function() {
                $( this ).dialog( "close" );  
            },
            "- de 18": function() {  
                document.location.href="https://www.imdb.com/";
            }
        }
    });
});