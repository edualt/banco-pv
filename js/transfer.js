var amount = 0;

function sumAmount(n) {
    amount += n;
    document.getElementById('amount').innerHTML = amount;
}

const finish = document.getElementById('finish');

finish.addEventListener('click', function() {
    const id = localStorage.getItem('id');
    const no_cuenta = localStorage.getItem('no_cuenta');
    const dest_account = document.getElementById('dest_account').value;

    const psaldo = document.getElementById('psaldo');

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
    })


    console.log(id, no_cuenta, amount);
});
