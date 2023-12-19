const API_URL =
  'https://raw.githubusercontent.com/DmytroFrame/spargalka/data/data.json'

export const fetchData = async (url = API_URL) => {
  return fetch(url).then((res) => res.json())
}
