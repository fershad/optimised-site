const fetch = require('node-fetch')
import dayjs from "dayjs";

require('dotenv').config()
const { AIRTABLE_API, AIRTABLE_TOTAL_CARBON_RECORD_ID } = process.env;


export const getTotalCarbon = async () => {
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

	return result;
}