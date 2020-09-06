const axios = require('axios')


const getClima = async(lat, lng) => {


    const instance = axios.create({
        baseURL: `https://dark-sky.p.rapidapi.com/${lat},${lng}`,
        headers: { 'X-RapidAPI-key': '22a0ea7d8bmsh5cc9776530e0f74p18ae9bjsna52a936b558a' }
    })

    const resp = await instance.get();

    if (resp.data.currently === 0) {
        throw new Error('No hay resultados')
    }

    const data = resp.data.currently;
    const clima = data.icon;
    const temp = data.temperature;

    return {
        clima,
        temp
    }

}


module.exports = {
    getClima
}