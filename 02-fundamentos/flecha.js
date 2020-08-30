/* function sumar(a, b) {
    return a + b
}

console.log(sumar(10, 20)); */

/* let suma = (a, b) => a + b;
console.log(suma(10, 20)); */

/* function saludar() {
    return 'hola mundo'
}

console.log(saludar()); */

/* let saludar = () => 'Hola mundo';
console.log(saludar()); */

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());