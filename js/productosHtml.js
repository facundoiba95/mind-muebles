import { Muebles } from "./arrayMuebles.js";
const showAllMuebles = document.querySelector('.showAllMuebles')
import { createHtmlMuebles } from "./searchProducts.js";

const renderArrayMuebles = (array) => {
    showAllMuebles.innerHTML = array.map(muebles => createHtmlMuebles(muebles)).join('')
}
renderArrayMuebles(JSON.parse(localStorage.getItem('Muebles')))





















   
  









