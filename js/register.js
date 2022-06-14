const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rfc = document.getElementById('rfc').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const cuenta_select = document.getElementById('cuenta_select');
    const nip = document.getElementById('nip').value;
    const tipo_cuenta = cuenta_select.options[cuenta_select.selectedIndex].value;

    console.log(rfc, first_name, last_name, nip, tipo_cuenta);

    if (rfc.length != 0 || first_name.length != 0 || last_name.length != 0 || tipo_cuenta == '') {
        fetch('http://127.0.0.1:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rfc: rfc,
                first_name: first_name,
                last_name: last_name,
                nip: nip,
                tipo_cuenta: tipo_cuenta
            })

        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            }
        )
    }
});



