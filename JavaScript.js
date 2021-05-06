function openCity(evt, cityName) {
  var z, tabcontent, tabs;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (z = 0; z < tabcontent.length; z++) {
      tabcontent[z].style.display = "none";
  }
  tabs = document.getElementsByClassName("tabs");
  for (z = 0; z < tabs.length; z++) {
      tabs[z].className = tabs[z].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  }





function enlargeImage(images) {
  var enlargeImage = document.getElementById("enlargeImage");
  enlargeImage.src = images.src;
  imageTitle.innerHTML = images.alt;
  enlargeImage.parentElement.style.display = "block";

}





function change(i,h){
if(h==1){
if (i=="a"){
document.getElementById("imagedisplay").src = "images/nugegoda/img2.jpg";
}
if (i=="b"){
document.getElementById("imagedisplay").src = "images/nugegoda/img3.jpg";
}
if (i=="c"){
document.getElementById("imagedisplay").src = "images/nugegoda/img4.jpg";
}
if (i=="d"){
document.getElementById("imagedisplay").src = "images/nugegoda/img5.jpg";
}
if (i=="e"){
document.getElementById("imagedisplay").src = "images/nugegoda/img6.jpg";
}
if (i=="f"){
document.getElementById("imagedisplay").src = "images/nugegoda/img7.jpg";
    }
  }
  if(h==2){
    if (i=="a"){
      document.getElementById("imagedisplay").src = "images/kotte/img2.jpg";
    }
    if (i=="b"){
      document.getElementById("imagedisplay").src = "images/kotte/img3.jpg";
    }
    if (i=="c"){
      document.getElementById("imagedisplay").src = "images/kotte/img4.jpg";
    }
    if (i=="d"){
      document.getElementById("imagedisplay").src = "images/kotte/img5.jpg";
    }
    if (i=="e"){
      document.getElementById("imagedisplay").src = "images/kotte/img6.jpg";
    }
    if (i=="f"){
      document.getElementById("imagedisplay").src = "images/kotte/img7.jpg";
    }
  }
}




/************************* */
