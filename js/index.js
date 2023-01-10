// Pre-Loader allignment..........
let pre_loader=document.getElementById("intro_animation");

function loadfun(){
    pre_loader.style.display= 'none';
}




// Dark Mode functionality with toggle button.

let change_theme_btn= document.querySelector("#change-theme>.theme-logo");


change_theme_btn.onclick=function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        // ....changing the icon..
        change_theme_btn.innerHTML='<i class="fa-solid fa-sun"></i>';

        //change the github caleander to dark.
        document.querySelector("#github-cal img").src="../img/github-cal(dark).png"

        //change the github streak to dark.
        document.querySelector("#github-streak-stat>#github-streak img").src="https://github-readme-streak-stats.herokuapp.com/?user=binodgith&show_icons=true&locale=en&theme=tokyonight"

        //change the github stat to dark
        document.querySelector("#github-streak-stat>#github-stat img").src="https://github-readme-stats.vercel.app/api?username=binodgith&show_icons=true&locale=en&theme=tokyonight"

        // change the github langusge to dark
        document.querySelector("#github-lang img").src="https://github-readme-stats.vercel.app/api/top-langs?username=tusharkadam7671&show_icons=true&locale=en&layout=compact&theme=tokyonight"

    }
    else{
        change_theme_btn.innerHTML='<i class="fa-solid fa-moon"></i>';


        //change the github caleander to dark.
        document.querySelector("#github-cal img").src="../img/github-cal(light).png"

        //change the github streak to dark.
        document.querySelector("#github-streak-stat>#github-streak img").src="https://github-readme-streak-stats.herokuapp.com/?user=binodgith&show_icons=true&locale=en&"

        //change the github stat to dark
        document.querySelector("#github-streak-stat>#github-stat img").src="https://github-readme-stats.vercel.app/api?username=binodgith&show_icons=true&locale=en&"

        // change the github langusge to dark
        document.querySelector("#github-lang img").src="https://github-readme-stats.vercel.app/api/top-langs?username=tusharkadam7671&show_icons=true&locale=en&layout=compact&"
    }
}




// Designng Navbar Menu button for mobile view.
document.querySelector("#menu-list-icon").addEventListener("click",function(){
    let menu_btn=document.querySelector("#menu-list-icon");
    menu_btn.addEventListener("click",function(){
    document.querySelector("#navbar>#menu-list>ul").style.right="40%";
    document.querySelector("#navbar>#menu-list>ul").style.visibility="visible";
    document.querySelector("#navbar #menu-close-icon i").style.visibility="visible";
   })
    
})

document.querySelector("#navbar #menu-close-icon i").addEventListener("click",function(){
    document.querySelector("#navbar>#menu-list>ul").style.right="100%";
    document.querySelector("#navbar>#menu-list>ul").style.visibility="hidden";
    document.querySelector("#navbar #menu-close-icon i").style.visibility="hidden";
})









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

// Link assigning to logo icon.
document.getElementById("logo").addEventListener("click",function(){
    location.href="../index.html";
})




// upload inuput visibility ...............


let upload_input=document.querySelector("#upload-box");

document.querySelector("#ask-upload").addEventListener("change",function(){
    let ask_upload=document.querySelector("#ask-upload").value;

    if(ask_upload=="true"){
        upload_input.style.visibility="visible";
        upload_input.style.position="relative";
    
    }
    else{
        upload_input.style.visibility="hidden";
        upload_input.style.position="absolute";
    }
})





//current Year appending in footer section.

let date=new Date();
let year=date.getFullYear();
document.getElementById("footer-year").innerText=year;





// alert pop up animation are followed......


function popup_alert(texts,bc){
    let id=setInterval(animation_fun,1000);
    let second=0;
    function animation_fun(){
        if(second==4){
            clearInterval(id);
            document.getElementById("alert-text").innerText="";
            document.getElementById("alert-section").style.visibility="hidden";
            document.getElementById("alert-section").style.top="-10%"
            
        }else{
            document.getElementById("alert-text").innerText=texts;
            document.getElementById("alert-section").style.backgroundColor=bc;

            document.getElementById("alert-section").style.visibility="visible";
            document.getElementById("alert-section").style.top="10%";
            second++;
        }

    }
}

