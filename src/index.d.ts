import { ReactNode } from "react"

export interface GlobalStateProviderProps {
  stateNames: string[]
  initialState?: Record<string, any>
  children: ReactNode
}

export interface GlobalStateContextValue {
  state: Record<string, any>
  setData: (stateName: string, data: any) => void
}

export const GlobalStateContext: React.Context<GlobalStateContextValue>

export function GlobalStateProvider(
  props: GlobalStateProviderProps
): JSX.Element
