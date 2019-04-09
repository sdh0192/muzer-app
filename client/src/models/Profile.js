class Profile {

    constructor(obj) {
        this._id = obj._id;
        this._type = obj._type;
        this.profilePic = obj.profilePic;
        this.phoneNumber = obj.phoneNumber;
        this.bio = obj.bio;
        this.socialLinks = obj.socialLinks;
        this.availability = obj.availability.map(i => new Date(i));
    }

}

export default Profile;