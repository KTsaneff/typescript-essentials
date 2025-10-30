import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = "";

function searchAddressHandler(event: Event) {
    event.preventDefault();

    const eneteredAddress = addressInput.value;

    axios.get(`url${GOOGLE_API_KEY}`);

}

form.addEventListener('submit', searchAddressHandler);