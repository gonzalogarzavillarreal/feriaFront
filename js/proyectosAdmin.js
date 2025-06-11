$(document).ready(function () {
    getRegistros();
});


$('#tblProyectos').on('click', '.btn-ejecutar', function () {
    // Encuentra la fila (tr) que contiene el botón
    var fila = $(this).closest('tr');

    // Toma el valor de la primera columna (por índice, 0 es la primera)
    var id = fila.find('td:eq(0)').text();
    // Llama a tu función personalizada (si aplica)
    updateRegistro(id);
});

function updateRegistro(id) {
    $('#Asignar').modal('show');
     localStorage.setItem('id', id);
}


function getRegistros() {

    var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/registros"; // URL del endpoint
   //var url = "http://localhost:8000/registros"; // URL del endpoint

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
                    { "data": "id" },
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
                    { "data": "descripcionProyecto" },
                    { "data": "url" },
                    { "data": "mesa" },
                    {
                        "data": "",
                        "render": function (data, type, row) {
                            return `<button class="btn btn-primary btn-ejecutar">Mesa</button>`;
                        }
                    }
                ]
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });

}


function Update() { 
    let id= localStorage.getItem('id');
    let mesa=$('#mesa').val();
      var url = `https://technological-mechelle-systemnet-882c82e8.koyeb.app/UpdateRegistros/${id}/${mesa}`; // URL del endpoint
     //var url = `http://localhost:8000/UpdateRegistros/${id}/${mesa}`; // URL del endpoint
    
    $('#Asignar').modal('hide');
    $.ajax({
        url: url, // URL del endpoint
        type: "GET", // Método HTTP
        contentType: "application/json", // Tipo de contenido
        data: {}, // Convertir el objeto a JSON
        success: function(response) {
            getRegistros();
        },
        error: function(xhr, status, error) {
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

    if ($("#url").val().trim() === "") {
        $("#error-url").show();
        esValido = false;
    } else {
        $("#error-url").hide();
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