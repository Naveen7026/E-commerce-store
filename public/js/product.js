const id = new URLSearchParams(window.location.search).get("id");

fetch("/api/products")
.then(res => res.json())
.then(products => {

const product = products.find(p => p.id == id);

document.getElementById("product").innerHTML = `
<img src="${product.image}">
<h2>${product.name}</h2>
<p>Price : ₹${product.price}</p>

<button onclick="history.back()">
Back
</button>
`;

});