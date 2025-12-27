let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")
let basket = JSON.parse(localStorage.getItem("data")) || []
let calculation = (basket) =>{
    let cartIcon = document.querySelector(".cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0 )
    
}

let generateCart = (basket) => {

    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket.map((x)=>{
            let {id, item} = x
            let search = shopItemData.find((y)=> y.id === id)
            console.log(search)
            return `
            <div class=containerCart >
                <img width="100px" src="${search.img}" alt="">
                <div class="articleContainer"> 
                    <div class=articleTitle>
                        <h4>Casual Short</h4>
                        <div class="price">$ 45</div>
                    </div>
                    <div class=buttons > 
                        <i class="bi bi-dash-lg"></i>
                        <p>2</p>
                        <i class="bi bi-plus-lg"></i>

                    </div>
                    <h3>$90</h3>
                </div>
                <div class="containerIcon">
                    <i class="bi bi-x-lg"></i>
                </div>

            </div>

            `
        }))
    }
    else{
        shoppingCart.innerHTML = ``
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="index.html"> 
                <button class="btn">Back to Home</button>
            </a>
        `
        
    }
}


calculation(basket)

generateCart(basket)    
