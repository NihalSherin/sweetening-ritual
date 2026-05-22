document.addEventListener('DOMContentLoaded', () => {
    // Set the target date: 24 MAY 2026 07:00 PM
    const targetDate = new Date('May 24, 2026 19:00:00').getTime();

    // DOM Elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Target date has passed
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minutesEl.innerText = "00";
            secondsEl.innerText = "00";
            return;
        }

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatting to always show 2 digits
        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Update the countdown every 1 second
    setInterval(updateCountdown, 1000);
    
    // Initial call to prevent delay
    updateCountdown();

    // Add interactivity to nav items
    const navItems = document.querySelectorAll('.nav-item');
    let audioPlaying = true;
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't prevent default for phone links
            if (item.getAttribute('href').startsWith('tel:')) {
                return;
            }
            e.preventDefault();
            
            // Handle audio toggle separately
            if (item.id === 'audio-toggle-nav') {
                audioPlaying = !audioPlaying;
                const icon = item.querySelector('i');
                if (audioPlaying) {
                    icon.className = 'ph ph-speaker-high';
                } else {
                    icon.className = 'ph ph-speaker-slash';
                }
                return;
            }

            // Normal active state toggle for other items
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });


});
