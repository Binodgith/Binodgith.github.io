let form_input_data;
let file_upload_data = "NA"; /*the file link after fched */



// Api for store files in cloud.........

let d_api = "https://script.google.com/macros/s/AKfycbxjEfca5BgYnb4bHxz6KAWX8BPGMAS8RqQ4qgWL2czzpx6IdIY8UQLcXRX1khVA2boQ/exec";


// Api for post  the data .............

let E_api = "https://script.google.com/macros/s/AKfycbyis59RkA2eycKoCZKuzanTLiGzLDwMe3IWgIVrnO7ewVkrPsFx4-kymbID8OPvNUZ_/exec?action=addUser"





// Reset button worling or not..................
document.querySelector("#form-reset-btn").addEventListener("click",function(){
    reset_function();
});
function reset_function(){
    document.querySelector("#name-div").value="";
    document.querySelector("#email-div").value="";
    document.querySelector("#mobile-div").value="";
    document.querySelector("#message-div").value="";
    document.querySelector("#file-upload").value="";
}




// Creating object of a contact form
document.querySelector("#form-submit-btn").addEventListener("click", function (event) {
    // event.preventDefault();
    document.getElementById("form-submit-btn").innerText = "Submitting......";
    document.getElementById("form-submit-btn").style.backgroundColor = "#074584";


    let name = document.querySelector("#name-div").value;
    let email = document.querySelector("#email-div").value;
    let mobile = document.querySelector("#mobile-div").value;
    let message = document.querySelector("#message-div").value;
    let file = file_upload_data;

    let dates = new Date();
    let d = dates.getDate() + "-" + dates.getMonth() + "-" + dates.getFullYear();
    let t = dates.toLocaleString('en-US', { hour: "numeric", minute: "numeric", hour12: true })

    let date = d;
    let time = t;

    if (email.match("@.") && name.length >= 2 && message != "" && mobile.length >= 10) {
        form_input_data = {
            "name": name,
            "email": email,
            "mobile": mobile,
            "message": message,
            "file": file,
            "date": date,
            "time": time
        }
        // document.getElementById("form-submit-btn").disabled=true;
        add_to_db();
    }
    else {
        popup_alert("Input data  looks Invalid!","red");
        document.getElementById("form-submit-btn").innerText = "Submit";
        document.getElementById("form-submit-btn").style.backgroundColor = "#0880f7";
    }

})



// Fetch data from upload button...........

document.getElementById("file-upload").addEventListener("change", file_upload);

async function file_upload(event) {
    // console.log(event.target.parentNode)
    let file_input = document.getElementById("file-upload")
    let file = file_input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function () {
        // console.log(file);
        let rawLog = reader.result.split(",")[1];
        let dataSend = {
            dataReq: {
                data: rawLog,
                name: file.name,
                type: file.type
            },
            fname: "uploadFilesToGoogleDrive"

        }
        add_uploaded(dataSend, this.result);

        let image = document.createElement("img");
        image.src = "../img/loader.gif";
        image.alt = "document uploded"
        document.getElementById("uploaded_show").innerHTML = "";
        document.getElementById("uploaded_show").append(image);

        // console.log(this.result);

    })

}


// Upload the file on clud from fetched file.......

async function add_uploaded(dataSend, result) {

    fetch(d_api, //your AppsScript URL
        {
            method: "POST",
            body: JSON.stringify(dataSend)
        }) //send to Api
        .then(res => res.json()).then((a) => {

            file_upload_data = a.url;
            let image = document.createElement("img");
            image.src = result;
            image.alt = "document uploded"
            document.getElementById("uploaded_show").innerHTML = "";
            document.getElementById("uploaded_show").append(image);

        })
        .catch(e => console.log(e)) // Or Error in console

}




// Finally Posting all details to database.........  
async function add_to_db() {


    try {
        let res = await fetch(E_api, {
            method: "POST",
            body: JSON.stringify(form_input_data)

        })
        popup_alert("Hey! form submitted successfully. I wiil touch you soon.","green")
        reset_function();
        // let data = await res.json();
        // console.log(data);
        
        // console.log(data)
        // console.log(form_data)
        document.getElementById("form-submit-btn").innerText = "Submit";
        document.getElementById("form-submit-btn").style.backgroundColor = "#0880f7";
        
        
    }
    catch (err) {
        console.log(err, "error from serer.");
        popup_alert("!Error in submitting,try again","red")
        document.getElementById("form-submit-btn").innerText = "Submit";
        document.getElementById("form-submit-btn").style.backgroundColor = "#0880f7";
    }
}



// alert pop up animation are followed......


function popup_alert(texts,bc){
    let id=setInterval(animation_fun,1000);
    let second=0;
    function animation_fun(){
        if(second==3){
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




