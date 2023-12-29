// how create a calculator using javascript only?
function saveForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let gender = document.getElementById("gender").value;

    let newDiv = document.getElementById("root");
    newDiv.innerHTML = "<h1>User Data </h1>"+
    "<p>Name :"+name+"</p>"+
    "<p>Email :"+email+"</p>"+
    "<p>Conatct :"+contact+"</p>"+
    "<p>Gender :"+gender+"</p>"
}

function resetForm(){
    document.getElementById("registerForm").reset();
    document.getElementById("root").innerHTML=""
}


// function saveForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("contact").value;
//     var gender = document.getElementById("gender").value;

//     var resultDiv = document.getElementById("root");
//     resultDiv.innerHTML = "<h2>Entered Values:</h2>" +
//                           "<p>Name: " + name + "</p>" +
//                           "<p>Email: " + email + "</p>" +
//                           "<p>Number: " + number + "</p>" +
//                           "<p>Gender: " + gender + "</p>";
//   }

//   function resetForm() {
//     document.getElementById("registerForm").reset();
//     document.getElementById("root").innerHTML = "";
//   }