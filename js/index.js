
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