// <===================
// for input iteration    
// ===================>

let a=document.querySelectorAll("#code")
a[0].focus()

a.forEach((code,idx) => {
    code.addEventListener("keydown",(e)=>{
        if(e.key>=0 && e.key<=9){
            setTimeout(()=>{
                a[idx+1].focus()
            },10)
        }
        else if(e.key==="Backspace"){
            setTimeout(()=>{
                a[idx-1].focus()
            },10)
        }

    })
});

// <===================
// for resend 
// ===================>
let resend=()=>{
    alert("OTP sent again")
}
 
// <===================
// for varify
// ===================>
let varify=()=>{
    alert("OPT is varified")
}
