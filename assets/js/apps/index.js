define(function(require, exports, module) {
    'use strict';

    require('jquery');
    require('owlCarousel');
    require('imgloaded');

    // Init Works Slider
    $('#jWorks').owlCarousel({
        singleItem: true,
        navigation: false,
    });

});