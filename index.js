import fetch from 'isomorphic-unfetch'
import cuid from 'cuid'

function checkStatus (res) {
  if (res.ok) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    return Promise.reject(err)
  }
}

export default function fairAnalytics ({ url } = {}) {
  if (!url) {
    throw new Error(
      'You must provide the "url" of your Fair Analytics instance'
    )
  }
  let anonymousSessionId = 'NA'
  const localStorageKey = '__fa__'

  try {
    const faConf = JSON.parse(window.localStorage.getItem(localStorageKey))
    if (faConf && faConf.anonymousSessionId) {
      anonymousSessionId = faConf.anonymousSessionId
    } else {
      try {
        const faConf = {
          anonymousSessionId: cuid()
        }
        window.localStorage.setItem(localStorageKey, JSON.stringify(faConf))
        anonymousSessionId = faConf.anonymousSessionId
      } catch (e) {
        console.warn(
          'Error while setting anonymousSessionId NA will be used',
          e
        )
      }
    }
  } catch (e) {
    console.warn('Error while setting anonymousSessionId, NA will be used', e)
  }

  const send = (opts = {}) => {
    if (!opts.event) {
      return Promise.reject(new Error('You must provide the "event" parameter'))
    }
    opts.anonymousSessionId = anonymousSessionId
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)
    }).then(checkStatus)
  }

  return { send }
}
