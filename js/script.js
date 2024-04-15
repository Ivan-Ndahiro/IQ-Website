let step = document.getElementsByClassName('step');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let submit = document.getElementById('submit');
let form = document.getElementsByTagName('form')[0];
let transition = document.getElementById('transition');
let body_element = document.querySelector('body');
let complete = document.getElementById('complete');

form.onsubmit = () => {
    return false
}

let current_step = 0;
let stepCount = 5;

step[current_step].classList.add('d-block');

if (current_step == 0) {
    previous.classList.add('d-none');
    submit.classList.add('d-none');
    next.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

next.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        previous.classList.remove('d-none');
        previous.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submit.classList.remove('d-none');
            submit.classList.add('d-inline-block');
            next.classList.remove('d-inline-block');
            next.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});
 
previous.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        previous.classList.add('d-none');
        previous.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submit.classList.remove('d-inline-block');
            submit.classList.add('d-none');
            next.classList.remove('d-none');
            next.classList.add('d-inline-block');
            previous.classList.remove('d-none');
            previous.classList.add('d-inline-block');
        }
    }
    if (current_step == 0) {
        previous.classList.remove('d-inline-block');
        previous.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});
 
submit.addEventListener('click', () => {
    transition.classList.add('d-block');
    const timer = ms => new Promise(res => setTimeout(res, ms));
    timer(1000)
        .then(() => {
            body_element.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            previous.classList.remove('d-inline-block');
            previous.classList.add('d-none');
            submit.classList.remove('d-inline-block');
            submit.classList.add('d-none');
            complete.classList.remove('d-none');
            complete.classList.add('d-block');
        })
 
});

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
}