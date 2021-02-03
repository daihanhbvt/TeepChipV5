// // zoom img

// function imageZoom(imgID, resultID) {
//   var img, lens, result, cx, cy;
//   img = document.getElementById(imgID);
//   result = document.getElementById(resultID);
//   /*create lens:*/
//   lens = document.createElement("DIV");
//   lens.setAttribute("class", "img-zoom-lens");
//   /*insert lens:*/
//   img.parentElement.insertBefore(lens, img);
//   /*calculate the ratio between result DIV and lens:*/
//   // tính tỷ số giữa kết quả DIV và thấu kính
//   cx = result.offsetWidth / lens.offsetWidth;
//   cy = result.offsetHeight / lens.offsetHeight;
//   /*set background properties for the result DIV:*/
//   // đặt thuộc tính nền cho kết quả DIV
//   result.style.backgroundImage = "url('" + img.src + "')";
//   result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
//   /*execute a function when someone moves the cursor over the image, or the lens:*/
//   // thực thi một chức năng khi ai đó di chuyển con trỏ qua hình ảnh hoặc ống kính:
//   lens.addEventListener("mousemove", moveLens);
//   img.addEventListener("mousemove", moveLens);
//   /*and also for touch screens:*/
//   // và cả cho màn hình cảm ứng
//   lens.addEventListener("touchmove", moveLens);
//   img.addEventListener("touchmove", moveLens);
//   function moveLens(e) {
//     var pos, x, y;
//     /*prevent any other actions that may occur when moving over the image:*/
//     // ngăn chặn bất kỳ hành động nào khác có thể xảy ra khi di chuyển qua hình ảnh
//     e.preventDefault();
//     /*get the cursor's x and y positions:*/
//     // lấy vị trí x và y của con trỏ
//     pos = getCursorPos(e);
//     /*calculate the position of the lens:*/
//     // tính vị trí của thấu kính
//     x = pos.x - lens.offsetWidth / 2;
//     y = pos.y - lens.offsetHeight / 2;
//     /*prevent the lens from being positioned outside the image:*/
//     // ngăn ống kính được đặt bên ngoài hình ảnh
//     if (x > img.width - lens.offsetWidth) {
//       x = img.width - lens.offsetWidth;
//     }
//     if (x < 0) {
//       x = 0;
//     }
//     if (y > img.height - lens.offsetHeight) {
//       y = img.height - lens.offsetHeight;
//     }
//     if (y < 0) {
//       y = 0;
//     }
//     /*set the position of the lens:*/
//     // đặt vị trí của thấu kính:
//     lens.style.left = x + "px";
//     lens.style.top = y + "px";
//     /*display what the lens "sees":*/
//     // hiển thị những gì ống kính "nhìn thấy"
//     result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
//   }
//   function getCursorPos(e) {
//     var a,
//       x = 0,
//       y = 0;
//     e = e || window.event;
//     /*get the x and y positions of the image:*/
//     // lấy vị trí x và y của hình ảnh
//     a = img.getBoundingClientRect();
//     /*calculate the cursor's x and y coordinates, relative to the image:*/
//     // tính toán tọa độ x và y của con trỏ, liên quan đến hình ảnh
//     x = e.pageX - a.left;
//     y = e.pageY - a.top;
//     /*consider any page scrolling:*/
//     // xem xét bất kỳ cuộn trang nào
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return { x: x, y: y };
//   }
// }
// imageZoom("myimage", "myresult");

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);

  /*initialise and hide lens result*/
  result.style.display = "none";

  /*Reveal and hide on mouseover or out*/
  img.addEventListener("mouseover", function () {
    result.style.display = "block";
    lens.style.display = "block";
  });
  img.addEventListener("mouseout", function () {
    result.style.display = "none";
    lens.style.display = "none";
  });
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

imageZoom("myimage", "myresult");
