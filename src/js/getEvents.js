import axios from 'axios';

//////////////////////////////
export default async function getEvens(keyword, country) {
  const url = 'https://app.ticketmaster.com/discovery/v2/events.json';
  const apiKey = 'w7mmBkK7aLh5F5nZUPuvBPD23VXj8bAs';
  const filter = `?apikey=${apiKey}&keyword=${keyword}&countryCode=${country}&city_ids`;
  return await axios.get(`${url}${filter}`).then(res => res.data);
}
