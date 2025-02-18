$(document).ready(function () {
    setFechaActual();
}); 


function setFechaActual() {
    let hoy = new Date();
    let fechaFormato = hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    $('#fecha').val(fechaFormato);
}

var valida=true;

function registrar() {

      valida=validaForm();
      if(valida==false)
      {
        return;
      }

    var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/registros"; // URL del endpoint
  
    let isChecked = $('#chkIngles').is(":checked");

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
        "recursos":$('#recursos').val(),
        "ingles": isChecked
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


function validaForm()
{
    let esValido = true;

    if ($("#equipo").val().trim() === "") {
        $("#error-equipo").show();
        esValido = false;
    } else {
        $("#error-equipo").hide();
    }

    if ($("#proyecto").val().trim() === "") {
        $("#error-proyecto").show();
        esValido = false;
    } else {
        $("#error-proyecto").hide();
    }

    if ($("#representante").val().trim() === "") {
        $("#error-representante").show();
        esValido = false;
    } else {
        $("#error-representante").hide();
    }


    if ($("#carrera").val().trim() === "") {
        $("#error-carrera").show();
        esValido = false;
    } else {
        $("#error-carrera").hide();
    }


    if ($("#tetra").val().trim() === "") {
        $("#error-tetra").show();
        esValido = false;
    } else {
        $("#error-tetra").hide();
    }


    if ($("#turno").val().trim() === "") {
        $("#error-turno").show();
        esValido = false;
    } else {
        $("#error-turno").hide();
    }


    if ($("#asesor").val().trim() === "") {
        $("#error-asesor").show();
        esValido = false;
    } else {
        $("#error-asesor").hide();
    }


    if ($("#asesorSecundario").val().trim() === "") {
        $("#error-asesorSecundario").show();
        esValido = false;
    } else {
        $("#error-asesorSecundario").hide();
    }


    if ($("#descripcionProyecto").val().trim() === "") {
        $("#error-descripcionProyecto").show();
        esValido = false;
    } else {
        $("#error-descripcionProyecto").hide();
    }

    if ($("#recursos").val().trim() === "") {
        $("#error-recursos").show();
        esValido = false;
    } else {
        $("#error-recursos").hide();
    }

    // Evitar el envío si hay errores
    if (!esValido) {
        return false;
    }
}