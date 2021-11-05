const gradesButtons = [...document.querySelectorAll('.grades_options')];
const grade10H = document.getElementById('grade10H');
const nameUser = document.getElementById("nameUser");
const emailUser = document.getElementById("emailUser");
const passwordUser = document.getElementById("passwordUser");
const ageUser = document.getElementById("ageUser");
const ceduUser = document.getElementById("ceduUser");
const sendInfo = document.getElementById("sendInfo");
const form = document.getElementById('form');
const warnings = document.querySelector('.warnings')
const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const db = window.localStorage
const getNameUser = ()=> {
    let user = nameUser.value;
    return user
    
}

const getEmailUser = ()=>{
    let email = emailUser.value
    if(mailformat.test(email)){
        console.log(`Email valido`)
        return email

    }else{
        console.log("Email no valido");
       return warnings.innerHTML = '<p> Email no valido</p>' 
    }
}

const getPasswordUser = ()=>{
    let password = passwordUser.value
    if(password !== '' && password.lenght > 8){
        return password
    }else{
        return warnings.innerHTML = '<p> Contraseña no valida</p>'
    }
}



sendInfo.addEventListener('click',(e)=>{
    e.preventDefault()
    
  let user = {
      id: Math.random(1,100),
      nombre: getNameUser(),
      Correo: getEmailUser(),
      Contraseña: getPasswordUser()
  }

  saveUser(db,user)
  loaduser(db)

})


const getAgeUser = ()=>{
    let age = ageUser.value;
    return age
}

const getDNIUser = ()=>{
    let dni = ceduUser.value
    return dni
}



/*const insertError = ()=>{
    let error = [getEmailUser(), getNameUser()];
    console.log(error);
    let foo = error.map(function(data){
        return `<p>${data}</p>`
      });
      warnings.innerHTML = foo
}*/
