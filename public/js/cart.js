let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDiv = document.getElementById("cart");

if(cart.length === 0){

cartDiv.innerHTML="<h2>Your Cart is Empty</h2>";

}else{

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartDiv.innerHTML += `
<div class="card">

<img src="${item.image}">

<h2>${item.name}</h2>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>
`;

});

cartDiv.innerHTML += `
<div class="card">
<h2>Total : ₹${total}</h2>
</div>
`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}