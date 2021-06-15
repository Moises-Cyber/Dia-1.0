var contador = document.querySelector('.badge')
            var but = document.querySelector('.botao')
            but.addEventListener('click', function(){
                var numero = parseInt(contador.textContent) + 1
                contador.textContent = numero
                if(numero == 4){
                    window.alert("Chegou no limite de integrantes!")
                    contador.textContent = 3
                }        
            })