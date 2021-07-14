import axios from "axios";

// personal API key
const key = 'at_41J81iwawTcaSlH77cnJ8TkNSkHc3';
const newKey = 'at_A0lvgKf06y3byvbLj9CPOUtn20IWI';

export const getIPAddress = (address) => {
    let endpoint = `https://geo.ipify.org/api/v1?apiKey=${newKey}`;
    if (address !== '' && address !== undefined) {
        endpoint = `https://geo.ipify.org/api/v1?apiKey=${newKey}&ipAddress=${address}`;
    }
    return axios.get(endpoint);
}