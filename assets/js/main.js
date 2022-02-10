function checkLogin(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    let alertUsername = document.getElementById('alert-username')
    let alertPassword = document.getElementById('alert-password')

    const regex = /^\w+$/g
    const check = regex.test(username)

    console.log(check)

    if(username.length < 5 || username.length > 20){
        alertUsername.innerText = 'Tài khoản phải lớn hơn 5 kí tự!'
        alertUsername.style.display = 'block'
    }else if(!check){
        alertUsername.innerText = 'Tài khoản không chứa kí tự đặc biệt!'
        alertUsername.style.display = 'block'
    }else if(password.length < 5){
        alertPassword.innerText = 'Mật khẩu phải lớn hơn 5 kí tự!'
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'block'
    }else{
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'none'
        console.log('done')
        return true
    }

}

function checkRegister(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const rePassword = document.getElementById('re-password').value
    let alertUsername = document.getElementById('alert-username')
    let alertPassword = document.getElementById('alert-password')
    let alertRepassword = document.getElementById('alert-repassword')

    const regex = /^\w+$/g
    const check = regex.test(username)
    console.log(check)

    if(username.length < 5 || username.length > 20){
        alertUsername.innerText = 'Tài khoản phải lớn hơn 5 kí tự!'
        alertUsername.style.display = 'block'
        alertPassword.style.display = 'none'
        alertRepassword.style.display = 'none'
    }else if(!check){
        alertUsername.innerText = 'Tài khoản không chứa kí tự đặc biệt!'
        alertUsername.style.display = 'block'
        alertPassword.style.display = 'none'
        alertRepassword.style.display = 'none'
    }else if(password.length < 5){
        alertUsername.innerText = 'Mật khẩu phải lớn hơn 5 kí tự!'
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'block'
        alertRepassword.style.display = 'none'
    }else if(password != rePassword){
        alertRepassword.innerText = 'Mật khẩu nhập lại không đúng!'
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'none'
        alertRepassword.style.display = 'block'
    }else{
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'none'
        alertRepassword.style.display = 'none'
        console.log('done')
        return true
    }
}