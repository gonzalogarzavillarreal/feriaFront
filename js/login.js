function valida() {

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == "" || pass == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/Usuario"; // URL del endpoint
    //var url = "http://localhost:8000/Usuario"; // URL del endpoint
    var data = {
        "id": "",
        "usuario": user,
        "password": pass,
        "admin": true
    }

    $.ajax({
        url: url, // URL del endpoint
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (DBdata) {
            localStorage.setItem('llave', DBdata.llave);
            window.location.href = "panel.html";         
        },
        error: function (xhr, status, error) {
            $('#aviso').modal('show');
        }
    });

}