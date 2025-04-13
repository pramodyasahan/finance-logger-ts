import {Invoice} from "./models/Invoice.js";
import {Payment} from "./models/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js"
import {ListTemplates} from "./models/ListTemplates.js";

let invoices: Invoice[] = []

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!
const list = new ListTemplates(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

})