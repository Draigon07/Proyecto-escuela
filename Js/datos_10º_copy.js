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

const IDBrequest = indexedDB.open("Estudiantes",1);

const getNameUser = ()=> {
    let user = nameUser.value;
    if(nameUser.value && ageUser.value !== ''|| nameUser.value.length <!6){
        return user
    }else{
        return warnings.innerHTML = '<p> Usuario no valido</p>' 
    }

}

const getAgeUser = ()=>{
    let age = ageUser.value;
    return age
}

const getDNIUser = ()=>{
    let dni = ceduUser.value
    return dni
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


const insertError = ()=>{
    let error = [getEmailUser(), getNameUser()];
    console.log(error);
    let foo = error.map(function(data){
        return `<p>${data}</p>`
      });
      warnings.innerHTML = foo
}




/*

IDBrequest.addEventListener("success",()=>{
    console.log("Todo salio perfecto")
});

IDBrequest.addEventListener("upgradeneeded",()=>{
    const db = IDBrequest.result;
    db.createObjectStore("Nuevos",{
        autoIncrement: true,
    })
    
});



const addObjeto = ()=>{
   //  && ageUser.age > 18){
        const IDBData = getIDBData("readwrite");
          IDBData[0].add({nombre: getNameUser(),
                          Edad:getAgeUser(),
                           Email: emailUser.value});
                           IDBData[1].addEventListener("complete",()=>{
                               console.log("Objeto agregado correctamente")
                               console.log(IDBData.length)
                           })
   /* }else{
        console.log("no funciono")
    }*/

}





const leerObjetos = ()=>{
   const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor();  //Lee los datos 
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else{
            console.log("Todos los datos Fueron leidos")
        }
    });
}

//Para modicarlo
const modificarObjeto = (key,objeto)=>{
    const IDBData = getIDBData("readwrite");
    IDBData[0].put(objeto,key);   //Si no existe lo agrega y si existe lo modifica
    IDBData[1].addEventListener("complete",()=>{
    console.log("Objeto agregado correctamente")  
    })
}


const getIDBData = (mode)=>{
    const db = IDBrequest.result;
    const IDBtransaction = db.transaction("Nuevos",mode);
    const objectStore = IDBtransaction.objectStore("Nuevos");
    return [objectStore,IDBtransaction]

}

//Eliminarlo

const eliminarObjeto = key =>{
    const IDBData = getIDBData("readwrite");  
    IDBData[0].delete(key);   //Elimina el objeto
    if(IDBData[1].addEventListener("complete",()=>{
        console.log("Objeto Agregado correctamente")
    })){

    }else{
        console.log("error al agregar objeto")
        const tittle_modal = document.querySelector(".tittle_modal");
        tittle_modal.innerHTML = "Lo sentimos no se a podido registrar correctamente"
    }

    

}


sendInfo.addEventListener("click",()=>{
   /* addObjeto();
    setTimeout(() => {    
        leerObjetos()
    }, 1500);
   getNameUser()*/

   getEmailUser();
   getNameUser();
   insertError()
})*/


//Modal section

let cerrar = document.querySelectorAll(".close")[0];
let  abrir = document.querySelectorAll(".open_modal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal_container")[0];



abrir.addEventListener('click',(e)=>{
    e.preventDefault();
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle("modal_close")
});


cerrar.addEventListener('click',()=>{
    modal.classList.toggle('modal_close');
    setTimeout(() => {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
        
    }, 500);
});


window.addEventListener("click",(e)=>{
   if(e.target == modalC){
    modal.classList.toggle('modal_close');
    setTimeout(() => {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
        
    }, 500);

   }
})














