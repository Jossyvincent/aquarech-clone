document.getElementById("ContactForm").addEventListener("submit",function(e){
    e.preventDefault();
    const FirstName = document.getElementById("FirstName").value;
    const SecondName = document.getElementById("SecondName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("First Name:", FirstName);
    console.log("Second Name:",SecondName);
    console.log("Email:",email);
    console.log("Message:",message);
});
    

