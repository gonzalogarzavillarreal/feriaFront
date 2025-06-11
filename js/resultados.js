$(document).ready(function () {
    let llave = localStorage.getItem('llave');
    if (llave == null) {
        window.location.href = "login.html";
    }

    getRegistros();

});



function getRegistros() {
     let categoria = $('#categoria').val();
    var url = `https://technological-mechelle-systemnet-882c82e8.koyeb.app/resultados/${categoria}`; // URL del endpoint
    //var url = `http://localhost:8000/resultados/${categoria}`; // URL del endpoint

    $.ajax({
        url: url, // URL del endpoint
        type: "GET",
        contentType: "application/json",
        data: {},
        success: function (DBdata) {
            var result = [];
            let lista= DBdata.lista.reduce(function (res, value) {
                if (!res[value.mesa]) {
                    res[value.mesa] = { equipo: value.equipo, mesa: value.mesa, total: 0 };
                    result.push(res[value.mesa])
                }
                res[value.mesa].total += 1;
                return res;
            }, {});

            $('#tblProyectos').DataTable({
                destroy: true,
                language: {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                },
                data: result,
                columns: [
                    { "data": "equipo" },
                    { "data": "mesa" },
                    { "data": "total" },
                ]
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });

}




