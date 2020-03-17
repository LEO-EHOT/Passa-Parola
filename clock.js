const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const WhatDay = date.getDay();
  const 요일 = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${요일[WhatDay]}`;   
               //back tick use and called Template Literals. 템플릿 리터럴.
}

function init(){
  getTime();
  setInterval(getTime, 1000);  // setInterval(function, time(밀리세컨즈 기준 1000 = 1초))
}

init();
