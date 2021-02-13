exports.handler = async (event, context, callback) => {
  const { AIRTABLE_API, AIRTABLE_TOTAL_CARBON_RECORD_ID } = process.env;
  const fetch = require('node-fetch');

  // Allowed domain origins
  let headers = {
    'Access-Control-Allow-Origin': 'https://optimised.email',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  };

   
  const url = `https://api.airtable.com/v0/appGQp9tbkXqx9fim/Total%20Carbon/${AIRTABLE_TOTAL_CARBON_RECORD_ID}`
	const options = {
		method: 'GET',
		headers: {
		  'Authorization': `Bearer ${AIRTABLE_API}`,
		}
	  }
	  
	  // Fetch from airtable
	const data = await fetch(url, options)
	const result = await data.json()

	// const formattedUpdate = dayjs(result.fields.lastUpdated).format("MMMM D, YYYY");

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