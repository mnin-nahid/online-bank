let mainBalance = parseFloat(document.getElementById('main-balance').innerText);
//handel deposit section
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    // console.log(depositAmount);
    if(depositAmount > 1){
        const priviusDepositAmount = parseInt(document.getElementById('privius-diposit-amound').innerText);
        // console.log(priviusDepositAmount);
        document.getElementById('privius-diposit-amound').innerText = depositAmount + priviusDepositAmount;
        //hendel main balance 
        
        mainBalance = mainBalance + depositAmount;
        document.getElementById('main-balance').innerText = mainBalance;
    }
    else{
        alert("Ammount is not acceptable")
    }
});
//hendel withdrow section
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log("withdrow click")
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if(withdrawAmount > 1){
        const priviusWithdrowAmount = parseFloat(document.getElementById('privius-withdrow-amount').innerText);
        document.getElementById('privius-withdrow-amount').innerText = priviusWithdrowAmount + withdrawAmount;
        //hendel main balance
        mainBalance = mainBalance - withdrawAmount;
        document.getElementById('main-balance').innerText = mainBalance;
    }
    else{
        alert('Amount not acceptable')
    };

    
});