// document.querySelector(".gotoCartButton").addEventListener("click",sendingToCart);

// function sendingToCart(){
//   window.location.href="mycart.html"
// }

  // function singOpFunction() {
  //   window.location.href = "login.html";
  // }
  var btnScrollToTop = document.querySelector("#btnScrollToTop");
  btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  document.querySelector("#checkout").addEventListener("click",checkout);
    function checkout(){
      window.location.href = "checkout.html";
    }

  // =========================cartdata marking======================

  var cartData = JSON.parse(localStorage.getItem("AddToCartProduct"));
  console.log(cartData);

  var total = cartData.reduce(function (sum, elem, ind, arr) {
    return sum + Number(elem.priceToAdd);
  }, 0);

  document.querySelector("#subtotalprice").innerText =
    "₹" + "  " + total + ".00";

  // ===============discount Coupen Code======================
  document.querySelector("#submit2").addEventListener("click", discountFuntion);

  function discountFuntion() {
    console.log("all good");
    console.log(total);
    var coupen = document.querySelector("#discount_code").value;

    if (coupen == "INDIAN") {
      var disc = total - (total * 30) / 100;
      console.log(disc);
      document.querySelector("#GST").value = disc ;
      alert("Hurray You got 30% Discount");
    } else {
      alert("Wrong Coupen Code Sorry");
      document.querySelector("#GST").value =  total;
    }
    localStorage.setItem("totalPrice",total);
  }
 
  // =====================discount coupen code end============================

  cartData.map(function (elem,index) {
    var box = document.createElement("div");
    box.style.margin = "10px 12px";
    box.style.display = "flex";

    var img = document.createElement("img");
    img.src = elem.producturl;
    img.setAttribute("id", "images");
    // img.style.cursor = "pointer";
    // img.style.border = "1px solid red";
    // img.style.margin = "10px 0px"

    var name = document.createElement("p");
    name.textContent = elem.productname;
    name.style.fontWeight = "bold";
    name.style.marginLeft = "10px";

    // var price = document.createElement("p");
    // price.textContent = elem.price;
    // price.style.margin = "16px 25px 0px 25px";

    var qty = document.createElement("p");
   
    qty.style.margin = "16px 25px 0px 30px";

    var total = document.createElement("p");
    total.textContent = elem.price;
    total.style.margin = "16px 25px 0px 30px";

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove");
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    });

    box.append(img, name, total, btn);

    document.querySelector("tbody").append(box);
  });

  function removeItem(elem, index) {
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("sendToCartData1", JSON.stringify(cartData));
    window.location.reload();
  }


