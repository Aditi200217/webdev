console.log(`This is project 4`);

const uname = document.getElementById(`name`);
const email = document.getElementById(`email`);
const phone = document.getElementById(`phone`);
let valid = false;
let validUser = false;
let validEmail = false;
let validPhone = false;
// $(`#failure`).hide();
// $(`#success`).hide();

// console.log(name,email,phone);
uname.addEventListener(`blur`,()=>{
    console.log(`Name is blurred`);
    //validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/
    let str = uname.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log(`it matched`);
        uname.classList.remove(`is-invalid`)
        validUser=true
    }
    else{
        console.log(`It didnt match`);
        uname.classList.add(`is-invalid`)
        validUser=false
    }
})

email.addEventListener(`blur`,()=>{
    console.log(`Name is blurred`);
     //validate email here
     let regex = /^([a-zA-Z_0-9\-\.]+)@([a-zA-Z])+\.([a-zA-Z])+$/
     let str = email.value;
     console.log(regex,str);
     if(regex.test(str)){
         console.log(`it matched`);
         email.classList.remove(`is-invalid`)
         validEmail=true
     }
     else{
         console.log(`It didnt match`);
         email.classList.add(`is-invalid`)
         validEmail=false
     }
 })


phone.addEventListener(`blur`,()=>{
    console.log(`Name is blurred`);
    //validate phone here
    let regex = /^([0-9]){10}$/
    let str =phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        // console.log(`phone number is correct`);
        phone.classList.remove(`is-invalid`)
        validPhone=true
    }
    else{
        // console.log(`phone number is incorrect`);
    phone.classList.add(`is-invalid`)
    validPhone=false
    }
})

function show(type,str,msg){ 
    let alert= document.getElementById(`alert`);
    alert.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show " id= "success" role="alert">
    <strong>${str}!</strong> ${msg}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>`

    // setTimeout(function () {
    //  alert.innerHTML = "";
    // }, 2000);
}


let submit = document.getElementById(`submit`);
submit.addEventListener(`click`,(e)=>{
    e.preventDefault();
    console.log(`you clicked submit`);
    //Submit your form here
    if(validEmail && validPhone && validUser){
        console.log(`Phone , Email and User are valid. Submitting the form. `);
        // let success = document.getElementById(`success`);
        // success.classList.add(`show`)
        // $(`#failure`).hide();
        // $(`#success`).show();
        show(`success`,`Success`,`Your request was submitted.`)


    }
    else{
        console.log(`One of Phone , Email or User in not valid. Please correct the error and try again.`);
        let failure = document.getElementById(`failure`);
        // failure.classList.add(`show`)
        // $(`#failure`).show();
        // $(`#success`).hide();
        show(`danger`,`Error`,`Your request was not submitted due to incorrect information.`)

    }
})
