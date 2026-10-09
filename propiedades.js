const PropertiesManager = {
    STORAGE_KEY: 'nva_properties',

    getDefaultProperties() {
        return [
            {
                id: 1,
                type: "VENTA",
                title: "Casa de 82 m² - Caín",
                desc: "3 habitaciones en zona residencial. Propiedad con buen potencial de inversión y ubicación tranquila.",
                link: "https://www.zonaprop.com.ar/propiedades/clasificado/veclcain-casa-de-82-m-sup2--con-3-habitaciones-en-venta-en-59961299.html",
                image: "https://imgar.zonapropcdn.com/avisos/resize/1/00/59/96/12/99/1200x1200/2073819550.jpg?isFirstImage=true"
            },
            {
                id: 2,
                type: "VENTA",
                title: "Tres Ambientes al Frente - Las Heras",
                desc: "Con balcón y baulera. Departamento luminoso en zona céntrica con acceso a comercios y transporte.",
                link: "https://www.zonaprop.com.ar/propiedades/clasificado/veclapin-tres-ambientes-al-frente-con-balcon-y-baulera-a-m-de-59789661.html",
                image: "https://imgar.zonapropcdn.com/avisos/resize/1/00/59/78/96/61/1200x1200/2069732154.jpg?isFirstImage=true"
            },
            {
                id: 3,
                type: "VENTA",
                title: "3 Ambientes con Cochera - Uruguay",
                desc: "Con cochera propia. Departamento moderno, ideal para familia o inversión en zona céntrica.",
                link: "https://www.zonaprop.com.ar/propiedades/clasificado/veclapin-3-ambientes-con-cochera-en-pilar-centro-consultar-59819195.html",
                image: "https://imgar.zonapropcdn.com/avisos/resize/1/00/59/81/91/95/1200x1200/2070469705.jpg?isFirstImage=true"
            },
            {
                id: 4,
                type: "VENTA",
                title: "PH de 52 m² - San Telmo",
                desc: "2 dormitorios en zona histórica. Ubicación privilegiada con arquitectura característica de San Telmo.",
                link: "https://www.zonaprop.com.ar/propiedades/clasificado/veclphin-ph-de-52-m-sup2--con-2-dorm.-en-venta-en-san-telmo-60000787.html",
                image: "https://imgar.zonapropcdn.com/avisos/resize/1/00/60/00/07/87/1200x1200/2074768839.jpg?isFirstImage=true"
            }
        ];
    },

    getProperties() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : this.getDefaultProperties();
        } catch (e) {
            return this.getDefaultProperties();
        }
    },

    saveProperties(properties) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(properties));
    }
};
