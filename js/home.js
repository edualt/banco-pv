//get id located in local storage
const id = localStorage.getItem('id');
const c_personal = localStorage.getItem('c_personal');
const c_empresarial = localStorage.getItem('c_empresarial');
const saldo = localStorage.getItem('saldo');

const psaldo = document.getElementById('psaldo');

// const welcome = document.getElementById('welcome');

console.log(id)

//evalue first 4 digit of c_personal

if(c_personal.substring(0,4) === '4152'){
    fetch(`http://127.0.0.1:4000/api/users/personal/${id}`)
    .then(res => res.json())
    .then(json => {
    console.log(json);

    welcome.innerHTML = `Welcome ${json[0].first_name}`;
    psaldo.innerHTML += '$' + saldo;
})
}else if(c_empresarial.substring(0,4) === '3142'){
    fetch(`http://127.0.0.1:4000/api/users/empresarial/${id}`)
    .then(res => res.json())
    .then(json => {
    console.log(json);

    welcome.innerHTML = `Welcome ${json[0].first_name}`;
    psaldo.innerHTML += '$' + saldo;
})
}




