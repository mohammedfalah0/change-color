
document.getElementById("bi").addEventListener("click",function(){
    this.style.backgroundColor= generatrandomrgb()        
    setInterval(function(){
        document.getElementById("bu").style.backgroundColor= generatrandomrgb()
    } , 2000)
    })
    function generatrandomnumber(){
        return Math.random()*255
    }
    function generatrandomrgb(){
        randomR = generatrandomnumber()
        randomG = generatrandomnumber()
        randomP = generatrandomnumber()
        return `rgb(${randomR}, ${randomG},${randomP})`
    }



