require('dotenv').config();
const rp = require('request-promise');

const { URL_ECOMMERCE } = process.env;


const notification = async (referenceId, authorizationId) => {
    const uri = `${URL_ECOMMERCE}/${referenceId}/${authorizationId}`;

    const response = await rp({
        uri,
        method: 'GET',
        json: true
    })

    return response;
}
module.exports = { notification }