

document.addEventListener('DOMContentLoaded', () => {
    const bloqueDerechos = document.querySelector('.derechos');
    if (!bloqueDerechos) return;

    const parrafo = bloqueDerechos.querySelector('.footer_titulo');
    if (!parrafo) return;

    const anioActual = new Date().getFullYear();
    parrafo.textContent = parrafo.textContent.replace(/\d{4}/, anioActual);
});