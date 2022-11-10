
//traigo elementos del html
const searchBtn = document.querySelector('.btnSearch')
const inputSearch = document.querySelector('#search')
const productosFiltrados = document.querySelector('.productosFiltrados')
const messageSearch = document.querySelector('.message-search')
const searchResult = document.querySelector('.search-result')
const busquedaContainer = document.getElementById('busqueda-container')
const searchAdvancedContainer = document.querySelector('.search-advanced-container');
const prodDestacadosIndex = document.querySelector('#productos-destacados')
const seleccion = document.getElementById('seleccion')
const productosFiltradosItem = document.querySelector('.productosFiltradosItem')
const btnVerMas = document.querySelector('.btnVerMas')

//variable para mostrat todos los productos en PRODUCTOS.html
const showAllMuebles = document.querySelector('.showAllMuebles')


//variables para MENU HAMBURGUEESA
const menu__desktop = document.querySelector('.menu-desktop')
const linkHome = document.querySelector('.linkHome')


//variables de nav header
const living = document.querySelector('.living')
const cocina = document.querySelector('.cocina')
const dormitorio = document.querySelector('.dormitorio')
const oficina = document.querySelector('.oficina')
const submenu_desktop_link = document.querySelector('.submenu-desktop-link')
const filtrados = document.querySelector('.filtrados')

//modal consulta
const modalConsulta__container = document.querySelector('.modalConsulta__container')
const email__modal = document.querySelector('.email__modal')
const nombre__modal = document.querySelector('.nombre__modal')
const textArea__modal= document.getElementById('textArea__modal')
const imagen__modal = document.querySelector('.imagen__modal')
const localidad__modal = document.querySelector('.localidad__modal')
// const id__modal = document.querySelector('.')


//nuevo array de array para guardar los filtrados;
let nuevoMuebles = [];
let arrayMuebles = JSON.parse(localStorage.getItem('Muebles'))


//variables de redes
const btnfacebook = document.querySelector('.fa-brands.fa-facebook')
const btninstagram = document.querySelector('.fa-brands.fa-instagram')
const btnwhatsapp = document.querySelector('.logo-wsp')


//ir a inicio
const goHome = e => {
    if(!e.target.classList.contains('linkHome')) return;
    window.close()
    window.open('./index.html')
}

//abrir productos.html
const showProductosHTML = e => {
    if(!e.target.classList.contains('productos'))return;
    window.close()
    window.open('./productos.html')
}




//FUNCIONES PARA INDEX.HTML
//funcion para crear el Html
const createHtmlCardMuebles = muebles => {
    const {id,imagen,nombre,categoria} = muebles
    return `
    <li class="productosFiltrados-item" data-id=${id}>
    <a href="#" class="item">
            <img src="${muebles.imagen}" alt="" class="imagen-product-search">
            <h3 class="titulo-search">${nombre}</h3>
        <div class="info-product">
            <h4 class="categoria-search"><p>Categoria: ${categoria} </p></h4>
        </div>
        <a href="./productos.html" target ="_blank" class="btnVerMas" 
        data-id=${id}
        data-imagen="${imagen}
        data-nombre="${nombre}
        data-categoria="${categoria}">Ver Más</a>
        </a>
   </li>`
}

//funcion para renderizar productos filtrados por searchProduct()
const renderCreateHtmlCardMuebles = muebles => {
    productosFiltrados.innerHTML = muebles.map(mueble => createHtmlCardMuebles(mueble)).join('')
}

//renderizar todos los muebles en PRODUCTOS.HTML
const renderCreateHTMLAllMuebles = array => {
    showAllMuebles.innerHTML = array.map(product => createHtmlCardMuebles(product)).join('')
}


//LINK DE IR A PRODUCTOS
const createHtmlSearchAdvancedContainer = ()=> `<a href="./productos.html" target="_blank" class="search-advanced-link productos">Ir a Productos</a>`
const renderSearchAdvancedContainer = () => searchAdvancedContainer.innerHTML = createHtmlSearchAdvancedContainer();


//MENSAJE RESULTADO DE BUSQUEDA
const createHtmlResult = mueble => `<h4 class="result">Hemos encontrado ${mueble.length} productos para la busqueda de "${inputSearch.value}" </h4>`
const renderResult = mueble => searchResult.innerHTML = createHtmlResult(mueble)




//FUNCION PARA BUSCAR UN PRODUCTO
const searchProduct = e => {
    e.preventDefault();
    if(!e.target.classList.contains('btnSearch')) return;
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

    seleccion.style.display="none"
    renderResult(nuevoMuebles)
    renderCreateHtmlCardMuebles(nuevoMuebles);

}



// FUNCIONES DE PRODUCTOS DESTACADOS !!!
// FUNCIONES PARA RENDERIZAR PRODUCTOS DESTACADOS 
const createHtmlProdDestacados = (array) => {
    return `
    <h3>PRODUCTOS DESTACADOS</h3>
    <ul class="productos-destacados">
        <li class="productos-destacados-item" id="1"><a href="#" class="productos-destacados-link"></a>
            <img src="${array[10].imagen}" alt="">
            <h4>${array[10].nombre}</h4>
            <a href="#" class="btnVerMas" 
            data-id="${array[10].id}"
            data-imagen="${array[10].imagen}""
            data-nombre="${array[10].nombre}"
            data-categoria="${array[10].categoria}">Ver Más</a>
        </li>
        <li class="productos-destacados-item" id="2"><a href="#" class="productos-destacados-link"></a>
            <img src="${array[13].imagen}" alt="">
            <h4>${array[13].nombre}</h4>
            <a href="#" class="btnVerMas"
            data-id="${array[13].id}"
            data-imagen="${array[13].imagen}""
            data-nombre="${array[13].nombre}"
            data-categoria="${array[13].categoria}" >Ver Más</a>
        </li>
        <li class="productos-destacados-item" id="3"><a href="#" class="productos-destacados-link"></a>
            <img src="${array[5].imagen}" alt="">

            <h4>${array[5].nombre}</h4>
            <a href="#" class="btnVerMas" 
            data-id="${array[5].id}"
            data-imagen="${array[5].imagen}""
            data-nombre="${array[5].nombre}"
            data-categoria="${array[5].categoria}">Ver Más</a>
        </li>
        <li class="productos-destacados-item" id="4"><a href="#" class="productos-destacados-link"></a>
            <img src="${array[25].imagen}" alt="">
            <h4>${array[25].nombre}</h4>
            <a href="./productos.html" target ="_blank" class="btnVerMas" 
            data-id="${array[25].id}"
            data-imagen="${array[25].imagen}""
            data-nombre="${array[25].nombre}"
            data-categoria="${array[25].categoria}">Ver Más</a>
        </li>
    </ul>

    `
}

const rendercreateHtmlProdDestacados = (array) => {
    prodDestacadosIndex.innerHTML = createHtmlProdDestacados(array);
}


//FUNCIONES PARA RENDERIZAR EN PRODUCTOS.html
//funciones para los elementos que sean seleccionados

let arrayProdDestacados = JSON.parse(localStorage.getItem('productosDestacados')) || [];

const createHTMLprodSeleccionados = (array) => {
    return `
     <li class="productosFiltrados-item seleccionado">
     <h3 class="titulo-search">${array[0].nombre}</h3>
         <div class="info-product">
             <h4 class="categoria-search"><p>Categoria: ${array[0].categoria} </p></h4>
         </div>
         <img src="${array[0].imagen}" alt="" class="imagen-product-search">
         
         <button class="consultarProducto"
             data-id="${array[0].id}"
             data-imagen="${array[0].imagen}"
             data-nombre="${array[0].nombre}"
             data-categoria="${array[0].categoria}">Consultar</button>
    </li>`;
 }

const renderHTMLProdSeleccionado = (array) => {
     seleccion.innerHTML = createHTMLprodSeleccionados(array)
}


//guardo en el localStorage el array de productos filtrados en filtrarProdDestacados
const saveLocalStorage = array => {
    localStorage.setItem('productosDestacados', JSON.stringify(array))
}


const filtrarProducto = e => {
    e.preventDefault()
    if(!e.target.classList.contains('btnVerMas')) return;
    const filterID = Number(e.target.dataset.id);

    arrayProdDestacados = Muebles.filter(prod => prod.id === filterID)
    saveLocalStorage(arrayProdDestacados)
    window.close();
    window.open('./productos.html')
}

const mostrarMenu = e => {
    if(!e.target.classList.contains('fa-bars')){
        menu__desktop.style.left="-40%";
        menu__desktop.style.transition="all 0.3s ease-in-out"

        return;
    }
    
    menu__desktop.style.left = "0";
    menu__desktop.style.transition="all 0.3s ease-in-out"
}



//funciones para nav header
let arrayNavHeader = JSON.parse(localStorage.getItem('arrayNavHeader')) || [];

const saveLocalStorageHeader = array => {
    localStorage.setItem('arrayNavHeader', JSON.stringify(array));
}



const filtrarCategoria = (array,categoria) => {
    return arrayNavHeader = array.filter(mueble => mueble.tags?.includes(categoria))
}

const createHTMLnavHeader = (array) => {
    return `<li class="submenu-desktop-item"><a href="#" class="submenu-desktop-link"
     data-id="${array.id}"
     data-nombre="${array.nombre}"
     data-imagen="${array.imagen}"
     data-categoria="${array.categoria}">${array.nombre}</a></li>`
}


const renderCreateHTMLnavHeader = array => {
    living.innerHTML = filtrarCategoria(array,'living').map(product => createHTMLnavHeader(product)).join('')
    cocina.innerHTML = filtrarCategoria(array,'cocina').map(product => createHTMLnavHeader(product)).join('')
    dormitorio.innerHTML = filtrarCategoria(array,'dormitorio').map(product => createHTMLnavHeader(product)).join('')
    oficina.innerHTML = filtrarCategoria(array,'oficina').map(product => createHTMLnavHeader(product)).join('')
}

const renderProductosNavHeader = array => {
    return filtrados.innerHTML = array.map(productos => createHtmlCardMuebles(productos))

}

//funcion para renderizar productos clickeados en navheaderc
const filtrarProductoNavHeader = e => {
    e.preventDefault()
    if(!e.target.classList.contains('submenu-desktop-link')) return;
    const filterID = Number(e.target.dataset.id);
    arrayProdDestacados = Muebles.filter(prod => prod.id === filterID)
    
    window.close();
    window.open('./productos.html')
    saveLocalStorage(arrayProdDestacados)
    renderProductosNavHeader(arrayProdDestacados)
}




///FUNCIONES PARA MODAL CONSULTA
const createHTMLmodalConsulta = (array) => {
    const {id,nombre,imagen,categoria} = array;
    return `
    <i class="fa-sharp fa-solid fa-xmark"></i>
    <img src="${imagen}" name="img" alt=""class="imagen__modal">
                <h3 class="title__modal" name="tituloProducto__modal">Producto: ${nombre}</h3>
                <p class="categoria__modal">Categoria: ${categoria}</p>
                <input type="text" placeholder="Nombre y apellido:" name="nombreyapellido" class="nombre__modal"/>
                <input type="email" placeholder="Email" class="email__modal" />
                <input type="text" placeholder="Numero de telefono" class="celular__modal" />
                <input type="text" placeholder="Localidad: " name="localidad" class="localidad__modal">
                <textarea name="descripcion" id="textArea__modal" cols="30" rows="3"></textarea>
                <button type="submit" class="btnEnviarConsulta"
                data-id="${id}"
                data-nombre="${nombre}"
                data-imagen="${imagen}"
                data-categoria="${categoria}">Enviar Consulta</button>
    `
}
const renderCreateHTMLmodalConsulta = array => {
    modalConsulta__container.innerHTML = createHTMLmodalConsulta(array)
}

const crearProductoConsulta = e => {
    const {id,nombre,imagen,categoria} = e.target.dataset;
    const producto = {id,nombre,imagen,categoria};
    return producto;
}

const mostrarModalConsulta = e => {
    if(!e.target.classList.contains('consultarProducto')) return;
    modalConsulta__container.style.display="flex"
    renderCreateHTMLmodalConsulta(crearProductoConsulta(e))
}

const cerrarModalConsulta = e => {
    if(!e.target.classList.contains('fa-xmark')) return;

    modalConsulta__container.style.display= "none"
}

const datosConsulta = e => {
    const email__modal = document.querySelector('.email__modal')
    const nombre__modal = document.querySelector('.nombre__modal')
    const textArea__modal= document.getElementById('textArea__modal')
    const localidad__modal = document.querySelector('.localidad__modal')
    const celular__modal = document.querySelector('.celular__modal')

    const emailValue = email__modal.value.trim()
    const nombreValue = nombre__modal.value.trim();
    const localidadValue = localidad__modal.value.trim();
    const textareaValue = textArea__modal.value.trim();
    const celularValue = celular__modal.value.trim();

    const datosConsulta = {emailValue,nombreValue,localidadValue,textareaValue,celularValue,producto: crearProductoConsulta(e)}
    return datosConsulta;
}


/* estos datos tienen que ser enviados al backend en JSON
para poder enviar el email con nodemailer
*/
const enviarConsulta = async  e => {
    if(!e.target.classList.contains('btnEnviarConsulta')) return;
    let producto =  JSON.stringify(datosConsulta(e))
   let envioConsulta = await fetch('https://backend-mindmuebles.herokuapp.com/sendEmail'
   ,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: producto
    })

    if(envioConsulta.status === 200){
        modalConsulta__container.style.display='none';
        alert('Consulta enviada! En la brevedad nos pondremos en contacto contigo. Muchas gracias por confiar en nosotros !')
        window.close()
        window.open('./index.html')
        }
}



//FUNCIONES PARA PAGINA DE CONTACTO
const mostrarContacto = e => {
    if(!e.target.classList.contains('contacto')){
        return;
    }
    window.close()
    window.open('./contacto.html')
}

const datosContacto = () => {
    const nombre__contacto = document.querySelector('.nombre__contacto')
    const email__contacto = document.querySelector('.email__contacto')
    const celular__contacto = document.querySelector('.celular__contacto')
    const consulta__contacto = document.getElementById('textArea__contacto')
    const localidad__contacto = document.querySelector('.localidad__contacto')

    const nombreValue = nombre__contacto.value.trim()
    const emailValue = email__contacto.value.trim();
    const celularValue = celular__contacto.value.trim();
    const consultaValue = consulta__contacto.value.trim();
    const localidadValue = localidad__contacto.value.trim();

    return {nombreValue,emailValue,celularValue,consultaValue,localidadValue};
}

const enviarConsultaContacto = async e => {
    if(!e.target.classList.contains('btnEnviarConsultaContacto')) return;

    let datosConsulta = JSON.stringify(datosContacto(e))
    let envioConsulta= await fetch('https://backend-mindmuebles.herokuapp.com/sendEmailContacto',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: datosConsulta
    })

    if(envioConsulta.status === 200){
        modalConsulta__container.style.display='none';
        alert('Consulta enviada! En la brevedad nos pondremos en contacto contigo. Muchas gracias por confiar en nosotros !')
        window.close()
        window.open('./index.html')
        }
}

/////////////////////////////////////////////////////////////////////////////////////////

//funciones para abrir links de redes
const abrirInstagram = e => {
    if(!e.target.classList.contains('fa-instagram')) return;

    window.open('https://www.instagram.com/mind.muebles/?hl=es-la')
}
const abrirFacebook = e => {
    if(!e.target.classList.contains('fa-facebook')) return;

    window.open("https://www.facebook.com/mindmuebles")
}
const enviarWhatsapp = e => {
    if(!e.target.classList.contains('logo-wsp')) return;

    window.open('https://api.whatsapp.com/message/ZPP2NGIPVAZ7H1?autoload=1&app_absent=0')
}













const init = async () => {
    
    //espera hasta que cargue el array de MUEBLES en localstorage y despues renderiza
    setTimeout(()=> {
         rendercreateHtmlProdDestacados(JSON.parse(localStorage.getItem('Muebles')))
         renderCreateHTMLAllMuebles(arrayMuebles)
         //evento para navHEader
         renderCreateHTMLnavHeader(arrayMuebles)
        
    },200)
   
   
    renderHTMLProdSeleccionado(JSON.parse(localStorage.getItem('productosDestacados')))

//    evento para buscar productos
    document.addEventListener('click', searchProduct)

    // evento para mostrar productos.html
    document.addEventListener('click', showProductosHTML)
    document.addEventListener('click', filtrarProducto)
    
    // evento para mostrar menuHamburguesa
    document.addEventListener('click', mostrarMenu)

    // evento para ir a INDEX.html
    document.addEventListener('click', goHome)

    // evento para abrir producto clickeado en navHeader
    document.addEventListener('click', filtrarProductoNavHeader)

    //evento para abrir categoria clickeada en navHeader
    // document.addEventListener('click', mostrarCategorias)

    //evento para renderizar modal de consulta
    document.addEventListener('click', mostrarModalConsulta)

    //evento para cerrar modal de consulta
    document.addEventListener('click',cerrarModalConsulta)
    //evento para enviar email 
    
    //evento par enviar consulta 
    document.addEventListener('click', enviarConsulta)


    //evento para pagina de contacto
    document.addEventListener('click', mostrarContacto)

    //evento para enviar consulta de contacto
    document.addEventListener('click', enviarConsultaContacto)

    //eventos para abrir redes
    document.addEventListener('click', abrirInstagram)
    document.addEventListener('click', abrirFacebook)
    document.addEventListener('click', enviarWhatsapp)
}

init();















