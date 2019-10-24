import request from 'superagent'

const rootUrl = '/api/v1'

export function getChosenBeer(id) {
  return request.get('https://api.punkapi.com/v2/beers/' + id)
    .catch(e => {console.log(e) })
}

export function getAllBeers() {
  return request.get('https://api.punkapi.com/v2/beers')
    .catch(e => { console.log(e) })
}

// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }
