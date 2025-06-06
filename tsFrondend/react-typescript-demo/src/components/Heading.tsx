type HeadingProp = {
    children: string
}

export default function Heading(props: HeadingProp) {
  return (
    <div>
      {props.children}
    </div>
  )
}
