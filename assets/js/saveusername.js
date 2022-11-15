
formmodal.addEventListener( "submit", validarFormmodal )

function validarFormmodal(e){
    e.preventDefault();
    const nombrem = document.querySelector("#nombremod").value
    const respuesta = document.getElementById("mod1");
    const respuesta1 = document.getElementById("mod2");
    const respuesta2 = document.getElementById("mod3");
    const respuesta3 = document.getElementById("mod4");
    const respuesta4 = document.getElementById("mod5");
    const respuesta5 = document.getElementById("mod6");
    const respuesta6 = document.getElementById("mod7");

    respuesta.textContent = `Tenemos el mejor diseño web digital para ti  ${nombrem}`
    respuesta1.textContent = `La mejor agencia de soluciones de diseño web para ti   ${nombrem}`
    respuesta2.textContent = `${nombrem}, no te olvides de ver todos nuestros planes`
    respuesta3.textContent = `Asombrosas funciones para ti ${nombrem}`
    respuesta4.textContent = ` ${nombrem}, tenemos la mejor agencia de soluciones de diseño web. `
    respuesta5.textContent = `${nombrem}, somo lideres con socios globales`
    respuesta6.textContent = `¡ ${nombrem} !, no dude en ponerse en contacto con nosotros `
    
    
}
