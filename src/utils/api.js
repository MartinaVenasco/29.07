const BASE_URL = 'https://edgemony-backend.herokuapp.com/';
const API_Cont = 'https://jsonplaceholder.typicode.com/'
const GET = async (path) => {
  const res = await fetch(BASE_URL + path);

  return await res.json();
}

const GETc = async (path) => {
  const res = await fetch(API_Cont + path);

  return await res.json();
}

const POST = async (path, body) => {
  const res = await fetch(BASE_URL + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return await res.json();
}

const DELETE = async (path, id) => {
  const res = await fetch(`${BASE_URL}${path}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return await res.json();
}

export { GET, POST, DELETE, GETc };