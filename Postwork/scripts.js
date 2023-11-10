// Obtener elementos del DOM
const modal = document.getElementById('productModal');
const btn = document.getElementById('showModalBtn');
const span = document.getElementsByClassName('close-btn')[0];

// Mostrar el modal al hacer clic en el botón
btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
