import { useRef, useState, useEffect } from "react"

export default ({
  onGetState,
  mapping
}) => {
  const isUnmount = useRef(false)
  const [state, setState] = useState({
    loading: true,
    dataSource: []
  })

  useEffect(() => {
    isUnmount.current = false
    return () => {
      isUnmount.current = true
    }
  }, [])

  const loadState = async (...args) => {
    setState({
      ...state,
      loading: true
    })
    try {
      const dataSource = await onGetState(...args);
      if (!isUnmount.current)
        setState({
          ...state,
          loading: false,
          dataSource: typeof mapping === "function" ? mapping(dataSource) : dataSource
        })
    } catch (error) {
      if (!isUnmount.current)
        setState({
          ...state,
          loading: false
        })
    }
  }

  const setDataSource = (dataSource) => {
    setState({
      loading: false,
      dataSource
    })
  }

  return [
    state,
    setDataSource,
    loadState
  ]
}