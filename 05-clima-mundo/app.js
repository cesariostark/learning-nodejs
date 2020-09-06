const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    },
    ciudad: {
        alias: 'c',
        desc: 'Me trae la ciudad',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion, argv.ciudad).then(datos => { console.log(datos) });

// clima.getClima(-33.45, -70.666666666)
//     .then(datos => { console.log(datos) })
//     .catch(console.log)



const getInfo = async(direccion, ciudad) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion, ciudad);
        const temperatura = await getClima(coords.lat, coords.lng);
        return `El clima de ${coords.city} está ${temperatura.clima}, con una temperatura de ${temperatura.temp}`;

    } catch (error) {
        return `No se pudo determinar clima de ${ direccion }`;
    }
}

getInfo(argv.direccion, argv.ciudad).then(console.log).catch(console.log);