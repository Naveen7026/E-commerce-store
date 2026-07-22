function placeOrder(){

const name=document.getElementById("name").value;
const address=document.getElementById("address").value;
const phone=document.getElementById("phone").value;

if(name=="" || address=="" || phone==""){

alert("Please fill all details");

return;

}

localStorage.removeItem("cart");

alert("🎉 Order Placed Successfully!");

window.location.href="index.html";

}