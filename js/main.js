// CREA UN ARRAY DE MUEBLES
//Propiedades: id, nombre, categoria, color,

let Muebles = [
    {
        id:1,
        nombre: 'bajo mesada',
        categoria: 'cocina',
        color: ['marron','negro','marron claro']
    },
    {
        id:2,
        nombre: 'sillon dos partes',
        categoria: 'living',
        color: ['gris','negro','marron claro']
    },
    {
        id:3,
        nombre: 'escritorio',
        categoria: 'oficina',
        color: ['marron','negro','blanco']
    }
]


function capturarDatosBusqueda (){
    var datosBusqueda = document.getElementById("inputsearch").value;
   return datosBusqueda;
}
function mostrarBusqueda(){
    let nuevoArray=[];

   nuevoArray.push(capturarDatosBusqueda())
      
    return nuevoArray;
}

