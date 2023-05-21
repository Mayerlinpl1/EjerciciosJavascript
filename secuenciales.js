const leer =require("prompt-sync")()
const Escribir =console
class Secuenciales{
//Ejercicio: Calcular la cantidad de seg q estan incluidos en el
//numero de horas, mins y segs ingresados por el usuario.
    secuencialCantidad(){
    let horas, minutos, seg;
	let horas_seg, minutos_seg, total_seg;
	horas= leer ("digite las horas:");
	minutos= leer ("digite los minutos:");
	seg= leer ("digite los segundos:");
	//Calcular equivalente en segs
	horas_seg = horas *3600;
	minutos_seg = minutos *60;
	total_seg = horas_seg + minutos_seg+ seg;
	Escribir.log ("Los segundos equivalentes son:", total_seg);
    }
    
//Ejercicio: Programa para ingresar el radio de un circulo y
// con area y longitud de circunferencia
    areaLog(){
    let radio, area,lon;
    radio= leer ("digite el valor de radio:");
    area = (Math.PI) *(radio**2);
	lon = (2* Math.PI)* (radio);
	Escribir.log ("el area de una circunferencia es:",area);
	Escribir.log ("la longitud es:", lon);
    }

//Ejercicio: un maestro desea saber el porcentaje de hombres
//y de mujeres hay en el grupo de estudiantes.
    porcentajeEstudiantes(){
    let num_homb, num_muje;
	let total_students;
	let porcenH, porcenM;
	num_homb= leer ("digite el num de hombres:");
	num_muje = leer ("digite el num de mujeres:");
	total_students = num_homb + num_muje;
	porcenH = num_homb / total_students *100;
	porcenM = num_muje / total_students *100;
	Escribir.log  ("el porcentaje de hombres es:", porcenH,"%");
	Escribir.log ("el porcentaje de mujeres es:", porcenM,"%");
    }

// Ejercicio: Un profe prepara 3 cuestionarios para un final;
// 5 min en el A, 8 min en el B y 6 en el C.
//¿horas y mins que se tarda en revisar todo?
    cuestionarioFinal(){
    let cantA, cantB, cantC;
    let timeA, timeB, timeC;
    let time_total;
    let horas, mins;
    cantA= leer ("digite la cantidad de cuestionarios A:");
    cantB =leer ("digite la cantidad de cuestionarios B:");
    cantC =leer ("digite la cantidad de cuestionarios C:");
//calcular los mins
    timeA = cantA *5;
    timeB = cantB *8;
    timeC = cantC * 6;
//calcular el time total
    time_total = timeA + timeB + timeC;
    horas = Math.trunc (time_total /60);
    mins = time_total % 60;
    Escribir.log ("se tardará ", horas, " horas y ", mins, " minutos ");
    }
//Ejercicio: descuento de 15% sobre el total de su compra
// por lo q el cliente desea saber cuanto pagará en total.
    compra(){
    let precio,des,precio_fin;
    precio= leer ("digite el precio a pagar:");
    des = precio* 0.15;
    precio_fin = precio - des;
    Escribir.log ("el precio a pagar es de:", precio_fin);
    }
//Ejercicio: calificaciones de un alumno:
//55% de 3 calif parciales, 30% examfinal y 15% de trabfinal.
    calificacionesAlum(){
    let par1, par2,par3,promedioP,notasparc;
    let examfinal,notexam;
    let notatrabj, notafinaltrabj;
    let notafinal;
    par1=parseInt(par1)
    par2=parseInt(par2)
    par3=parseInt(par3)
    
    par1= leer ("digite la 1 nota del parcial:")
    par2= leer ("digite la 2 nota del parcial:")
    par3=leer ("digite la 3 nota del parcial:")
    examfinal= leer ("digite la nota de exam final:");
    notatrabj= leer ("digite la nota del trabaj final:");
    promedioP = (par1 + par2 + par3)/3;
    notasparc = promedioP *0.55;
    notexam = examfinal * 0.3;
    notafinaltrabj = notatrabj *0.15;
    notafinal = notasparc + notexam + notafinaltrabj;
    Escribir.log ("la calificacion final es:", notafinal);
    }

}

const secuenciales = new Secuenciales()
//secuenciales.secuencialCantidad()
//secuenciales.areaLog()
//secuenciales.porcentajeEstudiantes()
//secuenciales.cuestionarioFinal()
//secuenciales.compra()
//secuenciales.calificacionesAlum()

