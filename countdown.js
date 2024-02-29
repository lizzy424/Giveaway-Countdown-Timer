// Set the countdown date (replace with the end date of the giveaway)
const countdownDate = new Date('2024-03-08T11:30:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('timer').innerHTML = '<p>The giveaway has ended!</p>';
    }
    }, 1000);

    