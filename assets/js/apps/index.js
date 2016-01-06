require(['jquery','owlCarousel','imgloaded'],function() {
    'use strict';

    var wrap = $('html,body');
    
    // 初始化案例轮播
    $('#jWorksSlider').owlCarousel({
        singleItem: true,
        navigation: false
    });

    // 固定顶栏效果
    (function() {

        // return false;

        var navbar = $('#jNavBar');
        var navLinks = navbar.find('.primary-menu a');
        var menuIndicator = $('#jMenuIndicator');
        var autoScolling = false;
        var floorTops = [];

        menuIndicator.css({
            left: navLinks.eq(0).offset().left - 20,
            width: navLinks.eq(0).width() + 70
        });

        navLinks.on('click', function() {

            var selector = $(this).attr('data-target');
            scrollToELement(selector);
            hightLightNavItem(navLinks.index(this));
            navbar.addClass('fixed');

        }).each(function(index) {

            var target = $($(this).attr('data-target'));
            floorTops[index] = [
                target.offset().top - 100,
                target.offset().top + target.innerHeight() - 100
            ];

        });

        $(window).on('scroll', function() {

            var scrollTop = $(this).scrollTop();
            var nomatch = true;

            if (autoScolling) {
                return false;
            }

            adjustNavBar(scrollTop);
            $.each(floorTops, function(index) {
                if (scrollTop > this[0] && scrollTop < this[1]) {
                    hightLightNavItem(index);
                    nomatch = false;
                }
            });

            if (nomatch) {
                hightLightNavItem(-1);
            }

        }).on('load', function() {

            var scrollTop = $(this).scrollTop();
            adjustNavBar(scrollTop);

        });

        function hightLightNavItem(index) {

            var currentItem;

            navLinks.removeClass('active');
            if (index === -1) {
                menuIndicator.stop().animate({
                    opacity: 0
                }, 300);
            } else {
                currentItem = navLinks.removeClass('active').eq(index);
                currentItem.addClass('active');
                menuIndicator.stop().animate({
                    opacity: 1,
                    width: currentItem.width() + 70,
                    left: currentItem.offset().left - 20
                }, 300);
            }

        } 

        function adjustNavBar(scrollTop) {

            if (scrollTop > 395) {
                navbar.addClass('fixed');
            } else {
                navbar.removeClass('fixed');
            }

        }

        function scrollToELement(selector) {

            var offsetTop = 0;
            var distance = 0;

            if (selector) {
                offsetTop = $(selector).offset().top || 0;
            }

            autoScolling = true;
            $('html, body').stop().animate({
                scrollTop: offsetTop - 98
            }, 500, function() {
                autoScolling = false;
            });
        }

    })();

    // 团队成员气泡切换效果
    var _quotePops = $('#jQuotePops');
    var _avatars = $('#jAvatars');

    _avatars.on('click', 'a', function() {
        _quotePops.attr('data-user', $(this).attr('data-user') || 1);
        return false;
    });

});