function set() {
    document.getElementById('a1').style.backgroundColor = '#1dd100'
}

function bookingConfirm() {
    const confirmTiket = document.getElementById('confirmation');
    confirmTiket.classList.remove('hidden');
}

let availableSeats = 40;
let numSeats = 0;
const buttons = document.getElementsByClassName('seat-button');
const totalSeats = document.getElementById('totalSeats');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        toggleSeat(event.target);
    });
}

function toggleSeat(button) {
    if (button.classList.contains('selected')) {
        numSeats--;
        availableSeats++;
        button.classList.remove('selected');
        button.style.backgroundColor = "#f7f8f8"; // Reset background color when deselected
    } else {
        if (numSeats < 4 && availableSeats > 0) {
            numSeats++;
            availableSeats--;
            button.classList.add('selected');
            button.style.backgroundColor = "#1dd100"; // Set background color when selected
        }
    }
    totalSeats.textContent = `Seats left: ${availableSeats}`;
};