# FUNCTIONS Y SCOPE

* Se le asigna un evento al Documento html en el ambiente lexical global para que cuando esté 
  correctamente cargado se ejecute la función anónima que se le dió como argumento al evento `ready`.
  
~~~
$(document).ready(function() {
~~~

  * Se ejecuta el comando de la consola `console.log` para mostrar el número válido de la tarjeta por consola.
  
  ~~~
  console.log('Probar con el numero válido 4544164785372342');      
  ~~~
  
  * Se declaran variables en el ambiente lexical local.
  
  ~~~
  // Declaramos las variables que vamos a utilizar
  var $inputCard = $('#card-number');
  var $inputMonth = $('.input-month');
  var $inputYear = $('.input-year');
  var $buttonNext = $('#next');
  var regexOnlyNumbers = /^[0-9]+$/;
  var labelErrorOrSuccessMessages = $('label[for="card-number"]');
  ~~~  
  
  * Se le asigna un evento a la variable local `$input-card`.
  
  ~~~ 
  // Identificar el evento que nos permite capturar el input del usuario
  $inputCard.on('input', function() {
    isValidCreditCard($(this).val().trim());
  });
  ~~~ 
  
  * Se crean 5 funciones locales `activeButton`, `desactiveButton`, `longitud`, `soloNumeros` y `isValidCreditCard`
    para realizar las validaciones de cada dato que el usuario ingresará.
  
  ~~~ 
  // Funciones que habilita el boton del formulario
  function activeButton() {
    $buttonNext.attr('disabled', false);
  } 
 
  // Funcion que desabilita el boton del formulario
  function desactiveButton() {  
    $buttonNext.attr('disabled', true);
  } 

  // Funcion que valida la longitud del input ingresado por el usuario
  function longitud(input) {
    if (input.trim().length === 16) {
      return input;
    }
  }
  
  // Funcion que valida la longitud del input ingresado por el usuario
  function soloNumeros(input) {
    var regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  }
 
  // Funcion que valida que sea una un numero de tarjeta valido   
  function isValidCreditCard(numberCard) {
    var creditCardNumber = soloNumeros(longitud(numberCard));
    if (creditCardNumber !== undefined) {
      var arr = [];
      var sumaTotal = 0;
      for (var index = creditCardNumber.length - 1; index >= 0; index--) {
        arr.push(creditCardNumber[index]);
      }
      for (var index = 1; index < arr.length; index = index + 2) {
        arr[index] = arr[index] * 2;
        if (arr[index] >= 10) {
          arr[index] = arr[index] - 9;
        }    
      }
     
      for (var index = 0; index < arr.length; index++) {
        sumaTotal = sumaTotal + parseInt(arr[index]);
      }
     
      if (sumaTotal % 10 === 0) {
        console.log('Es una tarjeta valida');
        activeButton();
      } else {
        console.log('No es un numero valido');
        desactiveButton();
      }
    } else {
      console.log('Verifique el numero de su tarjeta'); 
      desactiveButton();  
    }
  }
});
~~~ 
