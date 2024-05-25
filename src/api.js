import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint)
    return response.data
  } catch (error) {
    console.error('Erro no GET:', error)
    throw error
  }
}

export const post = async (endpoint, payload) => {
  try {
    const response = await api.post(endpoint, payload)
    return response.data
  } catch (error) {
    console.error('Erro no POST:', error)
    throw error
  }
}

export const put = async (endpoint, payload) => {
  try {
    const response = await api.put(endpoint, payload)
    return response.data
  } catch (error) {
    console.error('Erro no PUT:', error)
    throw error
  }
}

export const del = async (endpoint) => {
  try {
    const response = await api.delete(endpoint)
    return response.data
  } catch (error) {
    console.error('Erro no DELETE:', error)
    throw error
  }
}
