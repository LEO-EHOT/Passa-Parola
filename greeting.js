const form = document.querySelector(".js-form-name"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greeting");

const USER_LocalStorage = "currentUser",
      SHOWING_ClassName = "showing",
      RESET_NAME = "resetName";

const delBtn = document.createElement("button");
const span = document.createElement("span");

//  Set constant  //

function deleteName(event){
  localStorage.removeItem(USER_LocalStorage);
  location.reload(true);
}

function saveName(text){
  localStorage.setItem(USER_LocalStorage, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  printGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_ClassName);
  form.addEventListener("submit", handleSubmit)
}

function printGreeting(text){
  const ciaoTutti = [
    `Ciao! ${text}`,
    `Hello! ${text}`,
    `Bonjour! ${text}`,
    `¡Hola! ${text}`,
    `안녕! ${text}`
  ]
  const randomNumber = Math.floor(Math.random()*ciaoTutti.length);                 // Array 의 length 를 자동으로 곱해 DettiGen 수정해도 숫자 자동 조정.
  form.classList.remove(SHOWING_ClassName);
  greeting.classList.add(SHOWING_ClassName);
  greeting.innerText = ciaoTutti[randomNumber];
    
  // delete Button
  
  delBtn.innerText = "✏️"
  delBtn.addEventListener("click", deleteName);
  greeting.appendChild(delBtn);
  greeting.querySelector("button").classList.add("resetName");        // 왜 ClearBtn.queryseclector 로 하면 null 이 뜰까.
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LocalStorage);
  if(currentUser === null){
    askForName();
    
  } else {
    printGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();
