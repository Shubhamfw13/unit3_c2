var arr = JSON.parse(localStorage.getItem("Cart")) || []
rightCart(arr)
var count = 0;

function rightCart(arr){
    document.querySelector(".right").innerHTML = "";
    arr.map(function(elem){
      let card = document.createElement("div");
      card.setAttribute("class","cartitem");

      let images = document.createElement("img");
      images.setAttribute("src",elem.pic);

      let name = document.createElement("p");
      name.textContent = (`Name: ${elem.dishname}`);

      let price = document.createElement("p");
      price.textContent = (`Price: ${elem.price}`);

      card.append(images,name,price);
      document.querySelector(".right").append(card)
    })
}