function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';
  if(searchQuery) {
    return fetch(url + searchQuery).then(response => response.json());
  } else {
    return;
  }
}

export default fetchCountries;