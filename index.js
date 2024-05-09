 var value = new Date
 console.log(value.getDate()+ "/" + value.getMonth()+ "/" + value.getFullYear())

 console.log(value.getTime())
 console.log(Math.floor(value /1000))
 console.log(Math.floor(value /1000 / 60))
 console.log(Math.floor(value /1000 / 60 /60))
 console.log(Math.floor(value /1000 / 60 /60 /24))
 console.log(Math.floor(value /1000 / 60 /60/24/30))
 console.log(Math.floor(value /1000 / 60 /60/24/30/12))


 var result_num = document.getElementById('result_num')
 var user_num = document.getElementById('user_num')
 var result_box = document.getElementById('result_box')

 function checkNumber(userNumber) {
     var randomNumber = Math.ceil(Math.random() * 6)
     user_num.innerText = userNumber
     result_num.innerText = randomNumber
     if (userNumber == randomNumber) {
         result_box.innerText = 'Congrats!, You won'
         result_box.style.color = 'green'
     } else {
         result_box.innerText = 'Soory!, You lose , Try Again'
         result_box.style.color = 'red'
     }
 }
