//Scroll Animation
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
