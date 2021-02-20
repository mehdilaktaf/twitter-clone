import Link from "next/link"
import Avatar from "./Avatar" 

import ComposeIcon from "../icons/compose.svg"

export default ({ userInfo, toggleComposeModal  }) => {
  // Add "gravatarEmail" in the list of attributes:
  const { firstName, lastName, username, gravatarEmail } = userInfo

  return (
    <nav>
        <button onClick={toggleComposeModal}>
        <ComposeIcon />
      </button>
      <Link href={`/profile?u=${username}`}><a className="username">
          <Avatar 
            email={gravatarEmail} 
            style={{
              marginBottom: -2,
            }} 
          />
          <span>
            {firstName} {lastName}
          </span>
        </a>
      </Link>

    </nav>
  )
}
