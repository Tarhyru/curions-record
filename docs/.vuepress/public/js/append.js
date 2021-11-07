function waitTool(key) {
    return new Promise(res => {
        if (window[key]) {
            res();
            return;
        }
        let timer = setInterval(() => {
            if (window[key]) {
                clearInterval(timer);
                timer = null;
                res();
            }
        }, 300);
    });
}

waitTool('Hammer').then(() => {
    const { getGuideText } = window.Hammer;
    const textContent = document.querySelector('#guide-text');
    getGuideText().then(text => {
        textContent.innerText = text;
    });
});
