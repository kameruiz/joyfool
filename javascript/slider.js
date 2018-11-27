$( ".slide" ).click(function() {
    if (  $( this ).css( ".slider" ) == 'none' ){
        $(this).css(".slider");
    } else {
        $(this).css("");
    }
});