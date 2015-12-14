(function(){

    'use strict';

    var _scripts = document.getElementsByTagName('script'),
        _script  = _scripts[_scripts.length - 1],
        _src     = _script.getAttribute('src'),
        _page    = _src.match(/(\?|^|&)page=(.*)($|&)/);

    if (_page && _page[2]) {
        alert(encodeURIComponent(_page[2]));
        require(['apps/' + encodeURIComponent(_page[2])]);
    }

}());