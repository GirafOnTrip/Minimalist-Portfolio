// NAV MOBILE MENU OPEN-CLOSE//

let navMobileBtn    = document.querySelector(".top__list");
let navMobileMenu   = document.querySelector(".nav-mobile");


navMobileBtn.addEventListener('click', function(){
    
    navMobileBtn.classList.toggle('btn-open-menu')
    navMobileMenu.classList.toggle('open-menu')      
}) 


// CONTACT ME - FORM REQUIRED//

let inputName       = document.querySelector('.form__input1')
let inputEmail      = document.querySelector('.form__input2')
let textarea        = document.querySelector('.form__textarea')
let errorName       = document.querySelector('.form__error1')
let errorEmail      = document.querySelector('.form__error2')
let errorMessage    = document.querySelector('.form__error3')
let btn             = document.querySelector('.form__btn')


btn.addEventListener('click', function(){


    if(inputName.value == ''){

        inputName.style.border='2px solid red';
        errorName.style.display='unset';
    }
    else{

        inputName.style.border='none';  
        errorName.style.display='none';
    }

    if(inputEmail.value == ''){

        inputEmail.style.border='2px solid red';
        errorEmail.style.display='unset';
    }
    else{

        inputEmail.style.border='none';
        errorEmail.style.display='none';  
    }

    if(textarea.value == ''){

        textarea.style.border='2px solid red';
        errorMessage.style.display='unset';  
    }
    else{

        textarea.style.border='none';
        errorMessage.style.display='none';
    }

})


