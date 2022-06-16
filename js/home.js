//get id located in local storage
const id = localStorage.getItem('id');
const no_cuenta = localStorage.getItem('no_cuenta');
const a_number = document.getElementById('a_number');
const psaldo = document.getElementById('psaldo');

// const welcome = document.getElementById('welcome');

console.log(id)
console.log(no_cuenta)


//Consultar saldo
const saldo = localStorage.getItem('saldo');

const text_saldo = document.getElementById('text_saldo');
text_saldo.innerText +='$' + `${saldo}`;

//

if(no_cuenta.substring(0,4) === '4152'){
    fetch(`http://127.0.0.1:4000/api/users/personal/${id}`)
    .then(res => res.json())
    .then(json => {
    console.log(json);

    for(var i = 0; i < json.length; i++){
        if(json[i].c_personal == no_cuenta){
            welcome.innerHTML = `Welcome ${json[i].first_name} <a class="float-end" href="index.html" title="Cerrar sesion"> <img src="icons/box-arrow-left.svg" width="40px" height="50px"></a>`;
            a_number.innerHTML = `${json[i].c_personal}`;
            const saldo = json[i].saldo;
            localStorage.setItem('saldo', saldo);
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
                a_number.innerHTML = `${json[i].c_empresarial}`;
                const saldo = json[i].saldo;
                localStorage.setItem('saldo', saldo);
            }
        }
        
})
}




