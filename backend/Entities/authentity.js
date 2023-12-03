class AuthEntity {

    constructor(id, identifiant, password){
        this._id = id;
        this._identifiant = identifiant;
        this._password = password;
    }

    get id(){
        return this._id;
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

export default AuthEntity;