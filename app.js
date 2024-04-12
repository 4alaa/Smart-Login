const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  clearSignUPInputs()
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  clearSignInInputs()
});

// sign up
var SignUpBtn=document.querySelector("#SignUpBtn")
var upUsername=document.querySelector('#up-Username')
var upEmail=document.querySelector('#up-email')
var upPassword=document.querySelector('#up-password')

var inEmail=document.querySelector('#in-email')
const inPassword=document.querySelector('#in-Password')
clearSignUPInputs()
clearSignInInputs()
function clearSignUPInputs() {
  upUsername.value=''
  upEmail.value=''
  upPassword.value=''
  upUsername.classList.remove("is-valid")
  upEmail.classList.remove("is-valid")
  upPassword.classList.remove("is-valid")

  upUsername.classList.remove("is-invalid")
  upEmail.classList.remove("is-invalid")
  upPassword.classList.remove("is-invalid")

  document.querySelector(".nameAlert").classList.add("d-none")
  document.querySelector(".EmailAlert").classList.add("d-none")

  

}
function clearSignInInputs()
{
  inEmail.value=""
  inPassword.value=""
  inEmail.classList.remove("is-valid")
  inPassword.classList.remove("is-valid")

  inEmail.classList.remove("is-invalid")
  inPassword.classList.remove("is-invalid")
  document.querySelector(".fillAlert").classList.add("d-none")


}
var Mails=[]
var mailDetails

if(localStorage.getItem("siteStorage")!=null)
{
  Mails=JSON.parse(  localStorage.getItem("siteStorage")  )
}

console.log(Mails)

function addMail()
{
  // validation
  validationOfSignUP()
  isExisting()

  
if(validationOfSignUP()==true&&isExisting()==false)
{
  mailDetails=
  {
    userName:upUsername.value.trim().toLowerCase(),
    email:upEmail.value.trim().toLowerCase(),
    password:upPassword.value.trim().toLowerCase(),

  }
  Mails.push(mailDetails)
  // console.log(Mails)
  localStorage.setItem("siteStorage",JSON.stringify(Mails))
  
  //Toast for  
  YouSignUPSuccess()

  clearSignUPInputs()
  console.log(Mails)


}



  



}

SignUpBtn.addEventListener("click",function () {
  
  addMail()
})




// sign in
var signInBtn=document.querySelector("#signInBtn")

var count=0
signInBtn.addEventListener("click",function () {
  


  if(inEmail.value==""||inPassword.value=="")
  {
    document.querySelector(".fillAlert").classList.remove("d-none")
  }
  else
  {
    document.querySelector(".fillAlert").classList.add("d-none")

  
  
  for (let i = 0; i < Mails.length; i++) {
   
    if(inEmail.value.trim().toLowerCase()==Mails[i].email.trim().toLowerCase()&&inPassword.value==Mails[i].password)
    {
      console.log(`hi mr ${Mails[i].userName}`)
      localStorage.setItem("user-Name",`${Mails[i].userName}`)
      location.href = "welcome.html";
      clearSignInInputs()
      count++
    }
  }

 

  }
  if(count>=1)
  {
    console.log("email not found")
  }
  else
  {
    launch_toast()

    console.log("count = "+count)
  }


})


var regex
function validateName()
{

  regex=/^[a-zA-z].{1,15}$/
  if(regex.test(  upUsername.value.trim().toLowerCase()  ))
  {
    upUsername.classList.add("is-valid")
    upUsername.classList.remove("is-invalid")

    return true
  }
  else
  {
    upUsername.classList.add("is-invalid")
    upUsername.classList.remove("is-valid") 
    return false
  }
}
function validateEmail(emailParameter)
{

  regex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  if(regex.test( emailParameter.value.trim().toLowerCase()  ))
  {
   emailParameter.classList.add("is-valid")
   emailParameter.classList.remove("is-invalid")
    return true
  }
  else
  {
   emailParameter.classList.add("is-invalid")
   emailParameter.classList.remove("is-valid") 
    return false
  }
}
function validatePassword(PassParameter)
{

  regex=/^.{3,12}$/
  if(regex.test(  PassParameter.value  ))
  {
    PassParameter.classList.add("is-valid")
    PassParameter.classList.remove("is-invalid")
    return true
  }
  else
  {
    PassParameter.classList.add("is-invalid")
    PassParameter.classList.remove("is-valid") 
    return false
  }
}
function isExisting()
  {

    
    for (let i = 0; i < Mails.length; i++) 
    { 

      if(Mails[i].email==upEmail.value&&upEmail.value!=null)
      {
       
        document.querySelector(".EmailAlert").classList.remove("d-none")
        document.querySelector(".nameAlert").classList.add("d-none")

        return true
      }
      else if(Mails[i].userName==upUsername.value&&upUsername.value!=null)
      {

        document.querySelector(".EmailAlert").classList.add("d-none")
        document.querySelector(".nameAlert").classList.remove("d-none")
        return true

      }



    }

    document.querySelector(".nameAlert").classList.add("d-none")
    document.querySelector(".EmailAlert").classList.add("d-none")

    
  return false
}
upUsername.addEventListener("input",validateName)
upEmail.addEventListener("input",function () {
  validateEmail(upEmail)
})
inEmail.addEventListener("input",function () {
  validateEmail(inEmail)
})
upPassword.addEventListener("input",function () {
  validatePassword(upPassword)
  
})
inPassword.addEventListener("input",function () {
  validatePassword(inPassword)
  
})


  function validationOfSignUP()
  {
    validateName()
    validateEmail(upEmail)
    validatePassword(upPassword)
    if(validateName()==true&&validateEmail(upEmail)==true&&validatePassword(upPassword)==true)
    {
      return true
    }
    else
    {
      return false
    }
  }




  // tost you register successfully
  function YouSignUPSuccess() {
    
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } 



  function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

 



// show password
// var myInput = document.getElementById('password'),
    myIcon = document.getElementById('icon');





myIcon.onclick = function () {



  if (myIcon.classList.contains('fa-eye')) {

    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');

    upPassword.setAttribute('type', 'text');



  } else {


    upPassword.setAttribute('type', 'password');

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');

  };
}


var myIcon_2 = document.getElementById('icon-2');

myIcon_2.onclick = function () {



  if (myIcon_2.classList.contains('fa-eye')) {

    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');

    inPassword.setAttribute('type', 'text');



  } else {


    inPassword.setAttribute('type', 'password');

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');

  };
}