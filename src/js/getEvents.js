import axios from 'axios';

const DEFAULT_PAGE_SIZE = 16;

//////////////////////////////
export default async function getEvens(keyword, country, page) {
  const url = 'https://app.ticketmaster.com/discovery/v2/events.json';
  const apiKey = 'w7mmBkK7aLh5F5nZUPuvBPD23VXj8bAs';
  const filter = `?apikey=${apiKey}&keyword=${keyword}&countryCode=${country}&city_ids&page=${page}&size=${DEFAULT_PAGE_SIZE}&sort=random&segmentId=KZFzniwnSyZfZ7v7nJ`;
  return await axios.get(`${url}${filter}`).then(res => res.data);
}
