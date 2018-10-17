const enterNowBtn = document.getElementById('enterNow');
const phoneInput = document.getElementById('phoneInput');
const otpInput = document.getElementById('otpInput');
const registerBtn = document.getElementById('registerBtn');
const errMessage = document.getElementById('errMessage');

enterNowBtn.addEventListener('click', () => {
    if (phoneInput.value == 8986484443) {
        enterNowBtn.setAttribute('data-target', '#login');
        
    } else {
        enterNowBtn.setAttribute('data-target', '#signup');
        console.log("===========>", "This case");
        registerBtn.addEventListener('click', () => {
            if (otpInput.value == 1234) {
                window.location.assign("https://abhinay.netlify.com/confirmPassword.html");
            }
            else {
                errMessage.innerHTML = "Please input correct OTP";
            }
        })
    }
})