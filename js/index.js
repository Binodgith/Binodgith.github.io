
// Dark Mode functionality with toggle button.

let change_theme_btn= document.querySelector("#change-theme>.theme-logo");

change_theme_btn.onclick=function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        change_theme_btn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }
    else{
        change_theme_btn.innerHTML='<i class="fa-solid fa-moon"></i>';
    }
}






// given link to Every buttom .

// Link to every resume button.
document.querySelector(".resume-btn1").addEventListener("click",function(){
    window.open("https://drive.google.com/file/d/1MItWlk3VRDlb5BHgvHsP3tV8lwa4hT5F/view?usp=share_link","_blank");
    location.href="https://drive.google.com/uc?export=download&id=1MItWlk3VRDlb5BHgvHsP3tV8lwa4hT5F";
});
document.querySelector(".resume-btn2").addEventListener("click",function(){
    window.open("docs/DBinod_Resume.pdf","_blank");
    location.href="https://drive.google.com/uc?export=download&id=1MItWlk3VRDlb5BHgvHsP3tV8lwa4hT5F";
});
document.querySelector(".resume-btn3").addEventListener("click",function(){
    window.open("docs/DBinod_Resume.pdf","_blank");
    location.href="https://drive.google.com/uc?export=download&id=1MItWlk3VRDlb5BHgvHsP3tV8lwa4hT5F";
});


// link assigning to every social icon.

document.querySelector("#social-icon-1>.linked-icon").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/binod-dev/","_blank");

})
document.querySelector("#social-icon-1>.github-icon").addEventListener("click",function(){
    window.open("https://github.com/Binodgith/","_blank");

})
document.querySelector("#social-icon-1>.mail-icon").addEventListener("click",function(){
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=dbinod2020@gmail.com&su=Hey+I+want+to+connect+with+you&tf=cm","_blank");

})





