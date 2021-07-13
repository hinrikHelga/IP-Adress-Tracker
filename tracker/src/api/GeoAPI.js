import axios from "axios";

// personal API key
const key = 'at_41J81iwawTcaSlH77cnJ8TkNSkHc3';

export const getIPAddress = (address) => {
    let endpoint = `https://geo.ipify.org/api/v1?apiKey=${key}`;
    if (address !== '' && address !== undefined) {
        endpoint = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${address}`;
    }
    return axios.get(endpoint);
}