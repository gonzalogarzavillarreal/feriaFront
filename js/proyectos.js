$(document).ready(function () {
    getRegistros();
});




function getRegistros() {

    //var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/registros"; // URL del endpoint
    var url = "http://localhost:8000/registros"; // URL del endpoint

    $.ajax({
        url: url, // URL del endpoint
        type: "GET",
        contentType: "application/json",
        data: {},
        success: function (DBdata) {
            $('#tblProyectos').DataTable({
                destroy: true,
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'excel', 'pdf'
                ],
                language: {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                },
                data: DBdata.registros,
                columns: [
                    { "data": "fecha" },
                    { "data": "equipo" },
                    { "data": "carrera" },
                    { "data": "tetra" },
                    { "data": "turno" },
                    { "data": "proyecto" },
                    { "data": "enfoque" },
                    { "data": "perfil" },
                    { "data": "asesor" },
                    { "data": "asesorSecundario" },
                ]
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });

}


function validaForm() {
    let esValido = true;

    if ($("#equipo").val().trim() === "") {
        $("#error-equipo").show();
        esValido = false;
    } else {
        $("#error-equipo").hide();
    }

    if ($("#perfil").val().trim() === "") {
        $("#error-perfil").show();
        esValido = false;
    } else {
        $("#error-perfil").hide();
    }

    if ($("#enfoque").val().trim() === "") {
        $("#error-enfoque").show();
        esValido = false;
    } else {
        $("#error-enfoque").hide();
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