$(document).ready(function(){
  /* 메뉴버튼을 눌렀을때, 오버레이부분을 클릭했을때*/
  $(".ninja-btn, .panel-overlay").click( function() {
    $(".ninja-btn, .panel-overlay, .panel").toggleClass("active"); //해당 영역에 toggleClass를 넣어줍니다
    /* panel overlay가 활성화 되어있는지를 체크합니다. */
    if ($(".panel-overlay").hasClass("active")) {
      $(".panel-overlay").fadeIn();
    } else {
      $(".panel-overlay").fadeOut();
    }
  });
});

var background_img_width = [0, 1328, 960, 1328]
var background_img_height = [0, 747, 574, 747]

function headerimgresize() {
  for (var i = 1; i <= 3; ++i) {
    var idname = "#headerimg" + i;
    var div = document.querySelector(idname);
    var divAspect = div.offsetHeight / div.offsetWidth;
    var imgAspect = background_img_height[i] / background_img_width[i];

    if ((imgAspect <= divAspect) && ($(idname).hasClass("imgoffsets" + i) === true)) {
      // // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
      // var imgWidthActual = div.offsetHeight / imgAspect;
      // var imgWidthToBe = div.offsetHeight / divAspect;
      // var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
      // //var cssText = 'width: auto; height: ' + div.offsetHeight + 'px; margin-left: ' + marginLeft + 'px;';
      // var divcssText = "background-size: center/cover;"
      // div.style.cssText = divcssText;
      $(idname).toggleClass('imgoffsets' + i);
      $(idname).toggleClass('imgoffsets_mobile' + i);
    }
    else if ((imgAspect > divAspect) && ($(idname).hasClass("imgoffsets_mobile" + i) === true)){
      $(idname).toggleClass('imgoffsets' + i);
      $(idname).toggleClass('imgoffsets_mobile' + i);
    }
  }
}

window.onload = function() {
  headerimgresize();
};

// cur_window_size = $(window).width();

$(window).resize(function (){
  setTimeout(function(){
      headerimgresize()
  },150)
})

function ready_this() {
  alert("준비중입니다.");
}