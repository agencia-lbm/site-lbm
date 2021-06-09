import styles from './TextoSobreNos.module.scss'

export default function TextoSobreNos() {
    window.onload = function () {
        var div = document.getElementById('titleText');
        var textos = ['Olá e bem-vindo', 'Hello and welcome', 'Bonjour et bienvenue', 'Hallo und willkommen', 'Hola y Bienvenido', '您好，欢迎', 'आपका स्वागत है', 'مرحبا وأهلاً بك', 'Привет и добро пожаловать', 'Ciao e benvenuto'];

        function escrever(str, done) {
            var char = str.split('').reverse();
            var typer = setInterval(function () {
                if (!char.length) {
                    clearInterval(typer);
                    return setTimeout(done, 500); // só para esperar um bocadinho
                }
                var next = char.pop();
                div.innerHTML += next;
            }, 100);
        }

        function limpar(done) {
            var char = div.innerHTML;
            var nr = char.length;
            var typer = setInterval(function () {
                if (nr-- == 0) {
                    clearInterval(typer);
                    return done();
                }
                div.innerHTML = char.slice(0, nr);
            }, 100);
        }

        function rodape(conteudos, el) {
            var atual = -1;
            function prox(cb) {
                if (atual < conteudos.length - 1) atual++;
                else atual = 0;
                var str = conteudos[atual];
                escrever(str, function () {
                    limpar(prox);
                });
            }
            prox(prox);
        }
        rodape(textos);
    };
    return (
        <section className={styles.textoSobreNosWrapper}>
            <div className={styles.leftWrapper}>
                <div className={styles.textBemVindo}>
                    <p id="titleText"></p>
                </div>
                <p>we are <span>lbm.</span></p>
            </div>
            <div className={styles.rightWrapper}>
                <p>Fundada há mais de 3 anos, a LBM é uma agência de publicidade que se destaca pelo seu atendimento em diversas frentes e um repertório criativo que nos diferencia em cada projeto realizado. Acreditamos que o poder das ideias ajudam nossos clientes a crescerem e transformarem seus negócios, possibilitando criar estratégias e fornecer dados em busca de resultados significativos.</p>
            </div>
        </section>
    );
}
