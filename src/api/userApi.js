import {$host, $authHost} from './axiosApi.js'
import {jwtDecode} from 'jwt-decode'


export const userLogin = async ({email, password}) => {
  const {data} = await $host.post('/users/signIn', {email, password}, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const userRegistration = async ({email, password, name, surname}) => {
  const {data} = await $host.post('/users/signUp',{email, password, name, surname}, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const refreshToken = async () => {
  const {data} = await $authHost.get('/users/refreshToken')

  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const userLogout = async () => {
  const {data} = await $authHost.get('/users/logout')
  localStorage.removePost('token')
  return jwtDecode(data.token)
}

export const createPost = async ({auth, title, text}) => {
  const {data} = await $authHost.post('/posts', {auth, title, text})

  return data
}

export const getPostById = async () => {
  const userId = 0;
  const {data} = await $authHost.get(`/posts/${userId}`)

  return data
}

export const getAllPosts = async () => {
  const {data} = await $host.get('/posts/feed')

  return data
}

export const getAllVideos = async () => {
  const {data} = await $authHost.post('/videos')

  return data
}
