import axios from "axios";
import { Band, Musician, Venue } from '../models';

let switchProfileType = function(data)
{
	// eslint-disable-next-line default-case
	switch (data.profile._type) {
		case "Band":
			data.profile = new Band(data.profile);
			break;
		case "Musician":
			data.profile = new Musician(data.profile);
			break;
		case "Venue":
			data.profile = new Venue(data.profile);
			break;
	}
	console.log(data.profile);
	return data;
};

export default {

	postSignin: function (credentials) {
		return axios.post("auth/login", credentials);
	},

	postSignup: function (credentials) {
		return axios.post("auth/signup", credentials);
	},

	getProfile: async function (id) {
		let response = await axios.get("../api/profile?id=" + id);
		if (response.data.error) window.location.replace('../feeds');
		return switchProfileType(response.data);
	},

	postProfile: function (profile) {
		return axios.post("../api/profile", profile);
	},

	postFile: function (location, file) {
		return axios.post(`${location}api/upload`, file, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},

	autenticate: async function (path = "") {
		let response = await axios.get(`${path}api/user`);
		if (!response.data) window.location.replace('/signin');
		else if (!response.data.profile) window.location.replace('/new');
		return switchProfileType(response.data);
	},

	// Gets all 
	getTopPosts: function () {
		return axios.get("api/post");
	},

	postPost: function (post) {
		return axios.post("api/post", post);
	},

	getSearchResults: function (search) {
		return axios.get("api/searchresults?search=" + search);
	}
};
