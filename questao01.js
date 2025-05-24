const contarParesn= (n, x) =>{
    n = 10;
    for (x = 0; x <= n; x++){
        if(x % 2 ==0){
            console.log(x + "é Par");            
        }else{
            console.log(x + "é Impar");
        }
    }
}
contarParesn();
