import axios from "axios";

export default {

  postSignin: function (credentials) {
    return axios.post("auth/login", credentials);
  },

  postSignup: function (credentials) {
    return axios.post("auth/signup", credentials);
  },

  postProfile:function(profile) {
     return axios.post("/profile", profile);
  },

  // Gets all 
  get: function () {
    return axios.get("/api/");
  },
  // Gets with the given id
  getapp: function (id) {
    return axios.get("/api/ /" + id);
  },
  // Deletes with the given id
  deleteapp: function (id) {
    return axios.delete("/api/ /" + id);
  },
  // Saves to the database
  save: function () {
    return axios.post("/api/");
  }
};
