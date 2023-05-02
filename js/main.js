hour = new Date().getHours()
if (hour < 6) {
    var hello = "凌晨好";
} else if (hour < 9) {
    var hello = "早上好";
} else if (hour < 12) {
    var hello = "上午好";
} else if (hour < 14) {
    var hello = "中午好";
} else if (hour < 17) {
    var hello = "下午好";
} else if (hour < 19) {
    var hello = "傍晚好";
} else if (hour < 22) {
    var hello = "晚上好";
} else {
    var hello = "夜深了";
}

//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});

window.addEventListener('load', function () {
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");

    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            title: hello,
            message: '欢迎来到STI-LZ官方网站'
        });
    }, 800);
}, false)

$(document).ready(function () {
    $('#bg').attr('src', `./img/background${1 + ~~(Math.random() * 10)}.png`)
});

$("#bookmark").mouseover(function () {
    $("#bookmark").css({
        "background": "rgb(0 0 0 / 25%)",
        'border-radius': '6px',
        "backdrop-filter": "blur(5px)"
    });
}).mouseout(function () {
    $("#bookmark").css({
        "background": "none",
        "border-radius": "6px",
        "backdrop-filter": "none"
    });
});

document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: false,
        message: '抱歉，本站禁用右键啦'
    });
    return false;
}

let styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
let styleTitle2 = `
font-size:12px;\    
color: rgb(244,167,89);
`
let title1 = 'ERA_YES'
let title2 = `
 ______  _____         __     __ ______   _____ 
|  ____||  __ \\     /\\ \\ \\   / /|  ____| / ____|
| |__   | |__) |   /  \\ \\ \\_/ / | |__   | (___  
|  __|  |  _  /   / /\\ \\ \\   /  |  __|   \\___ \\ 
| |____ | | \\ \\  / ____ \\ | |   | |____  ____) |
|______||_|  \\_\\/_/    \\_\\|_|   |______||_____/ 
                                                
                                                \   
`
console.log(`%c${title1} %c${title2}`, styleTitle1, styleTitle2)