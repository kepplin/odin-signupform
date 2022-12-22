document.querySelector('.confirmPassword').addEventListener('input', checkPwd);
document.querySelector('.password').addEventListener('input', checkPwd);
const submitButton = document.querySelector('.submitButton')
const confirmPasswordSpan = document.querySelector(['.confirmPasswordSpan'])

function checkPwd(){
    let password = document.querySelector('.password').value
    let confirmPassword = document.querySelector('.confirmPassword').value
    if (password != confirmPassword){
        document.querySelector('.confirmPassword').style.border = '2px solid red';
        document.querySelector('.password').style.border = '2px solid red';
        document.querySelector('.submitButton').disabled = true;
        confirmPasswordSpan.textContent = 'Passwords do not match.';
        confirmPasswordSpan.style.fontWeight = 'normal';
        return false
    } else if (password == confirmPassword){
        document.querySelector('.confirmPassword').style.border = '2px solid green';
        document.querySelector('.password').style.border = '2px solid green';
        document.querySelector('.submitButton').disabled = false;
        confirmPasswordSpan.textContent = ''
        return true
    }
}

//to do
// add message to <span> saying passwords dont match