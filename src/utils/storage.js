import Cookies from 'js-cookie'

export function getCookies(key, defaultValue) {
  const cookies = Cookies.get(key)
  if (cookies) {
    return JSON.parse(cookies)
  } else {
    return defaultValue
  }
}

export function setCookies(key, value, config) {
  Cookies.set(key, JSON.stringify(value), config)
}

export function getLocalStorage(key, defaultValue) {
  const localStorageData = localStorage.getItem(key)
  if (localStorageData) {
    return JSON.parse(localStorageData)
  } else {
    return defaultValue
  }
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getSessionStorage(key, defaultValue) {
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem(key)
    if (!stored) {
      return defaultValue
    }
    return JSON.parse(stored)
  } else {
    return []
  }
}

export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value))
}
