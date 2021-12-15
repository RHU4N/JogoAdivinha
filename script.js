let numeroSorteado = 0;
let tentativas = 10;


function rodarJogo() {
        while (tentativas>0) {
        let palpite = Number(prompt('Adivinhe o número sorteado entre 0 e 100.'));

            
        
        if (palpite === numeroSorteado) {
            alert('parabens, você ganhou o jogo');
            tentativas = 0; //não perde nenhuma vida
        }
        
        else {
            if (palpite > numeroSorteado) {
                alert('seu palpite foi maior que o número, tente novamente');
            }
            else {
                alert('seu palpite foi menor que o número, tente um número mais alto.');

            }

            if(tentativas === 1){
                alert('O número era: '+numeroSorteado);
            }

           
            tentativas--; //diminui as chances a cada palpite errado
            rodarJogo();
            
        }
        
    }

   
}

function iniciarJogo() {
    numeroSorteado = aleatorio(0, 100);
    rodarJogo();
}

iniciarJogo();