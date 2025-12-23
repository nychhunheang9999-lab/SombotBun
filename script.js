document.addEventListener("DOMContentLoaded", function() {
    // Reveal ticket
    const wrapper = document.getElementById('revealArea');
    if (wrapper) wrapper.style.opacity = "1";

    // Map Button
    const mapBtn = document.getElementById('mapBtn');
    if (mapBtn) {
        mapBtn.addEventListener('click', function() {
            window.open("https://goo.gl/maps/oXcH8NDwRpPAne639", '_blank');
        });
    }
});
