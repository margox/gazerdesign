({
    appDir:'assets/',
    dir:'../dist/',
    baseUrl: 'js/libs/',
    shim: {
        'owlCarousel': ['jquery']
    },
    paths: {
        'apps': '../apps',
        'imgloaded': 'imagesloaded.pkgd.min',
        'jquery': 'jquery-2.1.4.min',
        'owlCarousel': 'owl.carousel.min'
    },
    modules: [
        {name: '../apps/index'}
    ],
    removeCombined: true,
    noBuildTxt: true,
    fileExclusionRegExp: /^(r|build)\.js|.*\.scss$|.*\.html|scss\$/
})