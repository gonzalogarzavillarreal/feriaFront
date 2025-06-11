$(document).ready(function () {
    llave= localStorage.getItem('llave');
    if(llave==null){
        window.location.href = "login.html"; 
    }

    getEvento();
})

function cambiarVotacion(){
    let estatus=$('#Votación').is(':checked');
    var url =  `https://technological-mechelle-systemnet-882c82e8.koyeb.app/cambiarEvento/${estatus}`; // URL del endpoint
    //var url = `http://localhost:8000/cambiarEvento/${estatus}`; //
    
    var data = {"estatus":$('#Votación').is(':checked')};
    $.ajax({
        url: url, // URL del endpoint
        type: "GET",
        contentType: "application/json",
        data: {},
        success: function (DBdata) {
            alert('Se ha cambiado el estatus de la votación');
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}


function getEvento(){

   var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/evento"; // URL del endpoint
   //var url = "http://localhost:8000/evento"; //
    $.ajax({
        url: url, // URL del endpoint
        type: "GET",
        contentType: "application/json",
        data: {},
        success: function (DBdata) {
           if(DBdata.estatus==true){
                $('#Votación').prop('checked',true);
           }else{
                $('#Votación').prop('checked',false);
           }
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}


