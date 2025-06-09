$(document).ready(function () {
    
}); 


function setFechaActual() {
    let hoy = new Date();
    let fechaFormato = hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    return fechaFormato
}

var valida=true;

function registrar() {
  
  let mail=$("#email").val();

  if(mail=="")
  {
    alert("Ingrese un correo");
    return;
  }
  
  let fecha=setFechaActual();
  let categoria=localStorage.getItem('categoria');

      var url = "https://technological-mechelle-systemnet-882c82e8.koyeb.app/RegistroVotacion"; // URL del endpoint
     //var url = "http://localhost:8000/RegistroVotacion"; // URL del endpoint
   
    var data = {
        "id": "",
        "fecha": fecha,
        "correo": $("#email").val(),
        "categoria": categoria 
    }
    
    $.ajax({
        url: url, // URL del endpoint
        type: "POST", // Método HTTP
        contentType: "application/json", // Tipo de contenido
        data: JSON.stringify(data), // Convertir el objeto a JSON
        success: function(response) {
            $('#email').val('');
            $('#registroModal').modal('hide');
            $('#aviso').modal('show');
        },
        error: function(xhr, status, error) {
            console.error("Error:", error);
              $('#registroModal').modal('hide');
              alert("Error al registrar, el correo ya se encuentra registrado");
        }
    }); 

}


function categoria(categoria) {
  localStorage.setItem('categoria', categoria);
}
