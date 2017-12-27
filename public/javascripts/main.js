/**
 * Created by User on 16.06.2016.
 */


// прелоудер
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');   
});

//спрятать подменю музыканты выпадающее меню
$(document).ready(function(){
    if (window.screen.width > '767') {
    $('.sm_menu').hide(); 
    }
});



/* заархивировано, до набора материала в видео и отзывы...
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})*/

// установка dropdown
$(document).ready(function(){
	$('ul.nav > li').hover(function() {
	    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
			}, 
		function() {
	    	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	})
});

//спрятать подменю музыканты выпадающее меню
$(document).ready(function(){
    $('#show_menu').hover(function() {
        $('.blist').hide(); 
    })
});

// при наведении на музыканты выпадающее меню
$(document).ready(function(){
    $('#show_rmenu').hover(function() {
        $(this).find('.blist').stop(true, true).delay(500).fadeIn();
            }, 
        function() {
            $(this).find('.blist').stop(true, true).delay(500).fadeOut();
    })
});

// показать подсписок в музыканты и dj при малом размере экрана
(function() {
    if (window.screen.width < '420') {
        $('.den_zubin3').show(); 
        $('.den_zubin4').hide(); 
    }
})();


// показать подсписок в музыканты и dj при малом размере экрана
function showMenu() {
    var pir = document.getElementsByClassName('slist')[0];
    if (window.screen.width < '769') {
        pir.classList.remove('slist');
        pir.classList.add('xlist');
    console.log('идет');
    }
};


// анимация слева в контакте
(function(){
    var img = document.getElementsByClassName('dzf')[0];
    if (img) {
    var imgArray = ['/images/dz26.png', '/images/dz23.png', '/images/dz28.png'];
    console.log(img);
    var count = 0;  
    function getAction (){
        img.setAttribute('src', imgArray[count]);
        img.classList.add('animated', 'slideInLeft');
        setTimeout(function(){
            img.classList.remove('animated', 'slideInLeft')
            img.classList.add('animated', 'zoomOut');
        }, 4000);
        count++;
    };
    function getChange(){
        getAction();
        setInterval(function(){
            if(count < imgArray.length){
                getAction();
            }else{
                count = 0;
                getAction();
            };          
        }, 4500);
    };
    setTimeout(getChange, 0000);
	}
})();


// анимация справа в контакте
(function(){
    var img = document.getElementsByClassName('dzf1')[0];
    if (img) {
    var imgArray = ['/images/dz22.png', '/images/dz27.png', '/images/dz24.png'];
    console.log(img);
    var count = 0;  
    function getAction (){
        img.setAttribute('src', imgArray[count]);
        img.classList.add('animated', 'slideInRight');
        setTimeout(function(){
            img.classList.remove('animated', 'slideInRight')
            img.classList.add('animated', 'zoomOut');
        }, 4000);
        count++;
    };
    function getChange(){
        getAction();
        setInterval(function(){
            if(count < imgArray.length){
                getAction();
            }else{
                count = 0;
                getAction();
            };          
        }, 4500);
    };
    setTimeout(getChange, 0000);
    }
})();

/*
['/images/dz4.png', '/images/dz5.png', '/images/dz6.png'];*/