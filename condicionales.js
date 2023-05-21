const leer =require("prompt-sync")()
const Escribir =console
class Condicionales{
//Ejercicio: ingrese un numero entero
//y reporte si es par o impar
    condicionalNum(){
    let num;
    num= leer ("digite un numero:");
    num = parseInt(num)
    if (num % 2 === 0) {
        Escribir.log ("El numero es par:", num);
    }
    else{
        Escribir.log ("El numero es impar:", num);
    }
    }

// Ejercicio: alummno que necesita q su promedio
// sea mayor o igual a 70 o sino reprueba.
    promedioAlum(){
    let not1, not2, not3;
    let promedio;
    not1 = leer ("Ingrese nota1:");
    not2 = leer ("Ingrese nota2:");
    not3 = leer ("Ingrese nota3:");
    not1 = parseInt (not1)
    not2 = parseInt (not2)
    not3 = parseInt (not3)
    promedio =parseInt (promedio)
    promedio = (not1 + not2 + not3) / 3;
    if (promedio >= 70) {
        Escribir.log ("el alumno esta aprobado:", promedio);
    }
    else {
        Escribir.log ("el alumno esta reprobado:", promedio);
    }
    }

// Ejercicio: en un almacen se hace 20 descuento
// si supera los $100 ¿cantidad q pagara una persona por su compra?
    pagarDescuento(){
    let comprar;
    let descuento, preciofin;
    comprar = leer ("digite la cantidad a pagar:");
    if (comprar >100) {
        descuento = comprar * 0.2;
    }
    else {
        descuento = 0;
    }
    preciofin = descuento;
    Escribir.log ("el precio a pagar es:",preciofin);
    }

//ejercicio: leer dos num si son igual multiplica
//si el primero es mayor q esl segundo los restas y sino sumar
    operacion2Num(){
    let num1, num2, resultado;
    num1 = leer ("ingresar num1:");
    num2 = leer ("ingresar num2:");
    num1 = parseInt (num1)
    num2 = parseInt (num2)
    resultado = parseInt (resultado)
    
    if (num1=num2) {
    //si son iguales multiplicamos
        resultado = num1* num2;
    }
    else{
        if (num1>num2) {
    //si el primer num es mayor lo restamos
        resultado = num1 - num2;
        }
        else{
        resultado = num1 + num2;
        }
    }
    Escribir.log ("el resultado es:", resultado);
    }

// leer 3 num diferentes e imprimir el num mayor de los 3.
    mayorNum() {
    let num1,num2,num3;
    num1= leer ("ingrese el numero1:");
    num2= leer ("ingrese el numero2:");
    num3= leer ("ingrese el numero3:");
    num1=parseInt (num1)
    num2=parseInt (num2)
    num3=parseInt (num3)

    if (num1>num2 & num1>num3) {
	Escribir.log ("el mayor es:",num1);
    }
    else {
		if (num2>num1 & num2>num3) {
		Escribir.log ("el mayor es:",num2);
        }
        else{
		Escribir.log ("el mayor es:",num3);
        }
    }
}

// ejercicio: fruteria que ofrece manzanas con descuento
// ¿cuanto pagará una persona que compre manzanas allí?
    descuentoKilos() {
    let precioK, kilos, precioinicial;
    let desc, precio_fin;
    precioK= leer ("¿cuanto cuesta el kilo de manzanas?:");
    kilos = leer ("¿cuantos kilos de manzana ha comprado?");
    precioinicial = precioK +kilos;
    if (kilos>= 0 & kilos <= 2) {
        desc = 0;
    }
    else {
        if (kilos >= 2.01 & kilos <= 5) {
        desc = precioinicial *0.1;
    }
        else {
            if (kilos >=5.01 & kilos <= 10) {
            desc = precioinicial*0.15;
            }
            else {
            desc = precioinicial *0.2;
            }
        }
    }
    precio_fin = precioinicial -desc;
    Escribir.log ("el precio a pagar es:", precio_fin);
    }

//ejercicio: elabore un programa donde muestre
//dias de la semana cuando ingrese los 7 primeros numeros
    diaSem() {
    let dia;
    dia = leer ("digite un numero del dia de la semana:");
    dia= parseInt (dia)
    switch (dia) {
        case 1:
            Escribir.log(dia," Lunes")
            break
        case 2:
            Escribir.log("Martes")
            break
        case 3:
            Escribir.log("Miercoles")
            break
        case 4:
            Escribir.log("Jueves")
            break
        case 5:
            Escribir.log("Viernes")
            break
        case 6:
            Escribir.log("Sabado")
            break
        case 7:
            Escribir.log("Domingo")
            break
        default:
            Escribir.log(dia," Dia incorrecto")
            break
        }
    }
    
// ejercicio: programa que muestre el significado
// de aniversario cada década hasta los 60
    significadoAniver(){
    let decada;
    decada= leer ("digite una decada:");
    decada= parseInt (decada)
    switch (decada) {
        case 10:
            Escribir.log(decada, "Bodas de hojalata");
            break
        case 20:
            Escribir.log(decada, "bodas de porcelana");
            break
        case 30:
            Escribir.log("bodas de perlas");
            break
        case 40:
            Escribir.log("bodas de rubí");
            break
        case 50:
            Escribir.log("bodas de oro");
            break
        case 60:
            Escribir.log("bodas de diamante");
            break
        default:
            Escribir.log(decada,"DECADA NO EXISTENTE");
            break
        }
    }

    //ejercicio: programa con sgts opciones: 1.elevar num a una potencia x
    // 2. sacar raiz cuadrada de un num
    // 3.salir
    menuOpciones(){
    let opcion;
	leer ("menú");
	leer ("1. Elevar num a una potencia X");
	leer ("2. Sacar la raiz cuadrada de un num");
	leer ("3.Salir");
	opcion= leer ("digite una opcion");
    opcion = parseInt(opcion)
	switch (opcion) {
		case 1:
            let num,poten,result;
            num = leer ("digite un numero:");
            poten = leer ("digite la potencia");
            result = (num**poten);
            Escribir.log ("el resultado es:", result);
            break
        case 2:
            let numero, resultado
            numero= leer ("digite un numero:");
            resultado = Math.sqrt(numero);
            Escribir.log ("el resultado es:", resultado);
            break
        case 3:
            default:
            Escribir.log (opcion, "SE EQUIVOCO DE OPCION DE MENU");
            break
        }
    }
}

const condicionales =new Condicionales()
//condicionales.condicionalNum()
//condicionales.promedioAlum()
//condicionales.pagarDescuento()
//condicionales.operacion2Num()
//condicionales.mayorNum()
//condicionales.descuentoKilos()
//condicionales.diaSem()
//condicionales.significadoAniver()
//condicionales.menuOpciones()

