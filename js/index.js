$(document).ready(function() {
  // For internal link
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

// For external pages
$(window).on('load', function() {
  var hash = location.hash;
  if(hash) {
    var target = $(hash);
    if(target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



  function delayScrollAnime() {
    var time = 0.2;//遅延時間を増やす秒数の値
    var value = time;
    $('.delayScroll').each(function () {
      var parent = this;          //親要素を取得
      var elemPos = $(this).offset().top;//要素の位置まで来たら
      var scroll = $(window).scrollTop();//スクロール値を取得
      var windowHeight = $(window).height();//画面の高さを取得
      var childs = $(this).children();  //子要素を取得
      
      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
        $(childs).each(function () {
          
          if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
            
            $(parent).addClass("play"); //親要素にクラス名playを追加
            $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
            $(this).addClass("fadeUp");//アニメーションのクラス名を追加
            value = value + time;//delay時間を増加させる
            
            //全ての処理を終わったらplayを外す
            var index = $(childs).index(this);
            if((childs.length-1) == index){
              $(parent).removeClass("play");
            }
          }
        })
      }else {
        $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
        value = time;//delay初期値の数値に戻す
      }
    })
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





$(document).ready(function() {
  $('.form_explain br').remove();
});



$('.garally_modal_open').on('click', function() {

    $("body").addClass("no_scroll");
    $('.overlay, .garally_modal').fadeIn().css('display','block');


  // モーダルが開いた後にSlickを初期化
  $('.modal_slider').slick({
    arrows: true, // 矢印を有効にする
    autoplay: false, // 自動再生を無効にする
    dots: false, // ドットを無効にする
    infinite: true, // スライドをループさせる
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});
});

$(document).ready(function() {
  $('.garally_modal p').on('click', function() {
      $('.garally_modal').fadeOut();
      $("body").removeClass("no_scroll");
  });
});


/*********************************
	staff interview modal
*********************************/



$(function () {
  $('.post-open').click(function () {
      $("body").addClass('no_scroll');
      var id = $(this).data('id');
      $('#overlay, #top #modal_contents .modal-window .modal_post[data-id="modal' + id + '"],#topics #modal_contents .modal-window .modal_post[data-id="modal' + id + '"]').fadeIn().css('display','block');
  });//非表示にしているモーダルを表示する
      
  $('.post-close').click(function () {
      $("body").removeClass("no_scroll");
      $('#overlay,#top #modal_contents .modal-window .modal_post,#topics #modal_contents .modal-window .modal_post').fadeOut();
  });//表示押されたモーダルを非表示にする
});


$(function () {
  $('.post-open').click(function () {
      $("body").addClass('no_scroll');
      var id = $(this).data('id');
      $('#overlay, #top #modal_contents .modal-window .modal_post[data-id="modal' + id + '"]').fadeIn().css('display','block');
  });//非表示にしているモーダルを表示する
      
  $('.post-close').click(function () {
      $("body").removeClass("no_scroll");
      $('#overlay,#top #modal_contents .modal-window .modal_post').fadeOut();
  });//表示押されたモーダルを非表示にする
});

$(function(){
  $('#topics #modal_contents .modal-window .modal_post').each(function(i){
      $(this).attr('data-id','modal' + (i+1));
  });
});
//表示したいモーダルを入力
$(function(){
  $('#top #modal_contents .modal-window .modal_post').each(function(i){
      $(this).attr('data-id','modal' + (i+1));
  });
});
//表示したいモーダルを入力
$(function(){
  $('#top .top_topics .top_post').each(function(i){
      $(this).attr('data-id', + (i+1));
  });
});
//クリックしてモーダルを表示させるものを入力
$(function(){
  $('#topics .topics_wrap dl').each(function(i){
      $(this).attr('data-id', + (i+1));
  });
});
//クリックしてモーダルを表示させるものを入力

$(function () {
  $('.js-open').click(function () {
      $("body").addClass('no_scroll');
      var id = $(this).data('id-voice');
      $('#overlay_voice, #voice #modal_contents .modal-window .modal_post[data-id-voice="modal' + id + '"]').fadeIn().css('display','block');
  });
      
  $('.js-close').click(function () {
      $("body").removeClass("no_scroll");
      $('#overlay_voice,#voice #modal_contents .modal-window .modal_post').fadeOut();
  });
});

$(function(){
  $('#voice #modal_contents .modal-window .modal_post').each(function(i){
      $(this).attr('data-id-voice','modal' + (i+1));
  });
});
$(function(){
  $('#voice .staff_slider .staff_slide .open').each(function(i){
      $(this).attr('data-id-voice', + (i+1));
  });
});



$(document).ready(function(){
  $(".contents_sample").click(function(){
    $(this).find("dd").slideToggle();
    $(this).find("dt img").toggleClass("rotate");
  });
});


// $('#fullpage').fullpage({  
//   anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'], // ページのアンカー名を指定  
//   menu: '#global-menu', // グローバルメニューのID名  
//   scrollOverflow: true, //全画面よりコンテンツが多い場合スクロールバーを出すかどうか  
//   loopHorizontal:false, //横スライダーをループさせない  
//   touchSensitivity: 16, //タッチデバイスでのセクション切替の強さの閾値  
//   afterLoad: function (anchorLink, index) {  
//    //セクションが読み込み終わりのイベント  
//    if (index === 1) {  
//     //TOPロード時  
     
//    }else if(index === $('#fullpage .section').length){  
//     //最下ページ時  
//    }else{  
//     //その他のページの時  
//    }  
//   },  
//   afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {  
//     // スライドが読み込み終わった後のイベント  
//   },  
//   onLeave: function (index, nextIndex, direction) {  
//     // セクションを離れた時のイベント  
//   },  
//   onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {  
//     // スライドを離れた時のイベント  
//   },  
//   afterResize: function () {  
//    // リサイズ後のイベント  
//  }  
// }); 






$(window).on('scroll', function() {
  var scrollPos = $(document).scrollTop();
  $('#global-menu a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (refElement.length) { // idが存在するか確認
      var offsetTop = refElement.position().top + -100; // オフセットを追加
      if (offsetTop <= scrollPos && offsetTop + refElement.height() > scrollPos) {
        $('#global-menu li').removeClass('active');
        currLink.parent().addClass('active');
      }
      else {
        currLink.parent().removeClass('active');
      }
    }
  });
});

$(document).ready(function(){
  $('.mv__slider').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    draggable: false,
    swipe: false,
    dot: false,
    touchMove: false,
    // rtl: true
  });
  
  
});

$(document).ready(function(){
  $('.slider_right').slick({
    autoplay: true,
    autoplaySpeed: 0, // ここでスライドの速度を調整できます
    infinite: true,
    arrows: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed: 6000,
    draggable: false,
    swipe: false,
    dot: false,
    touchMove: false,
    // rtl: true
  });
  
  
});

$('.slider_left').slick({
  autoplay: true,
  autoplaySpeed: 0, // ここでスライドの速度を調整できます
  infinite: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  cssEase: 'linear',
  speed: 6000,
  draggable: false,
  swipe: false,
  dot: false,
  touchMove: false,
  rtl: true
});








