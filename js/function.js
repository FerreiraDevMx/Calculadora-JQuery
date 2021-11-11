$(function(){

    var tela = '';
    var valor;
    var num = Array(['']);
    var operation = '';
    var result;
    var screen = $('.result');
    var i = 0;
    var qtddCarac;
    
    
    $('.keyboard-key').click(function(){

        valor = $(this).text();
        qtddCarac = tela.length;
        
        if(qtddCarac < 14 && valor.match(/[0-9.]/)){
            tela = tela.concat(valor);
            screen.text(tela);
        }
    })

    $('.back').click(function(){
        tela = tela.slice(0,(qtddCarac - 1));
        screen.text(tela);
    })

    $('.c').click(function(){
        tela = '';
        result = '';
        i = '';
        num[i] = 0;
        screen.text(tela);
        operation = '';
    })

    function validadeNumbers(){
        if(num[i] == ''){
            num[i] = parseFloat(tela);
            tela = '';
            result = num[i];
            screen.text(result);
            
        }
        else{
            i++;
            num[i] = parseFloat(tela);
            tela = '';
        }
    }

    function operationsClick(){
        if(isNaN(num[i])){
            screen.text(result);
        }
        else{
        if(operation == 'sum'){
            result = result + num[i];
            screen.text(result);
        }
        else if(operation == 'sub'){
            result = result - num[i];
            screen.text(result);
        }
        else if(operation == 'per'){
            result = (result /100) * num[i];
            screen.text(result);
        }
        else if(operation == 'mult'){
            result = result * num[i];
            screen.text(result);
        }
        else if(operation == 'div'){
            result = result / num[i];
            screen.text(result);
        }
        }
    }

    $('.sum').click(function(){
        validadeNumbers();
        operationsClick();
        operation = 'sum';
    })

    $('.subtraction').click(function(){
        validadeNumbers();
        operationsClick();
        operation = 'sub';
    })

    $('.percent').click(function(){
        validadeNumbers();
        operationsClick();
        operation = 'per';
    })

    $('.multiplication').click(function(){
        validadeNumbers();
        operationsClick();
        operation = 'mult';
    })

    $('.division').click(function(){
        validadeNumbers();
        operationsClick();
        operation = 'div';
    })

    $('.equal').click(function(){
        validadeNumbers();
        operationsClick();
    })

})