const btns = document.querySelectorAll(".button");

const body = document.querySelector("body")

btns.forEach(function(button){
    console.log(button)
    button.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey' || e.target.id === 'red' || e.target.id === 'yellow' || e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
    })
})
