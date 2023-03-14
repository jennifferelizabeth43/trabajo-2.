class ejercicios{
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    sumaDivisores(num){
        let acu=0
        for(let divisor=1;divisor<num;divisor++){
            if (num % divisor == 0){
                acu=acu+divisor
            }
        }

        return acu
    }
    perfecto(){
        // capturar
        let serie = [6,5,25,24,28]
        let d=document,acud=0
        let num1= parseInt(d.getElementById('num1').value)
        
        acud = this.sumaDivisores(num1)
        if (acud==num1){
            d.getElementById("resp").textContent=`${num1} es Perfecto`    
        }else{
            d.getElementById("resp").textContent=`${num1} No es Perfecto`
        }
        
    }

    mostrarperfecto(){
        let suma= this.n_perfect.reduce((acc,val)=> acc+val)
        document.getElementById("mostrar").textContent= `la suma de los numeros perfecto es: $(suma)`
    }
    isPrimo(num){
        let acu=0,divisor=2,band=1
        while(divisor < num && band == 1){
            if (num % divisor == 0){
                // romper ciclo es cambiar el valor de la bandera
                band=0
            }else{
                divisor=divisor+1
            }
        }
        return band
    }
    primo(){
        let d=document
        let num1= parseInt(d.getElementById('num1').value)
        if (this.isPrimo(num1)==1){
            d.getElementById("resp").textContent=`${num1} es Primo`    
        }else{
            d.getElementById("resp").textContent=`${num1} no es Primo`
        }
    }

    basexpo(base,expon){
        let multi = 1
        for(let i = 0; i < expon; i++){
            multi*=base
        }
        return multi
    }

    baseexpo(){
        let base=parseInt(document.getElementById(`base`).value);
        let expo=parseInt(document.getElementById(`expo`).value);

        let multi = this. basexpo(base, expon)
        document.getElementById("mostrar").textContent=`${base} elevado a ${expo} es: ${multi}`
    }

    serieN(){
        let N = parseInt(document.getElementById(`base`).value)
        this.baseX.push(N)
        document.getElementById("mostrar").textContent=`el numero fue${N}`
    }

    

}
let cal = new ejercicios() 