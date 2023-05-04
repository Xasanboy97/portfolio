/* jQuery(document).ready(function(){

    const formButton = querySelector('.submit');

    contactForm.addEventListener('submit', e=> {
    
        let message = '';
    
        e.target.querySelectorAll('[name]').forEach(item=>{
           message += `${item.previousElementSibling.innerHTML.split(' ')[0]}: ${item.value}\n`
        })
    
    
        console.log(message);
    });
}) */