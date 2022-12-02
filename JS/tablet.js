function addNewProduct() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  }
  function updateUI(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 0; i < productElements.length; i++) {
        html += "<div class='product-box'>";
        html+="<img src='./ImageTablet/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' class='img-products'>";
            html +="<span class='badge'>"+
                productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<h2 class='product-title'>"+
                productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
            html +="<span class='price'>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
            html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
        html += "</div>";
    }
    document.getElementById("shop-content").innerHTML += html;
    document.getElementById("add-new-product").disabled=true
    document.getElementById("add-new-product").innerText="không còn sản phẩm nào khác"
    // document.getElementsByClassName("shop-content").innerHTML = html;
  }
  