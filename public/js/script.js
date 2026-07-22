fetch("/api/products")
.then(res => res.json())
.then(products => {

const container = document.getElementById("products");

products.forEach(product => {

container.innerHTML += `
<div class="card">

<img src="${product.image}" alt="${product.name}">

<h2>${product.name}</h2>

<p>₹${product.price}</p>

<button onclick="location.href='product.html?id=${product.id}'">
View Details
</button>

<button onclick='addToCart(${JSON.stringify(product)})'>
Add To Cart
</button>

</div>
`;

});

});

function addToCart(product){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product Added Successfully!");

window.location.href = "cart.html";

}