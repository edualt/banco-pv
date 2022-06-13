//get id located in local storage
const id = localStorage.getItem('id');
const c_personal = localStorage.getItem('c_personal');
const c_empresarial = localStorage.getItem('c_empresarial');
const saldo = localStorage.getItem('saldo');

const psaldo = document.getElementById('psaldo');

// const welcome = document.getElementById('welcome');

console.log(id)


fetch(`http://127.0.0.1:4000/api/users/${id}`)
.then(res => res.json())
.then(json => {
    console.log(json);

    welcome.innerHTML = `Welcome ${json[0].first_name}`;
    psaldo.innerHTML += '$' + saldo;
})


