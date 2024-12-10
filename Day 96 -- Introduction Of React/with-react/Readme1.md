```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

  In the Package.json already soe inbuild scripts are provided which will help to build our projects 
```

- ######  public folder holds all the static files in the local server `http://localhost:3000`what evr we write after front slash that will be shown on the browser liike -->> `http://localhost:3000/logo192.png` it will show the logo on the web page

- ###### inside the `src` folder there is `App.js` file we will the actual code of our react app & for this `App.js` file there is CSS file `App.css` file

- ###### whatever code we write for react app all the code goes into the `public` folder `index.html` file inside the `root` element throug `index.js` under the `src` folder


- ###### inside the `App.js` whatever code we write that code known as `jsx` , this is kind of html file but later on it will convert into a pure javascript code

- ###### `<div className="App">` --->>> this `className` is same as `class` in the normmal html code but becasue in javascript there is oops concept and in oops concept we use the term class that's why instead of `class` we use `className` in the `jsx` code

- ###### if we change any variable inside the react code or even use in dom then we call it as state

- ###### `const [value, setValue] = useState(0)` -->> this line means a new state will be created with the `value` named and we can chage that state using `setValue` and the deafult value for the state will be `zero [useState(0)]`
`value` is the name of the state and `setValue` is the function which will be used for change the `value` state

### `import { useState } from 'react`
#### 1. import { useState } from 'react':
- useState is a named export from the React library.
- By importing it, you can use the useState hook to manage state in functional React components.

#### 2. from 'react':
- Refers to the React library.
- React provides various hooks (like useState, useEffect, etc.) that you can use in your components.

## What is useState?
- useState is a React Hook that allows you to add state management to functional components.
- It enables you to create and update state variables without needing to write class components.

## Breakdown of the Code:
### 1. const [value, setValue] = useState(0);
- #### Destructuring assignment:
  - **value:** Represents the current state value. Initially, this is set to 0 (the argument passed to useState).
  - **setValue:** A function used to update the state (value).

- #### useState(0):
  - __Initializes__ the state with a value of 0.

### 2. How It Works:
- When you call setValue(newValue), the state (value) is updated to newValue.
- React re-renders the component when the state is updated, ensuring the UI reflects the latest state.

### Example Usage:
```
import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0); // Initialize state with 0

  const increment = () => {
    setValue(value + 1); // Update state to the current value + 1
  };

  return (
    <div>
      <p>Current Value: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```
### 1. Initial Render:
- `value` is `0` (the initial state).
- The UI displays `Current Value: 0.`
### 2. Clicking the Button:
- Clicking the button calls the `increment` function.
- The `increment` function calls `setValue(value + 1)` to update the state.
- React re-renders the component, and the UI updates to display the new value.

### Key Points:
- **State Management:** `useState` simplifies state management in functional components.
- **Reactivity:** When the state is updated using `setValue`, React ensures the component re-renders to reflect the changes.
- **Initial Value:** The argument to `useState` (`0` in this case) is the initial value of the state variable.

