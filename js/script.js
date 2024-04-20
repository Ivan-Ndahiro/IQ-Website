let step = document.getElementsByClassName('step');
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');
let submitButton = document.getElementById('submit');
let form = document.getElementsByTagName('form')[0];
let transition = document.getElementById('transition');
let body_element = document.querySelector('body');
let complete = document.getElementById('complete');
let current_step = 0;
let stepCount = 30 ;

form.onsubmit = () => {
    return false
}

step[current_step].classList.add('d-block');

if (current_step == 0) {
    previousButton.classList.add('d-none');
    submitButton.classList.add('d-none');
    nextButton.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

//Event calls to correctly load pages when pressed the previous, Next and Submit Button
previousButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);
submitButton.addEventListener('click', submit);

//Function to load pages and calculate Progress bar for previous button
function previous(){
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        previousButton.classList.add('d-none');
        previousButton.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitButton.classList.remove('d-inline-block');
            submitButton.classList.add('d-none');
            nextButton.classList.remove('d-none');
            nextButton.classList.add('d-inline-block');
            previousButton.classList.remove('d-none');
            previousButton.classList.add('d-inline-block');
        }
    }
    if (current_step == 0) {
        previousButton.classList.remove('d-inline-block');
        previousButton.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
}

//Function to load pages and calculate Progress bar on press of Next Button
function next(){
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        previousButton.classList.remove('d-none');
        previousButton.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitButton.classList.remove('d-none');
            submitButton.classList.add('d-inline-block');
            nextButton.classList.remove('d-inline-block');
            nextButton.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
}

//Function to load pages on press of Previous Button
function submit(){
    calculate();
    for(var i=0;i<31;i++){
        step[i].classList.remove('d-block');
        step[i].classList.add('d-none');
    }
    submitButton.classList.remove('d-none');
    submitButton.classList.add('d-inline-block');
    nextButton.classList.remove('d-inline-block');
    nextButton.classList.add('d-none');
    body_element.classList.add('loaded');
    step[stepCount].classList.remove('d-block');
    step[stepCount].classList.add('d-none');
    previousButton.classList.remove('d-inline-block');
    previousButton.classList.add('d-none');
    submitButton.classList.remove('d-inline-block');
    submitButton.classList.add('d-none');
    complete.classList.remove('d-none');
    complete.classList.add('d-block');
    console.log("Submit done!")
}

//Timer function calls Submit page 15 minutes on load and refreshes the countdown every second
function timer(){
    var time = 900000;
    setTimeout(submit, time);
    var countdown = setInterval(() => {
        duration = time - 1000;
        var m = Math.floor((duration % (1000*60*60))/(1000*60));
        var s = Math.floor((duration % (1000 * 60))/1000);
        if (s < 10){
            s = "0" + s;
            document.getElementById("timer").innerHTML = m + ":" + s;
        } else{
            document.getElementById("timer").innerHTML = m + ":" + s;
        }
        if (duration <= 0){
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "Done!"
            submit();
        }
        time-=1000;
    }, 1000);
}

//IQ function to calculate the IQ Score based on the result
function iqScore(value){
    var mean = 15;
    var sd = 5;
    var iqSD = 15;
    var standardScore = (value-mean)/sd;
    var iqScore = (standardScore*iqSD)+100;
    return iqScore;
}

//Calculate function to tally up the correct scores and print out the correct value
function calculate(){
    var total=0;
    var q1=document.getElementsByName('Q1');
    var q2=document.getElementsByName('Q2');
    var q3=document.getElementsByName('Q3');
    var q4=document.getElementsByName('Q4');
    var q5=document.getElementsByName('Q5');
    var q6=document.getElementsByName('Q6');
    var q7=document.getElementsByName('Q7');
    var q8=document.getElementsByName('Q8');
    var q9=document.getElementsByName('Q9');
    var q10=document.getElementsByName('Q10');
    var q11=document.getElementsByName('Q11');
    var q12=document.getElementsByName('Q12');
    var q13=document.getElementsByName('Q13');
    var q14=document.getElementsByName('Q14');
    var q15=document.getElementsByName('Q15');
    var q16=document.getElementsByName('Q16');
    var q17=document.getElementsByName('Q17');
    var q18=document.getElementsByName('Q18');
    var q19=document.getElementsByName('Q19');
    var q20=document.getElementsByName('Q20');
    var q21=document.getElementsByName('Q21');
    var q22=document.getElementsByName('Q22');
    var q23=document.getElementsByName('Q23');
    var q24=document.getElementsByName('Q24');
    var q25=document.getElementsByName('Q25');
    var q26=document.getElementsByName('Q26');
    var q27=document.getElementsByName('Q27');
    var q28=document.getElementsByName('Q28');
    var q29=document.getElementsByName('Q29');
    var q30=document.getElementsByName('Q30');
    q1.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q2.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q3.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q4.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q5.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q6.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q7.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q8.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q9.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q10.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q11.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q12.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q13.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q14.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q15.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q16.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q17.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q18.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q19.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q20.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q21.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q22.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q23.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q24.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q25.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q26.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q27.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q28.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q29.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    q30.forEach((evnt)=>{
        if(evnt.checked){
            total=total+parseInt(evnt.value);
            return;
        }
    });
    document.getElementById("answerTotal").innerHTML = total;
    /*var iq = iqScore(total);
    document.getElementById("iqTotal").innerHTML = iq;*/
}