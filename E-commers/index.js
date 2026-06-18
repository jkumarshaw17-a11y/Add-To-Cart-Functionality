let cart = [];
let cartCount = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;

  displayCart();
}

function buyNow(product) {
  alert("Proceeding to buy: " + product);
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}