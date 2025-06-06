type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
}

type Zero = RandomNumberType & {
    isNegative?: never,
    isPositive?: never,
    isZero: boolean
}

type RandomNumberProp = {
    value: number,
    isPosertive?: boolean,
    isNegative?: boolean,
    isZero?: boolean
}

export default function RandomNumber({value, isPosertive, isNegative, isZero}:RandomNumberProp){
  return (
    <div>
      {value} {isPosertive && "positive"} { isNegative &&  "negative"} {" "}{isZero && "zero"}
    </div>
  )
}
