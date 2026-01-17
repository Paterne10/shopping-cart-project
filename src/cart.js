let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")
let basket = JSON.parse(localStorage.getItem("data")) || []


let calculation = (basket) =>{
    let cartIcon = document.querySelector(".cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0 )
    
}

// The update function
let update = (id) =>{
    let search = basket.find((x) => x.id === id )
    document.getElementById(id).innerHTML = search.item
    calculation(basket)

 

}

// The increment function

let increment = (id) =>{
    let selectItem = id
    let search = basket.find((x)=> x.id === selectItem.id )
    if (search === undefined){
        basket.push({
            id: selectItem.id,
            item: 1        
        })
    } 
    else{
        search.item += 1
    }
    generateCart()
    update(selectItem.id)
    localStorage.setItem("data",JSON.stringify(basket))
}



// The decrement function


let decrement = (id) =>{
    selectItem = id
    let search = basket.find((x)=> x.id === selectItem.id )
    if(search === undefined) return
    else if (search.item === 0) return

    else {
        search.item -= 1

    }
    update(selectItem.id)
    basket = basket.filter((x) => x.item !== 0 )
    generateCart()
    localStorage.setItem("data",JSON.stringify(basket))
} 

// The remove function
let removeItem = (id) =>{
    console.log("object deleted")
    let selectedItem = id   
    basket = basket.filter((x) => x.id !== selectedItem.id )
    generateCart()
    localStorage.setItem("data",JSON.stringify(basket))
 

}

// Calculate total amount

let totalAmount = ()  =>{
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {item, id} = x
            let search = shopItemData.find((y) => y.id === id )
            return search.price*item
        }).reduce((x, y)  => x+y, 0 )
        console.log(amount)
        label.innerHTML = `
            <h2>Total Bill : $ ${amount} </h2>
            <div class="container-buttons">
                <button class="checkout-button"><p>Checkout</p></button>
                <button class="remove-all"><p>Clear Cart</p></button>
            </div>
        `
    } else return

    

}


// The generate cart function

let generateCart = () => {

    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket.map((x)=>{
            let {id, item} = x
            let search = shopItemData.find((y)=> y.id === id)
            // let getItem = basket.find((x) => id === x.id )
            // console.log(search)
            return `
            <div class=cart-item>
                <img width="100px" src="${search.img}" alt="">
                <div class="details"> 
                    <div class=details-title>
                        <h4 class=title-price>          
                            <p> ${search.name}</p>
                            <p class="price"> $ ${search.price}</p>
                        </h4>
                        <i  onclick="removeItem(${id})" class="bi bi-x-lg clearBtn"></i>
                    </div>
                    <div class=cart-buttons>
                        <div class="buttons">     
                            <i onclick="decrement(${id})" class="bi bi-dash-lg "></i>
                            <div id=${id}>${item}</div>     
                            <i onclick="increment(${id})"  class="bi bi-plus-lg"></i>
                        </div>

                    </div>
                    <h3>$ ${search.price*item}</h3>


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

totalAmount()



