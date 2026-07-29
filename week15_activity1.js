const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const email = document.getElementById("message");
    const errorMessages = document.getElementById("errorMessages");
    let errors=[];
    name.style.border = "";
    email.style.border ="";
    message.style.border ="";
    if(name.value.trim()===""){
        errors.push("Name cannot be empty.");
        name.style.border="2px solid red";
    } else {
        name.style.border ="2px solid green";
    }
    if(!email.value.includes("@")){
        errors.push("Email must contain @.");
        email.style.border ="2px solid red";
    } else {
        email.style.border ="2px solid green";
    }
    if(message.value.trim().length<10){
        errors.push("Message must be at least 10 characters.");
        message.style.border ="2px solid red";
    } else {
        message.style.border ="2px solid green";
    }
    if (errors.length >0){
        errorMessages.innerHTML = errors.join("<br>");
        errorMessages.style.color ="red";
    } else {
        errorMessages.innerHTML ="Form submitted successfully!";
        errorMessages.style.color ="green";
        form.reset();
    }
});