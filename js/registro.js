$(document).ready(function () {
    setFechaActual();
}); 


function setFechaActual() {
    let hoy = new Date();
    let fechaFormato = hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    $('#fecha').val(fechaFormato);
}

function registrar() {
    var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/registros"; // URL del endpoint

    var data = {
        "id": "",
        "equipo": $('#equipo').val(),
        "fecha": $('#fecha').val(),
        "proyecto":$('#proyecto').val(),
        "representante":$('#representante').val(),
        "carrera":$('#carrera').val(),
        "tetra":$('#tetra').val(),
        "turno":$('#turno').val(),
        "asesor":$('#asesor').val(),
        "asesorSecundario":$('#asesorSecundario').val(),
        "descripcionProyecto":$('#descripcionProyecto').val(),
        "recursos":$('#recursos').val()
    }
    
    $.ajax({
        url: url, // URL del endpoint
        type: "POST", // Método HTTP
        contentType: "application/json", // Tipo de contenido
        data: JSON.stringify(data), // Convertir el objeto a JSON
        success: function(response) {
            $('#equipo').val('');
            $('#proyecto').val('');
            $('#representante').val('');
            $('#carrera').val('');
            $('#tetra').val('');
            $('#turno').val('');
            $('#asesor').val('');
            $('#asesorSecundario').val('');
            $('#descripcionProyecto').val('');
            $('#recursos').val('');
            $('#aviso').modal('show'); 
        },
        error: function(xhr, status, error) {
            console.error("Error:", error);
        }
    }); 

}