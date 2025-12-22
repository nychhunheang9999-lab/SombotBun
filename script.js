document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.main-title');
    
    // Example: Dynamically adding a "shimmer" animation via JS
    title.style.backgroundSize = "200% auto";
    
    let position = 0;
    function animateGradient() {
        position += 1;
        title.style.backgroundPosition = `${position}% center`;
        requestAnimationFrame(animateGradient);
    }
    
    // Start the shimmer animation
    animateGradient();
});
