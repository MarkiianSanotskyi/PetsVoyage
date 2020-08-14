$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage',  '8thpage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 1000,
        //afterLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        //    console.log("1index: " + index);
        //    if (index == 1 || index == 2 || index == 3) {
        //        console.log("1-2-3 slides");
        //    }
        //}
        onLeave: function (index, nextIndex, direction) {
        //afterLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            //var nextIndex = index;
            var introSlides = $('.intro-slides');

            console.log("1index: " + nextIndex);
            console.log(introSlides);


            if (nextIndex == 1 || nextIndex == 2 || nextIndex == 3) {

                if (!introSlides.hasClass('intro-active')) {
                    introSlides.addClass('intro-active');
                    console.log(introSlides);
                    console.log("added active");
                }

                $('.intro-skip-scroll').show();
            }
            else {
                if (introSlides.hasClass('intro-active')) {
                    introSlides.removeClass('intro-active');
                    console.log("removed active");
                }
                $('.intro-skip-scroll').hide();
            }

            $('.section_menu li').removeClass('active');

            console.log('switching menu nav');
            console.log('.' + nextIndex + 'thpage-menu-link');

            switch (nextIndex) {
                case 4:
                    $('.' + nextIndex + 'thpage-menu-link').addClass('active');
                    break
                case 5:
                    $('.' + nextIndex + 'thpage-menu-link').addClass('active');
                    break
                case 6:
                    $('.' + nextIndex + 'thpage-menu-link').addClass('active');
                    break
                case 7:
                    $('.' + nextIndex + 'thpage-menu-link').addClass('active');
                    break
                default:
                    $('.1thpage-menu-link').addClass('active');
                    break
            }


            console.log(introSlides);
            console.log("added active");
        }
    });

    $.Placeholder.init({ color: "#002e3d" });


    $("#sidenav_toggle, .second-menu #sidenav_close").click(function () {
        $("body ").toggleClass("menu-open"); return false;
    });

    $(".menu-tarif-request, .tarif-link, #download_link--mobile, .rate-request #sidenav_close").click(function () {
        $("body ").toggleClass("request-open"); return false;
    });

    $("#view-more-documents-id, .more-documents-box #sidenav_close").click(function () {
        $("body ").toggleClass("more-documents"); return false;
    });

    //$("#sidenav_toggle, #sidenav_close").click(function () {
    //    $("body ").toggleClass("menu-open"); return false;
    //});

    //$("#download_link--mobile").click(function () {
    //    $("body ").toggleClass("request-open"); return false;
    //});

    //$("#view-more-documents-id").click(function () {
    //    $("body ").toggleClass("more-documents"); return false;
    //});

    $('input, select').styler({
        selectSearch: true
    });


    //$('.intro').sly({
    //    slidee: "ul",
    //    horizontal: 1,
    //    mouseDragging: 1,
    //    touchDragging: 1,
    //    itemNav: 'basic',
    //    smart: 1,
    //    activateOn: 'click',
    //    releaseSwing: 1,
    //    activatePageOn: 'click',
    //    speed: 300,
    //    elasticBounds: 1,
    //    easing: 'easeOutExpo',
    //    dragHandle: 1,
    //    dynamicHandle: 1,
    //    clickBar: 1
    //});

    $('.sly-scroll').sly({
        horizontal: 1,
        mouseDragging: 1,
        touchDragging: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        releaseSwing: 1,
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    });



    var picker = new Pikaday(
    {
        field: document.getElementById('requestFrom'),
        firstDay: 1,
        minDate: new Date(2000, 0, 1),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000, 2020],
        format: 'MM/DD/YYYY'
    });

    var picker2 = new Pikaday(
    {
        field: document.getElementById('requestTo'),
        firstDay: 1,
        minDate: new Date(2000, 0, 1),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000, 2020],
        format: 'MM/DD/YYYY'
    });

    $('.selection-animals li').click(function () {
        $('.selection-animals li').removeClass('active');
        $(this).addClass('active');
    });

    $('.intro-skip-scroll').click(function () {
        console.log('$.fn.fullpage.moveTo(3);');
        $.fn.fullpage.moveTo(4);
    });

    $('.section_menu a').click(function () {
        console.log('sidenav_menu');
        $("body").removeClass("menu-open");
        return true;
    });

   
    //console.log(picker);
    //$(".request-date").datepicker();


    //$('[data-menuanchor="firstPage"],data-menuanchor="secondPage"],data-menuanchor="3rdPage"]').css('color', 'red');
    //$('[data-menuanchor="firstPage"],data-menuanchor="secondPage"],data-menuanchor="3rdPage"]').hide();

    //$('[data-menuanchor="firstPage"],data-menuanchor="secondPage"],data-menuanchor="3rdPage"]').click(function(){

    //});		

});

$(function () {
      $(".rslides").responsiveSlides({
		manualControls: '#slider-pager',  
        speed: 800,
		timeout: 8000,
		nav:false,
		pager:true,
		
});
});

