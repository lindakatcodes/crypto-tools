const fetch = require('node-fetch');

exports.handler = async function(event, context) {

  const headers = {
    'X-CMC_PRO_API_KEY': process.env.API_KEY,
  }
  const querystring = event.queryStringParameters;

  const apiBase = 'https://pro-api.coinmarketcap.com';
  const endpoint = querystring.endpoint;
  const queryParams = querystring.params;

  let apiquery = '?';
  if (queryParams) {
    const params = JSON.parse(queryParams);
    const valPairs = Object.entries(params).map(([key, val]) => {
      return `${key}=${val}`;
    })
    apiquery += valPairs.join('&');
}


  const fullUrl = `${apiBase}${endpoint}${queryParams ? apiquery : ''}`;

  const responseData = await fetch(fullUrl, {
    headers: headers,
  }).then(res => res.json())
  .then(dataRes => dataRes.data)

  return {
      statusCode: 200,
      body: JSON.stringify(responseData)
  };
}
