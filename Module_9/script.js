
//////1. Select an element using:
// getElementById()
let subject = document.getElementById("subject");
// querySelector()
let addBtn = document.querySelector(".addSubject");
let subjectList = [];
let myList = document.querySelector("#addedSubject");

let changeBtn = document.querySelector("#ColorChange");
// querySelectorAll()
let changeStyle = document.querySelectorAll("header , footer");
  let textChange = document.querySelectorAll("header > h2 , footer > h2");

  //////2. Change by JS
changeBtn.addEventListener("click",()=>{
    changeStyle.forEach((element)=>{

// CSS Style change
        element.style.backgroundColor = "#1abc9c"
    });
//Change Text Content
    textChange.forEach((text)=>{
        text.textContent = "You are Welcome!"
    })

// change HTML Content
changeStyle.forEach((html)=>{
html.innerHTML += `<h3>This is New Element</h3>`
})

});



//////Add event listeners:
//Click Event
addBtn.addEventListener("click", ()=>{
    if (subject.value.trim() !== "") {
        subjectList.push(subject.value);
        subject.value = "";
        // console.log(subjectList);
            myList.innerHTML=""
 //Append new elements dynamically
        subjectList.forEach((singleSubject, index)=>{
            myList.innerHTML += `
            <li>${singleSubject} <button type="button" class="deleteSub" data-index = "${index}">X</button>,</li>
            `
        })

        
    }
});


//Remove an element from the DOM
myList.addEventListener("click", (event)=>{
    if(event.target.classList.contains("deleteSub")){
        let indexRemove = event.target.getAttribute("data-index");
        subjectList.splice(indexRemove, 1);//Delete Logic

        myList.innerHTML = "";
        subjectList.forEach((singleSubject, index) => {
            myList.innerHTML += `
            <li>
                ${singleSubject} 
                <button type="button" class="deleteSub" data-index="${index}">X</button>
            </li>
            `;
        });
        console.log("Deleted! Current List: ", subjectList);
    }
})




let contactForm = document.querySelector(".contact-form");
let panel = document.querySelector(".showPnel"); 

//Submit Event
contactForm.addEventListener("submit", (event) => {
  
    event.preventDefault(); 
  
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;
    let userMessage = document.getElementById("message").value;

    let subjectsToShow = subjectList.length > 0 ? subjectList.join(", ") : "No subjects added";

    panel.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; border: 2px solid #333; background: #f9f9f9; border-radius: 5px;">
            <h3>📌 Submitted Form Data:</h3>
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Phone:</strong> ${userPhone || "Not provided"}</p>
            <p><strong>Subjects:</strong> ${subjectsToShow}</p>
            <p><strong>Message:</strong> ${userMessage}</p>
        </div>
    `;

});




let messageInput = document.getElementById("message");
let characterCount = document.getElementById("charCount");
//Input Event
messageInput.addEventListener("input", (event) => {
    let textLength = event.target.value.length; // Counter Logic
    characterCount.textContent = `${textLength} characters typed`;

    if (textLength > 200) {
        characterCount.style.color = "red";
    } else {
        characterCount.style.color = "gray";
    }
});