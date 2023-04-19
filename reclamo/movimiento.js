const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_final = document.querySelector(".fin");


btn_adelante2.addEventListener("click", function(e){
    e.preventDefault();

    var nombres = document.getElementById("nombres").value;
      if (nombres=="" || apellido=="" || correo==""){
        document.getElementById("nombres-error").innerHTML = "* Este campo debe ser completado."
        document.getElementById("apellido-error").innerHTML = "* Este campo debe ser completado."
        document.getElementById("correo-error").innerHTML = "* Este campo debe ser completado."
      }else{ 
        document.getElementById("nombres-error").innerHTML = ""
        document.getElementById("apellido-error").innerHTML = ""
        document.getElementById("correo-error").innerHTML = ""
        movPag.style.marginLeft = "-50%";
      }
});

btn_atras1.addEventListener("click", function(e){
    e.preventDefault();

    movPag.style.marginLeft = "0%";
});


btn_final.addEventListener("click", function(e){
    e.preventDefault();
    var reclamo = document.getElementById("reclamo").value;
    if (reclamo==""){
      document.getElementById("reclamo-error").innerHTML = "* Este campo debe ser completado."
    }else{ 

   alert("Su reclamo ha sido enviado correctamente.")}
});