var inputs = document.getElementById('inputs');

class Usuario{
    constructor(nombre, pin, tipoDeCuenta){
        this.nombre = nombre;
        this.tipoDeCuenta = tipoDeCuenta;
        this.pin = pin;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getPin(){
        return this.pin;
    }

    getTipoDeCuenta(){
        return this.tipoDeCuenta;
    }
}

inputs.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = new Usuario('Eduardo', '1234', 'Personal');
    let user2 = new Usuario('Edualt', '2456', 'Empresarial');
    let user3 = new Usuario('Sebastian', '1245', 'Personal');
    let user4 = new Usuario('Lalo', '5122', 'Empresarial');
    let user5 = new Usuario('Juan', '1244', 'Personal');

    let values = e.target.elements;
    let user_pin = '';

    for(let i = 0; i < values.length; i++) {
        user_pin += values[i].value;
    }

    let users = [user, user2, user3, user4, user5];

    //validar pin de usuario y tipo de cuenta (personal o empresarial)
    for(let i = 0; i < users.length; i++) {
        if(user_pin == users[i].getPin() && users[i].getTipoDeCuenta() == 'Personal'){
            window.location.href = './personal.html';
            break;
        }
        else if(user_pin == users[i].getPin() && users[i].getTipoDeCuenta() == 'Empresarial'){
            window.location.href = './empresarial.html';
            break;
        }
        //si ningun usuario coincide con el pin ingresado se muestra un mensaje de error
        else if(i == users.length - 1){
            console.log('Usuario no registrado');
        }
    }

});