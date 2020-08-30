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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = (empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new Error(`No hay salario asignado a ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
        }
    }
}


let getInfo = async(id) => {

    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);

    console.log(empleado, res);
}

getInfo(2);