import React from 'react';

type InputProps = {
    value: string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({value, handleChange}:InputProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
  return (
    <input type="text" value={value} onChange={handleInputChange}></input>
  )
}
