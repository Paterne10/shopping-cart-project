
let basket = JSON.parse(localStorage.getItem("data")) || []
let calculation = (basket) =>{
    let cartIcon = document.querySelector(".cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0 )
    
}


calculation(basket)
