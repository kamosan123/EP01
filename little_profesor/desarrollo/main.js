import utils from "./utils";

let nivel       = 1,
    operacion   = "+",
    setActivado = false,
    operadores  = ["/", "*", "-", "+"],
    encadenarespuesta = "",
    operacionc=0,
    respuesta=0;
let presionaTecla = opc =>
{
    //Saber si se ha presionado la opción de SET...
    if(opc.toLowerCase() === "set" || setActivado)
    {
        //Saber si se ha presionado "go"...
        if(opc.toLowerCase() !== "go")
        {
            //Imprimir las opciones...
            if(utils.isNumber(opc))
            {
                //Saber si el número está en un nivel de 1 a 5...
                if(Number(opc) >= 1 && Number(opc) <= 5)
                {
                    nivel = Number(opc);

                }
                //console.log("Número");
            }
            else
            {
                for(let i = 0; i < operadores.length; i++)
                {
                    if(opc === operadores[i])
                    {
                        operacion = operadores[i];
                        break;
                    }
                }
            }

            utils.accesoDOM("lcd").innerHTML = `L${nivel}&nbsp;&nbsp;OP&nbsp;${operacion}`;
            setActivado = true;
        }
        else
        {
            setActivado = false;
            operar(nivel, operacion);
        }
    }
    else
    {
        if(utils.isNumber(opc))
        {
            encadenarespuesta += opc;
            utils.accesoDOM("lcd").innerHTML = `${operacionc} = ${encadenarespuesta}`;
          //  console.log(eval(encadenarespuesta),eval(operacionc));
            if(eval(operacionc)===eval(encadenarespuesta)){
            alert("esta correcto");
            operar(nivel, operacion);

          }else {
            alert("esta mal revisa");
            encadenarespuesta=""
;          }

          }
    }

};

let operar = (nivel, operacion, opc) =>{


  if(nivel===1){
    let a= Math.floor(Math.random()*(9-1+1)+1);
    let b= Math.floor(Math.random()*(9-1+1)+1);

   operacionc=`${a} ${operacion} ${b} `;
   eval(operacionc);

  //console.log(a+" "+operacion+" "+b);
  utils.accesoDOM("lcd").innerHTML = operacionc;
}
if(nivel===2){
  let a= Math.floor(Math.random()*(99-10+1)+10);
  let b= Math.floor(Math.random()*(99-10+1)+10);

 operacionc=`${a} ${operacion} ${b} `;
 eval(operacionc);
//console.log(a+" "+operacion+" "+b);
utils.accesoDOM("lcd").innerHTML = operacionc;
}
if(nivel===3){
  let a= Math.floor(Math.random()*(999-100+1)+100);
  let b= Math.floor(Math.random()*(9999-100+1)+100);

 operacionc=`${a} ${operacion} ${b} `;
 eval(operacionc);
//console.log(a+" "+operacion+" "+b);
utils.accesoDOM("lcd").innerHTML = operacionc;
}
if(nivel===4){
  let a= Math.floor(Math.random()*(9999-1000+1)+1000);
  let b= Math.floor(Math.random()*(9999-1000+1)+1000);

 operacionc=`${a} ${operacion} ${b} `;
//console.log(a+" "+operacion+" "+b);
utils.accesoDOM("lcd").innerHTML = operacionc;
eval(operacionc);
}

//respuesta=eval(operacionc);


};

let crearBotones = () =>
{
    let posicion = {
                        left : 66,
                        bottom : 221
                   };

    let opciones     = ["set", "0", "go"],
        inciaNumero = 7;
    for(let i = 0; i < 4; i++)
    {
        for(let c = 0; c < 4; c++)
        {
            let data = c <= 2 ?
                       (inciaNumero > 0 ? (inciaNumero + c) : opciones[c])
                       : operadores[i];
            let style = `left: ${posicion.left + (c * 53)}px;
                         bottom: ${posicion.bottom - (i * 62)}px;`;
            let elementoDIV = `<div class = "tecla" style = "${style}" data = ${data} id = "${i}_${c}"></div>`;
            utils.accesoDOM("carcasa").insertAdjacentHTML('afterbegin', elementoDIV);
            utils.accesoDOM(`${i}_${c}`).addEventListener('click', event =>
            {
                let valor = utils.accesoDOM(event.target.id).getAttribute("data");
                presionaTecla(valor)
            });
        }
        inciaNumero -= 3;
    }
};
crearBotones();
