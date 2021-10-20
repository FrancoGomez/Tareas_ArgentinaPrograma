/* // Tarea 1

function solicitarAnioNacimientoUsuario(){
    return prompt('Ingrese año de nacimiento')
}

function solicitarAnioActual(){
    return prompt('Ingrese año actual')
}

function consultarUsuarioYaCumplioAnios() {
    let usuarioCumplioAnios

    do {

        usuarioCumplioAnios = prompt('Cumpliste años este año?')
    
    } while (usuarioCumplioAnios !== 'si' && usuarioCumplioAnios !== 'no')

    return usuarioCumplioAnios
}

function calcularAniosUsuario(anioNacimientoUsuario, anioActual, usuarioCumplioAnios) {

    if (usuarioCumplioAnios === 'no') {
        return `Tenes ${Number(anioActual) - Number(anioNacimientoUsuario) - 1} años`
    }

    return `Tenes ${Number(anioActual) - Number(anioNacimientoUsuario)} años`
}

console.log(
    calcularAniosUsuario(
        solicitarAnioNacimientoUsuario(),
        solicitarAnioActual(),
        consultarUsuarioYaCumplioAnios()
    )
)

// Tarea 2

function solicitarSalarioAnualUsuario() {
    let salarioAnual
    const patronSalarioAnual = /^[0-9]*$/

    do {

        salarioAnual = prompt('Cual es tu salario anual? Ingresa solo numeros')

        if (!patronSalarioAnual.test(salarioAnual)) {
            console.log('No entendi tu respueta, recorda ingresar solo numeros.')
        }

    } while (!patronSalarioAnual.test(salarioAnual) || salarioAnual.length === 0)

    return salarioAnual
}

function obtenerSalarioMensual(salarioAnual) {
    const MESES_EN_ANIO = 12

    return Number(salarioAnual) / MESES_EN_ANIO
}

console.log(`Tu salario mensual es de $${obtenerSalarioMensual(solicitarSalarioAnualUsuario()).toFixed(2)} pesos`)

//Tarea 3

function solicitarSalarioMensualUsuario() {
    let salarioMensual
    const patronSalarioAnual = /^[0-9]*$/

    do {

        salarioMensual = prompt('Cual es tu salario anual? Ingresa solo numeros')

        if (!patronSalarioAnual.test(salarioMensual)) {
            console.log('No entendi tu respueta, recorda ingresar solo numeros.')
        }

    } while (!patronSalarioAnual.test(salarioMensual) || salarioMensual.length === 0)

    return salarioMensual
}

const salarioMensual = solicitarSalarioMensualUsuario()

const MESES_EN_ANIO = 12
const SEMANAS_EN_ANIO = 52

function obtenerSalarioAnual(salarioMensual) {
    return Number(salarioMensual) * MESES_EN_ANIO
}

function obtenerSalarioSemanal(salarioMensual) {
    const SEMANAS_EN_MES = SEMANAS_EN_ANIO / MESES_EN_ANIO

    return Number(salarioMensual) / SEMANAS_EN_MES
}

function obtenerSalarioDiario(salarioMensual) {
    const DIAS_EN_ANIO = 365
    const DIAS_EN_MES = DIAS_EN_ANIO / MESES_EN_ANIO

    return Number(salarioMensual) / DIAS_EN_MES
}

function obtenerSalarioPorHora(salarioMensual) {
    const HORAS_LABORALES_EN_DIA = 8

    return obtenerSalarioDiario(salarioMensual) / HORAS_LABORALES_EN_DIA
}

console.log(`Tu salario anual es de $${obtenerSalarioAnual(salarioMensual).toFixed(2)} pesos`)
console.log(`Tu salario semanal es de $${obtenerSalarioSemanal(salarioMensual).toFixed(2)} pesos`)
console.log(`Tu salario diario es de $${obtenerSalarioDiario(salarioMensual).toFixed(2)} pesos`)
console.log(`Tu salario por hora es de $${obtenerSalarioPorHora(salarioMensual).toFixed(2)} pesos`) */

// Tarea 4

/* function counsultarOperacionDeseada() {
    let operadorAritmetico

    do {
        operadorAritmetico = prompt('Ingresa "+" si queres realizar una suma, "-" si queres realizar una resta')
        
        if (operadorAritmetico !== '+' && operadorAritmetico !== '-') {
            console.log('No entendi tu respuesta, volve a intentarlo')
        }

    } while (operadorAritmetico !== '+' && operadorAritmetico !== '-');

    return operadorAritmetico
}

function solicitarNumeros(posicionDeNumero){
    let numeroIngresado, numerosSeleccionados = false
    const PATRON_NUMEROS_A_ELEGIR = /^[0-9]*$/

    while (numerosSeleccionados === false) {
        numeroIngresado = Number(prompt(`Ingrese su ${posicionDeNumero.toLowerCase()} numero`))

        if (PATRON_NUMEROS_A_ELEGIR.test(numeroIngresado)) {
            numerosSeleccionados = true
        }
    }

    return numeroIngresado
}

function realizarOperacionAritmetica(){
    let primerNumero = solicitarNumeros('primero'),
        operadorAritmetico = counsultarOperacionDeseada(),
        segundoNumero = solicitarNumeros('segundo')

    if (operadorAritmetico === '+'){
        return `El resultado de ${primerNumero} + ${segundoNumero} es ${primerNumero + segundoNumero}`
    } else if (operadorAritmetico === '-'){
        return `El resultado de ${primerNumero} - ${segundoNumero} es ${primerNumero - segundoNumero}`
    } else {
        return 'Hubo un error en la cuenta'
    }
}

console.log(realizarOperacionAritmetica()) */

// Tarea 5

/* function solicitarNombreUsuario(){
    let nombreUsuario
    const parametrosNombre = /^[A-z]*$/

    do {

        nombreUsuario = prompt('Escribi tu nombre, y recorda que sea un nombre valido (solo letras)')

    } while(!parametrosNombre.test(nombreUsuario) && nombreUsuario.length !== 0)

    return nombreUsuario.toLocaleLowerCase()
}

function saludarUsuarioConTresCriterios(nombreUsuario){

    if (nombreUsuario === 'franco') {
        return 'Hola franco, yo tambien me llamo franco! :D'
    } else if (nombreUsuario === 'juan') {
        return 'Hola juan, tenes el mismo nombre en el que pense al escribir este codigo! :D'
    } else {
        return `Hola ${nombreUsuario}! :D`
    }
}

console.log(saludarUsuarioConTresCriterios(solicitarNombreUsuario())) */

// Tarea 6

/* function solicitarEdadUsuario() {
    let edadUsuario
    const PARAMETROS_EDAD = /^[0-9]*$/

    do {
        
        edadUsuario = prompt('Ingresa tu edad, recorda usar solo numeros')

    } while (!PARAMETROS_EDAD.test(edadUsuario) || edadUsuario.length === 0);

    return edadUsuario
}

function compararEdadUsuarioConLaMia(edadUsuario){
    const MI_EDAD = 22

    if (edadUsuario > MI_EDAD) {
        return `Tenes ${edadUsuario - MI_EDAD} años mas que yo.`
    } else if (edadUsuario === MI_EDAD) {
        return 'Tenemos la misma edad! :D'
    } else if (edadUsuario < MI_EDAD) {
        return `Tengo ${MI_EDAD - edadUsuario} años mas que vos :)`
    }
}

console.log(compararEdadUsuarioConLaMia(solicitarEdadUsuario())) */

// Tarea 7

/* function consultarAlUsuarioPorDocumento(){
    let respuestaUsuario
    
    do {
        
        respuestaUsuario = prompt('Tenes tu documento? responde solo "si" o "no"').toLowerCase()

        if(respuestaUsuario === 'si') {
            return true
        } else if(respuestaUsuario === 'no'){
            return false
        }

    } while (respuestaUsuario !== 'si' || respuestaUsuario !== 'no');

}

function consultarEdadUsuario(){
    let edadUsuario
    const PARAMETROS_EDAD = /^[0-9]*$/

    do {
        
        edadUsuario = prompt('Ingresa tu edad, recorda usar solo numeros')

    } while (!PARAMETROS_EDAD.test(edadUsuario) || edadUsuario.length === 0);

    return edadUsuario
}

function gestionarIngresoAlBar(){
    let usuarioTieneDocumento = consultarAlUsuarioPorDocumento()

    if (usuarioTieneDocumento) {
        if (consultarEdadUsuario() >= 18) {
            return 'Bienvenido al bar'
        } else {
            return 'No podes ingresar al bar siendo menor de edad'
        }

    } else {
        return 'No podes ingresar al bar sin documento'
    }

}

console.log(gestionarIngresoAlBar()) */

// Tarea 8

/* function imprimirFizzBuzz(numeroMaximo){
    
    for(let i = 0; i <= numeroMaximo; i++){
        let impresion = ''

        if(i % 3 !== 0 && i % 5 !== 0){
            impresion = i
        }

        if(i % 3 === 0){
            impresion = 'Fizz'
        }

        if(i % 5 === 0){
            impresion += 'Buzz'
        }

        console.log(impresion)
    }
}

imprimirFizzBuzz(50) */

// Tarea 9

/* const $botonCalcular = document.querySelector('#boton__calcular')
const $inputSalarioAnual = document.querySelector('#salarioAnual')
const $inputSalarioMensual = document.querySelector('#salarioMensual')

$botonCalcular.onclick = function () {
    const PATRON_NUMEROS_A_ELEGIR = /^[0-9]*$/
    let salarioAnual = Number($inputSalarioAnual.value)

    if (PATRON_NUMEROS_A_ELEGIR.test(salarioAnual) && salarioAnual !== 0) {
        const MESES_EN_ANIO = 12
        $inputSalarioMensual.value = (salarioAnual / 12).toFixed(2)

    } else if (!PATRON_NUMEROS_A_ELEGIR.test(salarioAnual) && salarioAnual.length !== 0) {
        console.log('Ingresa un valor valido, recorda usar solo numeros')

    } else {
        console.log('No ingresaste ningun valor')

    }
} */