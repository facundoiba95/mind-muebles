const searchAdvancedLink = document.querySelector('.search-advanced-link')
const searchAdvanced = document.querySelector('.search-advanced-container')
searchAdvanced.style.display = "none"
const productosFiltradosItem = document.querySelector('.productosFiltrados-item')

const mostrarProducto = e => {
     e.target.style.border ='4px solid red';

    // Muebles.map(producto => producto.id == productoFiltrado ? alert('hola') : alert('chau'))
}



