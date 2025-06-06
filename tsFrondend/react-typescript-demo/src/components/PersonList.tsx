import { Name } from "./Person.types"

type personListProps = {
    names: Name[]
}
export default function PersonList(props:personListProps) {
  return (
    <div>
        {props.names.map((name) => {
            return (
            <h2 key={name.first}>
                {name.first} {name.last}
            </h2>
        )
        } )}
    </div>
  )
}
