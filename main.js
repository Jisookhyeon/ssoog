
// var number = 2;
// var number2= 4;


// var friends = ["ellie","kelly","cia"];
// var sentence = "hello"

// var mine = {
//     name: "Ellie",
//     height: 160,
//     friend:[
//         {
//             name: "kelly",
//             height: 156
//         },
//         {
//             name: "cia",
//             height: 164
//         }
//     ]
// }

// console.log(mine.height);


// console.log(window(alert));
// 최상위 오브젝트


// console.log(innerHeight);
// **window 는 생략할 수 있다. 

// var id= window.document.getElementById("id");
// var clas= window.document.getElementsByClassName("class");
// var clas= window.document.getElementsByClassName("class");

// *반칙같은 기능
// var 쿼리로선택 = document.querySelectorAll(".class");
// var 쿼리로선택 = document.querySelector("#id .class"); ->class를 넣을 경우 하나의 클래스만 선택이 가능하기 떄문에 querySelectorAll로 선택을 한다.

// console.log(clas[2]);

// **조건문을 쓰는 양식 

// var 독일 = 0;
// var 한국 = 2;

// if (독일 < 한국) {
//     console.log("한국 승리");
// }
// else if (독일 === 한국) {
//     console.log("무승부");
// }
// else {
//     console.log("패배")
// }

// === 같을 때
// =<, => 같거나 작을떄, 같거나 클때
// A > B A가 B보다 클때
// !== 다를때

// && =  and (그리고)
// || = or (이거 아니면 이거) shift + \\

// var 한국독일승리국 = "korea";
// var 스웨덴멕시코승리국 = "mexico";

// if (한국독일승리국 === "korea" && 스웨덴멕시코승리국 === "sweden") {
//     console.log("한국 16강 진출");
// } else{
//     console.log("한국 16강 실패")
// }



// var button = document.getElementById("button")
// var color = document.getElementsByClassName("color")

// var 스위치 = false;

// button.addEventListener("click", function(){
//     if (스위치 === false) {
//         color[0].style.backgroundColor = "bisque";
//         스위치 = true;
//     } else if (스위치 === true){
//         color[0].style.backgroundColor = "black";
//         스위치 = false;
//     }
// })

// 대소문자와 스펠이 틀리면 자바스크립트 작동에 문제가 생긴다. 

// **반복문을 쓰는 양식
//  쓰는 방식은 

// for (var 순서 = 0; 순서 < 100; 순서++){
//     console.log(순서);
// }

// var 커피셔틀 = ["cia","ellie","kelly","mia"]

// for (var 순서 = 0; 순서 < 커피셔틀.length; 순서++){
//     console.log(커피셔틀[순서] + "요요")
// }


// for (let 순서 = 0; 순서 < 커피셔틀.length; 순서++) {
//     console.log(커피셔틀[순서] + "는 내친구")
// }

// **위 공식이 가장 일반적이기 때문에 이것만 디폴트로 외워두어도 다른 공식은 거의 쓸 필요가 없다. 


var 커피종류 = [
"아메리카노",
"라떼",
"모카",
"아포가또",
"플랫",
"에스프레소",
"카푸치노"
];

var 컨테 = document.getElementById("컨테")
var 들어갈요소 = "";

for (var 순서 = 0; 순서 < 커피종류.length; 순서++){
    들어갈요소 += ("<div>" + 커피종류[순서] + "</div>")
}

컨테.innerHTML = 들어갈요소 + ("커피종류 개수:" + 커피종류.length + "개지롱");


// for (var 순서 = 0; 순서 < 커피종류.length; 순서++){
//     들어갈요소 += ("<div class='stylecss'>" + 커피종류[순서] + "</div>")
// }

// 똑같이 CSS스타일을 먹일 수 있다. html에서 .stylecss{로 적을 수 있다. }

// 또는

// for (var 순서 = 0; 순서 < 커피종류.length; 순서++){
//     들어갈요소 += ("<div style='color:blue;'>" + 커피종류[순서] + "</div>")
// }

