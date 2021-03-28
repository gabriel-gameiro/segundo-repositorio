var votacao = document.getElementById("corpoVotacao")

function Contador(props) {
    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
        console.log(numero);
    }

    function subtrair() {
        setNumero(numero - 1);
        console.log(numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <img style={{width: 100+'px'}} src={props.img}></img>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no melhor achocolatado!</h1>
            <Contador titulo="Nescau" img="https://a-static.mlcdn.com.br/1500x1500/achocolatado-em-po-400g-nescau-nestle/lepok1/90702/927ac90c2ed26f6e8912fdd22d9e35db.jpg" />
            <Contador titulo="Toddy" img="https://cd.shoppub.com.br/cenourao/media/cache/f9/83/f983609e7c6e99f39723dfc41ec984c0.jpg"/>
            <Contador titulo="Nesquik" img="https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/1/6/1629000.jpg"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), votacao);
