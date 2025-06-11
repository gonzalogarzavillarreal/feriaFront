$(document).ready(function () {
    let llave = localStorage.getItem('llave');
    if (llave == null) {
        window.location.href = "login.html";
    }

    getRegistros();

});



function getRegistros() {
    
    var url = `https://technological-mechelle-systemnet-882c82e8.koyeb.app/registroVotacion`; // URL del endpoint
    //var url = `http://localhost:8000/registroVotacion`; // URL del endpoint

    $.ajax({
        url: url, // URL del endpoint
        type: "GET",
        contentType: "application/json",
        data: {},
        success: function (DBdata) {
            $('#tblProyectos').DataTable({
                destroy: true,
                language: {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                },
                data: DBdata.lista,
                columns: [
                    { "data": "correo" },
                    { "data": "fecha" },
                    { "data": "categoria" },
                ]
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });

}




