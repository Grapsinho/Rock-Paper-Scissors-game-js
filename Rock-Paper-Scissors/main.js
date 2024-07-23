import { getElementAll, startPlay } from "./utils.js";
const choices = getElementAll('.choice')

choices.forEach(element => {
    element.addEventListener('click', ()=> {
        startPlay(element.textContent.trim())
    })
});