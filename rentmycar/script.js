//$('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 

$('.burger-menu').click(function(){
    $('.two').toggleClass("alt");
})

$('.bma').click(function(){
    $('.two').toggleClass("alt");
})


let totalResult = $('#totalresult');
let totalcar = $('.car-result');
totalResult.text(totalcar.length)

$('.car-previous').click(function(){
    var srcimg = $(this).parent().parent().children(".car-view").children(".car-model").children("img");
    var atrimg = srcimg.attr("src")
    if (atrimg == "assets/vehicule1-0.png"){
        srcimg.attr("src","assets/vehicule1-3.png")
    }else if (atrimg == "assets/vehicule1-3.png"){
        srcimg.attr("src","assets/vehicule1-2.png")
    }else if (atrimg == "assets/vehicule1-2.png"){
        srcimg.attr("src","assets/vehicule1-1.png")
    }else if (atrimg == "assets/vehicule1-1.png"){
        srcimg.attr("src","assets/vehicule1-0.png")
    }else if (atrimg == "assets/vehicule2-0.png"){
        srcimg.attr("src","assets/vehicule2-3.png")
    }else if (atrimg == "assets/vehicule2-3.png"){
        srcimg.attr("src","assets/vehicule2-2.png")
    }else if (atrimg == "assets/vehicule2-2.png"){
        srcimg.attr("src","assets/vehicule2-1.png")
    }else if (atrimg == "assets/vehicule2-1.png"){
        srcimg.attr("src","assets/vehicule2-0.png")
    }else if (atrimg == "assets/vehicule3-0.png"){
        srcimg.attr("src","assets/vehicule3-3.png")
    }else if (atrimg == "assets/vehicule3-3.png"){
        srcimg.attr("src","assets/vehicule3-2.png")
    }else if (atrimg == "assets/vehicule3-2.png"){
        srcimg.attr("src","assets/vehicule3-1.png")
    }else if (atrimg == "assets/vehicule3-1.png"){
        srcimg.attr("src","assets/vehicule3-0.png")
    }else if (atrimg == "assets/vehicule4-0.png"){
        srcimg.attr("src","assets/vehicule4-3.png")
    }else if (atrimg == "assets/vehicule4-3.png"){
        srcimg.attr("src","assets/vehicule4-2.png")
    }else if (atrimg == "assets/vehicule4-2.png"){
        srcimg.attr("src","assets/vehicule4-1.png")
    }else if (atrimg == "assets/vehicule4-1.png"){
        srcimg.attr("src","assets/vehicule4-0.png")
    }
})


$('.car-next').click(function(){
    var srcimg = $(this).parent().parent().children(".car-view").children(".car-model").children("img");
    var atrimg = srcimg.attr("src")
    if (atrimg == "assets/vehicule1-0.png"){
        srcimg.attr("src","assets/vehicule1-1.png")
    }else if (atrimg == "assets/vehicule1-1.png"){
        srcimg.attr("src","assets/vehicule1-2.png")
    }else if (atrimg == "assets/vehicule1-2.png"){
        srcimg.attr("src","assets/vehicule1-3.png")
    }else if (atrimg == "assets/vehicule1-3.png"){
        srcimg.attr("src","assets/vehicule1-0.png")
    }else if (atrimg == "assets/vehicule2-0.png"){
        srcimg.attr("src","assets/vehicule2-1.png")
    }else if (atrimg == "assets/vehicule2-1.png"){
        srcimg.attr("src","assets/vehicule2-2.png")
    }else if (atrimg == "assets/vehicule2-2.png"){
        srcimg.attr("src","assets/vehicule2-3.png")
    }else if (atrimg == "assets/vehicule2-3.png"){
        srcimg.attr("src","assets/vehicule2-0.png")
    }else if (atrimg == "assets/vehicule3-0.png"){
        srcimg.attr("src","assets/vehicule3-1.png")
    }else if (atrimg == "assets/vehicule3-1.png"){
        srcimg.attr("src","assets/vehicule3-2.png")
    }else if (atrimg == "assets/vehicule3-2.png"){
        srcimg.attr("src","assets/vehicule3-3.png")
    }else if (atrimg == "assets/vehicule3-3.png"){
        srcimg.attr("src","assets/vehicule3-0.png")
    }else if (atrimg == "assets/vehicule4-0.png"){
        srcimg.attr("src","assets/vehicule4-1.png")
    }else if (atrimg == "assets/vehicule4-1.png"){
        srcimg.attr("src","assets/vehicule4-2.png")
    }else if (atrimg == "assets/vehicule4-2.png"){
        srcimg.attr("src","assets/vehicule4-3.png")
    }else if (atrimg == "assets/vehicule4-3.png"){
        srcimg.attr("src","assets/vehicule4-0.png")
    }
})

ScrollReveal().reveal('.scrolling', { delay: 500 });
// rafraichir totalresult

