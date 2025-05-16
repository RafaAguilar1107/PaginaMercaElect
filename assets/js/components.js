document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Cargar footer
        const footerResponse = await fetch('components/footer.html');
        if (!footerResponse.ok) throw new Error('Error al cargar el footer');
        const footerContent = await footerResponse.text();
        document.querySelector('footer').innerHTML = footerContent;
    } catch (error) {
        console.error('Error cargando componentes:', error);
    }
});