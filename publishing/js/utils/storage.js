function setLocalstorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocalstorageItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

export { setLocalstorageItem, getLocalstorageItem }
