define(function() {

    function getRandomColor() {

        var colors = [
            'ed5565','da4453','fc6e51',
            'e9573f','ffce54','f6bb42',
            'a0d468','8cc152','48cfad',
            '37bc9b','4fc1e9','3bafda',
            '5d9cec','4a89dc','ac92ec',
            '967adc','ec87c0','d770ad',
            'aab2bd','656d78','434a54'
        ];

        return '#' + colors[getRandomNum(0, colors.length - 1)];
    }
    
    function toRgba (hexColor) {

    	if (typeof hexColor === "undefined" || hexColor === null) {
    		return arguments[2] ? {
                red: 255,
                green: 255,
                blue: 255,
                alpha: arguments[1] || 1
            } : 'rgba(255,255,255,' + arguments[1] || 1 + ')' 
    	}

        var string = hexColor.replace("#","").split(""),
            alpha = arguments[1] || 1,
            red,green,blue;

        if (string.length === 3) {

            red = parseInt(string[0] + string[0], 16);
            green = parseInt(string[1] + string[1], 16);
            blue = parseInt(string[2] + string[2], 16);

        } else if (string.length === 6) {

            red = parseInt(string[0] + string[1], 16);
            green = parseInt(string[2] + string[3], 16);
            blue = parseInt(string[4] + string[5], 16);

        }

        return arguments[2] ? {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        } : 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';

    }
    
    function adjustColor(color, offset) {

        var colorRgba = typeof color === 'object' ? color : toRgba(color, 1, true);
        var red   = colorRgba.hasOwnProperty('red') ? colorRgba.red : 0,
            green = colorRgba.hasOwnProperty('green') ? colorRgba.green : 0,
            blue  = colorRgba.hasOwnProperty('blue') ? colorRgba.blue : 0,
            alpha = colorRgba.hasOwnProperty('alpha') ? colorRgba.alpha : 0;

        red   = red + offset;
        green = green + offset;
        blue  = blue + offset;

        red   > 255 && (red   = 255), red   < 0 && (red   = 0);
        green > 255 && (green = 255), green < 0 && (green = 0);
        blue  > 255 && (blue  = 255), blue  < 0 && (blue  = 0);

        return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';

    }

    function getRandomNum(min,max){
        return Math.floor(min + Math.random() * (max - min));
    }   

    function getMouseDirection(obj, e) {

        var $obj = $(obj),
            w = $obj.width(),
            h = $obj.height(),
            x = (e.pageX - $obj.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
            y = (e.pageY - $obj.offset().top - (h / 2)) * (h > w ? (w / h) : 1);

        return  Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

    }

    return {
        getRandomColor: getRandomColor,
        getRandomNum: getRandomNum,
        getMouseDirection: getMouseDirection,
        toRgba: toRgba,
        adjustColor: adjustColor
    }

});