var listProductDetail = [
  {
    id: 1,
    img: [
      "img/black.jpg",
      "img/black1.jpg",
      "img/black2.jpg",
      "img/navy.jpg",
      "img/navy1.jpg",
      "img/navy2.jpg",
      "img/Grey.jpg",
      "img/Grey1.jpg",
      "img/Grey2.jpg",
    ],
    name: "Classic T-Shirt",
    price: ["367,410 đ", "413,356 đ", "436,342 đ"],
    product: "Classic T-Shirt",
    color: ["black", "darkblue", "asphalt"],
    size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
  },
  {
    id: 2,
    img: [
      "img/black_long.jpg",
      "img/black_long1.jpg",
      "img/black_long2.jpg",
      "img/navy_long.jpg",
      "img/navy_long1.jpg",
      "img/navy_long2.jpg",
    ],
    name: "aaa",
    price: ["500,000đ", "413,356 đ"],
    product: "Long Sleeve Tee",
    color: ["black", "darkblue", "asphalt"],
    size: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 3,
    img: [
      "img/black.jpg",
      "img/black1.jpg",
      "img/black2.jpg",
      "img/navy.jpg",
      "img/navy1.jpg",
      "img/navy2.jpg",
      "img/Grey.jpg",
      "img/Grey1.jpg",
      "img/Grey2.jpg",
    ],
    name: "Classic T-Shirt",
    price: ["6000,000 đ", "413,356 đ", "436,342 đ"],
    product: "Classic T-Shirt",
    color: ["black", "darkblue", "asphalt"],
    size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
  },
  {
    id: 4,
    img: [
      "img/black_long.jpg",
      "img/black_long1.jpg",
      "img/black_long2.jpg",
      "img/navy_long.jpg",
      "img/navy_long1.jpg",
      "img/navy_long2.jpg",
    ],
    name: "BBBBBBB",
    price: ["367,410 đ", "413,356 đ"],
    product: "Long Sleeve Tee",
    color: ["black", "darkblue", "asphalt"],
    size: ["S", "M", "L", "XL", "2XL"],
  },
];

// var productSelect = document.querySelector(".product-select__list");
// listProductDetail.forEach(function insertProductDetail(fun1) {
//   productSelect.innerHTML +=
//     '<div class="product-select__item"><img src="' +
//     fun1.img[1] +
//     '"alt=""></div>';
// });

var productSelect = document.getElementById("productListId");
listProductDetail.forEach(function insertProductDetail(fun1) {
  var selectItem = document.createElement("div");
  selectItem.setAttribute("class", "product-select__item");
  var img = document.createElement("img");
  img.setAttribute("src", fun1.img[1]);
  selectItem.appendChild(img);
  productSelect.appendChild(selectItem);

  // document.getElementById("productnameId").innerHTML = fun1.name;
  // document.getElementById("productColorId").innerHTML = fun1.color[0];
});

document
  .querySelector(".product-select__item")
  .classList.add("selected-product");
for (const listProduct of document.querySelectorAll(".product-select__item")) {
  listProduct.addEventListener("click", function () {
    if (!this.classList.contains("selected-product")) {
      this.parentNode
        .querySelector(".selected-product")
        .classList.remove("selected-product");
      this.classList.add("selected-product");
    }
    //Avoid duplicate colors
    document.querySelector(".product-select__color").innerHTML = "";
    insertProduct();
  });
}
insertProduct();
var myimage = document.getElementById("myimage");
function insertProduct() {
  listProductDetail.forEach(function insertProductDetail(item, index, arr) {
    if (
      document.querySelector(".selected-product img").getAttribute("src") ==
      arr[index].img[1]
    ) {
      //Change thumb image
      document.querySelector(".product-detail__item").innerHTML =
        '<div class="product-detail__thumb product-detail__thumb-before">                    <img src="' +
        arr[index].img[1] +
        '" alt=""></div> <div class="product-detail__thumb product-detail__thumb-after">                    <img src="' +
        arr[index].img[2] +
        '" alt=""></div>';
      //Change zoom image
      document.getElementById("myimage").src = document.querySelector(
        ".selected-product img"
      ).src;
      //Change name
      document.querySelector("#productnameId").innerText = arr[index].name;
      //Change price
      document.querySelector(".priceid").innerText = arr[index].price[0];

      //Change color
      // console.log(arr[index].color);
      arr[index].color.forEach(function insertColorProduct(color) {
        debugger;
        document.querySelector(".product-select__icon-color").innerHTML +=
          '<div class="product-select__icon "><div class="icon-color__' +
          color +
          '"><span></span></div></div>';
      });

      //Change size
      // arr[index].size.forEach(function insertColorProduct(size) {
      //   document.querySelector(".product-detail-size__list").innerHTML +=
      //     '<div class="product-detail-size__item">                            ' +
      //     size +
      //     "                        </div>";
      // });

      //Change qty

      // for (var i = 1; i <= arr[index].Qty; i++) {
      //   document.querySelector(
      //     ".product-detail-qty-box__select-box"
      //   ).innerHTML +=
      //     '<div class="product-detail-qty-box__item">' + i + "</div>";
      // }

      //Change slide
      // arr[index].imageProduct.forEach(function changeSlide(sli) {
      //   // console.log(images = sli);
      //   var i = 0;
      //   // console.log(arr[index].imageProduct.length);
      //   document
      //     .querySelector(".product-detail__swipe-btn--left")
      //     .addEventListener("click", function () {
      //       if (i <= 0) i = arr[index].imageProduct.length;
      //       i--;
      //       console.log(i);
      //       setThumb(i);
      //       // return setImg();
      //     });
      //   document
      //     .querySelector(".product-detail__swipe-btn--right")
      //     .addEventListener("click", function () {
      //       if (i >= arr[index].imageProduct.length - 1) i = -1;
      //       i++;
      //       setThumb(i);
      //       // return setImg();
      //     });
      //   // function setImg() {
      //   //   return myimage.setAttribute("src", sli);
      //   // }
      //   function setThumb(i) {
      //     document
      //       .querySelector(".product-detail__item")
      //       .querySelector(".selected-thumb")
      //       .classList.remove("selected-thumb");
      //     document
      //       .querySelectorAll(".product-detail__thumb")
      //       [i].classList.add("selected-thumb");
      //     myimage.src = document.querySelector(".selected-thumb img").src;
      //   }
      // });
    }
  });
}
