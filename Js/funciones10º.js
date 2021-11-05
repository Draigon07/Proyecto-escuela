const saveUser = (db,user) =>{
    db.setItem(user.id, JSON.stringify(user));
    window.location.href = ""
}


const loaduser = (db,parentNode)=>{
    let keys = Object.keys(db);
    console.log(keys);
    for(key of keys){
        let user = JSON.parse(db.getItem(key));
        createUser(parentNode,db,user)
    }
}