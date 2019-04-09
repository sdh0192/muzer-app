import Profile from './Profile';

class Musician extends Profile {

    constructor(obj) {
        super(obj);
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.city = obj.city;
        this.genres = obj.genres;
        this.instruments = obj.instruments;
    }

    get name() { return `${this.firstName} ${this.lastName}`; }
}

export default Musician;