# rebaz-dev-global-state

Hare is globals state to management state

## Installation

You can install `rebaz-dev-global-state` using npm or yarn:
```
<!-- note -->
    npm install rebaz-dev-global-state --save
    or
    yarn add rebaz-dev-global-state --save
```

## Usage
```javascript
import React from "react";
import { GlobalStateProvider } from "rebaz-dev-global-state";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider stateNames={[nameState]}>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}
export default MyApp;

```

## Usage Context
```javascript
import React, { useContext, useEffect } from "react"

import { GlobalStateContext } from "rebaz-dev-global-state"

export default function App() {
  const { state, setData } = useContext(GlobalStateContext)

  const handleUpdateState = () => {
    setData(nameState,value)
  }

  const getState = () => {
    console.log(state?.nameState)
  }

  return (
    <>
      <div>APP</div>
    </>
  )
}
```
## Note 
```
    you must using React 18.2.0 or follow this steps change the package React version to (your version) by deleting node_modules from and replacing react from package.json then try `npm i` and `npm run build`  from rebaz-dev-global-state folder
```
[github]("https://github.com/rebazomar121/rebaz-dev-global-state")
## License
MIT



