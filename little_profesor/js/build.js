(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nivel = 1,
    operacion = "+",
    setActivado = false,
    operadores = ["/", "*", "-", "+"],
    encadenarespuesta = "",
    operacionc = 0,
    respuesta = 0;
var presionaTecla = function presionaTecla(opc) {
    //Saber si se ha presionado la opción de SET...
    if (opc.toLowerCase() === "set" || setActivado) {
        //Saber si se ha presionado "go"...
        if (opc.toLowerCase() !== "go") {
            //Imprimir las opciones...
            if (_utils2.default.isNumber(opc)) {
                //Saber si el número está en un nivel de 1 a 5...
                if (Number(opc) >= 1 && Number(opc) <= 5) {
                    nivel = Number(opc);
                }
                //console.log("Número");
            } else {
                    for (var i = 0; i < operadores.length; i++) {
                        if (opc === operadores[i]) {
                            operacion = operadores[i];
                            break;
                        }
                    }
                }

            _utils2.default.accesoDOM("lcd").innerHTML = "L" + nivel + "&nbsp;&nbsp;OP&nbsp;" + operacion;
            setActivado = true;
        } else {
            setActivado = false;
            operar(nivel, operacion);
        }
    } else {
        if (_utils2.default.isNumber(opc)) {
            encadenarespuesta += opc;
            _utils2.default.accesoDOM("lcd").innerHTML = operacionc + " = " + encadenarespuesta;
            //  console.log(eval(encadenarespuesta),eval(operacionc));
            if (eval(operacionc) === eval(encadenarespuesta)) {
                alert("esta correcto");
                operar(nivel, operacion);
            } else {
                alert("esta mal revisa");
                encadenarespuesta = "";
            }
        }
    }
};

var operar = function operar(nivel, operacion, opc) {

    if (nivel === 1) {
        var a = Math.floor(Math.random() * (9 - 1 + 1) + 1);
        var b = Math.floor(Math.random() * (9 - 1 + 1) + 1);

        operacionc = a + " " + operacion + " " + b + " ";
        eval(operacionc);

        //console.log(a+" "+operacion+" "+b);
        _utils2.default.accesoDOM("lcd").innerHTML = operacionc;
    }
    if (nivel === 2) {
        var _a = Math.floor(Math.random() * (99 - 10 + 1) + 10);
        var _b = Math.floor(Math.random() * (99 - 10 + 1) + 10);

        operacionc = _a + " " + operacion + " " + _b + " ";
        eval(operacionc);
        //console.log(a+" "+operacion+" "+b);
        _utils2.default.accesoDOM("lcd").innerHTML = operacionc;
    }
    if (nivel === 3) {
        var _a2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        var _b2 = Math.floor(Math.random() * (9999 - 100 + 1) + 100);

        operacionc = _a2 + " " + operacion + " " + _b2 + " ";
        eval(operacionc);
        //console.log(a+" "+operacion+" "+b);
        _utils2.default.accesoDOM("lcd").innerHTML = operacionc;
    }
    if (nivel === 4) {
        var _a3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        var _b3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

        operacionc = _a3 + " " + operacion + " " + _b3 + " ";
        //console.log(a+" "+operacion+" "+b);
        _utils2.default.accesoDOM("lcd").innerHTML = operacionc;
        eval(operacionc);
    }

    //respuesta=eval(operacionc);
};

var crearBotones = function crearBotones() {
    var posicion = {
        left: 66,
        bottom: 221
    };

    var opciones = ["set", "0", "go"],
        inciaNumero = 7;
    for (var i = 0; i < 4; i++) {
        for (var c = 0; c < 4; c++) {
            var data = c <= 2 ? inciaNumero > 0 ? inciaNumero + c : opciones[c] : operadores[i];
            var style = "left: " + (posicion.left + c * 53) + "px;\n                         bottom: " + (posicion.bottom - i * 62) + "px;";
            var elementoDIV = "<div class = \"tecla\" style = \"" + style + "\" data = " + data + " id = \"" + i + "_" + c + "\"></div>";
            _utils2.default.accesoDOM("carcasa").insertAdjacentHTML('afterbegin', elementoDIV);
            _utils2.default.accesoDOM(i + "_" + c).addEventListener('click', function (event) {
                var valor = _utils2.default.accesoDOM(event.target.id).getAttribute("data");
                presionaTecla(valor);
            });
        }
        inciaNumero -= 3;
    }
};
crearBotones();

},{"./utils":2}],2:[function(require,module,exports){
"use strict";

var accesoDOM = function accesoDOM(param) {
  return document.getElementById(param);
};
var isNumber = function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
module.exports = { accesoDOM: accesoDOM, isNumber: isNumber };

},{}]},{},[1]);
