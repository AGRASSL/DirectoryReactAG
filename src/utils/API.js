import axios from "axios";
const BASEURL = "https://randomuser.me/";
const APIKEY = "&apikey=8HCN-RAS8-TYP6-GW3Y";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
