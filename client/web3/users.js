import { web3_utils, eth, getInstance } from './provider.js'

import UserStorage from "./artifacts/UserStorage.json"

import UserController from "./artifacts/UserController.json"

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const profile = await storage.profiles.call(userId)

  return {
    id: parseInt(profile.id),
    username: web3_utils.toAscii(profile.username),
  }
}

export const createUser = async (username) => {
    const controller = await getInstance(UserController)
  
    try {
      await ethereum.enable()
      const addresses = await eth.getAccounts()
        
      const result = await controller.createUser(
        web3_utils.fromAscii(username),
      {
        from: addresses[0],
      })
  
      return result
    } catch (err) {
      console.error("Err:", err)
    }
  }