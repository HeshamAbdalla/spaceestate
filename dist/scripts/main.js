"use strict";function updateForm(){var o=$("form").serializeArray(),i=[];for(var e in o)""!==o[e].value&&i.push(o[e].value);console.log(i)}function showModal(){$(".ui.modal").modal({blurring:!0}).modal("show")}$(document).ready(function(){function o(){var o=$(window).height()+5,i=parseInt(o)+"px";$(".homepage-hero-module").css("height",i)}function i(o){$(o).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),e(o)}function e(o){var i,e,t=$(window).width(),n=$(window).height()+5;console.log(n),$(o).each(function(){var o=$(this).data("height")/$(this).data("width");$(this).width(t),t<1e3&&(e=n,i=e/o,$(this).css({"margin-top":0,"margin-left":-(i-t)/2+"px"}),$(this).width(i).height(e)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}$(".dropdown").dropdown(),$(".ui.checkbox").checkbox(),$(".ui.radio.checkbox").checkbox(),$("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var i=this.hash;$("html, body").animate({scrollTop:$(i).offset().top},600,function(){window.location.hash=i})}}),o(),i(".video-container .filter"),i(".video-container video"),$(window).on("resize",function(){o(),e(".video-container .poster img"),e(".video-container .filter"),e(".video-container video")}),$(".audio").prop("volume",.02),$(".regular").slick({arrows:!1,dots:!1,infinite:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1})});