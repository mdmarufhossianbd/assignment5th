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

let selectedSeats = [];
const seatPrice = 550; // Price per seat
const applyCouponBtn = document.getElementById('applyCoupon');
const couponInput = document.getElementById('couponInput');
const selectedSeatsDisplay = document.getElementById('selectedSeats');
const totalPriceDisplay = document.getElementById('totalPrice');
const grandTotalDisplay = document.getElementById('grandTotal');
const discountPriceDisplay = document.getElementById('discount_price');
const couponSection = document.getElementById('couponSection');

// Event listener for applying coupon
applyCouponBtn.addEventListener('click', applyCoupon);

function applyCoupon() {
    const couponCode = couponInput.value;
    if (couponCode === 'NEW15' && selectedSeats.length === 4) {
        // Apply coupon logic for NEW15 (15% discount)
        const totalPrice = selectedSeats.length * seatPrice;
        const discount = totalPrice * 0.15;
        const finalPrice = totalPrice - discount;
        grandTotalDisplay.textContent = finalPrice.toFixed(2);
        discountPriceDisplay.textContent = `Discount: ${discount.toFixed(2)}`;
        
        // Hide coupon input and button after applying coupon
        couponSection.style.display = 'none';
    } else if (couponCode === 'Couple 20' && selectedSeats.length === 4) {
        // Apply coupon logic for Couple 20 (15% discount)
        const totalPrice = selectedSeats.length * seatPrice;
        const discount = totalPrice * 0.2;
        const finalPrice = totalPrice - discount;
        grandTotalDisplay.textContent = finalPrice.toFixed(2);
        discountPriceDisplay.textContent = `Discount: ${discount.toFixed(2)}`;
        // Hide coupon input and button after applying coupon
        couponSection.style.display = 'none';
    } else {
        alert('Invalid coupon code or condition not met.');
    }
}

function updateSeatSelection(seatName) {
    if (selectedSeats.includes(seatName)) {
        selectedSeats = selectedSeats.filter(seat => seat !== seatName);
    } else {
        if (selectedSeats.length < 4) {
            selectedSeats.push(seatName);
        } else {
            alert('You can only select a maximum of 4 seats.');
        }
    }
    updateSeatDisplay();
    updateTotalPrice();
}
// Seat Display Part
function updateSeatDisplay() {
    selectedSeatsDisplay.textContent = selectedSeats.length;
    selectedSeats.forEach((seat, index) => {
        const seatIndex = index + 1;
        const seatElement = document.getElementById(`seat_in_invoice_${seatIndex}`);
        const seatClassElement = document.getElementById(`seat_class_${seatIndex}`);
        const ticketPriceElement = document.getElementById(`ticket_price_${seatIndex}`);
        seatElement.textContent = seat;
        seatClassElement.textContent = selectedSeats.length > index ? "Economy" : "";
        ticketPriceElement.textContent = selectedSeats.length > index ? seatPrice.toFixed(2) : "";
    });
}

function updateTotalPrice() {
    totalPriceDisplay.textContent = (selectedSeats.length * seatPrice).toFixed(2);
    grandTotalDisplay.textContent = (selectedSeats.length * seatPrice).toFixed(2);
}

// Adding event listener to seat selection using traditional for loop
const seats = document.querySelectorAll('.seat-button');
for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', () => {
        const seatName = seats[i].id.replace('seat_', ''); // Extracting seat name from ID
        updateSeatSelection(seatName);
    });
}

function bookingConfirm(){
    const bookingConfirmation = document.getElementById('confirmation');
    bookingConfirmation.classList.remove('hidden');
    const seatPlaning = document.getElementById('seat_planing');
    seatPlaning.classList.add('hidden');    
};
function continueBuyTickts(){
    const bookingConfirmation = document.getElementById('confirmation');
    bookingConfirmation.classList.add('hidden');
    const seatPlaning = document.getElementById('seat_planing');
    seatPlaning.classList.remove('hidden');    
};