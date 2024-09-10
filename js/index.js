document.addEventListener("DOMContentLoaded", (e) => {

    const boton = document.getElementById("buttonText");

    function guardarData () {
        const data = document.getElementById("inputText").value;
        localStorage.setItem('textoGuardado', data);
    }
    
    boton.addEventListener("click", guardarData);
});
