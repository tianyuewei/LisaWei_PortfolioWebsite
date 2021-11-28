// add javascript for interactive elements here
let leftheight = document.querySelector('.project-image');

let navbar = document.querySelector('.navbar');
let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');

let dropdownbtn1 = document.querySelector('.dropbtn1');
let menuContent1 = document.querySelector('.drop-content1');
let buttonTitle1 = document.querySelector('.buttonTitle1');
let arrow1= document.querySelector('.arrow1');

let dropdownbtn2 = document.querySelector('.dropbtn2');
let menuContent2 = document.querySelector('.drop-content2');
let buttonTitle2 = document.querySelector('.buttonTitle2');
let arrow2= document.querySelector('.arrow2');

//hover
let btResound = document.querySelector('.bt-resound');
let pjResound = document.querySelector('.pj-resound');
let btMon = document.querySelector('.bt-mon');
let pjMon = document.querySelector('.pj-mon');
let btElement = document.querySelector('.bt-element');
let pjElement = document.querySelector('.pj-element');
let btGaze = document.querySelector('.bt-gaze');
let pjGaze = document.querySelector('.pj-gaze');
let btEyes = document.querySelector('.bt-eyes');
let pjEyes = document.querySelector('.pj-eyes');
let btChange = document.querySelector('.bt-change');
let pjChange = document.querySelector('.pj-change');
let btSuh = document.querySelector('.bt-suh');
let pjSuh = document.querySelector('.pj-suh');
let btSimple =  document.querySelector('.bt-simple');
let pjSimple =  document.querySelector('.pj-simple');
let btBody = document.querySelector('.bt-body');
let pjBody = document.querySelector('.pj-body');
let btMini = document.querySelector('.bt-mini');
let pjMini = document.querySelector('.pj-mini');
let btP5 = document.querySelector('.bt-p5');
let pjP5 = document.querySelector('.pj-p5');

//images
let resound1 = document.querySelector('.img-resound1');
let resound2 = document.querySelector('.img-resound2');
let mon1 = document.querySelector('.img-mon1');
let mon2 = document.querySelector('.img-mon2');
let element1 = document.querySelector('.img-element1');
let element2 = document.querySelector('.img-element2');
let gaze1 = document.querySelector('.img-gaze1');
let gaze2 = document.querySelector('.img-gaze2');
let eyes1 = document.querySelector('.img-eyes1');
let eyes2 = document.querySelector('.img-eyes2');
let change1 = document.querySelector('.img-change1');
let change2 = document.querySelector('.img-change2');
let suh1 = document.querySelector('.img-suh1');
let suh2 = document.querySelector('.img-suh2');
let simple1 = document.querySelector('.img-simple1');
let simple2 = document.querySelector('.img-simple2');

let changew1 = "true";
let changew2 = "true";

dropdownbtn1.addEventListener('click',()=>{
   if(menuContent1.style.display===""){
      menuContent1.style.display="block";
      // buttonTitle1.style.transform="translateX(20px)";
      dropdownbtn1.style.backgroundColor="black";
      dropdownbtn1.style.color="white";
      // arrow1.style.display="block";
      arrow1.style.filter="brightness(100)";
      leftheight.style.height="50vh";
      changew1="false";
      dropdownbtn1.style.width="100%";
      dropdownbtn2.style.width="100%";
   } else {
      menuContent1.style.display="";
      // buttonTitle1.style.transform="translateX(0)";
      dropdownbtn1.style.backgroundColor="white";
      dropdownbtn1.style.color="black";
      // arrow1.style.display="none";
      arrow1.style.filter="brightness(0)";
      leftheight.style.height="200px";
      changew1="true";
   }
  
  if(menuContent1.style.display==="block" || menuContent2.style.display==="block"){
  console.log("uyes");
  dropdownbtn1.style.width="100%";
  dropdownbtn2.style.width="100%";
  }
  
  if(menuContent1.style.display==="" && menuContent2.style.display===""){
  console.log("close");
  dropdownbtn1.style.width="85vw";
  dropdownbtn2.style.width="85vw";
  }
})

dropdownbtn2.addEventListener('click',()=>{
   if(menuContent2.style.display===""){
      menuContent2.style.display="block";
      // buttonTitle2.style.transform="translateX(20px)";
      dropdownbtn2.style.backgroundColor="black";
      dropdownbtn2.style.color="white";
      // arrow2.style.display="block";
      arrow2.style.filter="brightness(100)";
      leftheight.style.height="50vh";
      changew2="false";
   } else {
      menuContent2.style.display="";
      // buttonTitle2.style.transform="translateX(0)";
      dropdownbtn2.style.backgroundColor="white";
      dropdownbtn2.style.color="black";
      // arrow2.style.display="none";
      arrow2.style.filter="brightness(0)";
      leftheight.style.height="200px";
      changew2="true";
   }
  
  if(menuContent1.style.display==="block" || menuContent2.style.display==="block"){
  console.log("uyes");
  dropdownbtn1.style.width="100%";
  dropdownbtn2.style.width="100%";
  }
  
  if(menuContent1.style.display==="" && menuContent2.style.display===""){
  console.log("close");
  dropdownbtn1.style.width="85vw";
  dropdownbtn2.style.width="85vw";
  }
})

//nav
nav1.addEventListener("mouseover", function mouseOver0() {
  navbar.style.borderRadius="0px 500px 500px 0px";
});
nav1.addEventListener("mouseout", function mouseOut0() {
  navbar.style.borderRadius="500px";
});

nav2.addEventListener("mouseover", function mouseOver0() {
  navbar.style.borderRadius="500px 0px 0px 500px";
});
nav2.addEventListener("mouseout", function mouseOut0() {
  navbar.style.borderRadius="500px";
});


//resound
btResound.addEventListener("mouseover", function mouseOver1() {
  pjResound.style.color="#ff9700";
  resound1.style.display="block";
  resound2.style.display="block";
});
btResound.addEventListener("mouseout", function mouseOut1() {
  pjResound.style.color="black";
  resound1.style.display="none";
  resound2.style.display="none";
});

//museum of names
btMon.addEventListener("mouseover", function mouseOver2() {
  pjMon.style.color="#e800a1";
  mon1.style.display="block";
  mon2.style.display="block";
});
btMon.addEventListener("mouseout", function mouseOut2() {
  pjMon.style.color="black";
  mon1.style.display="none";
  mon2.style.display="none";
});

//element cups
btElement.addEventListener("mouseover", function mouseOver3() {
  pjElement.style.color="#545fc6";
  element1.style.display="block";
  element2.style.display="block";
});
btElement.addEventListener("mouseout", function mouseOut3() {
  pjElement.style.color="black";
  element1.style.display="none";
  element2.style.display="none";
});

//Gaze
btGaze.addEventListener("mouseover", function mouseOver4() {
  pjGaze.style.color="#d35c59";
  gaze1.style.display="block";
  gaze2.style.display="block";
});
btGaze.addEventListener("mouseout", function mouseOut4() {
  pjGaze.style.color="black";
  gaze1.style.display="none";
  gaze2.style.display="none";
});

//Observation of Eyes
btEyes.addEventListener("mouseover", function mouseOver5() {
  pjEyes.style.color="#7ca055";
  eyes1.style.display="block";
  eyes2.style.display="block";
});
btEyes.addEventListener("mouseout", function mouseOut5() {
  pjEyes.style.color="black";
  eyes1.style.display="none";
  eyes2.style.display="none";
});

//change
// btChange.addEventListener("mouseover", function mouseOver6() {
//   pjChange.style.color="#d96cf4";
//   change1.style.display="block";
//   change2.style.display="block";
// });
// btChange.addEventListener("mouseout", function mouseOut6() {
//   pjChange.style.color="black";
//   change1.style.display="none";
//   change2.style.display="none";
// });

//Smell Us human
btSuh.addEventListener("mouseover", function mouseOver7() {
  pjSuh.style.color="#5484ef";
  suh1.style.display="block";
  suh2.style.display="block";
});
btSuh.addEventListener("mouseout", function mouseOut7() {
  pjSuh.style.color="black";
  suh1.style.display="none";
  suh2.style.display="none";
});

//Simple and complex
btSimple.addEventListener("mouseover", function mouseOver8() {
  pjSimple.style.color="#9b9b5a";
  simple1.style.display="block";
  simple2.style.display="block";
});
btSimple.addEventListener("mouseout", function mouseOut8() {
  pjSimple.style.color="black";
  simple1.style.display="none";
  simple2.style.display="none";
});

//bodydrawing
btBody.addEventListener("mouseover", function mouseOver9() {
  pjBody.style.color="#00aa75";
  
});
btBody.addEventListener("mouseout", function mouseOut9() {
  pjBody.style.color="black";
  
});

//Mini-photoshop
btMini.addEventListener("mouseover", function mouseOver10() {
  pjMini.style.color="#ce3232";
});
btMini.addEventListener("mouseout", function mouseOut10() {
  pjMini.style.color="black";
});

//p5js sketches
// btP5.addEventListener("mouseover", function mouseOver10() {
//   pjP5.style.color="#d6c100";
// });
// btP5.addEventListener("mouseout", function mouseOut10() {
//   pjP5.style.color="black";
// });