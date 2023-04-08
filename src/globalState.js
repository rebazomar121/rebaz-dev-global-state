import React, { createContext, useReducer, useEffect } from "react"

const GlobalStateContext = createContext()

function globalStateReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, [action.stateName]: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

function GlobalStateProvider(props) {
  const { stateNames = [], initialState = {}, children } = props

  const defaultInitialValues = stateNames.reduce(
    (acc, stateName) => ({ ...acc, [stateName]: null }),
    {}
  )

  const [state, dispatch] = useReducer(globalStateReducer, {
    ...defaultInitialValues,
    ...initialState,
  })

  function setData(stateName, data) {
    dispatch({ type: "SET_DATA", stateName, payload: data })
  }

  return (
    <GlobalStateContext.Provider value={{ state, setData }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export { GlobalStateContext, GlobalStateProvider }
