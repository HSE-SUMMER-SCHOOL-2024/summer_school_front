import {$host, $authHost} from './axiosApi.js'
import {jwtDecode} from 'jwt-decode'


export const userLogin = async ({email, password}) => {
  const {data} = await $host.post('/api/user/signIn', {email, password}, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setPost('token', data.token)
  return jwtDecode(data.token)
}

export const userRegistration = async ({email, fullName, password}) => {
  const {data} = await $host.post('/api/user/signUp', {email, fullName, password}, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setPost('token', data.token)
  return jwtDecode(data.token)
}

export const refreshToken = async () => {
  const {data} = await $authHost.get('/api/user/auth')

  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const getAllPosts = async () => {
  const {data} = await $authHost.get('/api/user/getTasks')

  return data
}

export const getAllDialogs = async () => {
  const {data} = await $authHost.get('/api/user/getAllDialogs')

  return data
}

export const updateUser = async (newUserData) => {
  const {data} = await $authHost.patch('/api/user/updateUser', newUserData, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}