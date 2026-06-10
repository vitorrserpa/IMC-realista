function calculateIMC() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    let height = parseFloat(document.getElementById("heightInput").value);

    // Se a altura for maior que 3, considera que foi digitada em cm
    if (height > 3) {
        height = height / 100;
    }

    const imc = weight / (height * height);

    const imcMessage = document.getElementById("imcMessage");
    imcMessage.innerHTML = "Seu IMC é: " + imc.toFixed(2);


    const classification = document.getElementById("classificationMessage");
    if (imc < 18.5) {
    classificationMessage.innerHTML = "Caralho, irmão! Quer voar porra? Vai fazer alguma coisa filha da puta!";
    } else if (imc >= 18.5 && imc < 25) {
    classificationMessage.innerHTML = "Pelo menos isso tu fez direito, né?";
    } else if (imc >= 25 && imc < 30) {
    classificationMessage.innerHTML = "Porra, num fode. Tá ficando gordo já.";
    } else if (imc >= 30 && imc < 35) {
    classificationMessage.innerHTML = "Eu se fosse você desistia dessa vida de merda, uma baleia dessas não tem futuro, não tem nada pra fazer, só morrer mesmo.TREINAAAAAA.";
    } else if (imc >= 35 && imc < 40) {
    classificationMessage.innerHTML = "Num vou te falar mais nada, tu já tá na merda, já sabe o que tem que fazer, não tem mais nada pra falar, só se foder mesmo.";
    } else {
    classificationMessage.innerHTML = "Você já tá morto, desgraçado! Procura um médico urgente!";
    }
}