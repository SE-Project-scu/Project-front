let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;

for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}

 
 
  
  var myButton = document.getElementById("login");
  myButton.addEventListener("click", function() {
    window.location.href = "login.html";
  });

  var myButton = document.getElementById("register");
  myButton.addEventListener("click", function() {
    window.location.href = "register.html";
  });

  var myButton = document.getElementById("c");
  myButton.addEventListener("click", function() {
    window.location.href = "Check.html";
  });
 //You may use vanilla JS, I just chose jquery

 