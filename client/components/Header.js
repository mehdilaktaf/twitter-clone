import React from 'react'
import Link from "next/link"
import TweetComposer from "./TweetComposer" 
import { Center } from "./Layout"
import Logotype from "../icons/logotype.svg"

import { getLoggedInUserId, getUserInfo } from "../web3/users"

import Nav from "./Nav"

export default class Header extends React.Component {
  state = {
    loggedIn: false,
    userInfo: {},
    showComposeModal: false
  }

  toggleComposeModal = () => {
    const { showComposeModal } = this.state

    this.setState({
      showComposeModal: !showComposeModal,
    })
  }
  async componentDidMount() {
    const userId = await getLoggedInUserId() 

    try {
      const userInfo = await getUserInfo(userId) 

      this.setState({
        loggedIn: true,
        userInfo,
      })
    } catch (err) {
      console.error("Couldn't find logged in user", err)
    }
  }
  render() {
    const { loggedIn, userInfo, showComposeModal } = this.state

    return (
      <header>
        <Center>
          <Link href="/">
            {/* ... */}
          </Link>

          <nav>
            {loggedIn && (
              <Nav
                userInfo={userInfo}
                toggleComposeModal={this.toggleComposeModal} 
              />
            )}
          </nav>
        </Center>

        {showComposeModal && (
          <Modal
            onClose={this.toggleComposeModal}
          >
            <TweetComposer onClose={this.toggleComposeModal} />
          </Modal>
        )}

        {/* ... */}
      </header>
    )
  }
}