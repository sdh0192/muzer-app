import axios from "axios";

export default {

	postSignin: function(credentials)
	{
		console.log("here");
		return axios.post("auth/login", credentials);
	},
  // Gets all 
  get: function() {
    return axios.get("/api/");
  },
  // Gets with the given id
  getapp: function(id) {
    return axios.get("/api/ /" + id);
  },
  // Deletes with the given id
  deleteapp: function(id) {
    return axios.delete("/api/ /" + id);
  },
  // Saves to the database
  save: function() {
    return axios.post("/api/", );
  }
};
