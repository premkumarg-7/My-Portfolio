var typed=new Typed(".text",{
    strings :["Software Developer","Fullstack Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

})

document.getElementById('contact-form') .addEventListener('submit',function (event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formsubmit.co/el/zanopo",{
        method:"POST",
        body:data,
    }).then(response =>{
        if (response.ok) {
            alert('Success');
        } else{
            alert('Error');
        }
    });
    document.getElementById('contact-form').reset();
});