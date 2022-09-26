//traigo elementos del html
const searchBtn = document.querySelector('.btnSearch')
const inputSearch = document.querySelector('#search')
const productosFiltrados = document.querySelector('.productosFiltrados')
const messageSearch = document.querySelector('.message-search')
const searchResult = document.querySelector('.search-result')
const busquedaContainer = document.querySelector('.busqueda-container')
const searchAdvancedContainer = document.querySelector('.search-advanced-container');

//nuevo array de Muebles para guardar los filtrados;
let nuevoMuebles = [];



//funcion para crear el Html
const createHtmlMuebles = muebles => {
    return `
    <li class="productosFiltrados-item">
            <img src="${muebles.imagen}" alt="" class="imagen-product-search">
            <h3 class="titulo-search">${muebles.nombre}</h3>
        <div class="info-product"> 
            <h4 class="categoria-search"><p>Categoria: ${muebles.categoria} </p></h4>
        </div>
    </li>`
}
//funcion para renderizar el Javascript en el Html
const renderMuebles = muebles => {
    productosFiltrados.innerHTML = muebles.map(mueble => createHtmlMuebles(mueble)).join('')
}


//LINK DE IR A PRODUCTOS
const createHtmlSearchAdvancedContainer = ()=> `<a href="./productos.html" target="_blank" class="search-advanced-link">Ir a Productos</a>`
const renderSearchAdvancedContainer = () => searchAdvancedContainer.innerHTML = createHtmlSearchAdvancedContainer();

//RESULTADO DE BUSQUEDA
const createHtmlResult = mueble => `<h4 class="result">Hemos encontrado ${mueble.length} productos para la busqueda de "${inputSearch.value}" </h4>`
const renderResult = mueble => searchResult.innerHTML = createHtmlResult(mueble)




//funcion para buscar un producto
const searchProduct = e => {
    e.preventDefault();
    
    const nameProduct = inputSearch.value.trim().toLowerCase();

    if(!nameProduct.length){
        messageSearch.textContent = 'Por favor, ingresa un producto!';
        inputSearch.style.border = '3px solid red';
        nuevoMuebles=[];
    }else if(
        //filtro elementos que los tags coincidan
        //si includes devuelve 0, se ejecuta este codigo
        (nuevoMuebles = Muebles.filter(mueble => mueble.tags?.includes(nameProduct)) == 0)
    ){
        messageSearch.textContent='Ups! No se encontro ese producto !';
        inputSearch.style.border = '3px solid red'
        nuevoMuebles = [];
    }else if(
        //si includes devuelve true(encuentra la coincidencia), se ejecuta esto
        nuevoMuebles = Muebles.filter(mueble => mueble.tags?.includes(nameProduct))
    ){
        messageSearch.textContent = '';
        inputSearch.style.border= '3px solid rgb(146, 0, 209)'  
        renderSearchAdvancedContainer()
    }
    
    renderResult(nuevoMuebles)
    renderMuebles(nuevoMuebles);

}






const init = () => {
    busquedaContainer.addEventListener('submit', searchProduct)
}

init();















