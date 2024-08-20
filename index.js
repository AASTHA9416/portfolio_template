//FOR VARIOUS SECTIONS
var interval;
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

for(var i=0;i<navMenuAnchorTags.length;i++){
navMenuAnchorTags[i].addEventListener('click',function(event){
event.preventDefault();
var targetSectionID=this.textContent.trim().toLowerCase();
var targetSection=document.getElementById(targetSectionID);
//note : we can't directly put the function name with argument into setnterval we have two methods to set a function with its arguments
// console.log(targetSection);
//  interval=setInterval(scrollVertically,50,targetSection);
//change in above line

// or
interval=setInterval(function(){ scrollVertically(targetSection); }, 20);

}
);
}
function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}





//FOR SKILL BARS

var progreebar=document.querySelectorAll('.skill-progress>div');
var height=document.getElementById('skills');
var animationDone=false;

window.addEventListener('scroll',checkScroll);
function initialBars(){
    for(let bar of progreebar)
    bar.style.width=0+'%';
}

initialBars();

function fillBars(){
    for(let bar of progreebar){
        let currentWidth=0;
        let targetWidth=bar.getAttribute('data-bar-width');
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
               clearInterval(interval);
               return;
            }
            currentWidth++;
          bar.style.width= currentWidth+'%';
        },3);

    }
}


function checkScroll() {
    let heightcoordi = height.getBoundingClientRect();
    if (!animationDone && heightcoordi.top <= window.innerHeight) {
        animationDone = true;
        
        console.log('skill-section found');
        fillBars();
    }
    else if(heightcoordi.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }

    
}


// window.addEventListener('scroll',checkScroll);