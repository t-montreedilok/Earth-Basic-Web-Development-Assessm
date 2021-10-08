var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let myJson = {
  "product": [
    {
      "name": "iPhone 13 Pro Max",
      "brand": "apple",
      "description": "128GB 6.7inch A15 Bionic",
      "price": "999",
    },
    {
      "name": "iPhone 13 ",
      "brand": "apple",
      "description": "128GB 6.1inch A15 Bionic",
      "price": "799",
    },
    {
      "name": "iPhone 12 Pro",
      "brand": "apple",
      "description": "128GB 6.7inch A14 Bionic",
      "price": "999",
    },
    {
      "name": "iPhone 12",
      "brand": "apple",
      "description": "128GB 6.1inch A14 Bionic",
      "price": "699",
    },
    {
      "name": "iPad mini",
      "brand": "apple",
      "description": "64GB 8.3inch A15 Bionic",
      "price": "528",
    },
    {
      "name": "iPad Air",
      "brand": "apple",
      "description": "64GB 10.9inch A14 Bionic",
      "price": "578",
    },
    {
      "name": "iPad pro",
      "brand": "apple",
      "description": "128GB 12.9inch M1",
      "price": "873",
    },
    {
      "name": "Apple Watch Series 6",
      "brand": "apple",
      "description": "41 mm. GPS+Cellular",
      "price": "719",
    },
  ],
};

const data = myJson.product;
// console.log(myJson.product[0].name);
document.getElementById("iph13-pro-max").innerHTML = myJson.product[0].name +'<br>'+data[0].description;
document.getElementById("iph13-pro-max-price").innerHTML =
  "$" + myJson.product[0].price;

document.getElementById("iph13").innerHTML = myJson.product[1].name+'<br>'+data[1].description;
document.getElementById("iph13-price").innerHTML =
  "$" + myJson.product[1].price;

document.getElementById("iph12-pro").innerHTML = myJson.product[2].name+'<br>'+data[2].description;
document.getElementById("iph12-pro-price").innerHTML =
  "$" + myJson.product[2].price;

document.getElementById("iph12").innerHTML = myJson.product[3].name+'<br>'+data[3].description;
document.getElementById("iph12-price").innerHTML =
  "$" + myJson.product[3].price;

document.getElementById("ipad-mini").innerHTML = myJson.product[4].name+'<br>'+data[4].description;
document.getElementById("ipad-mini-price").innerHTML =
  "$" + myJson.product[4].price;

document.getElementById("ipad-air").innerHTML = myJson.product[5].name+'<br>'+data[5].description;
document.getElementById("ipad-air-price").innerHTML =
  "$" + myJson.product[5].price;

document.getElementById("ipad-pro").innerHTML = myJson.product[6].name+'<br>'+data[6].description;
document.getElementById("ipad-pro-price").innerHTML =
  "$" + myJson.product[6].price;

document.getElementById("apple-watch").innerHTML = myJson.product[7].name+'<br>'+data[7].description;
document.getElementById("apple-watch-price").innerHTML =
  "$" + myJson.product[7].price;

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};





const cart = [];
var total = 0;

const totalinner =()=>{
  document.getElementById("totalprice").innerHTML 
  = `<p>Total price: $${new Intl.NumberFormat().format(total)}</p>`
}
const clearData =()=>{
  document.getElementById("modal-body").innerHTML='<p style="color: #bbb;" ></p>';
  total = 0;
}

var txttotal = (document.getElementById("totalprice").innerHTML = `<p>Total price: $${total}</p>`)
var cart_detail = document.getElementById("modal-body");
var checkout = (document.getElementById("btn-checkout").onclick = function () {
  alert("Check Out Success");
  clearData();
    document.getElementById("totalprice").innerHTML 
  = `<p>Total price: $0</p>`
});

var buyiPhone = (document.getElementById("buy-iphone13pro").onclick =
function () {
  // alert("iPhone 13 Pro Max added to cart");
  // cart_detail.innerHTML = `<p>${myJson.product[0].name}</p>`
  cart.push(myJson.product[0].name);
  cart_detail.innerHTML += `<p>${myJson.product[0].name} Price: $${myJson.product[0].price}</p> `;
  total += Number(data[0].price) 
  totalinner();
  modal.style.display = "block";
  console.log(total);
  console.log(cart);
});
var buyiPad = (document.getElementById("buy-ipadpro").onclick =
function () {
  // alert("iPhone 13 Pro Max added to cart");
  // cart_detail.innerHTML = `<p>${myJson.product[0].name}</p>`
  cart.push(myJson.product[6].name);
  cart_detail.innerHTML += `<p>${myJson.product[6].name} Price: $${myJson.product[6].price}</p> `;
  total += Number(data[6].price) 
  totalinner();
  modal.style.display = "block";
  console.log(total);
  console.log(cart);
});
var buywatch = (document.getElementById("buy-watch").onclick =
function () {
  // alert("iPhone 13 Pro Max added to cart");
  // cart_detail.innerHTML = `<p>${myJson.product[0].name}</p>`
  cart.push(myJson.product[7].name);
  cart_detail.innerHTML += `<p>${myJson.product[7].name} Price: $${myJson.product[7].price}</p> `;
  total += Number(data[7].price) 
  totalinner();
  modal.style.display = "block";
  console.log(total);
  console.log(cart);
});

var iph13pro = (document.getElementById("order-iph13-pro-max").onclick =
  function () {
    alert("iPhone 13 Pro Max added to cart");
    // cart_detail.innerHTML = `<p>${myJson.product[0].name}</p>`
    cart.push(myJson.product[0].name);
    cart_detail.innerHTML += `<p>${myJson.product[0].name} Price: $${myJson.product[0].price}</p> `;
    total += Number(data[0].price) 
    totalinner();
    console.log(total);
    console.log(cart);
  });
var iph13 = (document.getElementById("order-iph13").onclick = function () {
  alert("iPhone 13 added to cart");
  cart.push(myJson.product[1].name);
  cart_detail.innerHTML += `<p>${myJson.product[1].name} Price: $${myJson.product[1].price}</p>`;
  total += Number(data[1].price)
  totalinner();
  console.log(total);
  console.log(cart);
});
var iph12pro = (document.getElementById("order-iph12-pro").onclick =
  function () {
    alert("iPhone 12 Pro added to cart");
    cart.push(myJson.product[2].name);
    cart_detail.innerHTML += `<p>${myJson.product[2].name} Price: $${myJson.product[3].price}</p>`;
    total += Number(data[2].price)
    totalinner();
    console.log(total);
    console.log(cart);
  });
var iph12 = (document.getElementById("order-iph12").onclick = function () {
  alert("iPhone added to cart");
  cart.push(myJson.product[3].name);
  cart_detail.innerHTML += `<p>${myJson.product[3].name} Price: $${myJson.product[3].price} </p>`;
  total += Number(data[3].price)
  totalinner();
  console.log(total);
  console.log(cart);
});
var ipadmini = (document.getElementById("order-ipad-mini").onclick =
  function () {
    alert("iPad added to cart");
    cart.push(myJson.product[4].name);
    cart_detail.innerHTML += `<p>${myJson.product[4].name} Price: $${myJson.product[4].price}</p>`;
    total += Number(data[4].price)
    totalinner();
    console.log(cart);
  });
var ipadair = (document.getElementById("order-air").onclick = function () {
  alert("iPad Air added to cart");
  cart.push(myJson.product[5].name);
  cart_detail.innerHTML += `<p>${myJson.product[5].name} Price: $${myJson.product[5].price}</p>`;
  total += Number(data[5].price)
  totalinner();
  console.log(cart);
});
var ipadpro = (document.getElementById("order-ipad-pro").onclick = function () {
  alert("iPad Pro added to cart");
  cart.push(myJson.product[6].name);
  cart_detail.innerHTML += `<p>${myJson.product[6].name} Price: $${myJson.product[6].price} </p>`;
  total += Number(data[6].price)
  totalinner();
  console.log(cart);
});
var appwatch = (document.getElementById("order-apple-watch").onclick =
  function () {
    alert("Apple Watch Series 6 added to cart");
    cart.push(myJson.product[7].name);
    cart_detail.innerHTML += `<p>${myJson.product[7].name} Price: $${myJson.product[7].price}</p>`;
    total += Number(data[7].price)
    totalinner();
    console.log(cart);
  });

  