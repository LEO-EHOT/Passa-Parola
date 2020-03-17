
const DettiGen = [
    '성모 마리아꼐서는 설교하러 오신 것이 아니라, 세상에 예수님을 주려고 오셨다.',
    '고통 속에서 피어나는 미소는 굳어버린 마음까지도 녹일 수 있다.',
    '우리는 이 세상에 살지만, 세상의 것이어서는 안 된다.',
    '십자가를 사랑하는 사람은 하느님의 빛을 지니며 세상의 빛이 된다.',
    '단 하나의 영혼도 우리의 곁을 헛되이 스쳐 지나가는 일이 없도록 하자.',
    '여러분 모두 각자의 자리에서 새로운 세계를 건설하십시오.',
    '사랑으로 한 일들 중에서 작은 것이란 없다.',
    '모든 것은 나를 위한 사랑의 선물로 창조되었으며, 나는 다른 이들을 위한 선물로 창조되었다.',
    '십자가를 원하지 않는 사람은 참된 삶을 모르는 사람이다.',
    '우리가 지혜를 원한다면 이를 청하는 것만으로 충분하다. 하느님께서는 약속하신대로 이를 주실 것이다.',
]


function init(){
    const randomNumber = Math.floor(Math.random()*DettiGen.length);                 // Array 의 length 를 자동으로 곱해 DettiGen 수정해도 숫자 자동 조정.
    const quoteContainer = document.querySelector(".quote-generator")
    const quoteText = quoteContainer.querySelector("h2")
    quoteText.innerText = DettiGen[randomNumber];
}

init();