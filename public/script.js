$(()=>{
    let name=$("#name")
    let email=$("#email")
    let message=$("#message")
    let btn=$("#btn")
    btn.click(()=>{
        $.post("/",{
            name:name.val(),
            email:email.val(),
            message:message.val()
        },(data)=>{
            window.alert("Message sent")
            console.log("Message sent")
        })
    })
})