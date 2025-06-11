$(document).ready(function () {
    getRegistros();
});


$('#tblProyectos').on('click', '.btn-ejecutar', function () {
    // Encuentra la fila (tr) que contiene el botón
    var fila = $(this).closest('tr');

    // Toma el valor de la primera columna (por índice, 0 es la primera)
    var eqipo = fila.find('td:eq(0)').text();
    var mesa = fila.find('td:eq(4)').text();
    // Llama a tu función personalizada (si aplica)
    Votar(eqipo, mesa);
});

function Votar(eqipo, mesa) {
    $('#Asignar').modal('show');
    localStorage.setItem('equipo', eqipo);
    localStorage.setItem('mesa', mesa);
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
                language: {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                },
                data: DBdata.registros,
                columns: [
                    { "data": "equipo" },
                    { "data": "carrera" },
                    { "data": "proyecto" },
                    { "data": "descripcionProyecto" },
                    { "data": "mesa" },
                    {
                        "data": "",
                        "render": function (data, type, row) {
                            return `<button class="btn btn-primary btn-ejecutar">Votar</button>`;
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

function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function Update() {
    let equipo = localStorage.getItem('equipo');
    let mesa = localStorage.getItem('mesa');
    let correo=$('#correo').val();
    if(validarCorreo(correo)==false){
        alert("Ingrese un correo valido");
        return;
    }
  
    var data = {
        "id": "",
        "correo": correo,
        "equipo":equipo,
        "mesa": mesa,
        "categoria": ""
    }

    var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/Votacion"; // URL del endpoint
   // var url = `http://localhost:8000/Votacion`; // URL del endpoint

    $('#Asignar').modal('hide');
    $.ajax({
        url: url, // URL del endpoint
        type: "POST", // Método HTTP
        contentType: "application/json", // Tipo de contenido
        data: JSON.stringify(data), // Convertir el objeto a JSON
        success: function (response) {
            $('#correo').val('');
            $('#aviso').modal('show'); 
        },
        error: function (xhr, status, error) {
            alert('La votación esta cerrada o ya existe un voto con este correo');
        }
    });

}

