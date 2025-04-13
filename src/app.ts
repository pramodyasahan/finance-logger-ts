import {Invoice} from "./models/Invoice";
import {Payment} from "./models/Payment";
import {HasFormatter} from "./interfaces/HasFormatter"

let invoices: Invoice[] = []

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc.format);
})