document.addEventListener("DOMContentLoaded", (e) => {

    const textoGuardado = localStorage.getItem('textoGuardado');
    const dataText= document.getElementById("data")

    if (textoGuardado !== null) {
        dataText.textContent = textoGuardado;
    }
});