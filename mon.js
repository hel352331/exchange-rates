var usd = 26.4;
var eur = 31;
var rub = 0.45;
var input = +prompt("Какую сумму вы хотели бы поменять?");
if (isNaN(input)) {
  alert("Введите пожалуйста корректный данные" );
}else {
  alert("USD=" + usd*input + "\n" + "EUR=" + eur*input + "\n" + "RUB=" + rub*input );
  var currency_type = prompt("В какую валюту вы хотели бы перевести? USD, EUR, RUB?").toUpperCase();
    if (currency_type == "USD" || currency_type == "$" || currency_type == "доллар" ){
      var result=input/usd;
      alert(input + "грн = " +result+ currency_type);
    }else if (currency_type == "EUR" || currency_type == "евро") {
      var result=input/eur;
      alert(input + "грн = " +result+ currency_type);
    }else if (currency_type == "RUB" || currency_type == "рубль"){
      var result=input/rub;
      alert(input + "грн = " +result+ currency_type);
    }else {
      alert( "Выберите пожалуйста одну из валют: USD, EUR, RUB" );
    }
    var answer = confirm("Вы действительно хотите поменять " + input + " гривен на " + result + " " + currency_type + "?");
    if (answer == true){
      alert("Спасибо");
    }else if (answer == false){
      alert("Приходите в другой раз)");
    }
  }
