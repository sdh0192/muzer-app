import Profile from './Profile';

class Venue extends Profile {

    constructor(obj) {
        super(obj);
        this.name = obj.name;
        this.address = obj.address;
        this.contacts = obj.contacts;
    }
}

export default Venue;