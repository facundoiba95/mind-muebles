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
        nombre: 'Escritorio',
        categoria: 'oficina',
        color: ['marron','negro','blanco'],
        tags: ['escritorio','mesa','oficina','office','negro','escritorio de oficina','pc','para pc','oficina'],
        imagen: './img/muebles-mind/escritorio_oficina.jpeg'
    },
    {
        id:4,
        nombre: 'Mostrador recepción',
        categoria: 'living',
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
    }


];

//traigo elementos del html
const searchBtn = document.querySelector('.btnSearch')
const inputSearch = document.querySelector('#search')
const productosFiltrados = document.querySelector('.productosFiltrados')
const messageSearch = document.querySelector('.message-search')

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
            <h4 class="colores-search">${muebles.color.join(', ')}</h4>
        </div>

    </li>`
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
        renderMuebles(nuevoMuebles);
        
    }else if(
        //filtro elementos que los tags coincidan
        (nuevoMuebles = Muebles.filter(mueble => mueble.tags?.includes(nameProduct)) == 0)
    ){
        messageSearch.textContent='Ups! No se encontro ese producto !';
        inputSearch.style.border = '3px solid gray'
        nuevoMuebles = [];
        renderMuebles(nuevoMuebles);
        return;
    }else if(
        // ME QUEDE EN ESTA FUNCION!  funciona cuando si coinciden, pero no muestra el mensaje al no coincidir!
        nuevoMuebles = Muebles.filter(mueble => mueble.tags?.includes(nameProduct))
    ){
        messageSearch.textContent = '';
        inputSearch.style.border= '3px solid rgb(146, 0, 209)'
        renderMuebles(nuevoMuebles);
        return;
    }
  
    renderMuebles(nuevoMuebles)

}


const init = () => {
    searchBtn.addEventListener('click', searchProduct)
}
init();













