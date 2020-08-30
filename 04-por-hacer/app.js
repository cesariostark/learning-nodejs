const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer')
let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listar = toDo.listar();
        break;
    case 'crear':
        let crear = toDo.crear(argv.descripcion);
        break;
    case 'actualizar':
        let tareaact = toDo.actualizar(argv.descripcion, argv.completado)
            // console.log(tareaact);
        break;
    case 'borrar':
        let borrar = toDo.borrar(argv.descripcion)
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}