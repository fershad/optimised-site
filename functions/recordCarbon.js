exports.handler = async (event, context, callback) => {
  // Allowed domain origins
  let headers = {
    'Access-Control-Allow-Origin': 'https://optimised.email',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  };

  // If domain is not allowed, return error code
  if (!allowed.includes(event.headers.origin)) {
    callback(null, {
      statusCode: 403,
      body: 'Requests from this domain are not allowed.',
      headers: headers
    })
  }
  
  let carbon = parseFloat(event.queryStringParameters.c)
  let site = event.queryStringParameters.site
  
  if (!carbon || !site) {
    callback(null, {
      statusCode: 422,
      body: 'Missing params',
      headers: headers
    })
  }

  const url = 'https://api.airtable.com/v0/appGQp9tbkXqx9fim/Automated%20Carbon%20Calc'
  const data = {
    "records": [{
      "fields": {
        "URL": site,
        "Carbon": carbon
      }
    }, ]
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AIRTABLE_API}`,
    }
  }

  const resp = await fetch(url, options)
  const result = await resp.json()

  if (result.error) {
    callback(null, {
      statusCode: 400,
      body: result.error.message,
      headers: headers
    })
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: headers
  })
}