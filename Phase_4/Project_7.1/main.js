"use strict"
// **Accordion Menu:** Create multiple collapsible sections using JavaScript to toggle their visibility.


const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');

if (headers.length > 0){
    headers.forEach(header => {
        header.addEventListener('click', ()=>{
            const content = header.nextElementSibling;
            if(content){
                content.classList.toggle('hidden');
                header.classList.toggle('active');

                headers.forEach(otherHeader => {
                    if(otherHeader !== header){
                        otherHeader.classList.remove('active'); 
                        const otherContent = otherHeader.nextElementSibling;
                        if (otherContent && !otherContent.classList.contains('hidden')) {
                            otherContent.classList.add('hidden');
                        }
                    }
                });
            }
        })
    })
}
