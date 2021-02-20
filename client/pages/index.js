import React from 'react'
import { getUserInfo, createUser } from "../web3/users"
import { getTweetInfo, createTweet } from "../web3/tweets"

export default class IndexPage extends React.Component {
  logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log(userInfo)
  }

  createUser = async () => {
    const tx = await createUser("mehdi")
    console.log(tx)
  }

  logTweet = async () => {
    const tweetInfo = await getTweetInfo(1)
    console.log(tweetInfo)
  }

  createTweet = async () => {
    const tx = await createTweet("Hello from my twitter clone account!")
    console.log(tx)
  }

  render() {
    return (
      <div>
        <button onClick={this.logUser}>
          Get first user
        </button>

        <button onClick={this.createUser}>
          Create user 
        </button>

        <button onClick={this.logTweet}>
          Get first tweet
        </button>

        <button onClick={this.createTweet}>
          Create tweet
        </button>
      </div>
    )
  }
}