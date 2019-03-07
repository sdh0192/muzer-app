import axios from "axios";

export default {

	postSignin: function (credentials) {
		return axios.post("auth/login", credentials);
	},

	postSignup: function (credentials) {
		return axios.post("auth/signup", credentials);
	},

	getProfile: async function(id)
	{
		let response = await axios.get("../api/profile?id=" + id);
		if(response.data.error) window.location.replace('../feeds');
		return response.data;
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
		return response.data;
	},

	// Gets all 
	getTopPosts: function () {
		return axios.get("api/post");
	},

	postPost: function (post) {
		return axios.post("api/post", post);
	},

	getSearchResults: function(search) {
		return axios.get("api/searchresults?search=" + search);
	}
};
