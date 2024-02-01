var elevadorandar=[];
var status=0;
console.log(" elevador parado no "+ status);

function botoes(chamado){ // funcao verifica com o apertar do botao para subir ou descer
    var conta;
    var time;
    conta=status;
    conta=chamado-conta;
    if(conta==0){
         setTimeout(function(){
            abrirportas(elevadorandar);
        }, 3000);
    }
    time=Math.abs(conta*1000); // contabilizando a distancia em tempo.
    if(conta<0){
        setTimeout(function(){ 
            descer(chamado);
        }, time);
    }
    else{
        setTimeout(function(){ 
            subir(chamado);
         }, time);
    }
}
function subir(chamado){// funcao que sobe
    var subir = chamado - status;// diferenca de quantos andares
        for (var i = 0; i < subir; i++) {               
        status++;
        elevadorAnda(status,chamado,i);       
        }    
}
function descer(chamado){// funcao que desce
    var descer = chamado - status;  
    descer= Math.abs(descer);// valor absoluto para saber quandos andares ira passar
    for (var i = 0; i < descer; i++) {           
        status--;
         elevadorAnda(status,chamado,i);      
        }
}
function elevadorAnda(status,ir,i){// funcao que anda   
   altera(); // alterando o status do array com as imagens de elevador no andar    
    var durante=status;
    durante++;
   // chamar função que altera os andares do elevador com settime
}
function altera() {// alterando o status do andar onde o elevador esta
    for(i=0;i<=5;i++){
        if(i==status){
                elevadorandar[i]=1;
        }
        else{
            elevadorandar[i]=0;
        }
    }
   /* altera as imagens trocando as posicoes*/
    document.getElementById('T').src = "img_0"+elevadorandar[0]+".jpg";
    document.getElementById('um').src ="img_0"+elevadorandar[1]+".jpg";
    document.getElementById('dois').src ="img_0"+elevadorandar[2]+".jpg";
    document.getElementById('tres').src = "img_0"+elevadorandar[3]+".jpg";
    document.getElementById('quatro').src = "img_0"+elevadorandar[4]+".jpg";
    document.getElementById('cinco').src = "img_0"+elevadorandar[5]+".jpg";
    setTimeout(function(){
        abrirportas(elevadorandar);
    }, 3000);

}
function abrirportas(elevadorandar) { // funcao que abre a porta e fecha com o acionamento do botao
    for(i=0;i<=5;i++){
        if(i==status){ 
                elevadorandar[i]=2;          
        }
        else{
            elevadorandar[i]=0;
        }
    }
    document.getElementById('T').src = "img_0"+elevadorandar[0]+".jpg";
    document.getElementById('um').src ="img_0"+elevadorandar[1]+".jpg";
    document.getElementById('dois').src ="img_0"+elevadorandar[2]+".jpg";
    document.getElementById('tres').src = "img_0"+elevadorandar[3]+".jpg";
    document.getElementById('quatro').src = "img_0"+elevadorandar[4]+".jpg";
    document.getElementById('cinco').src = "img_0"+elevadorandar[5]+".jpg";
    setTimeout(function(){ 
            for(i=0;i<=5;i++){
                if(i==status){
                elevadorandar[i]=1;          
                }
                else{
                elevadorandar[i]=0;
                }
            }
            document.getElementById('T').src = "img_0"+elevadorandar[0]+".jpg";
            document.getElementById('um').src ="img_0"+elevadorandar[1]+".jpg";
            document.getElementById('dois').src ="img_0"+elevadorandar[2]+".jpg";
            document.getElementById('tres').src = "img_0"+elevadorandar[3]+".jpg";
            document.getElementById('quatro').src = "img_0"+elevadorandar[4]+".jpg";
            document.getElementById('cinco').src = "img_0"+elevadorandar[5]+".jpg";
    }, 5000);
}