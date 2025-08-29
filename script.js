// login button functionality
document.getElementById("loginButton").addEventListener("click",function (e){
    e.preventDefault()
    const mobileNumber = 12345678910
    const pin = 1234
    
    const mobileNumberValue = document.getElementById
    ("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)


    const pinNumberValue = document.getElementById("pin-number").value

    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted===pin){
        window.location.href="./home.html" // onno page a jaoar jonno
    }

    else{
        alert("Invalid Credentials!")  //alert dakhanor jonno
    }
})