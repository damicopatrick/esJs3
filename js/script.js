function inputEuro(){
    let numeroEuro = document.getElementById("numeroEuro").value;
    let dollaro, sterlina, yen;
    numero = parseFloat(numeroEuro);
    dollaro=parseFloat(dollaro);
    sterlina=parseFloat(sterlina);
    yen = parseFloat(yen);
    dollaro = numeroEuro * 1.16;
    sterlina = numeroEuro * 0.87;
    yen = numeroEuro * 178.16;
    document.getElementById(valutaUSA).innerText = dollaro.toFixed(2);
    document.getElementById(valutaUK).innerText = sterlina.toFixed(2);
    document.getElementById(valutaJPN).innerText = yen.toFixed(2);
}