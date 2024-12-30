function moveHeaderToSection(){
    hideElementById('header-section');
    hideElementById('hide2');
    hideElementById('success-section');
}

function moveToSuccess(){
    hideElementById('header-section');
    hideElementById('main-section');
    showElementById('success-section');
}

function hideCopuponBox(){
    hideElementById('apply-btn-copupon');
    showElementById('discount-price');
}

const seatIds = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4']

let selectedSeats = 0;
let selectedSeatIds = [];


document.addEventListener('click', getSelectedSeat);

function getSelectedSeat(event) {
    let clickedElement = event.target;
    let elementId = clickedElement.getAttribute('id');

    if (seatIds.includes(elementId) && selectedSeats<4 && !selectedSeatIds.includes(elementId)) {
        selectedSeatIds.push(elementId);
        setBackgroundById(elementId);

        const totalSeat = getTextElementValueById('total-seat');
        const seatAvailable = totalSeat - 1 ;
        setTextElementValueById('total-seat', seatAvailable);

        
        const seatSelect = getTextElementValueById('total-select');
        const totalSelect = seatSelect + 1;
        setTextElementValueById('total-select', totalSelect);

        // Total Price
        const price = getTextElementValueById('total-price');
        const totalPrice = totalSelect * 550;
        setTextElementValueById('total-price', totalPrice);

        // Grand Total
        const grandTotal = getTextElementValueById('grand-total');
        const grandTotalPrice = totalSelect * 550;
        setTextElementValueById('grand-total', grandTotalPrice);


        const seatDetailContainer = document.getElementById('seat-details-container');
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        seatDetailContainer.appendChild(div);

        const p = document.createElement('p');
        p.innerText = elementId ;
        div.appendChild(p);

        const p2 = document.createElement('p');
        p2.innerText = 'Economy' ;
        div.appendChild(p2);

        const placeList3 = document.getElementById('place-list');
        const p3 = document.createElement('p');
        p3.innerText = 550 ;
        div.appendChild(p3);


        if(totalSelect === 4){
            const btnApply = document.getElementById('btn-apply');
            const inputCopupon = document.getElementById('input-copupon');
            btnApply.removeAttribute('disabled');
            inputCopupon.removeAttribute('disabled');
            
        }
        

        selectedSeats++;
        

    }
    else{
        
        alert('You can chose only 4 ticket at a time');
    }
    
}




document.getElementById('phone-number').addEventListener('keyup', function(event){
    const text = event.target.value;
    const value = parseInt(text);
    const btnEnabled = document.getElementById('btn-enabled');
    const seatSelect = getTextElementValueById('total-select');
    if((typeof value === 'number') && (seatSelect >= 0 )){
        btnEnabled.removeAttribute('disabled');
        
    }
})


document.getElementById('input-copupon').addEventListener('keyup', function(eventId){
    const text = eventId.target.value;
    if(text === 'NEW15'){
    const discount = ((selectedSeats * 550) * 15) / 100 ;  
    
    getTextElementValueById('discount');
    setTextElementValueById('discount', discount);

    const grandTotal = getTextElementValueById('grand-total');
    const grandTotalPrice = selectedSeats * 550;
    const afterDiscountTotal = grandTotalPrice - discount ;
    setTextElementValueById('grand-total', afterDiscountTotal);

    }

    else if (text === 'Couple 20'){
        const discount = ((selectedSeats * 550) * 20) / 100 ;  
    
        getTextElementValueById('discount');
        setTextElementValueById('discount', discount);

        const grandTotal = getTextElementValueById('grand-total');
        const grandTotalPrice = selectedSeats * 550;
        const afterDiscountTotal = grandTotalPrice - discount ;
        setTextElementValueById('grand-total', afterDiscountTotal);

    }

})











