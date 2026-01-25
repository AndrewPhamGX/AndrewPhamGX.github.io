/*Scroll Animation 
----------------------------*/
document.addEventListener("DOMContentLoaded", function() {

    //Get all resume section
    const section = document.querySelectorAll('.resume-section, .work-item, .education-item, .involvement-item, .project-item')

    //Detects when an element appears on the screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add('animate-in');
            }else{
                entry.target.classList.remove('animate-in');
            }
        });
    }, {
        threshold: 0.1, //Triggers when the element is 10% visible
        //
        rootMargin: '0px 0px -50px 0px' //Starts the animation 50px before the element appears
    });
    //Observes all sections
    section.forEach(section => {
        observer.observe(section);
    });
});

/*Typing Animation Homepage
----------------------------*/
document.addEventListener('DOMContentLoaded', function() {

const nameType = document.querySelector('.home h1')
const titleType = document.querySelector('.home h2')

//Checks if the type exit. Only runs on the homepage.
if(!nameType || !titleType) return;

//Saves the full text and clears it
const fullName = nameType.textContent; 
const fullTitle = titleType.textContent;

nameType.textContent = ""; //Clear name
titleType.textContent = ""; //Clear title

//Add cursor styling to name
function addCursor(element){
    element.style.borderRight = '3px solid #232C33';
    element.style.paddingRight = '5px';
}

function removeCursor(element){
    element.style.borderRight = 'none';
}

//This is a function to type out the text character by character
function typeText(element, text, speed, callback){
let charIndex = 0;

function typeNextChar(){
    if(charIndex < text.length){
    //Add the next character
    element.textContent += text.charAt(charIndex);
    charIndex++;
    
    //Continue typing after a delay
    setTimeout(typeNextChar, speed);
    } else {
        //Finshed typing, waits for a moment and run callback (next animation)
        if(callback){
            setTimeout(callback, 300)
        }
    }
}
typeNextChar(); //Start typing
}

function startAnimation(){
    //Type the name
    addCursor(nameType);

    typeText(nameType, fullName, 125, function() {
        //Name is done typign!
        removeCursor(nameType); //Remove the cursor

        //Start typing the title
        addCursor(titleType);

        typeText(titleType, fullTitle, 80, function() {
            //Title is done typing!
            //Remove cursor after a short delay
            setTimeout(() => {
                removeCursor(titleType);
            }, 500);
        });
    });
}
//Start animation when the page loads
setTimeout(startAnimation, 500);
});
