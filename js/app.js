//variables
  var resultado = document.getElementById('display');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var raiz = document.getElementById('raiz');
  var signo = document.getElementById('sign');
  var igual = document.getElementById('igual');
  var punto = document.getElementById('punto');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var x="0";
  var xi=1;
  var coma=0;
  var ni=0;
  var op="no";


//Cambia el tamaño de las teclas
function animar(boton_a_animar){
  boton_a_animar.style.transform="scale(0.9)";
  setTimeout(function () {
    boton_a_animar.style.transform="scale(1)";
  }, 200);
}

//Asignar valor a las teclas
function escribir(valor_a_escribir) {
  if (display.textContent.length <= 7) {
    if (x=="0" || xi==1) {
      display.textContent=valor_a_escribir;
      x=valor_a_escribir;
      if (valor_a_escribir==".") {
        display.textContent="0.";
        x=valor_a_escribir;
        coma=1;
      }
    }
    else {
      if (valor_a_escribir=="." && coma==0) {
        display.textContent+=valor_a_escribir;
        x+=valor_a_escribir;
        coma=1;
      }
      else if (valor_a_escribir=="." && coma==1) {}
      else {
        display.textContent+=valor_a_escribir;
        x+=valor_a_escribir;
      }
    }
    xi=0;
  }
}

//Borrado de pantalla
function borradoTotal(){
  display.textContent=0;
  x="0";
  coma=0;
  ni=0;
  op="no";
}

//Numero negativo
function opuest() {
  nx=Number(x);
  nx=-nx;
  x=String(nx);
  display.textContent=x;
}

//Operaciones
function operar(s) {
 igualar();
 ni=x;
 op=s; //guardamos tipo de operación.
 xi=1; //inicializar pantalla.
}

function raizc() {
 x=Math.sqrt(x);
 display.textContent=x;
 op="no";
 xi=1;
}

//Resultados
function igualar() {
  if (op=="no") {
    display.textContent=x;
  }
  else {
    sl=ni+op+x;
    sol=eval(sl);
    display.textContent=sol;
    x=sol;
    op="no";
    xi=1;
  }
}



uno.onclick = function(){escribir(1); animar(uno);}
dos.onclick = function(){escribir(2); animar(dos);}
tres.onclick = function(){escribir(3); animar(tres);}
cuatro.onclick = function(){escribir(4); animar(cuatro);}
cinco.onclick = function(){escribir(5); animar(cinco);}
seis.onclick = function(){escribir(6); animar(seis);}
siete.onclick = function(){escribir(7); animar(siete);}
ocho.onclick = function(){escribir(8); animar(ocho);}
nueve.onclick = function(){escribir(9); animar(nueve);}
cero.onclick = function(){escribir(0); animar(cero);}
punto.onclick = function(){escribir("."); animar(punto);}
reset.onclick = function(){borradoTotal(); animar(on);}
signo.onclick = function(){opuest(); animar(sign);}
suma.onclick = function(){operar('+'); animar(mas);}
resta.onclick = function(){operar('-'); animar(menos);}
multiplicacion.onclick = function(){operar('*'); animar(por);}
division.onclick = function(){operar('/'); animar(dividido);}
raiz.onclick = function(){raizc(); animar(raiz);}
igual.onclick = function(){igualar(); animar(igual);}
