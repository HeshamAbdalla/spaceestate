"use strict";function updateForm(){var e=$("form").form("get values"),a=0;for(var o in e){if("bedroom"===o)switch(e[o]){case"1":a+=1;break;case"2":a+=2.5;break;case"3":a+=3.7;break;case"4":a+=6.2;break;case"5":a+=7.8;break;case"6":a+=9.2}if("bathroom"===o)switch(e[o]){case"1":a+=.5;break;case"2":a+=.8;break;case"3":a+=1.2;break;case"4":a+=3.8;break;case"5":a+=5.5;break;case"6":a+=6.2}if("squarefootage"===o)switch(e[o]){case"1000":a+=10.2;break;case"2000":a+=15.3;break;case"3000":a+=22.4;break;case"4000":a+=35.3;break;case"5000":a+=51.2;break;case"6000":a+=66.2}if("lottype"===o)switch(e[o]){case"basic":a+=5.2;break;case"premium":a+=12.1;break;case"luxurious":a+=18.6;break;case"historic":a+=50.4;break;case"custom":a+=30.5}if("acreage"===o)switch(e[o]){case"1":a+=10;break;case"2":a+=20;break;case"3":a+=30;break;case"4":a+=40;break;case"5":a+=50;break;case"6":a+=60}"oven"===o&&"on"===e[o]&&(a+=5),"floor"===o&&"on"===e[o]&&(a+=7.2),"security"===o&&"on"===e[o]&&(a+=12.3),"gym"===o&&"on"===e[o]&&(a+=8.9),"wifi"===o&&"on"===e[o]&&(a+=1.5),"pool"===o&&"on"===e[o]&&(a+=17.9),"garage"===o&&"on"===e[o]&&(a+=3.4),"pad"===o&&"on"===e[o]&&(a+=20.4),"shield"===o&&"on"===e[o]&&(a+=33.2),"garden"===o&&"on"===e[o]&&(a+=.8)}a=Math.floor(1e7*a),a=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),$(".value h3").text("Estimated Price   $"+a).transition("pulse")}function clearForm(){$("form").form("clear"),$(".value h3").text("Estimated Price $0").transition("pulse")}$(document).ready(function(){function e(){var e=$(window).height()+5,a=parseInt(e)+"px";$(".homepage-hero-module").css("height",a)}function a(e){$(e).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),o(e)}function o(e){var a,o,i=$(window).width(),t=$(window).height()+5;console.log(t),$(e).each(function(){var e=$(this).data("height")/$(this).data("width");$(this).width(i),i<1e3&&(o=t,a=o/e,$(this).css({"margin-top":0,"margin-left":-(a-i)/2+"px"}),$(this).width(a).height(o)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}$(".dropdown").dropdown(),$(".ui.checkbox").checkbox(),$(".ui.radio.checkbox").checkbox(),$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},600,function(){window.location.hash=a})}}),e(),a(".video-container .filter"),a(".video-container video"),$(window).on("resize",function(){e(),o(".video-container .poster img"),o(".video-container .filter"),o(".video-container video")}),$(".audio").prop("volume",.02),$(".regular").slick({arrows:!1,dots:!1,infinite:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1})});
