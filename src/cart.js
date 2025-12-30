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
            let getItem = basket.find((x) => id === x.id )
            console.log(search)
            return `
            <div class=shopping-cart>

                <div class=cart-item>
                    <img width="100px" src="${search.img}" alt="">
                    <div class="details"> 
                        <div class=details-title>
                            <h4 class=title-price>          
                                <p> ${search.name}</p>
                                <p class="price"> $ ${search.price}</p>
                            </h4>
                            <div class="crossIcon"><i class="bi bi-x-lg"></i></div>         
                        </div>
                        <div class=cart-buttons>
                            <div class="buttons">     
                                <i class="bi bi-dash-lg"></i>
                                <div>${getItem.item}</div>     
                                <i class="bi bi-plus-lg"></i>
                            </div>

                        </div>
                        <h3>$ ${search.price}</h3>


                    </div>
                </div>
            </div>

            `
        }).join("")
    )
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

{/* <div class=cart-buttons> 
    <div class="buttons">     
        <i class="bi bi-dash-lg"></i>
        <div>${getItem.item}</div>     
        <i class="bi bi-plus-lg"></i>
    </div>
</div>
<h3>$ ${search.price}</h3> */}