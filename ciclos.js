const leer =require("prompt-sync")()
const Escribir =console
class Ciclos{
//ejercicio: suma de los N primeros numeros
    cicloPrimernum(){
    let N, suma, i;
    N= leer ("digite la cantidad de numeros a sumar:");
    suma = 0;
    suma= parseInt(suma)
    for (i = 1;  i<=N ;i++){
        suma= suma + i
    }
    Escribir.log ("la suma es:",suma);
}

//  calcula independiente la suma de num pares e impares 1-50
    sumaNum(){
    let sum_pares, sum_impares, i;
	sum_pares =0;
	sum_impares = 0;
	for (i=2; i<=49; i++){
		if (i % 2 == 0) {
			sum_pares = sum_pares + i;
        } else{
			sum_impares = sum_impares + i;
        }
    }
	Escribir.log ("la suma de pares es:", sum_pares);
	Escribir.log ("la suma de impares es:", sum_impares);
    }

// leer 10 num e imprimir cuantos son positv, negativ y neutros
    conteoNum(){
    let num, i;
	let cont_posit, cont_negativ, cont_neutro;
	cont_posit = 0;
	cont_negativ = 0;
	cont_neutro = 0;
	for (i=1; i<=10; i++) {
		num =leer("digite un numero:");
        if (num == 0) {
			cont_neutro = cont_neutro +1;
        } else{
			if (num > 0) {
				cont_posit = cont_posit + 1;
            }else{
				cont_negativ= cont_negativ + 1;
            }
        }
    }
	Escribir.log ("la cantidad de positivos es:", cont_posit);
	Escribir.log ("la cantidad de negativos es:", cont_negativ);
	Escribir.log ("la cantidad de neutros es:", cont_neutro);
    }

//calcular calif promedio y mas baja de 10 alumnos.
    calificacionPromed(){
    let calif_prom, calif_baja;
	let calif, suma;
	let i;
	suma = 0;
	calif_baja = 99999;
	for (i = 1;  i<=10 ; i++) {
		calif= leer ( "digite una calificacion:");
		//suma iterativa de las calif
		suma = suma + Math.round (calif);
		//calcular la menor calif
		if (calif < calif_baja) {
			calif_baja = calif;
        }
    }
	calif_prom = suma / 10;
	Escribir.log ("la calificacion promedio es:", calif_prom);
	Escribir.log ("la calificacion mas baja:", calif_baja);
    }

// calcular el factorial de un num mayor o igual a 0.
    factorialNumero(){
    let num;
	let i , factorial;
	do{
		num= leer ("digite un numero:");
    }while (num < 0)
	i =1;
	factorial = 1;
	// n!= 1*2*3*4*...*N
    while (i <= num){
		factorial = factorial * i;
		i = i + 1;
    }
	Escribir.log ("el factorial es:", factorial);
	
    }

//calcular la sgt sumatoria de N element
// S= 1+4+9+...
    sumaIterativa(){
    let nElemt;
	let i,suma;
    Escribir.log ("digite la cantidad de elementos a sumar:");
	nElemt= leer (nElemt)
    i = 1;
	suma =0;
	while (i<= nElemt) {
		suma = suma+i**2;
		i = i +1;
    }
	Escribir.log ("la suma es:", suma);
    }

// ingresar N enteros, visualizar sum de pares, impares
//y el prom de los num impares
    sumaConteos(){
    let n_elem, i, num ;
	let sum_pares, cont_pares;
	let sum_impares, cont_impares ;
	let prom_impares ;
	Escribir.log ("digite la cantidad de elementos a ingresar:");
	n_elem= leer (n_elem)
	i = 1;
	sum_pares = 0;
	cont_pares = 0;
	sum_impares = 0;
	cont_impares = 0;
    sum_pares = parseInt(sum_pares)
	cont_pares =parseInt(cont_pares)
	sum_impares =parseInt(sum_impares)
	cont_impares =parseInt(cont_impares)
	while (i <= n_elem) {
		num= leer ("digite un numero:");
		if (num % 2==0) {
			//el num es par
			sum_pares = sum_pares +=num;
			//conteo de pares
			cont_pares = cont_pares +=1;
        } else{
			// el num es impar
			//suma iterativa de impares
			sum_impares = sum_impares +=num;
			//conteo de impares
			cont_impares = cont_impares +=1;
        }
		i = i +1;
    }
	
	if (cont_pares == 0) {
		Escribir.log ("NO SE HAN DIGITADO NUMEROS PARES:");
    } else{
		Escribir.log ("la suma de numeros pares es:", sum_pares);
		Escribir.log ("el conteo de los numeros pares es:", cont_pares);
    }
	
	if (cont_impares == 0) {
		Escribir.log ("no se han digitado num impares");
    } else{
		prom_impares = sum_impares / cont_impares;
		Escribir.log ("el promedio de impares es:", prom_impares);
    }
}

//ejercicio: dada las horas trabajadas de 5 personas y la tarifa de pago
//calcular el salario, y la sumatoria de todos los salarios.
    salarioHoras(){
    let i ;
    let salario, horas, tarifa, sum_salario, num_trabajadores;
    i = 1;
    sum_salario = 0;
    num_trabajadores= leer ("digite el numero de trabajadores: ");
    tarifa=leer ("digite la tarifa: ");
        while (i <= num_trabajadores) {
            console.log ("digite las horas trabajadas: ");
            horas= leer (horas)
            salario = horas * tarifa
            console.log ("el salario de este trabajador es: ",salario);
            i=i+1
            sum_salario = sum_salario + salario;
        }
        console.log ("el valor total de salarios a pagar es de: ",sum_salario);
        
    }
}

const ciclos= new Ciclos()
//ciclos. cicloPrimernum()
//ciclos.sumaNum()
//ciclos.conteoNum()
//ciclos.calificacionPromed()
//ciclos.factorialNumero()
//ciclos.sumaIterativa()
//ciclos.sumaConteos()
//ciclos.salarioHoras()
