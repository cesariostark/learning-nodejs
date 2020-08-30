let empleados = [{
        id: 1,
        nombre: 'Cesar'
    },
    {
        id: 2,
        nombre: 'Paula'
    },
    {
        id: 3,
        nombre: 'Pepito'
    }
];

let salarios = [{
        id: 1,
        salario: 20000
    },
    {
        id: 2,
        salario: 20000
    }
];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe el empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`El empleado ${empleado.nombre} no tiene salario asignado`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,

        })
    }
}


getEmpleado(2, (err, empleado) => {

    if (err) { return console.log(err) }
    console.log(empleado);

    getSalario(empleado, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${res.nombre} es de ${res.salario}`);
    })
})