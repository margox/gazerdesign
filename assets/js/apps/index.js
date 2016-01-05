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

        var navbar = $('#jNavBar');
        var navLinks = navbar.find('.primary-menu a');
        var floorTops = [];

        navLinks.on('click', function() {
            var selector = $(this).attr('data-target');
            scrollToELement(selector);
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
            if (index === -1) {
                navLinks.removeClass('active');
            } else {
                navLinks.removeClass('active').eq(index).addClass('active');
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
            $('html, body').stop().animate({
                scrollTop: offsetTop - 95
            }, 500);
        }

    })();

    // 团队成员起泡切换效果
    var _quotePops = $('#jQuotePops');
    var _avatars = $('#jAvatars');
    _avatars.on('click', 'a', function() {
        _quotePops.attr('data-user', $(this).attr('data-user') || 1);
        return false;
    });

});