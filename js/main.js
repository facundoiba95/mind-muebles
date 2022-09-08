let Muebles = [
    {
        id:1,
        nombre: 'Bajo mesada',
        categoria: 'cocina',
        color: ['marron','negro','marron claro'],
        tags: ['mesada','mueble para cocina','bajo mesada','cocina'],
        imagen: './img/muebles-mind/bajomesada.jpeg'

    },
    {
        id:2,
        nombre: 'Desayunador',
        categoria: 'cocina',
        color: ['gris','negro','marron claro'],
        tags: ['mesa','cocina','desayunador','barra','barra para cocina','mesada','desayuno'],
        imagen: './img/muebles-mind/desayunador.jpeg'
    },
    {
        id:3,
        nombre: 'Escritorio de oficina',
        categoria: 'oficina',
        color: ['marron','negro','blanco'],
        tags: ['escritorio','mesa','oficina','office','negro','escritorio de oficina','pc','para pc','oficina'],
        imagen: './img/muebles-mind/escritorio_oficina.jpeg'
    },
    {
        id:4,
        nombre: 'Mostrador recepción',
        categoria: 'oficina',
        color: ['marron','negro','blanco'],
        tags: ['escritorio','living','mesa','mesa de living'],
        imagen: './img/muebles-mind/mostrador-recepcion.jpeg'
    },
    {
        id:5,
        nombre: 'Castillo para niño',
        categoria: 'dormitorio',
        color: ['blanco','marron','madera'],
        tags: ['cama','dormitorio','niño','niños','castillo','para niños','muebles para niños'],
        imagen: './img/muebles-mind/castillo.jpeg'
    },
    {
        id:6,
        nombre: 'Castillo para niña',
        categoria: 'dormitorio',
        color: ['blanco','marron','madera'],
        tags: ['cama','dormitorio','niña','niños','castillo','para niños','muebles para niños'],
        imagen: './img/muebles-mind/castillo-niña.jpeg'
    },
    {
        id:7,
        nombre: 'Mueble de cocina',
        categoria: 'cocina',
        color: ['madera'],
        tags: ['cocina','mueble de cocina','alacena','arco','bajo mesada','mesada','bajo','combo cocina','combo','despensero'],
        imagen: './img/muebles-mind/cocina.jpeg'
    },
    {
        id:8,
        nombre: 'Organizador para dormitorio',
        categoria: 'dormitorio',
        color: ['madera'],
        tags: ['organizador','dormitorio','placard','ropero','armario','multiuso','mueble multiuso'],
        imagen: './img/muebles-mind/organizador-dormitorio.jpeg'
    },
    {
        id:9,
        nombre: 'Placard moderno con puertas',
        categoria: 'dormitorio',
        color: ['blanco'],
        tags: ['dormitorio','placard','ropero','pieza','cuarto','puertas','corrediza','puertas corredizas','puerta corrediza','2 puertas','armario'],
        imagen: './img/muebles-mind/placard-dormitorio-puertas.jpeg'
    },
    {
        id:10,
        nombre: 'Placard moderno',
        categoria: 'dormitorio',
        color: ['blanco'],
        tags: ['dormitorio','placard','ropero','pieza','cuarto','cajones','con tender','blanco','sin puertas','mueble sin puertas','puertas','armario'],
        imagen: './img/muebles-mind/placard-dormitorio-sin-puertas.jpeg'
    },
    {
        id:11,
        nombre: 'Sommier con cajonera',
        categoria: 'dormitorio',
        color: ['negro'],
        tags: ['dormitorio','somier','sommier','cajonera','con cajones','cajon','cajones','sommier con cajones','somier con cajones'],
        imagen: './img/muebles-mind/placard-dormitorio-sin-puertas.jpeg'
    },
    {
        id:12,
        nombre: 'Rack de Tv con cajones',
        categoria: 'living',
        color: ['madera'],
        tags: ['rack','tv','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind/mueble-televisor.jpeg'
    }


];

//traigo elementos del html
const searchBtn = document.querySelector('.btnSearch')
const inputSearch = document.querySelector('#search')
const productosFiltrados = document.querySelector('.productosFiltrados')
const messageSearch = document.querySelector('.message-search')
const searchResult = document.querySelector('.search-result')

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

const createHtmlResult = mueble => `<h4 class="result">Hemos encontrado ${mueble.length} productos para la busqueda de "${inputSearch.value}" </h4>`
const renderResult = mueble => {
    searchResult.innerHTML = createHtmlResult(mueble)
}

//funcion para renderizar el Javascript en el Html
const renderMuebles = muebles => {
    productosFiltrados.innerHTML = muebles.map(mueble => createHtmlMuebles(mueble)).join('')
}


//funcion para buscar un producto
const searchProduct = e => {
    e.preventDefault();
    
    const nameProduct = inputSearch.value.trim();

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
    }
    
    renderResult(nuevoMuebles)
    renderMuebles(nuevoMuebles);

}


const init = () => {
    searchBtn.addEventListener('click', searchProduct)
}
init();













