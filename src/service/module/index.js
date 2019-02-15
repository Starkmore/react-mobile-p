import fetch from "./../fetch";
import {request} from "./../axios.js";
// Method 1
export const cityGuess = () =>
    fetch("/v1/cities", {
        type: "guess"
    });
// Method 2
export default {
    homeList: data => request("api/index", {data,tokenStatus:0}),
    newList: data => request('api/news', {data,tokenStatus:0})
};