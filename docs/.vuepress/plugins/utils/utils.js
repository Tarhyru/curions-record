// 全局扩展一些函数
export default () => {
    if (typeof window !== 'undefined') {
        (function(window, document) {
            // 用get的方式获取json数据
            function getJson(path) {
                return new Promise(resolve => {
                    fetch(path)
                        .then(async res => {
                            if (res.ok) {
                                try {
                                    let json = await res.json();
                                    resolve(json);
                                    return;
                                } catch (err) {
                                    throw err;
                                }
                            }
                            resolve(null);
                        })
                        .catch(err => {
                            console.warn(err);
                            resolve(null);
                        });
                });
            }

            async function getGuideText() {
                let text = '事有必至，理由固然';
                let listArr = await getJson('/json/guide_1.json');
                if (Array.isArray(listArr)) {
                    let getNum = (listArr.length * Math.random()) | 0;
                    text = listArr[getNum] || text;
                }
                return text;
            }

            window.Hammer = {
                getGuideText
            };
        })(window, document);
    }
};
