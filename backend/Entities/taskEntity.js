class taskEntity {

    constructor(id, description, isDone){
        this._id = id;
        this._description = description;
        this._isDone = isDone;
    }

    get id(){
        return this._id;
    }
    
    get description(){
        return this._description;
    }
    set description(newDescription){
        this._description = newDescription;
    }

    get isDone(){
        return this._isDone
    }
    set isDone(newIsDone){
        this._isDone = newIsDone;
    }
}

export default taskEntity;