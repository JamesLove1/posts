type ContaienrProp = {
    styles: React.CSSProperties
}

export default function Container(props:ContaienrProp) {
  return (
    <div style={props.styles}>
      Text content goes here 
    </div>
  )
}
