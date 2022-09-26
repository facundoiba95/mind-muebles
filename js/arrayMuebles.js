const Muebles = [
    {
        id:1,
        nombre: 'Bajomesada',
        categoria: 'cocina',
        color: ['marron','negro','marron claro'],
        tags: ['mesada','bajomesada','mueble para cocina','bajo mesada','cocina'],
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
        tags: ['escritorio','living','mesa','mesa de living','recepcion','oficina','mostrador','mostrador recepcion'],
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
        tags: ['cocina','alacenas','bajomesada','mueble de cocina','alacena','arco','bajo mesada','mesada','bajo','combo cocina','combo','despensero','combo alacena y bajomesada','alacena'],
        imagen: './img/muebles-mind/cocina.jpeg'
    },
    {
        id:8,
        nombre: 'Biblioteca multiuso',
        categoria: ['dormitorio','living'],
        color: ['madera'],
        tags: ['biblioteca','dormitorio','multiuso','libros','armario','multiuso','mueble multiuso'],
        imagen: './img/muebles-mind/organizador-dormitorio.jpeg'
    },
    {
        id:9,
        nombre: 'Placard moderno puertas corredizas',
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
        nombre: 'Base box sommier con cajonera',
        categoria: 'dormitorio',
        color: ['negro'],
        tags: ['dormitorio','somier','sommier','cajonera','con cajones','cajon','cajones','sommier con cajones','somier con cajones','box','base box sommier','base','base box somier','base con cajones','base sommier'],
        imagen: './img/muebles-mind/sommier.jpeg'
    },
    {
        id:12,
        nombre: 'Panel de Tv con cajones',
        categoria: 'living',
        color: ['madera'],
        tags: ['rack','panel tv','combo panel tv','flotante','panel flotante','tv','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind/mueble-televisor.jpeg'
    },
    {
        id:13,
        nombre: 'Soporte flotante para lavatorio',
        categoria: 'baño',
        color: ['negro'],
        tags: ['soporte','flotante','soporte para lavatorio','baño','para baño','repisa','repisa flotante'],
        imagen: './img/muebles-mind/soporte-baño.jpeg'
    },
    {
        id:14,
        nombre: 'Panel flotante para Tv',
        categoria: 'living',
        color: ['madera'],
        tags: ['rack','tv','panel','panel tv','panel para tv','combo tv','flotante','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind/rack-televisor-flotante.jpeg'
    },
    {
        id:15,
        nombre: 'Panel de Tv con cajones',
        categoria: 'living',
        color: ['madera'],
        tags: ['rack','tv','panel tv','panel','panel para tv','panel tv','panel de televisor','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind2/panel-tv.jpeg'
    },
    {
        id:16,
        nombre: 'Base box sommier',
        categoria: 'dormitorio',
        color: ['madera'],
        tags: ['dormitorio','somier','sommier','cajonera','con cajones','cajon','cajones','sommier con cajones','somier con cajones','box','base box sommier','base','base box somier','base con cajones','base sommier'],
        imagen: './img/muebles-mind2/base-box-sommier.jpeg'
    },
    {
        id:17,
        nombre: 'Combo alacena + bajomesada',
        categoria: 'cocina',
        color: ['madera'],
        tags: ['mesada','bajomesada','mueble para cocina','bajo mesada','cocina','combo','alacena','kit cocina','kit de cocina','alacenas'],
        imagen: './img/muebles-mind2/combo-alacena-bajomesada.jpeg'
    },
    {
        id:18,
        nombre: 'Combo alacena + bajomesada',
        categoria: 'cocina',
        color: ['gris'],
        tags: ['mesada','bajomesada','mueble para cocina','bajo mesada','cocina','combo','alacena','kit cocina','kit de cocina','alacenas'],
        imagen: './img/muebles-mind2/combo-alacena-bajomesada-2.jpeg'
    },
    {
        id:19,
        nombre: 'Combo panel Tv y mueble 2 puertas',
        categoria: ['cocina','living'],
        color: ['gris oscuro'],
        tags: ['rack','cocina','mueble de cocina','mueble dos puertas','mueble 2 puertas','combo cocina','tv','panel tv','panel','panel para tv','panel tv','panel de televisor','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind2/combo-racktv-mueble2puertas.jpeg'
    },
    {
        id:20,
        nombre: 'Escritorio L',
        categoria: ['living','dormitorio'],
        color: ['blanco'],
        tags: ['escritorio','escritorio en l','l','mueble en l','blanco','escritorio pc','pc','mueble para pc','dormitorio','living','esquinero'],
        imagen: './img/muebles-mind2/escritorio-l.jpeg'
    },
    {
        id:21,
        nombre: 'Escritorio L para dormitorio',
        categoria: ['dormitorio'],
        color: ['blanco'],
        tags: ['escritorio','escritorio en l','l','mueble en l','blanco','escritorio pc','pc','mueble para pc','dormitorio','esquinero'],
        imagen: './img/muebles-mind2/escritorio-l-dormitorio.jpeg'
    },
    {
        id:22,
        nombre: 'Escritorio L con biblioteca',
        categoria: ['living'],
        color: ['blanco'],
        tags: ['escritorio','escritorio en l','l','mueble en l','blanco','escritorio pc','pc','mueble para pc','living','esquinero','biblioteca'],
        imagen: './img/muebles-mind2/escritorio-l-dormitorio-2.jpeg'
    },
    {
        id:23,
        nombre: 'Mesa moderna minimalista',
        categoria: ['living','cocina'],
        color: ['blanco'],
        tags: ['mesa','mesa para cocina','mesa cocina','cocina','living','mesa para living','mesa de living','minimalista','mueble minimalista','moderno','muebles modernos','mesa moderna','moderna'],
        imagen: './img/muebles-mind2/mesa-moderna-minimalista.jpeg'
    },
    {
        id:24,
        nombre: 'Escritorio L ',
        categoria: ['living','cocina'],
        color: ['Gris oscuro'],
        tags: ['escritorio','escritorio en l','l','mueble en l','blanco','escritorio pc','pc','mueble para pc','dormitorio','living','esquinero'],
        imagen: './img/muebles-mind2/mueble-pc-l.jpeg'
    },
    {
        id:25,
        nombre: 'Placard moderno con puertas',
        categoria: ['dormitorio'],
        color: ['madera'],
        tags: ['dormitorio','placard','ropero','pieza','cuarto','puertas','corrediza','puertas corredizas','puerta corrediza','2 puertas','armario','mueble moderno','placard moderno','moderno'],
        imagen: './img/muebles-mind2/placard-con-puertas.jpeg'
    },
    {
        id:26,
        nombre: 'Placard moderno puertas corredizas',
        categoria: ['dormitorio'],
        color: ['madera'],
        tags: ['dormitorio','placard','ropero','pieza','cuarto','puertas','corrediza','puertas corredizas','puerta corrediza','2 puertas','armario','mueble moderno','placard moderno','moderno'],
        imagen: './img/muebles-mind2/placard-con-puertas-3.jpeg'
    },
    {
        id:27,
        nombre: 'Placard moderno puertas corredizas',
        categoria: ['dormitorio'],
        color: ['gris'],
        tags: ['dormitorio','placard','ropero','pieza','cuarto','puertas','corrediza','puertas corredizas','puerta corrediza','2 puertas','armario','mueble moderno','placard moderno','moderno'],
        imagen: './img/muebles-mind2/placard-con-puertas-4.jpeg'
    },
    {
        id:28,
        nombre: 'Panel Tv flotante',
        categoria: ['living'],
        color: ['madera'],
        tags: ['rack','tv','panel tv','panel','panel para tv','panel tv','panel de televisor','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind2/rack-tv-flotante.jpeg'
    },
    {
        id:29,
        nombre: 'Panel Tv flotante blanco',
        categoria: ['living'],
        color: ['blanco'],
        tags: ['rack','tv','panel tv','panel','panel para tv','panel tv','panel de televisor','televisor','cajonera','rack para tv','rack para televisor','mueble para televisor','mueble para tv','soporte','soporte para tv'],
        imagen: './img/muebles-mind2/rack-tv-flotante-2.jpeg'
    },
    {
        id:30,
        nombre: 'Respaldo sommier con mesa de luz',
        categoria: ['dormitorio'],
        color: ['madera'],
        tags: ['dormitorio','mesa de luz','mesa dormitorio','somier','sommier','cajonera','con cajones','cajon','cajones','sommier con cajones','somier con cajones','box','base box sommier','base','base box somier','base con cajones','base sommier','respaldo','respaldo sommier','respaldo de somier','respaldo somier','respaldo de sommier','respaldar','espaldar','espaldar de sommier','cajon'],
        imagen: './img/muebles-mind2/respaldo-sommier-con-mesa-de-luz.jpeg'
    },



];