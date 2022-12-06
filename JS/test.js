window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI_iPad(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
  function updateUI_iPad(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 0; i < 2; i++) {
        html += "<div class='product-box'>";
        html+="<img src='./ImageTablet/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' class='img-products'>"+"</br>";
            html +="<span class='badge'>"+
                productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<h2 class='product-title'>"+
                productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
            html +="<span class='price'>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
            // html +="<div class='button'><a href='#'' class='button-detail-product' onclick='addNewProduct()'>Thông tin chi tiết</a></div>";
            html+="<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'onclick='addNewProduct()' >Open Modal</button>"
        html += "</div>";
    }
    document.getElementById("content").innerHTML += html;
  }
// =============================
window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUINext(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
  function updateUINext(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let a= doc.getElementsByTagName("id")
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
            // html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
            
        html += "</div>";
    }
    document.getElementById("modal-body").innerHTML += html;
    
  }