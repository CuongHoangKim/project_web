window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/laptop.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI_laptop(this);
        updateUI_macbook(this);
        updateUI_gaming(this);
        updateUI_office(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
  //========== Noi Bac===========//
  function updateUI_laptop(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 0; i < 5; i++) {
        html += "<div class='product--1'>";
        html+="<img src='./Image/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' width='200px'";
            // html +="<span class='badge'>"+
            //     productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<p><b>"+productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p></b>"
            html +="<p class='ff1'><b>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+
                "<sup><u>đ</u></sup></b> &nbsp; <del class='ff2'>"+
                productElements[i].getElementsByTagName("priceOld")[0].childNodes[0].nodeValue+ "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("khuyenMai")[0].childNodes[0].nodeValue +"</span></p>"
        //     html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
         html += "</div>";
    }
    document.getElementById("laptop-noi-bat").innerHTML += html;
  }
  //======= Macbook ======//

  function updateUI_macbook(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 5; i < 10; i++) {
        html += "<div class='product--1'>";
        html+="<img src='./Image/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' width='200px'";
            // html +="<span class='badge'>"+
            //     productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<p><b>"+productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p></b>"
            html +="<p class='ff1'><b>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+
                "<sup><u>đ</u></sup></b> &nbsp; <del class='ff2'>"+
                productElements[i].getElementsByTagName("priceOld")[0].childNodes[0].nodeValue+ "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("khuyenMai")[0].childNodes[0].nodeValue +"</span></p>"
        //     html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
         html += "</div>";
    }
    document.getElementById("macbook").innerHTML += html;
  }
//======= Gaming ======//

function updateUI_gaming(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 10; i < 15; i++) {
        html += "<div class='product--1'>";
        html+="<img src='./Image/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' width='200px'";
            // html +="<span class='badge'>"+
            //     productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<p><b>"+productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p></b>"
            html +="<p class='ff1'><b>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+
                "<sup><u>đ</u></sup></b> &nbsp; <del class='ff2'>"+
                productElements[i].getElementsByTagName("priceOld")[0].childNodes[0].nodeValue+ "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("khuyenMai")[0].childNodes[0].nodeValue +"</span></p>"
        //     html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
         html += "</div>";
    }
    document.getElementById("gaming").innerHTML += html;
  }
//======= office ======//

function updateUI_office(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 15; i < 20; i++) {
        html += "<div class='product--1'>";
        html+="<img src='./Image/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' width='200px'";
            // html +="<span class='badge'>"+
            //     productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<p><b>"+productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p></b>"
            html +="<p class='ff1'><b>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+
                "<sup><u>đ</u></sup></b> &nbsp; <del class='ff2'>"+
                productElements[i].getElementsByTagName("priceOld")[0].childNodes[0].nodeValue+ "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("khuyenMai")[0].childNodes[0].nodeValue +"</span></p>"
        //     html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
         html += "</div>";
    }
    document.getElementById("office").innerHTML += html;
  }

