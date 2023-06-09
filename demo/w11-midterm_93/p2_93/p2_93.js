const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

function bmiCalc_93(height, weight) {
  return weight /(height * height);
}

function bmi_normal_low(height) {
  return 18.5 * (height * height);
}

function bmi_normal_high(height) {
  return 24 * (height * height);
}

function calculateBMI() {
  const weight =Number( document.querySelector('#weight').value);
  const height =Number( document.querySelector('#height').value/100);
  // console.log(weight,height);

  const bmi = bmiCalc_93(height, weight);
  const normal_high = bmi_normal_high(height);
  const normal_low = bmi_normal_low(height);

  let status;
  let suggestion;

  if(bmi < 18.5){
    status = 'Underweight'
    suggestion = `add at least ${(normal_low-weight).toFixed(1)}kg normal.`
  }else if(bmi<=24){
    status = 'Normal'
    suggestion = ''
  }else{
    status = 'Overweight'
    suggestion=`reduce least ${weight-normal_high} kg to normal`
  }
  bmiResult.innerHTML = `Your BMI is ${bmi.toFixed(1)}. ${status}.`
  suggest.innerHTML =`${suggestion}.`
}

calculateBtn.addEventListener('click', calculateBMI);
