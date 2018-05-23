import * as domVar from './dom-loader';
import {$} from 'jquery';
import '../css/layout.css';
import '../css/style.css';

// import icon from '../images/slot.png';  //should be used directly as we have muliple images
import printMe from './print.js';


// console.log(data);

var SHOW_SECRET=false;


domVar.secretButton.addEventListener('click',toggleSecretState);
//calling print method(alias printMe) from print.js
domVar.printButton.addEventListener('click',printMe);
updateSecretparagraph();

function toggleSecretState(){
    SHOW_SECRET=!SHOW_SECRET;
    updateSecretparagraph();
    updateSecretButton();
}

function updateSecretButton(){
    if(SHOW_SECRET){
        domVar.secretButton.textContent="Hide the content";        
    }else{
        domVar.secretButton.textContent="show the secret";
    }
}
function updateSecretparagraph(){
    if(SHOW_SECRET){
        domVar.secretPaagraph.style.display='block';
    }else{
        domVar.secretPaagraph.style.display='none';
    }
}