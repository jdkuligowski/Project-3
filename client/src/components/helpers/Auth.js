
export const getToken = () => {
  return window.localStorage.getItem('Seeded-user-token')
}

export const getPayLoad = () => {
  const token = getToken()
  if (!token) return
  const payLoad = token.split('.')[1]
  // console.log(payLoad)
  // console.log(JSON.parse(atob(payLoad)))
  return JSON.parse(atob(payLoad)) // can try and use Buffer
}

export const isUserAuth = () => {
  const payLoad = getPayLoad()
  if (!payLoad) return 
  const currentTime = Math.floor(Date.now() / 1000)
  return payLoad.exp > currentTime
}

export const isUserOwner = (plant) => {
  const payLoad = getPayLoad()
  if (!payLoad) return
  // console.log(payLoad.sub)
  // console.log(bread.addedBy._id)
  return plant.addedBy._id === payLoad.sub
}

export const getUserToken = () => {
  return window.localStorage.getItem(`seeded-username`)
}