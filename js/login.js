const form = document.getElementById('form');
var id_user;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const no_cuenta = document.getElementById('no_cuenta').value;
    const nip = document.getElementById('nip').value;

    
    fetch('//127.0.0.1:4000/api/users')
    .then(res => res.json())
    .then(json => {

        console.log(nip)

        for(var i = 0; i < json.length; i++){
            if(json[i].c_personal == no_cuenta && json[i].nip == nip){
                id_user = json[i].id;
                //redirect to home
                //save id in local storage
                localStorage.setItem('id', id_user);
                localStorage.setItem('no_cuenta', no_cuenta);
                window.location.href = './home.html';
                break;
            }
            else if(json[i].c_empresarial == no_cuenta && json[i].nip_e == nip){
                id_user = json[i].id;
                localStorage.setItem('id', id_user);
                localStorage.setItem('no_cuenta', no_cuenta);
                window.location.href = './home.html';
                break;
            }else if(i==json.length-1){
                const error = document.getElementById('error');
                error.innerHTML = `<div class="alert alert-danger" role="alert">
                                    <strong>Ups!</strong> Revisa las credenciales!.
                                    </div>`;
            }
        }

    });

    
});


