import { cookies } from 'next/headers'
 
export async function getCoookieLK(name) {
  const cookieStore = cookies()
  const value = cookieStore.get(name) || ""
  return JSON.parse(value)
}

export async function setCookieLK(name, value) {
    const cookieStore = cookies()
    cookieStore.set(name, value)
    return { message: 'success set cookie' }
}