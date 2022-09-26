const prodDestacadosDOM = document.querySelector('.productos-destacados-container')

const createHtmlProdDestacados = () => {
  
    return `
    <h3>PRODUCTOS DESTACADOS</h3>
    <ul class="productos-destacados">
        <li class="productos-destacados-item" id="1"><a href="#" class="productos-destacados-link"></a>
            <img src="${Muebles[10].imagen}" alt="">
            <h4>${Muebles[10].nombre}</h4>
            <a href="#">Ver Más</a> 
        </li>
        <li class="productos-destacados-item" id="2"><a href="#" class="productos-destacados-link"></a>
            <img src="${Muebles[13].imagen}" alt="">
            <h4>${Muebles[13].nombre}</h4>
            <a href="#">Ver Más</a>
        </li>
        <li class="productos-destacados-item" id="3"><a href="#" class="productos-destacados-link"></a>
            <img src="${Muebles[5].imagen}" alt="">
            
            <h4>${Muebles[5].nombre}</h4>
            <a href="#">Ver Más</a> 
        </li>
        <li class="productos-destacados-item" id="4"><a href="#" class="productos-destacados-link"></a>
            <img src="${Muebles[25].imagen}" alt="">
            <h4>${Muebles[25].nombre}</h4>
            <a href="#">Ver Más</a> 
        </li>
    </ul>

    `
}
const rendercreateHtmlProdDestacados = () => {
    prodDestacadosDOM.innerHTML = createHtmlProdDestacados();
}

rendercreateHtmlProdDestacados();