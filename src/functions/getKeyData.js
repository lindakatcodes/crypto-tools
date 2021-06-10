const fetch = require('node-fetch');

exports.handler = async function(event, context) {

  const headers = {
    'X-CMC_PRO_API_KEY': process.env.API_KEY, 
  }

  const endpoint = 'https://pro-api.coinmarketcap.com';

  const keyUrl = `${endpoint}/v1/key/info`;
  const responseData = await fetch(keyUrl, {
    headers: headers,
  }).then(res => res.json())
  .then(dataRes => dataRes.data)

  return {
      statusCode: 200,
      body: JSON.stringify(responseData)
  };
}