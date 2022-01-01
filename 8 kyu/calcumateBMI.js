// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi_value = weight / (height ** 2)
    if (bmi_value <= 18.5){
      return "Underweight"
    } else if(bmi_value <= 25){
      return "Normal"
    } else if(bmi_value <= 30){
      return "Overweight"
    } else{
      return "Obese"
    }
}

function bmi(weight, height) {
    let bmi  = weight/(height*height);
    return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}