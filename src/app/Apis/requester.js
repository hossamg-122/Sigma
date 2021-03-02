import axios from 'axios';

const username = 'sigma';
const password = 'sigma';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');


export default axios.create({
    baseURL : "https://apis.sigmamedicalsupplies.co.uk/api",
    headers: {'Authorization': `Basic ${token}`},
})