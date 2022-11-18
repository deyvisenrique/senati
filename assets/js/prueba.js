
$(document).ready(function () {

    function showmodal(){
        $('.modal').addClass('show');
        $('.modal-wrap').addClass('show');
    }

    $("#close").click(function(){
        $('.modal').removeClass('show');
        $('.modal-wrap').removeClass('show');
    });
    
    setTimeout(showmodal, 2000);

});