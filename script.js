const menubtn = document.querySelector('.ri-menu-line');
const MobileView = document.querySelector('.mobile-menu');
const main = document.querySelector('main')

menubtn.addEventListener('click' , ()=>{
    MobileView.classList.add('active');
});

document.addEventListener("click" , (event) =>{
    if(!MobileView.contains(event.target)&& !menubtn.contains(event.target))
        MobileView.classList.remove('active')
})
