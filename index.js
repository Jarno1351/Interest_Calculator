const submitButton = document.getElementById(`submit`);
const output = document.getElementById(`total`)

submitButton.onclick = function(){
    const principal = document.getElementById(`principal`);
    const rate = document.getElementById(`interest`);
    const year = document.getElementById(`year`);

    const rates = Number(rate.value) / 100;
    const principals = Number(principal.value);
    const years = Number(year.value);
    
    if(rates < 0 || Number.isNaN(rates) || years<0 || Number.isNaN(years) || principals < 0 || Number.isNaN(principals)){
        const total = 0
        window.alert("Cannot pass a negative number!")
        output.textContent = total.toLocaleString(undefined, {style: "currency", currency: "PHP"})
    }
    else{
        const total = principals*(Math.pow( ( 1 + (rates/1)), 1*years))
        output.textContent = total.toLocaleString(undefined, {style: "currency", currency: "PHP"})
    }
    
    
   
    


}