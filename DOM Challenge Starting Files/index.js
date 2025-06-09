ransomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImagesrc1 = "images/dice" + ransomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesrc1);



ransomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesrc2 = "images/dice" + ransomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesrc2);