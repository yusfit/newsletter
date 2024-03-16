function validateform(){
    const email = document.getElementById("email1");
    const confirm = document.getElementById("confirm");
    const container = document.getElementById("contain");
    const errormsg = document.getElementById("errormsg");
    const thanks = document.getElementById("thanks");

    let isvalid = true

    if (email.value === '') {
        errormsg.style.display = 'block'
        confirm.style.display = 'none'
        isvalid = false
    } else {
        thanks.style.display = 'block';
        container.style.display = 'none';
        isvalid = true
    }

}

