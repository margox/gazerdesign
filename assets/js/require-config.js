require.config({
    baseUrl: '//static.gazer.design/js/libs/',
    shim: {
        'owlCarousel': ['jquery']
    },
    paths: {
        'apps': '../apps',
        'imgloaded': 'imagesloaded.pkgd.min',
        'jquery': 'jquery-2.1.4.min',
        'owlCarousel': 'owl.carousel.min'
    }
});
if (!Function.prototype.bind) {
    require(['html5shiv.min']);
}