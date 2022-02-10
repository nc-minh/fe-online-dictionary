function checkLogin(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    var alertUsername = document.getElementById('alert-username')
    let alertPassword = document.getElementById('alert-password')

    const regex = /[a-zA-Z0-9._-]{5,20}/g
    const check = regex.test(username)

    console.log(check)

    if(username.length < 5){
        alertUsername.innerText = 'Tài khoản phải lớn hơn 6 kí tự!'
        alertUsername.style.display = 'block'
    }else if(!check){
        alertUsername.innerText = 'Tài khoản không chứa kí tự đặc biệt!'
        alertUsername.style.display = 'block'
    }else if(password.length < 5){
        alertPassword.innerText = 'Mật khẩu phải lớn hơn 6 kí tự!'
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'block'
    }else{
        alertUsername.style.display = 'none'
        alertPassword.style.display = 'none'
        console.log('done')
        return true
    }

}