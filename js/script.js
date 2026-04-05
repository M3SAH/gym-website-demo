// Optimized Timer for Mobile
const challengeDate = new Date("April 6, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = challengeDate - now;

    if (diff < 0) {
        document.getElementById("timer").innerText = "LIVE NOW!";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Show Sticky CTA only after scrolling past Hero
const mobileCta = document.querySelector('.mobile-cta-bar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        mobileCta.style.display = 'block';
    } else {
        mobileCta.style.display = 'none';
    }
});