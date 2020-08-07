import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
  const estaMontado = useRef(true)
  const [state, setstate] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      estaMontado.current = false
    }
  }, [])

  useEffect(() => {
    setstate({ data: null, loading: true, error: null })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (estaMontado.current) {
          setstate({
            loading: false,
            error: null,
            data
          })
        }
      })
  }, [url])

  return state
}