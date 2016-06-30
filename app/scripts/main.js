    function dropHouse () {
  $('.moon').append('<img class=\'house\' src=\'http://herndonrentals.com/wp-content/uploads/sites/295/2014/05/house.png\' />');
}






//More fire:
// var obj = $('#ire');
// var fps = 200;
// var letters = obj.html().split('');
// obj.empty();
// $.each(letters,function(el){
//     obj.append($('<span>'+this+'</span>'));
// });
// var animateLetters = obj.find('span');
// setInterval(function(){
//     animateLetters.each(function(){
//         $(this).css('fontSize', 80+(Math.floor(Math.random()*50)));
//     });
// },fps);
//
//

$(document)
.ready(function() {
    //More fire:
    // var obj = $('#ire');
    // var fps = 200;
    // var letters = obj.html().split('');
    // obj.empty();
    // $.each(letters,function(el){
    //     obj.append($('<span>'+this+'</span>'));
    // });
    // var animateLetters = obj.find('span');
    // setInterval(function(){
    //     animateLetters.each(function(){
    //         $(this).css('fontSize', 80+(Math.floor(Math.random()*50)));
    //     });
    // },fps);

    // fix menu when passed
    $('.masthead')
    .visibility({
        once: false,
        onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
        }
    })
    ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
    ;
    $('.image').slick();
})
;
