type GreetPRops = {
    name: string,
    messageCount?: number,
    isLoggedIn : boolean
}

export default function Greet(props:GreetPRops) {

  const {messageCount = 0 } = props

  return (
    <div>
      <h2>
        { props.isLoggedIn ?
            `Welcome ${props.name}! You have ${messageCount} unread messages.` 
            : "welcome Guest"
        }
        </h2>
    </div>
  )
}
