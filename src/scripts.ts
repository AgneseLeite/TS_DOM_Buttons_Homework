const buttonOne: HTMLElement = document.querySelector(".button-1");
const buttonTwo: HTMLElement = document.querySelector(".button-2");
const buttonThree: HTMLElement = document.querySelector(".button-3");
const buttonFour: HTMLElement = document.querySelector(".button-4");
const buttonFive: HTMLElement = document.querySelector(".button-5");
const buttonSix: HTMLElement = document.querySelector(".button-6");
const buttonSeven: HTMLElement = document.querySelector(".button-7");

const squareOne: HTMLElement = document.querySelector(".square-1");
const squareTwo: HTMLElement = document.querySelector(".square-2");
const squareThree: HTMLElement = document.querySelector(".square-3");
const squareFour: HTMLElement = document.querySelector(".square-4");
const squareFive: HTMLElement = document.querySelector(".square-5");
const squareSix: HTMLElement = document.querySelector(".square-6");

const inputField = document.querySelector(".footer__input");
const textOutput = document.querySelector(".text__output")
const container: HTMLElement = document.querySelector(".container");


// 1.kvadrāta krāsa nomainās uz dzeltenu

buttonOne.addEventListener('click', function() {
    squareOne.style.backgroundColor = 'yellow';
});


// 2. kvadrāta teksts nomainās uz SUCCESS

buttonTwo.addEventListener('click', function() {

    if (squareTwo.innerHTML === 'FAIL') {
        squareTwo.innerHTML = 'SUCCESS';
    } else if (squareTwo.innerHTML === 'SUCCESS') {
        squareTwo.innerHTML = '???';
    } else {
        squareTwo.innerHTML = 'FAIL';
    }
})


// 3. kvadrāts kļūst neredzams

buttonThree.addEventListener('click', function() {
    if (squareThree.style.opacity === '1') {
        squareThree.style.opacity = '0';
    } else if (squareThree.style.opacity === '0'){
        squareThree.style.opacity = '0.1';
    } else if (squareThree.style.opacity === '0.1'){
        squareThree.style.opacity = '0.3';
    } else if (squareThree.style.opacity === '0.3') {
        squareThree.style.opacity = '0.5';
    } else if (squareThree.style.opacity === '0.5') {
        squareThree.style.opacity = '0.8';
    } else {
        squareThree.style.opacity = '1';
    }
})


// 4. kvadrāts kļūst neredzams, nospiežot vēlreiz, tas atkal kļūst redzams.

buttonFour.addEventListener('click', function() {
    if (squareFour.style.opacity == '1') {
        squareFour.style.opacity = '0';
    } else {
        squareFour.style.opacity = '1';
    }
})


// 5. kvadrāta krāsa nomainās uz vienu no 5 iepriekš izdomātām krāsām

buttonFive.addEventListener('click', function () {
  const backgroundColor = squareFive.style.backgroundColor;

  if (backgroundColor === 'salmon') {
    squareFive.style.backgroundColor = 'seagreen';
  } else if (backgroundColor === 'seagreen') {
    squareFive.style.backgroundColor = 'violet';
  } else if (backgroundColor === 'violet') {
    squareFive.style.backgroundColor = 'pink';
  } else if (backgroundColor === 'pink') {
    squareFive.style.backgroundColor = 'aqua';
  } else {
    squareFive.style.backgroundColor = 'salmon';
  }}  
);


// 6.kvadrātā skaitlis sāk ik pa 3 sekundēm palielināties par 1. Kad tiek līdz 10, apstājas.

 buttonSix.addEventListener('click', function() {
    let count = 0;
    let counter = setInterval(incrementNum, 3000);

    function incrementNum() {
        count++;
        if(count >= 0) {
            squareSix.innerHTML = `${count}`;
        }
        if(count === 10) {
            clearInterval(counter);
        }  
    }
});

// Visi kvadrādi maina krāsu uz #18D5E1 un lapas background - uz #000000
    
buttonSeven.addEventListener('click', function() {
    
    if (container.style.backgroundColor == 'white') {
        container.style.backgroundColor = '#000000';
    } else {
        container.style.backgroundColor = 'white'
    }

    let item: any = document.querySelectorAll(".square");
    for (let i = 0 ;i < item.length; i++) {
        item[i].style.backgroundColor = '#18D5E1';
    }
});


// Uzliekot peli virs 1. kvadrāta, tam krāsa nomainas uz sarkanu

squareOne.addEventListener('mouseover', function() {
    squareOne.style.backgroundColor = 'red';
})

squareOne.addEventListener('mouseout', function() {
  squareOne.style.backgroundColor = 'lightseagreen';
});


// Pele virs 5. kvadrāta: ieslēdzas taimeris līdz 10, noņemot peli resetojas uz 0 un apstājas.

squareFive.addEventListener('mouseover', function() {
    let count = 0;
    let counter = setInterval(increment, 1000);

    function increment() {
        count++;
        if(count >= 0) {
            squareFive.innerHTML = `${count}`;
        }
        if(count === 10) {
            clearInterval(counter);
        }
    squareFive.addEventListener('mouseout', function() {
        clearInterval(counter);
        squareFive.innerHTML = `0`;
    });
    }
});


// Rakstot tekstu input laukā, tas parādās arī zem inputa

inputField.addEventListener('keyup', function() {
    textOutput.innerHTML = this.value;
})
