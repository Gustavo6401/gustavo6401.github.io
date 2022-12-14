var informacoes;

fetch("json/Informacoes.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.querySelector('#informacoes')
            .insertAdjacentHTML('afterbegin',
                `<p>E-Mail: <span>${data.email}</span></p><br>` +
                `<p>Telefone: <span>${data.telefone}</span></p><br>` +
                `<p>Data de Nascimento: <span>${data.dataNascimento}</span></p><br>` +
                `<p>Github: <a href='${data.github}'>${data.github}</a></p><br>` +
                `<p>Linkedin: <a href='${data.linkedin}'>${data.linkedin}</a></p>`);

        document.querySelector('#exp-prof')
            .insertAdjacentHTML('afterbegin',
                `<h2>Experiências Profissionais</h2>` +
                `<ul>`);

        data.experienciasProfissionais.forEach(exp => {
            document.querySelector('#exp-prof')
                .insertAdjacentHTML('beforeend',
                    `<li>` +
                        `<h3>${exp.empresa}</h3>` +
                        `<p><strong>${exp.cargo}</strong></p>` +
                        `<h4>${exp.desde}</h4>` +
                    `</li>`);
        });

        document.querySelector('#exp-prof')
            .insertAdjacentHTML('beforeend',
                `</ul>`)
    });