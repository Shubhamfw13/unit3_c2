async function getallMeals() {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=p`;
      let res = await fetch(url);
      let mealData = await res.json();
      let meal = mealData.meals;
      // console.log(meal)
      showallMeals(meal);
    } catch (err) {
      console.log(err);
    }
  }

  getallMeals();
  var count = 0;


  function showallMeals(meal) {
    meal.map(function (elem) {
      let dishes = document.createElement("div");
      dishes.setAttribute("class", "dishdiv");

      let image = document.createElement("img");
      image.setAttribute("src", elem.strMealThumb);
      image.setAttribute("id", "dishimg");

      let name = document.createElement("p");
      name.textContent = `Name: ${elem.strMeal}`;

      let prc = Math.ceil(Math.random() * 500 - 100 + 200);
      let price = document.createElement("p");
      price.textContent = `Price: rs${prc}`;

      let cart = document.createElement("button");
      cart.textContent = "ADD TO CART";
      cart.addEventListener("click",function (){
          addKart(elem,prc)
      })

      dishes.append(image, name, price, cart);
      document.querySelector(".maindiv").append(dishes);
    });
  }
  var arr = JSON.parse(localStorage.getItem("Cart")) || []
  rightCart(arr)
  var count = 1;
  function addKart (elem,prc){
      let objcart = {
          pic : elem.strMealThumb,
          dishname : elem.strMeal,
          price : prc,
      }
      arr.push(objcart);
      console.log(arr);
      localStorage.setItem("Cart",JSON.stringify(arr));
      count++
      console.log(count)
      alert (`${count}  Product Added`)
      rightCart(arr)
  }

  function cart(){
      window.location.href = "cart.html"
  }
