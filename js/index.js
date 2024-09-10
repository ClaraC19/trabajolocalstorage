document.addEventListener("DOMContentLoaded", (e) => {

    const boton = document.getElementById("buttonText");
    const input = document.getElementById("inputText");

    function guardarData () {
        const data = input.value;
        localStorage.setItem('textoGuardado', data);
    }
    
    boton.addEventListener("click", guardarData);
});
