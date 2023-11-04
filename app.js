

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-x')
    navbar.classList.remove('close')
}

let products = [
    {
        id: 1,
        name: 'parfum gray',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'parfum frok ',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'parfum aqua',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'parfum stici',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'parfum spray',
        image: '7.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'parfum conan',
        image: '8.PNG',
        price: 120000
    },
    {
        id: 7,
        name: 'parfum blits',
        image: '9.PNG',
        price: 320000
    },
    {
        id: 8,
        name: 'parfum plips',
        image: '10.PNG',
        price: 120000
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Add this code below your existing JavaScript code
document.getElementById('sendWhatsAppButton').addEventListener('click', () => {
    let nomor = "+6288294606640"
        let message = "saya ingin membeli :\n";
        listCards.forEach((value) => {
            message += `${value.name} x${value.quantity}, `;
        });
        message += `Total harga: ${total.innerText}\n`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${nomor}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
  
});


document.addEventListener("DOMContentLoaded", function () {
    const sectionSelect = document.getElementById("sectionSelect");
  
    sectionSelect.addEventListener("change", function () {
      const selectedSection = sectionSelect.value;
  
      if (selectedSection) {
        // Use smooth scroll to navigate to the selected section
        document.querySelector(selectedSection).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  