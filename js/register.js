const form = document.getElementById('form');
var id;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const prueba = document.getElementById('prueba');
    const rfc = document.getElementById('rfc').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const cuenta_select = document.getElementById('cuenta_select');
    const nip = document.getElementById('nip').value;
    const tipo_cuenta = cuenta_select.options[cuenta_select.selectedIndex].value;

    console.log(rfc, first_name, last_name, nip, tipo_cuenta);

    if (rfc.length != 0 || first_name.length != 0 || last_name.length != 0 || tipo_cuenta != '') {
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

        fetch('http://127.0.0.1:4000/api/users/rfc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rfc: rfc
            })
        })
            .then(res => res.json())
            .then(json => {

                console.log(json)

                id = json[0].id;
                console.log(id)

                if (tipo_cuenta == 'Personal') {
                    fetch(`http://127.0.0.1:4000/api/users/personal/${id}`)
                        .then(res => res.json())
                        .then(json => {
                            console.log(json)
                            
                            prueba.innerHTML = `Tu numero de cuenta es ${json[0].c_personal}`;
        
                        })
        
        
        
                }

            })


        
    }
});



