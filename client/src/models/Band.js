import Profile from './Profile';

class Band extends Profile {

    constructor(obj) {
        super(obj);
        this.name = obj.name;
        this.city = obj.city;
        this.genres = obj.genres;
        this.members = obj.members;
        this.contacts = obj.contacts;
        this.label = obj.label;
    }

}

export default Band;