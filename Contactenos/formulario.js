// JS para validacion del formulario
$("#frmDatos").validate({
    rules: {
        correo: {
            required: true,
            email: true
        },
        name :{
            required: true,
            mainlenght: 3,
            maxlenght: 20
        }

    }

})

$("#guardar").click(function () {
    if ($("#frmDatos").valid() == false) {
        return;
    }
    let name = $("#name").val()
    let correo = $("#correo").val()
    let mensaje = $("#mensaje").val()

})

$document.getElementById('.enviar').onclick (function(){
    alert('¡Su mensaje fue enviado!');
})

// Js del API de maps

function iniciarMap(){
    var coord = {lat: -34.6299759,lng: -58.4770994};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}