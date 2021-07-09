import axios from "axios";

// personal API key
const key = 'at_41J81iwawTcaSlH77cnJ8TkNSkHc3';

export const getIPAddress = async (address) => {
    let endpoint = `https://geo.ipify.org/api/v1?apiKey=${key}`;
    if (address !== '') {
        endpoint = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${address}`;
    }
    const res = await axios.get(endpoint)
    .catch(function (error) {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
    });
    console.log(res.data);
}