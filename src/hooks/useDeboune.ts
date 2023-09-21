import { useEffect, useState } from "react"

function useDebounce(text: string, delay: number = 500) {
  const [debounceText, setDebounceText] = useState(text)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [text, delay])
  return debounceText
}

export default useDebounce;