//Get income twice per second
setInterval(getIncome(), 500);
var income;
var eff;

//Get the current income
function getIncome(){
  var money = document.getElementById("resource-money")
  var temp = money.innerText.substring(money.innerText.indexOf("(")+1);
  income = temp.substring(0, temp.indexOf("/"))
}

//Loop all buildings that can be build and get their elements
function getEff(){
  var temp = new Array();
  var elem = document.getElementsByClassName("thing button building nopic  disabled");
  for(var i = 0; i <=elem.length; i++){
    temp.push(elem[i].getElementsByClassName("amount")(0).innerText);
  
  
  
  }
}



