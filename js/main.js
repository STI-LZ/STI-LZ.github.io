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
});

window.addEventListener('load', function(){
    setTimeout(function () {
        iziToast.show({
            timeout: 2000,
            icon: false,
            message: 'Welcome to STI-LZ'
        });
    }, 500);
}, false)