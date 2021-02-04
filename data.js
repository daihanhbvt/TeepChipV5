// start data product category

var list_product = [
  {
    id: 1,
    anh: "img/shirts.png",
    ten: "Shirts",
  },
  {
    id: 2,
    anh: "img/category1.png",
    ten: "Face Masks",
  },
  {
    id: 3,
    anh: "img/category2.png",
    ten: "Stickers",
  },
  {
    id: 2,
    anh: "img/category1.png",
    ten: "Home Decor",
  },
  {
    id: 5,
    anh: "img/category2.png",
    ten: "Posters",
  },
  {
    id: 2,
    anh: "img/category1.png",
    ten: "Phone cases",
  },
];

var rowCategory = document.querySelector("#list-product");

list_product.forEach(function (iem) {
  var product = document.createElement("div");
  product.setAttribute("class", "category__item");
  var item = document.createElement("div");
  item.setAttribute("class", "category__name");
  var p1 = document.createElement("p");
  p1.setAttribute("class", "name__product");
  p1.innerHTML = iem.ten;

  var img_product = document.createElement("div");
  img_product.setAttribute("class", "category__img");
  var img = document.createElement("img");
  img.setAttribute("src", iem.anh);

  product.appendChild(item);
  item.appendChild(p1);
  product.appendChild(img_product);
  img_product.appendChild(img);
  rowCategory.appendChild(product);
});
// end data product category

// start product recommended

var recommendList = [
  {
    id: 1,
    anh: "img/recommend1.jpg",
    ten: "Together customized",
    gia: "528.120 đ",
  },
  {
    id: 1,
    anh: "img/recommend2.jpg",
    ten: "Mr personalized",
    gia: "666.191 đ",
  },
  {
    id: 1,
    anh: "img/recommend3.jpg",
    ten: "XOXO",
    gia: "367.958 đ",
  },
  {
    id: 1,
    anh: "img/recommend2.jpg",
    ten: "We just Did 46",
    gia: "528.120 đ",
  },
];

var rowRecommend = document.querySelector("#recommend-list");
recommendList.forEach(function (recommend) {
  var productItem = document.createElement("div");
  productItem.setAttribute("class", "product__item");
  var productImg = document.createElement("div");
  productImg.setAttribute("class", "product__img");
  var img = document.createElement("img");
  img.setAttribute("src", recommend.anh);
  //   img.setAttribute("alt");
  var productDesc = document.createElement("div");
  productDesc.setAttribute("class", "product__desc");
  var productName = document.createElement("div");
  productName.setAttribute("class", "product__name");
  var span = document.createElement("span");
  span.innerHTML = recommend.ten;
  var productPrice = document.createElement("div");
  productPrice.setAttribute("class", "product__price");
  var span2 = document.createElement("span");
  span2.innerHTML = recommend.gia;
  // appendChild
  productItem.appendChild(productImg);
  productItem.appendChild(productDesc);
  productImg.appendChild(img);
  productDesc.appendChild(productName);
  productDesc.appendChild(productPrice);
  productName.appendChild(span);
  productDesc.appendChild(span2);
  rowRecommend.appendChild(productItem);
});

// end product recommended

// start featured-collection

//  var parent=document.getElementById("adidas");
var featuredList = document.querySelector(".featured-collection__list");
recommendList.forEach(function insertfeatured(featured) {
  featuredList.innerHTML +=
    '<div class="product__item"><div class="product__img"><img src="' +
    featured.anh +
    '" alt=""></div><div class="product__desc"><div class="product__name">' +
    featured.ten +
    '</div><div class="product__featured"><div class="product__price">' +
    featured.gia +
    '</div><span class="product__text-color">2 colors</span></div></div></div>';
});

// end featured-collection

//  <!-- start product personable
// var personableList = document.querySelector(".product-personable__list");
// recommendList.forEach(function insertPersonableList(personableList) {
//   personableList.innerHTML +=
//     '<div class="product__item product__item--size-m"><div class="product__img"><img src="' +
//     personableList.anh +
//     '" alt=""></div><div class="product-personal__icon"><i class="fas fa-user-edit"></i></div><div class="product__desc"><div class="product-personalizable">Personalizable</div><div class="product__name">' +
//     personableList.ten +
//     '</div><div class="product__featured"><div class="product__price">' +
//     personableList.gia +
//     '</div><span class="product__text-color">2 colors<span></div></div></div>';
// });
//  <!-- end product personable
var personableList = document.querySelector(".product-personable__list");
recommendList.forEach(function insertPersonableList(per) {
  personableList.innerHTML +=
    ' <div class="product__item product__item--size-m"> <div class="product__img"><img src="img/personalizable.jpg" alt=""></div><div class="product-personal__icon"><i class="fas fa-user-edit"></i></div><div class="product__desc"><div class="product-personalizable">Personalizable</div><div class="product__name">January Born</div><div class="product__featured"><div class="product__price">$28.95</div><span class="product__text-color">2 colors</span></div></div></div>';
});

