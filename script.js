let availableSeats = 40;
let numSeats = 0;
const buttons = document.getElementsByClassName('seat_button');
const totalSeats = document.getElementById('total_seats');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        toggleSeat(event.target);
    });
}

// button color and seat left function

function toggleSeat(button) {
    if (button.classList.contains('selected')) {
        numSeats--;
        availableSeats++;
        button.classList.remove('selected');
        button.style.backgroundColor = "#f7f8f8";
    } else {
        if (numSeats < 4 && availableSeats > 0) {
            numSeats++;
            availableSeats--;
            button.classList.add('selected');
            button.style.backgroundColor = "#1dd100";
        }
    }
    totalSeats.textContent = `Seats left: ${availableSeats}`;
};

// Seat Booking Function

let selectedSeats = [];
const seatPrice = 550;
const applyCouponBtn = document.getElementById('apply_coupon');
const couponInput = document.getElementById('coupon_input');
const selectedSeatsDisplay = document.getElementById('selected_seats');
const totalPriceDisplay = document.getElementById('total_price');
const grandTotalDisplay = document.getElementById('grand_total');
const discountPriceDisplay = document.getElementById('discount_price');
const couponSection = document.getElementById('coupon_section');

applyCouponBtn.addEventListener('click', applyCoupon);

// discount section

function applyCoupon() {
    const couponCode = couponInput.value;
    if (couponCode === 'NEW15' && selectedSeats.length === 4) {
        // Apply coupon for NEW15 (15% discount)
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
// Seat selection counting
function updateSeatSelection(seatName) {
    const index = selectedSeats.indexOf(seatName);
    if (index !== -1) {
        selectedSeats.splice(index, 1);
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

function updateSeatDisplay() {
    selectedSeatsDisplay.innerText = selectedSeats.length;
    for (let index = 0; index < selectedSeats.length; index++) {
        const seatIndex = index + 1;
        const seat = selectedSeats[index];
        const seatElement = document.getElementById(`seat_in_invoice_${seatIndex}`);
        const seatClassElement = document.getElementById(`seat_class_${seatIndex}`);
        const ticketPriceElement = document.getElementById(`ticket_price_${seatIndex}`);
        seatElement.innerText = seat;
        seatClassElement.innerText = "Economy";
        ticketPriceElement.innerText = seatPrice.toFixed(2);
    }
}

function updateTotalPrice() {
    totalPriceDisplay.textContent = (selectedSeats.length * seatPrice).toFixed(2);
    grandTotalDisplay.textContent = (selectedSeats.length * seatPrice).toFixed(2);
}

const seats = document.querySelectorAll('.seat_button');
for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', () => {
        const seatName = seats[i].id.replace('seat_', '');
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