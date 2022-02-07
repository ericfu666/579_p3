/*
* Excercise 1
*
*/
const colorBlock = document.querySelector('#color-block');
colorBlock.addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    let color = document.querySelector('#color-name').innerText;
    if(color == '#F08080'){
        //change the background color using JS
        colorBlock.style.backgroundColor = '#634232';
        //Change the text of the color using the span id color-name
        document.querySelector('#color-name').innerText = '#634232';

    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor  = '#F08080';
        //Change the text of the color using the span id color-name
        document.querySelector('#color-name').innerText = '#F08080';

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

const btn = document.querySelector('#convertbtn');
btn.addEventListener('click', convertTemp);
function convertTemp(){
    //Calculate the temperature here
    let F = document.querySelector('#f-input').value;
    let Celsius = (F - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    document.querySelector('#c-output').innerText = Celsius;

}


