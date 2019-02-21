import axios from "axios";

export default {

	postSignin: function (credentials) {
		return axios.post("auth/login", credentials);
	},

	postSignup: function (credentials) {
		return axios.post("auth/signup", credentials);
	},

	postProfile: function (profile) {
		console.log("axios");
		return axios.post("../api/profile", profile);
	},

	postFile: function (location, file) {
		return axios.post(`${location}/api/upload`, file, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},

	autenticate: async function()
	{
		let response = await axios.get('api/user');
		console.log(response);
		if (!response.data) window.location.replace('/signin');
		else if(!response.data.profile) window.location.replace('/new');

		return response.data;
	},

	// Gets all 
	getTopPosts: function () {
		return axios.get("api/post");
	},

	// // Gets with the given id
	// getapp: function (id) {
	// 	return axios.get("/api/ /" + id);
	// },
	// // Deletes with the given id
	// deleteapp: function (id) {
	// 	return axios.delete("/api/ /" + id);
	// },
	// // Saves to the database
	// save: function () {
	// 	return axios.post("/api/");
	// }
};
