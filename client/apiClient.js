import request from 'superagent'

const rootUrl = '/api/v1'

export function getChosenBeer(id) {
  return request.get('https://api.punkapi.com/v2/beers/' + id)
    .catch(e => {console.log(e) })
}

export function getBeersById1to80() {
  return request.get('https://api.punkapi.com/v2/beers?per_page=80')
    .catch(e => { console.log(e) })
}

export function getBeersById81to160() {
  return request.get('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    .catch(e => { console.log(e) })
}

export function getBeersById161to240() {
  return request.get('https://api.punkapi.com/v2/beers?page=3&per_page=80')
    .catch(e => { console.log(e) })
}

