/* setTimeout(() => {
    console.log('Hola Mundo');
}, 3000); */

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Cesario',
        id
    }
    callback(usuario);
}

getUsuarioById(10, (usuario) => {
    console.log('Usuario de bd:', usuario);
});