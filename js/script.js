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
let stepCount = 7

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