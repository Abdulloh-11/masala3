var weight = Number(prompt("you weight (kg)"));
var height = Number(prompt("you height (exemple: 1.7 )"));
var BMI = Number(weight/((height)**2));

if( BMI <= 30 && BMI >= 20 ){
    alert("normal")
}
else if( BMI > 30 ){
    alert("YOU ILL")
  }
else if( BMI < 19){
    alert("YOU ILL")
}

