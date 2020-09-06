const axios = require('axios');

const getLugarLatLng = async(direccion, ciudad) => {
    const encodeUrl = encodeURI(direccion)
    const encodeUrl2 = encodeURI(ciudad)
    console.log(encodeUrl);
    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${encodeUrl}&namePrefix=${encodeUrl2}`,
        headers: { 'X-RapidAPI-key': '22a0ea7d8bmsh5cc9776530e0f74p18ae9bjsna52a936b558a' }
    });

    //API CLIMA
    //https://dark-sky.p.rapidapi.com/-33.4372,-70.6506


    const resp = await instance.get()

    if (resp.data.data[0] === 0) {
        throw new Error('no hay resultados')
    }

    const data = resp.data.data[0];
    const pais = data.countryCode;
    const city = data.city;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        pais,
        city,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}