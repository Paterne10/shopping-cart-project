let shop = document.getElementById("shop")
let shopItemData = [{
    id:"a",
    name:"Casual shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-1.jpg",
    price: 45
}, 
{
    id:"b",
    name:"Office Shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-2.jpg",
    price: 100
}, 
{
    id:"c",
    name:"T Shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-3.jpg",
    price: 25
}, 
{
    id:"d",
    name:"Mens Suit",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-4.jpg",
    price: 400
}, 
]

// stored the data that we will selected
let basket = JSON.parse(localStorage.getItem("data")) || []


let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x)=>{
        let {id,name, description, img, price } = x
        let search = basket.find((x) => x.id === id) || []

        return  `
        <div id=product-id-${id} class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                        </div>
                        <i onclick="increment(${id})"  class="bi bi-plus-lg"></i>            
                    </div> 
                </div>
            </div>
        </div>
    `;
    })
    .join("")) ;
};

generateShop()

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
    update(selectItem.id)
    localStorage.setItem("data",JSON.stringify(basket))
}

// The decrement function
let decrement = (id) =>{
    selectItem = id
    let search = basket.find((x)=> x.id === selectItem.id )
    console.log(search)
    if(search === undefined) return
    else if (search.item === 0) return

    else {
        search.item -= 1

    }
    update(selectItem.id)
    basket = basket.filter((x) => x.item !== 0 )
    localStorage.setItem("data",JSON.stringify(basket))

    console.log(basket)
} 


// The update function
let update = (id) =>{
    let search = basket.find((x) => x.id === id )
    document.getElementById(id).innerHTML = search.item
    calculation(basket)
 

}
// The calculate function

let calculation = (basket) =>{
    let cartIcon = document.querySelector(".cartAmount")
    cartIcon.innerHTML = (basket.map((x) => x.item).reduce((x, y) => x+y, 0 ))
}


calculation(basket)


