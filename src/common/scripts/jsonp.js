import originJSONP from 'jsonp'

const param = (data) => {
  let url = ''
  for (let key in data) {
    let value = data[key] || ''
    url += `&${key}=${encodeURIComponent(value)}`
  }
  return url.substring(1) || ''
}

export const jsonp = (url, data, option) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}
