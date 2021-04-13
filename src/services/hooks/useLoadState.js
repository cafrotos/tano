import { useState } from "react"

export default ({
  onGetState,
  mapping
}) => {
  const [state, setState] = useState({
    loading: true,
    dataSource: []
  })

  const loadState = async (...args) => {
    setState({
      ...state,
      loading: true
    })
    try {
      const dataSource = await onGetState(...args);
      setState({
        ...state,
        loading: false,
        dataSource: typeof mapping === "function" ? mapping(dataSource) : dataSource
      })
    } catch (error) {
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