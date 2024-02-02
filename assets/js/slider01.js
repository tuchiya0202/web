
// 一番上のスライドショー
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});
//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});


//もっと見るのボタン
$(function(){
  $(".more").on("click", function() {
    $(this).toggleClass("on-click");
    $(".txt-hide").slideToggle(1000);
  });
}); 




//スクロールで下線部引く

const scrollAnim = () => {
  const fadeElem = document.querySelectorAll(".lineAnimation");
  window.addEventListener("scroll", (event) => {
    fadeElem.forEach((fadeElem) => {
      const position = fadeElem.offsetTop;
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scroll > position - windowHeight + 180){
        fadeElem.classList.add("isActive");
      }
    });
  });

}
scrollAnim();



// 目次クリックリンク飛ぶ時ウィンドウ消す

document.addEventListener("DOMContentLoaded", function () {
  var popupCheckbox = document.getElementById("popup");
  var menuItems = document.querySelectorAll(".popup-text-list a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // メニュー項目がクリックされたら #popup チェックボックスの状態を変更
      popupCheckbox.checked = false;
    });
  });
});


// 下から出てくる
// アニメーションの名前を定義
function fadeAnime(){
  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  var elemPos = $(this).offset().top-50; //要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadeUp');
  // 画面内に入ったらfadeInというクラス名を追記
  }
  });
  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });
  
    
//〜〜〜〜以下細かいイラストの動き〜〜〜

//バスのイラスト
    function busAnime(){
    $('.busDriveTrigger').each(function(){ //fadeInUpTriggerというクラス名が
      var elemPos = $(this).offset().top-20; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('busDrive');
      // 画面内に入ったらfadeInというクラス名を追記
      }
      });
    }

    $(window).scroll(function (){
      busAnime();/* アニメーション用の関数を呼ぶ*/
    });

  //自転車イラスト
    function bicycleAnime(){
      $('.bicycleRideTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-5; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('bicycleRide');
        // 画面内に入ったらfadeInというクラス名を追記
        }
        });
      }
  
      $(window).scroll(function (){
        bicycleAnime();/* アニメーション用の関数を呼ぶ*/
      });

    //カメライラスト
    function cameraAnime(){
      $('.cameraMoveTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-5; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('cameraMove');
        // 画面内に入ったらfadeInというクラス名を追記
        }
        });
      }
  
      $(window).scroll(function (){
        cameraAnime();/* アニメーション用の関数を呼ぶ*/
      });


      