// Countdown Timer Logic
const countdownDate = new Date("April 6, 2026 00:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "CHALLENGE STARTED!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Update every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Simple scroll reveal effect for CTA visibility
const stickyCta = document.querySelector('.sticky-cta');
window.addEventListener('scroll', () => {
    // Hide sticky CTA when very close to top to clean up hero view
    if (window.scrollY < 200) {
        stickyCta.style.display = 'none';
    } else {
        stickyCta.style.display = 'flex';
    }
});