import { isEmpty } from '../utils/object'

const API_BASEURL = process.env.REACT_APP_API_HOST
const API_ENDPOINT = `${API_BASEURL}/tasks`

const list = async () => {
  const res = await fetch(`${API_ENDPOINT}`)

  if (res.ok) {
    return res.json()
  } else {
    throw res
  }
}

const detail = async (id) => {
  const res = await fetch(`${API_ENDPOINT}/${id}`)

  if (res.ok) {
    return res.json()
  } else {
    throw res
  }
}

const create = async (body) => {
  if (isEmpty(body)) {
    throw new Error('Request body is required')
  }

  body.date = body.date ? new Date(body.date).toISOString() : null

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const res = await fetch(`${API_ENDPOINT}`, options)

  if (res.ok) {
    return res.json()
  } else {
    throw res
  }
}

const update = async (id, body) => {
  if (isEmpty(body)) {
    throw new Error('Request body is required')
  }

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const res = await fetch(`${API_ENDPOINT}/${id}`, options)

  if (res.ok) {
    return res.json()
  } else {
    throw res
  }
}

const remove = async (id) => {
  const res = await fetch(`${API_ENDPOINT}/${id}`, { method: 'DELETE' })

  if (res.ok) {
    return res.json()
  } else {
    throw res
  }
}

const TaskService = { list, detail, create, update, remove }

export default TaskService
