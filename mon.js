var usd = 26.4;
var eur = 31;
var rub = 0.45;
var input = +prompt("Какую сумму вы хотели бы поменять?");
if (isNaN(input)) {
  alert("Введите пожалуйста корректный данные" )
}else {
  alert("USD=" + usd*input + "\n" + "EUR=" + eur*input + "\n" + "RUB=" + rub*input );
}
var value = prompt("В какую валюту вы хотели бы перевести? USD, EUR, RUB?");
// if (typeof(value) = 'number') {
//   alert( "Выберите пожалуйста одну из валют: USD, EUR, RUB" );
// }else{
  if (value == "USD" || value == "$" || value == "доллар" ){
    alert("USD=" + usd*input );
  }else if (value == "EUR" || value == "евро") {
    alert("EUR=" + eur*input );
  }else if (value == "RUB" || value == "рубль"){
    alert("RUB=" + rub*input );
  }
var answer = prompt("Вы действительно хотите поменять " + input + " гривен на " + value*input + " " + value + "?");
if (answer == "Да"){
  alert("Спасибо");
}else if (answer == 'Нет'){
  alert("Приходите в другой раз)");
}
