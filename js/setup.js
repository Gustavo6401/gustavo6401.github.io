var informacoes;

function getJson() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file);
    xhr.overrideMimeType = 'application/json';

    xhr.onreadystatechange = function () {
        var status = xhr.status;

        if (status == 200) {
            informacoes = JSON.parse('json/Informacoes.json');

            var info = document.getElementById('#informacoes');

            info.onload() = function () {
                info.insertAdjacentHTML('afterbegin',
                    `<p>E-Mail: <span>${informacoes.email}</span></p><br>` +
                    `<p>Telefone: <span>${informacoes.telefone}</span></p><br>` +
                    `<p>Data de Nascimento: <span>${informacoes.data - nascimento}</span></p><br>` +
                    `<p>Github<a href='${informacoes.github}'>${informacoes.github}</a></p><br>` +
                    `<p>Linkedin<a href='${informacoes.linkedin}'>${informacoes.linkedin}</a></p>`);
            }
        }
    }
    xhr.send(null);               
}