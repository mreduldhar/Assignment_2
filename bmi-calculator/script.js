let button = document.getElementById('calculateBtn');

button.addEventListener('click', () => {
    const weight = parseInt(document.getElementById('weightInput').value);
    const height = parseInt(document.getElementById('heightInput').value);
    const result = document.getElementById('output');
    const result2 = document.getElementById('output2');
    let height_status=false, weight_status=false;

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = '<br>' + 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = '<br>' + 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight_status && height_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = 'Your BMI is : ' + bmi;
            result2.innerHTML = 'Underweight';
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = 'Your BMI is : ' + bmi;
            result2.innerHTML = 'Normal';
        }else{
            result.innerHTML = 'Your BMI is : ' + bmi;
            result2.innerHTML = 'Overweight';
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});