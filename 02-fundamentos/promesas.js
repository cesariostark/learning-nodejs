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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No hay salario asignado a ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
            })
        }
    })
}

getEmpleado(1).then(empleado => {
    console.log('Empleado de BD', empleado);
    getSalario(empleado).then(res => {
        console.log(`El salario de ${res.nombre} es ${res.salario}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
})