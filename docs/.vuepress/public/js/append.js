(function() {
    function waitTool(key) {
        return new Promise((resolve, reject) => {
            if (window[key]) {
                res();
                return;
            }
            let step = 0;
            let timer = null;
            function clearTimer() {
                clearInterval(timer);
                timer = null;
            }

            timer = setInterval(() => {
                if (window[key]) {
                    clearTimer();
                    resolve();
                    return;
                }
                step++;
                if (step > 60) {
                    clearTimer();
                    reject();
                }
            }, 300);
        });
    }

    function setGuideText(text) {
        const textContent = document.querySelector('#guide-text');
        if (textContent) {
            textContent.innerText = text;
        }
    }

    waitTool('Hammer')
        .then(() => {
            const { getGuideText } = window.Hammer;
            getGuideText().then(text => {
                setGuideText(text);
            });
        })
        .catch(err => {
            setGuideText('事有必至，理由固然');
        });
})();
