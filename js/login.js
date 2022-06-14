const form = document.getElementById('form');
const workspace = document.getElementById('workspace');
var id;
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
                id = json[i].id;
                alert('personal');
                //redirect to home
                //save id in local storage
                localStorage.setItem('id', id);
                localStorage.setItem('c_personal', no_cuenta);
                localStorage.setItem('saldo', json[i].saldo);
                window.location.href = './home.html';
                break;
            }
            else if(json[i].c_empresarial == no_cuenta && json[i].nip_e == nip){
                id = json[i].id;
                localStorage.setItem('id', id);
                localStorage.setItem('c_empresarial', no_cuenta);
                localStorage.setItem('saldo', json[i].saldo);
                window.location.href = './home.html';
                alert('empresarial');
                break;
            }else if(i==json.length-1){
                const error = document.getElementById('error');
                error.innerHTML = `<div class="alert alert-danger" role="alert">
                                    <strong>Ups!</strong> Revisa las credenciales!.
                                    </div>`;
            }
        }

        fetch(`http://127.0.0.1:4000/api/users/${id}`)
        .then(res => res.json())
        .then(json => {

        // workspace.innerHTML = `<div class="p-2" style="background-color: #ffffff;">
        //                             <h1 class="fw-bold" id="welcome">Bienvenido ${json[0].first_name}</h1>

        //                             <hr>

        //                             <div class="d-flex justify-content-center row ">

        //                                 <div class="pb-3">
        //                                     <div class="w-100">
        //                                         <div class="card">
        //                                             <div class="card-body">
        //                                                 <p class="card-text"><h2 class="fw-bold">Mi cuenta</h2> $1,000,000</p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                                 <div class="">
        //                                     <div class="d-flex row">
        //                                         <div class=" col-sm mb-3">
        //                                             <div class="login-btn" role=button>
        //                                                 <p class=""><h2 class="fw-bold">Retirar</h2></p>
        //                                             </div>
        //                                         </div>
        //                                         <div class=" col-sm mb-3">
        //                                             <div class="login-btn" role=button>
        //                                                 <p class=""><h2 class="fw-bold">Depositar</h2></p>
        //                                             </div>
        //                                         </div>
        //                                         <div class=" col-sm mb-3">
        //                                             <div class="login-btn" role="button" id="transferir">
        //                                                 <p class=""><h2 class="fw-bold">Transferir</h2></p>
        //                                             </div>
        //                                         </div>
        //                                     </div>

        //                                 </div>

        //                             </div>
  
        //                         </div>
                                
        //                         `;
        // })
        
        // const transferir = document.getElementById('transferir')

        // transferir.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     workspace.innerHTML = `<div class="p-2" style="background-color: #ffffff;">`;

         });

    });

    
});



export default id;