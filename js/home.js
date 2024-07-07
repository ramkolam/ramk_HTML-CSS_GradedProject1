const products = [
    {
        id: 1,
        title: "Covid Test Kit",
        price: "Rs. 40",
        discountedPrice: "Offer: Rs. 30/-",
        image: "images/products/c1.jpg",
        category:"Covid Care"        
    },
    {
        id: 2,
        title: "Covid Essentials",
        price: "Rs. 240",
        discountedPrice: "Offer: Rs. 170/-",
        image: "images/products/c2.jpg",
        category:"Covid Care"
    },
    {
        id: 3,
        title: "Sanitizer Bottle",
        price: "Rs. 99",
        discountedPrice: "Offer: Rs. 87/-",
        image: "images/products/c3.jpg",
        category:"Covid Care"
    },
    {
        id: 4,
        title: "Mask",
        price: "Rs. 45",
        discountedPrice: "Offer: Rs. 30/-",
        image: "images/products/c4.jpg",
        category:"Covid Care"
    },
    {
        id: 5,
        title: "BGR-34",
        price: "Rs. 300",
        discountedPrice: "Offer: Rs. 250/-",
        image: "images/products/d1.jpg",
        category:"Diabetes Care"
    },
    {
        id: 6,
        title: "Chyawanprakash Sugarfree",
        price: "Rs. 170",
        discountedPrice: "Offer: Rs. 110/-",
        image: "images/products/d2.jpg",
        category:"Diabetes Care"
    },
    {
        id: 7,
        title: "Colgate Diabetics",
        price: "Rs. 130",
        discountedPrice: "Offer: Rs. 110/-",
        image: "images/products/d3.jpg",
        category:"Diabetes Care"
    },
    {
        id: 8,
        title: "Unibic Butter Cookies",
        price: "Rs. 35",
        discountedPrice: "Offer: Rs. 30/-",
        image: "images/products/d4.png",
        category:"Diabetes Care"
    }
    
];


// Function to add products to the DOM
function displayProducts() {
    const covidCareList = document.getElementById("covid-care");
    const diabetesCareList = document.getElementById("diabetes-care");
    products.forEach(product => {
        const productCard = document.createElement("div");        
        productCard.classList.add("product-card");        
        productCard.innerHTML = `
            <h2 class="product-title">${product.title}</h2>    
            <img src="${product.image}" alt="${product.title}" class="product-image">            
            <p class="product-price">${product.price}</p>
            <p class="product-price">${product.discountedPrice}</p>
            <button class="add-to-cart" onclick="addToCart(this)">Add to Cart</button>
        `;
        if(product.category == 'Covid Care')
            covidCareList.appendChild(productCard);
        else if(product.category == 'Diabetes Care')
            diabetesCareList.appendChild(productCard);
    });
}

// Function to handle adding a product to the cart
function addToCart(buttonElement) {
    const productCard = buttonElement.parentElement;
    productCard.classList.add('added-to-cart');
}

// Call the function to display products on page load
document.addEventListener("DOMContentLoaded", displayProducts);


// JavaScript code to toggle fixed class on scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var navHeight = nav.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > navHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});