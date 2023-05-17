const log = document.getElementById("sub");
const email=document.getElementById("mail");
const pass=document.getElementById("pass");
const requirementList = document.querySelectorAll(".requirement-list li");
const eyeIcon = document.querySelector(".logpass .fa-eye");
const regex1=[
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter;
]
const regex2=/(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
log.addEventListener('click',(e)=>{
    e.preventDefault();
    const regex3 =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/g

    if(email.value==""||email.value==null){
        document.getElementById("emailError").innerHTML="<span style='color:red'>Please enter Your Email ID</span>";
    }
    else{
        document.getElementById("emailError").innerHTML="";
    }
        

   if(pass.value==""||pass.value==null){
     document.getElementById("passError").innerHTML="<span style='color:red'>Please Enter Password</span>";
   }
   else{
    document.getElementById("passError").innerHTML="";
   }

   if(regex3.test(email.value)&&regex2.test(pass.value)){
    window.open("http://localhost:3000/");
    }
 else{
    document.getElementById("error").innerHTML="<span style='color:red'>Please enter correct Email and Password</span>";
 }
});

pass.addEventListener('keyup',(e)=>{
    regex1.forEach(item=>{
        const isValid=item.regex.test(e.target.value);
        console.log(isValid);
        const itemRequired=requirementList[item.index];
        if(isValid){
            itemRequired.classList.add("valid");
            itemRequired.firstElementChild.className="fa-solid fa-check";
        }
        else {
            itemRequired.classList.remove("valid");
            itemRequired.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener('click', () => {
    pass.type = pass.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${pass.type === "password" ? "" : "-slash"}`;
});





