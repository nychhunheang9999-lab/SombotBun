document.addEventListener("DOMContentLoaded", function() {
    // 1. Reveal the invitation smoothly when the page loads
    const wrapper = document.getElementById('revealArea');
    if (wrapper) {
        wrapper.style.opacity = "1";
    }

    // 2. Updated Google Maps Link
    const mapBtn = document.getElementById('mapBtn');
    if (mapBtn) {
        mapBtn.addEventListener('click', function() {
            const mapUrl = "https://goo.gl/maps/oXcH8NDwRpPAne639";
            window.open(mapUrl, '_blank');
        });
    }
});
