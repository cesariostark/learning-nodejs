const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Describe la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como hecha la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear cosas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar cosas por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra las cosas por hacer', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}