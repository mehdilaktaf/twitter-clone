import { web3_utils, eth, getInstance } from './provider.js'


let contract = require('truffle-contract')

let user_storage_json = require("./artifacts/UserStorage.json")
let UserStorage = contract(user_storage_json)

// import UserController from "./artifacts/UserController.json"
// import UserStorage from "./artifacts/UserStorage.json"
let user_controller_json = require("./artifacts/UserController.json");
let UserController = contract(user_controller_json)



export const getLoggedInUserId = async () => {
    try {
      await ethereum.enable()
      const addresses = await eth.getAccounts()

      if (!addresses) return
      
      const storage = await getInstance(UserStorage)
      console.log("Test as", UserStorage)
      const userId = await storage.addresses.call(addresses[0])

  
      return parseInt(userId)
    } catch (err) {
      console.error("Err:", err)
    }
  }
  
  export const getUserIdFromUsername = async (username) => {
    const storage = await getInstance(UserStorage)
    const userId = await storage.usernames.call(username)
  
    return userId
  }

  export const getUserInfo = async (userId) => {
    const storage = await getInstance(UserStorage)
    const profile = await storage.profiles.call(userId)
  
    const {
      id, 
      username, 
      firstName, 
      lastName, 
      bio, 
      gravatarEmail, 
    } = profile
    
    if (!parseInt(id)) throw "Couldn't find user!"
  
    return {
      id: parseInt(id),
      username: eth.utils.toAscii(username),
      firstName: eth.utils.toAscii(firstName),
      lastName: eth.utils.toAscii(lastName),
      bio,
      gravatarEmail,
    }
  }

export const createUser = async (...params) => {
    try {
      await ethereum.enable()
  
      const controller = await getInstance(UserController)
      const addresses = await eth.getAccounts()
  
      const result = await controller.createUser(...params, {
        from: addresses[0]
      })
  
      return result
    } catch (err) {
      console.error("Err:", err)
    }
  }

  