
var lado_a=0,
    lado_b=0,
    base=0,
    altura=0,
    radio=0,
    palabra="";
    areacu=0,
    areatr=0,
    numero=0,
    areaci=0;
 var contador=0,contador1=0,contador2=0,contador3=0,contador4=0,contador5=0, contador6=0, contador7=0,
     contador8=0, contador9=0,contador10=0, contador12=0, contador13=0,contador14=0,contador15=0,
     contador16=0, contador17=0, contador18=0, contador19=0, contador20=0, contador21=0;





  //  areacu=lado_a*lado_b;

//--------------------------funcion cuadrado-------------------------------------
function valor1()

{

  lado_a=document.getElementById('lado_a').value;
  lado_b=document.getElementById('lado_b').value;

                areacu=lado_a*lado_b;

document.getElementById("mostrar1").innerHTML="el area del cualdrado es: "+areacu;
//console.log(areacu);
}

//--------------------------|| funcion triangulo--------------------------
function valor2()

{

  base=document.getElementById('base').value;
  altura=document.getElementById('altura').value;

                areatr=(base*altura)/2;

document.getElementById("mostrar2").innerHTML="el area del triangulo es: "+areatr;
//console.log(areacu);
}

//------------------------|| funcion circulo----------------------------------
function valor3()

{

  radio=document.getElementById('radio').value;
  var pi=Math.PI;
  var elevado=Math.pow(radio,2);
                areaci=pi*elevado;

document.getElementById("mostrar3").innerHTML="el area del circulo es: "+areaci;
console.log(areacu);
}

//------------------------||funcion para letras y consonantes-------------------

function valor4()

{

  palabra=document.getElementById('palabra').value;
  palabra=palabra.toLowerCase();

  for(i=0;i<=palabra.length;i++){
    if(palabra.charAt(i)==="a"){
        contador++;
    }

  }
  for(i=0;i<=palabra.length;i++){
    if(palabra.charAt(i)==="e"){
        contador1++;
    }
  }
  for(i=0;i<=palabra.length;i++){
    if(palabra.charAt(i)==="i"){
        contador2++;
    }
  }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="o"){
          contador3++;
      }
    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="u"){
          contador4++;
      }

  }
  var txt="<table class='tablas'><tr><td class='td'>VOCALES</td><td class='td'>CANTIDAD DE VECES</td></tr><tr><td>A</td><td>"+contador+"</td></tr><tr>"+
          "<td>E</td><td>"+contador1+"</td></tr><tr><td>I</td>"+
          "<td>"+contador2+"</td></tr><tr><td>O</td><td>"+contador3+"</td></tr>"+
          "<tr><td>U</td><td>"+contador4+"</td></tr></table>";
  document.getElementById("mostrar4").innerHTML=txt;
contador=0;
contador1=0;
contador2=0;
contador3=0;
contador4=0;


}



function valor5()

{
    palabra=document.getElementById('palabra').value;
    palabra=palabra.toLowerCase();

    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="b"){
          contador++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="c"){
          contador1++;
      }
    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="d"){
          contador2++;
      }
    }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="f"){
            contador3++;
        }
      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="g"){
            contador4++;
        }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="h"){
          contador5++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="j"){
        contador6++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="k"){
        contador7++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="l"){
        contador8++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="m"){
        contador9++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="n"){
        contador10++;
      }

      }

      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="p"){
          contador12++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="q"){
          contador13++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="r"){
          contador14++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="s"){
          contador15++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="t"){
          contador16++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="v"){
          contador17++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="W"){
          contador18++;
        }

      }
      for(i=0;i<=palabra.length;i++){
        if(palabra.charAt(i)==="x"){
      contador19++;
    }

  }
  for(i=0;i<=palabra.length;i++){
    if(palabra.charAt(i)==="y"){
        contador20++;
      }

    }
    for(i=0;i<=palabra.length;i++){
      if(palabra.charAt(i)==="z"){
        contador21++;
      }

    }
    var txt1="<table class='tablas'><tr><td class='td'>CONSONANTE</td><td class='td'>CANTIDAD DE VECES</td></tr><tr><td>B</td><td>"+contador+"</td></tr><tr>"+
    "<td>C</td><td>"+contador1+"</td></tr> <tr><td>D</td><td>"+contador2+"</td></tr> <tr><td>F</td><td>"+contador3+"</td></tr><tr>"+
    "<td>G</td><td>"+contador4+"</td></tr> <tr><td>H</td><td>"+contador5+"</td></tr> <tr><td>J</td><td>"+contador6+"</td></tr><tr>"+
    "<td>K</td><td>"+contador7+"</td></tr> <tr><td>L</td><td>"+contador8+"</td></tr> <tr><td>M</td><td>"+contador9+"</td></tr><tr>"+
    "<td>N</td><td>"+contador10+"</td></tr> <tr><td>P</td><td>"+contador12+"</td></tr><tr>"+
    "<td>Q</td><td>"+contador13+"</td></tr><tr><td>R</td><td>"+contador14+"</td></tr><tr><td>S</td><td>"+contador15+"</td></tr><tr>"+
    "<td>T</td><td>"+contador16+"</td></tr> <tr><td>V</td><td>"+contador17+"</td></tr> <tr><td>W</td><td>"+contador18+"</td></tr><tr>"+
    "<td>X</td><td>"+contador19+"</td></tr> <tr><td>Y</td><td>"+contador20+"</td></tr><tr><td>Z</td><td>"+contador21+"</td></tr></table>";

    document.getElementById("mostrar4").innerHTML=txt1;
  contador=0;
  contador1=0;
  contador2=0;
  contador3=0;
  contador4=0;
  contador5=0;
  contador6=0;
  contador7=0;
  contador8=0;
  contador9=0;
  contador10=0;
  contador12=0;
  contador13=0;
  contador14=0;
  contador15=0;
  contador16=0;
  contador17=0;
  contador18=0;
  contador19=0;
  contador20=0;
  contador21=0;
}
//-------------------------------|| numero capicua ||-----------------------------------------------

function valor6(){
  numero=document.getElementById('numero').value;
      document.getElementById("mostrar5").innerHTML="el numero debe ser no mayor ni menor a 4 digitos.";

     for(i=0;i<=4;i++){
    if(numero.charAt(0)===numero.charAt(3) && numero.charAt(1)===numero.charAt(2)){

        document.getElementById("mostrar5").innerHTML="el numero "+numero+" es capicua";
      }else{
        document.getElementById("mostrar5").innerHTML="el numero "+numero+" no es capicua";
      }

   }




}
