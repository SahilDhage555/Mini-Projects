
function calcy()
{
    let weight = document.querySelector(".weight").value;
    let height = document.querySelector(".height").value;
    let inch = document.querySelector(".inch").value;
    let status = document.getElementById("status");
    if(weight > 0 && height >= 0 && inch >= 0)
    {
        let feets = (height * 0.3048) + (inch * 0.0254);
        let bmi = weight / (feets * feets)
        status.innerText = 'BMI status is : ' + bmi.toFixed(2);
        bmiStatus(bmi);
    }
    else
    {
        status.innerText = 'Enter valid Weight & Height value.';
        status.style.color='black';
    }
}

function bmiStatus(bmi)
{
    let status = document.getElementById("status");
    let category;
    if(bmi < 18.5)
    {
        category = 'Underweight';
        status.style.color='#63768D';
    }
    else if(bmi >= 18.5 && bmi <= 24.9)
    {
        category = 'Normal weight';
        status.style.color='green';
    }
    else if(bmi >= 25 && bmi <= 29.9)
    {
        category = 'Overweight';
        status.style.color='red';
    }
    else
    {
        category = 'Obesity';
    }
    document.getElementById("status").innerText += "(" + category + ').';
}

function reset()
{
    let weight = document.querySelector(".weight");
    let height = document.querySelector(".height");
    let inch = document.querySelector(".inch");
    let status = document.getElementById("status");

    weight.value = '';
    height.value = '';
    inch.value = '';
    status.innerText = '';
}
