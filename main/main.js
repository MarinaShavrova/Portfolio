const NAV = document.querySelector('.nav');
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > NAV.offsetHeight +150){
    NAV.classList.add('active');
    }else{
      NAV.classList.remove('active');  
    }
}


const PANELS = document.querySelectorAll('.panel');

PANELS.forEach((PANEL)=>{
    PANEL.addEventListener('click', () =>{
        RemoveActiveClasses();
        PANEL.classList.add('active');
    })
})

function RemoveActiveClasses(){
    PANELS.forEach((PANEL)=>{
        PANEL.classList.remove('active');
    })
}

const OPEN_BTN = document.querySelector('.open-btn');
const CLOSE_BTN = document.querySelector('.close-btn');
const NAV_MOB = document.querySelectorAll('.hamburger');

OPEN_BTN.addEventListener('click', ()=>{
    NAV_MOB.forEach(nav_el => nav_el.classList.add('visible'))
})

CLOSE_BTN.addEventListener('click', ()=>{
    NAV_MOB.forEach(nav_el => nav_el.classList.remove('visible'))
})

