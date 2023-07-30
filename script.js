let formBtn=document.querySelector('#login-btn');
let formClose=document.querySelector('#form-close');
let login=document.querySelector('.login-form-container');

formBtn.addEventListener('click', ()=>{
    login.classList.add('active');
});
formClose.addEventListener('click', ()=>{
    login.classList.remove('active');
})
