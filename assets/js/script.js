function removeChords(line) {
    const chordPattern2 = /^\s*\[/
    // Expressão regular para capturar linhas de notas musicais que começam com "+"
    const chordPattern = /^\s*\+/

    // Se a linha começar com "+", remova a linha inteira
    if (chordPattern.test(line) || chordPattern2.test(line)) {
        return "";
    }

    // Se não, retorne a linha como está
    return line;
}

function interleaveLyrics(lyricsPt, lyricsEn) {
    let interleavedLyrics = [];
    let isLastLineEmpty = false; // Flag para acompanhar se a última linha foi vazia

    for (let i = 0; i < lyricsPt.length; i++) {
        const ptLine = removeChords(lyricsPt[i]);
        const enLine = removeChords(lyricsEn[i]);

        const isEmpty = ptLine === "" && enLine === "";
        if (!isEmpty) {
            if (isLastLineEmpty) {
                interleavedLyrics.push(""); // Adicione uma linha em branco entre as linhas da letra.
            }
            interleavedLyrics.push(ptLine + "\r");
            interleavedLyrics.push(" " + "\r" + enLine); // Adicione um espaço e uma quebra de linha.
            isLastLineEmpty = false;
        } else {
            isLastLineEmpty = true;
        }
    }
    return interleavedLyrics.join("\n");
}

document.getElementById("interleaveButton").addEventListener("click", function() {
    const portugueseText = document.getElementById("portugueseTextArea").value;
    const englishText = document.getElementById("englishTextArea").value;
//dar quebra de linha e um espaço no inicio da linha inglesa
    const portugueseLines = portugueseText.split("\n")
    const englishLines = englishText.split("\n");

    // Remova as notas musicais de cada linha antes de intercalar
    const portugueseCleaned = portugueseLines.map(removeChords);
    const englishCleaned = englishLines.map(removeChords);

    const interleavedText = interleaveLyrics(portugueseCleaned, englishCleaned,);
    const resultDiv = document.getElementById("result");

    
    
    // Limpando a div de resultados antes de exibir o novo resultado
    resultDiv.innerHTML = "";
    
    // Criando um novo elemento de texto para mostrar o resultado
    const resultText = document.createElement("pre");
    if (interleavedText === "") {
        resultText.textContent = "Não há texto para intercalar.";
    }
    else
    resultText.textContent = "intercalate:\n\n" + interleavedText;
    
    // Adicionando o elemento à div de resultados
    resultDiv.appendChild(resultText);
});
    //Limpar campo result
    document.getElementById("clearButton").addEventListener("click", function () {
        document.getElementById("result").innerHTML = "";
    });
    //Limpar campos input
document.getElementById("clearButtonInput").addEventListener("click", function () {
    document.getElementById("portugueseTextArea").value = "";
    document.getElementById("englishTextArea").value = "";
});

    //Copiar conteudo da div result
var copyTextareaBtn = document.getElementById('copyButton')

    
    copyTextareaBtn.addEventListener('click', function (event) {
        const resultText = document.querySelector("#result pre"); // Selecionar o elemento de texto dentro da div
        const textToCopy = resultText.textContent; // Obter o conteúdo do elemento de texto
        navigator.clipboard.writeText(textToCopy).then(function () {
            console.log('Async: Copying to lyrics was successful!');
        }).catch(function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        
    });
