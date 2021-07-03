const fetch = require('node-fetch');

exports.handler = async function(event, context) {

  const headers = {
    'X-CMC_PRO_API_KEY': process.env.API_KEY, 
  }
  const querystring = event.queryStringParameters;

  const apiBase = 'https://pro-api.coinmarketcap.com';
  const endpoint = querystring.endpoint;
  const fullUrl = `${apiBase}${endpoint}`;
  console.log(fullUrl);
  
  const responseData = await fetch(fullUrl, {
    headers: headers,
  }).then(res => res.json())
  .then(dataRes => dataRes.data)

  return {
      statusCode: 200,
      body: JSON.stringify(responseData)
  };
}