// forscrolling
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

//for hiding navbar
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

// for rotating skill section

const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills(){
    let itemClass = this.parentNode.getElementsByClassName
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills_content skills_open'
    }
    if(itemClass === 'skills_content skills_open'){
        this.parentNode.className = 'skills_content skills_close'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

// 
