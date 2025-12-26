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
                <div> 
                    <div class=Articletitle>
                        <p>Casual Short</p>
                        <p>$ 45</p>
                    </div>
                    <div> 
                        <iclass="bi bi-dash-lg"></i>
                        <p>2</p>
                        <i class="bi bi-plus-lg"></i>

                    </div>
                    <p>$90</p>
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
