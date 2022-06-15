//get id located in local storage
const id = localStorage.getItem('id');
const no_cuenta = localStorage.getItem('no_cuenta');

const psaldo = document.getElementById('psaldo');

// const welcome = document.getElementById('welcome');

console.log(id)
console.log(no_cuenta)

//evalue first 4 digit of c_personal

if(no_cuenta.substring(0,4) === '4152'){
    fetch(`http://127.0.0.1:4000/api/users/personal/${id}`)
    .then(res => res.json())
    .then(json => {
    console.log(json);

    for(var i = 0; i < json.length; i++){
        if(json[i].c_personal == no_cuenta){
            welcome.innerHTML = `Welcome ${json[i].first_name} <a href="index.html" title="Cerrar sesion"> <img src="icons/box-arrow-left.svg" ></a>`;
            psaldo.innerHTML += '$' + json[i].saldo;
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
                welcome.innerHTML = `Welcome ${json[i].first_name} <a href="index.html" title="Cerrar sesion"> <img src="icons/box-arrow-left.svg" ></a>`;
                psaldo.innerHTML += '$' + json[i].saldo;
            }
        }
        
})
}




