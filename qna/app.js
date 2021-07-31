var btns = document.querySelectorAll('.question');

btns.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
        console.log(e.currentTarget);
        const paraClass = e.currentTarget.lastElementChild;
        console.log(paraClass);
        paraClass.classList.toggle('show-answer');

        pmButtons = paraClass.previousElementSibling;
        
        pmButtons.firstElementChild.classList.toggle('hide-plus-icon');
        pmButtons.lastElementChild.classList.toggle('show-minus-icon');
        });
    }
);