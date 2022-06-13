const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rfc = document.getElementById('rfc').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;

    console.log(rfc, first_name, last_name);

    if (rfc.length != 0 || first_name.length != 0 || last_name.length != 0) {
        fetch('http://127.0.0.1:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rfc: rfc,
                first_name: first_name,
                last_name: last_name
            })

        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            }
        )
    }
});



