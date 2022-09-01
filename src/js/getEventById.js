import axios from 'axios';

//////////////////////////////
export default async function getEventById(id) {
  const url = 'https://app.ticketmaster.com/discovery/v2/events';
  const apiKey = 'w7mmBkK7aLh5F5nZUPuvBPD23VXj8bAs';
  const filter = `?apikey=${apiKey}&id=${id}&locale=*`;
  return await axios.get(`${url}${filter}`).then(res => res.data);
}
