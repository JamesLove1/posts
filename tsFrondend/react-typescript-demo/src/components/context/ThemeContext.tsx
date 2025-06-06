import { createContext } from "react"
import { theme } from "./theme"

type ThemeContextProvierProps = {
    children:React.ReactNode
}

export const ThemeContext = createContext(theme)

export default function ThemeContextProvidor({children}:ThemeContextProvierProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}
