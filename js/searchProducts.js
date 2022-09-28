import { Muebles } from "./arrayMuebles.js";

//traigo elementos del html
const searchBtn = document.querySelector('.btnSearch')
const inputSearch = document.querySelector('#search')
const productosFiltrados = document.querySelector('.productosFiltrados')
const messageSearch = document.querySelector('.message-search')
const searchResult = document.querySelector('.search-result')
const busquedaContainer = document.querySelector('.busqueda-container')
const searchAdvancedContainer = document.querySelector('.search-advanced-container');
const prodDestacadosIndex = document.querySelector('#productos-destacados')
const seleccion = document.querySelector('#seleccion')



//nuevo array de array para guardar los filtrados;
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



// FUNCIONES DE PRODUCTOS DESTACADOS !!!


// FUNCIONES PARA RENDERIZAR EN INDEX.HTML
 const createHtmlProdDestacados = (array) => {
    return `
    <h3>PRODUCTOS DESTACADOS</h3>
    <ul class="productos-destacados">
        <li class="productos-destacados-item" id="1"><a href="#" class="productos-destacados-link"></a>
            <img src="${array[10].imagen}" alt="">
            <h4>${array[10].nombre}</h4>
            <a href="javascript:" class="btnVerMas" data-id=${array[10].id} >Ver Más</a> 
        </li>
        <li class="productos-destacados-item" id="2"><a href="#" class="productos-destacados-link" target="_blank"></a>
            <img src="${array[13].imagen}" alt="">
            <h4>${array[13].nombre}</h4>
            <a href="javascript:" class="btnVerMas" data-id=${array[13].id} >Ver Más</a>
        </li>
        <li class="productos-destacados-item" id="3"><a href="#" class="productos-destacados-link"></a>
            <img src="${array[5].imagen}" alt="">
            
            <h4>${array[5].nombre}</h4>
            <a href="javascript:" class="btnVerMas" data-id=${array[5].id} >Ver Más</a> 
        </li>
        <li class="productos-destacados-item" id="4"><a href="#" class="productos-destacados-link" target=""></a>
            <img src="${array[25].imagen}" alt="">
            <h4>${array[25].nombre}</h4>
            <a href="javascript:" class="btnVerMas" data-id=${array[25].id}>Ver Más</a> 
        </li>
    </ul>

    `
}

  const rendercreateHtmlProdDestacados = (array) => {
    prodDestacadosIndex.innerHTML = createHtmlProdDestacados(array);
}





//FUNCIONES PARA RENDERIZAR EN PRODUCTOS.HTML
  const createHTMLprodSeleccionados = (array) => {
    return `
     <li class="productosFiltrados-item">
             <img src="${array[0].imagen}" alt="" class="imagen-product-search">
             <h3 class="titulo-search">${array[0].nombre}</h3>
         <div class="info-product"> 
             <h4 class="categoria-search"><p>Categoria: ${array[0].categoria} </p></h4>
         </div>
     </li>`;
 }

 const render = (array) => {
    seleccion.innerHTML = createHTMLprodSeleccionados(array)
}

let arrayProdDestacados = [];
 
 const filtrarProdDestacado = e => {
    
    e.preventDefault()

   if(!e.target.classList.contains('btnVerMas')) return;
    window.open('./productos.html')
    const filterID = Number(e.target.dataset.id);

    arrayProdDestacados = Muebles.filter(prod => prod.id === filterID)
    console.log(arrayProdDestacados)

    render(arrayProdDestacados)
    return arrayProdDestacados;
}



// PROBLEMA !!!
// al hacer click en un producto destacado en index.html, necesito que se
// muestre en productos.html, osea en un html externo
//Pero al estar linkeados los archivos js en ambos html, lee etiquetas que no hay
//y salta un error.
// como puedo mostrar datos que capto en un html y mostrarlo en otro html diferente


const init = () => {
    busquedaContainer.addEventListener('submit', searchProduct)
    prodDestacadosIndex.addEventListener('click', filtrarProdDestacado)
    rendercreateHtmlProdDestacados(Muebles)
}

init();















