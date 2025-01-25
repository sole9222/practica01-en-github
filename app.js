let persona =prompt("bienvenida y bienvenido a nuestra pagina web ");
let  nombre = "lua";
let edad = 25;
let numeroDeVenta= 50;
let saldoDisponible = 1000 ; 

 prompt('¡Error!, Completa todos los campos. ');
  let mensajeDeError = alert('¡Error!, Completa todos los campos.');
  let nombreUsuario = prompt('¿cual es tu nombre?');
  console.log(nombreUsuario);

 //LICENCIA DE CONDUCIR
  function comprobarEdad(){
   let edad = parseInt(prompt('¿Cual es su edad?'));
   if (isNaN(edad) || edad < 1 || edad > 110) { // que sea numero y esté en un rango razonable
     return 'Ingrese una edad válida.';
   }else if(edad >=1 && edad <=17){
     return('Eres menor de edad, no puedes obtener tu licencia de conducir');
   }else if(edad>=18 && edad <=80){
     return('Puedes obtener tu licencia de conducir ');
 }else return ('Para mayor informacion visite nuestra pagina :');
    
  }
  let resultado  = comprobarEdad();
  alert(resultado);
  /* en caso profecional tendria una coneccion a mi html id="resultado"
    y lo vincularia en js con un document.getElementById('nombre demi identificador en html'*/
  
    //COMPROBAR  DIA
  let comprobarDia= prompt('¡Hola!,Bienvenido por favor ingrese un dia de semana').toLowerCase;
  const diasValidos= ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
  if (diasValidos.includes(comprobarDia)) {
  if (comprobarDia === 'sabado' || comprobarDia === 'domingo'  ){
    alert('buen fin de semana ');
  }else{
   alert('buena semana');
  }
  } 
//NEGATIVO O POSITIVO
 let verificarNumero = parseInt(prompt("ingrese un número"));
 if(isNaN(verificarNumero)){
   alert('Por favor ingrese un número valido');
  }else if(verificarNumero <0){
   alert('El número es negativo');
  }else if(verificarNumero >0){
   alert('El número es positivo');
 } else{
   alert('El número ingresado es cero ');
 }
//PUNTUACION
 let puntuacion = 100;
 let verificarPuntuacion = parseInt(prompt('ingrese su puntuación ')); 
 if(isNaN(verificarPuntuacion)){
   alert('Por favor ingrese su puntuación ')
  }else if(verificarPuntuacion >= 100){
   alert('¡Felicidades! Ganaste el juego');
  }else if (verificarPuntuacion <100){
   alert('Sigue intentando');
 } else{
   alert('sigue jugando');
 }
  // ESTADO  DE  SALDO CUENTA
  let saldo = 1.999;
  alert(`Su saldo es ${saldo}`);
  //ingreso de nombre 
  let nombreSujeto= prompt('ingrese su nombre');
   alert(`¡Bienvenido! ${nombreSujeto}`);
   // contador 1 al 10 
   let contador =0;
   while(contador <11 ){
     alert(`voy por la vuelta ${contador} `);
     contador++;
   
   }
// decremento 
let contador1 = 10;
while(contador1 >=0){
 alert(`voy por la vuelta número ${contador1}`);
 contador1--;
} 
let hola =  prompt('hola gente');