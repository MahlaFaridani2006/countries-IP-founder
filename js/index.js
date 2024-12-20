function AJAXUse() {
    const dataBack = {
        inp: parseInt(document.getElementById('ip').value),
        http: new XMLHttpRequest(),
    };
    const dataUI = {
        text: document.getElementById('user'),
        res: '',
    };
    dataBack.http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            dataUI.res = JSON.parse(this.responseText);
            const foundedIP =dataUI.res.find((item) => {
                return item.ip === dataBack.inp;
            })
            foundedIP ? dataUI.text.innerText = foundedIP.name : dataUI.text.innerText = 'ip not found';
        }
    }
    dataBack.http.open('GET', 'https://mahlafaridani2006.github.io/ip/ip.json', true);
    dataBack.http.send();
}