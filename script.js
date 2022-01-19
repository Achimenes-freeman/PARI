const police = document.getElementById('blankNumber'),
      lastName = document.getElementById('lastName'),
      firstName = document.getElementById('firstName'),
      dob = document.getElementById('dob'),
      btnSubmit = document.getElementById('btnSubmit'),
      preloader = document.querySelector('.preloader'),
      unsuccessImage = document.getElementById('unsuccessImage');

let dobArray, error;

police.addEventListener('change', () => {
    if (policeTest(police)){
        police.classList.add('_error');
        alert("Допустимые символы: a-z, A-Z, 0-9");
    } else {
        police.classList.remove('_error');
    }
    police.value = police.value.toUpperCase();
    
});

lastName.addEventListener('change', () => {
    if (!nameTest(lastName)) {
        lastName.classList.add('_error');
        alert("Допустимые символы: а-я, А-Я, a-z, A-Z, 0-9");
    } else {
        lastName.classList.remove('_error');
        lastName.value = lastName.value.split(' ').join('');
    }
});

firstName.addEventListener('change', () => {
    if (!nameTest(firstName)) {
        firstName.classList.add('_error');
        alert("Допустимые символы: а-я, А-Я, a-z, A-Z, 0-9");
    } else {
        firstName.classList.remove('_error');
        firstName.value = firstName.value.split(' ').join('');
    }
});

dob.addEventListener('change', () => {
    if (!dobTest(dob)) {
        dob.classList.add('_error');
    } else {
        dobArray = dob.value.split('.');
        if(+dobArray[0] > 31) {
            dob.classList.add('_error');
            alert('Ведтите корректные данные');
        } else{
            if(+dobArray[1] > 12) {
                dob.classList.add('_error');
                alert('Ведтите корректные данные');
            } else {
                if (+dobArray[2] > 2022 || +dobArray[2] < 1900){
                    dob.classList.add('_error');
                    alert('Ведтите корректные данные');
                } else{
                    dob.classList.remove('_error');
                }
            }
        }
    }
    
});

btnSubmit.addEventListener('click', () => {
    if((police.classList.contains('_error') || lastName.classList.contains('_error') || firstName.classList.contains('_error') || dob.classList.contains('_error')) || (!police.value || !lastName.value || !firstName.value || !dob.value)) {
        alert('Введите корректные данные формы');
    } else {
        unsuccessImage.style.display = "none";
        preloader.style.display = "block";
        setTimeout(() => {
            preloader.style.display = "";
            unsuccessImage.style.display = "block";
        }, 5000)
    }
})

function policeTest(input) {
    return /[^\w+]/.test(input.value);
}

function nameTest(input) {
    return /[^\d|\s|\W]\s*-?\s*[^\d|\s|\W]/.test(input.value);
}

function dobTest(input) {
    return /\d{2}\.\d{2}\.\d{4}/.test(input.value);
}