var amount = 0;

function sumAmount(n, id) {
    amount += n;
    document.getElementById(`${id}`).innerHTML = 'Total: $' + amount;
    console.log('denro de sumAmount: ' + amount);
}

function clearAmount(id) {
    amount = 0;
    document.getElementById(`${id}`).innerHTML = 'Total: $0';
    console.log('denro de clearAmount: ' + amount);
}

function clearAmountDiv(id) {
    document.getElementById(`${id}`).innerHTML = 'Total: $0';
    console.log('denro de clearAmountDiv: ' + amount);
}

function openModal(id) {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById(`${id}`).style.display = "block"
    document.getElementById(`${id}`).classList.add("show")
}

function closeModal(id) {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById(`${id}`).style.display = "none"
    document.getElementById(`${id}`).classList.remove("show")
}

//button to transfer
const finish = document.getElementById('finish');

finish.addEventListener('click', function () {
    const id = localStorage.getItem('id');
    const no_cuenta = localStorage.getItem('no_cuenta');
    const dest_account = document.getElementById('dest_account').value;

    const psaldo = document.getElementById('psaldo');
    console.log(amount)

    fetch('http://127.0.0.1:4000/api/users/transfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cuenta_origen: no_cuenta,
            cuenta_destino: dest_account,
            monto: amount
        })
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);

            //evalue json message
            if (json.message === 'Cuenta destino no existe') {
                openModal('accountNotFound');
            }
            else if (json.message === 'Saldo insuficiente') {
                openModal('insufficientBalance');
            }
            else if (json.message === 'No se puede transferir a la misma cuenta') {
                openModal('sameAccount');
            }
        })


    console.log(id, no_cuenta, amount);
});

//button to transfer
const deposit = document.getElementById('deposit');

var timer;

function depositTimer() {
    timer = setTimeout(function () {
        closeModal('ingreso');
        fetch('http://127.0.0.1:4000/api/users/withdraw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cuenta_origen: no_cuenta,
                monto: amount
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })

            openModal('timeOut')
    }, 10000);
}

function stopTimer(){
    clearTimeout(timer);
}



deposit.addEventListener('click', function () {
    const cuenta_origen = localStorage.getItem('no_cuenta');

    fetch('http://127.0.0.1:4000/api/users/deposit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cuenta_origen: cuenta_origen,
            monto: amount
        })
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            if (json.message === 'Deposito exitoso') {
                openModal('ingreso');
                
                const ingreso_bton = document.getElementById('ingreso_bton');
                ingreso_bton.addEventListener('click', function () {
                    closeModal('ingreso');
                    stopTimer();
                });
            }
        })
});

//withdraw button
const withdraw_btn = document.getElementById('withdraw_btn');

withdraw_btn.addEventListener('click', function () {
    const cuenta_origen = localStorage.getItem('no_cuenta');

    fetch('http://127.0.0.1:4000/api/users/withdraw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cuenta_origen: cuenta_origen,
            monto: amount
        })
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            if (json.message === 'Saldo insuficiente') {
                openModal('insufficientBalance');
            }
            else if (json.message === 'Retiro exitoso') {
                openModal('successful');
            }
        })
});

//button to get saldo
const saldo_btn = document.getElementById('saldo_btn');

saldo_btn.addEventListener('click', function () {

    if(no_cuenta.substring(0,4) === '4152'){
        fetch(`http://127.0.0.1:4000/api/users/personal/${id}`)
        .then(res => res.json())
        .then(json => {
        console.log(json);
    
        for(var i = 0; i < json.length; i++){
            if(json[i].c_personal == no_cuenta){
                text_saldo.innerHTML = 'Saldo: $' + json[i].saldo;
            }
        }
    
        
    })
    }else if(no_cuenta.substring(0,4) === '3142'){
        fetch(`http://127.0.0.1:4000/api/users/empresarial/${id}`)
        .then(res => res.json())
        .then(json => {
        console.log(json);
    
            for(var i = 0; i < json.length; i++){
                if(json[i].c_empresarial == no_cuenta){
                    text_saldo.innerHTML = 'Saldo: $' + json[i].saldo;
                }
            }
            
    })
    }
});