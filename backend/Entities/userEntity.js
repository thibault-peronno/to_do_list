class UserEntity {
    
    constructor(id, firstname, lastname, identifiant, password){
        // the _ before proporty means is private.
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._identifiant = identifiant;
        this._password = password
    }
    
    get id(){
        return this._id;
    }
    set id(newId){
        this._id = newId;
    }

    get firstname(){
        return this._firstname;
    }
    set firstname(newfirstname){
        this._firstname = newfirstname;
    }

    get lastname(){
        return this._lastname;
    }
    set lastname(newLastname){
        this._lastname = newLastname;
    }

    get identifiant(){
        return this._identifiant;
    }
    set identifiant(newIdentifiant){
        this._identifiant = newIdentifiant;
    }

    get password(){
        return this._password;
    }
    set password(newPassword){
        this._password = newPassword;
    }
}

export default UserEntity;