document.addEventListener("DOMContentLoaded", function() {
    // 1. Reveal the invitation smoothly when the page loads
    const wrapper = document.getElementById('revealArea');
    wrapper.style.opacity = "1";

    // 2. Google Maps Button Logic
    const mapBtn = document.getElementById('mapBtn');
    mapBtn.addEventListener('click', function() {
        // This is a search query for your location in Kandal
        const location = "Prek Chrou Village, Roka Kaong Ti Pir, Muk Kampuol, Kandal";
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(url, '_blank');
    });
});
