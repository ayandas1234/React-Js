# **What are Props in React? 🚀**
Props (short for properties) are a way to pass data from one component to another in React. They are used to make components dynamic and reusable by customizing their behavior or appearance based on the values passed to them.

Props are read-only and cannot be modified by the receiving component. They flow unidirectionally, meaning from parent to child.

### __Key Features of Props: 💥__
1. **Immutable:** Props cannot be changed inside the child component.
2. **Unidirectional Data Flow:** Data flows from the parent component to the child component.
3. __Customization:__ Props allow you to reuse components with different inputs.

### **Example of Props in React 📖**
#### **Parent Component (App.js):**
```
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Passing props to the Greeting component */}
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

export default App;
```
#### **Child Component (Greeting.js):**
```
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <p>Hello, my name is {props.name} and I am {props.age} years old.</p>
    </div>
  );
}

export default Greeting;
```

### **🖋 How It Works:**
#### 1. **In the Parent Component (`App`):`**
- The `Greeting` component is used twice, with different `name` and `age` props:
```
<Greeting name="Alice" age={25} />
<Greeting name="Bob" age={30} />
```

#### 2. **In the Child Component (`Greeting`):**
- Props are received as the `props` object.
- They are accessed using `props.name` and `props.age`.
- The component dynamically renders the content based on the received props.

### **📝 Output on the Screen:**
```
Welcome to My App
Hello, my name is Alice and I am 25 years old.
Hello, my name is Bob and I am 30 years old.
```

## __📒 Destructuring Props:__
- Instead of accessing props through `props.name` or `props.age`, you can **destructure** them for cleaner code:
```
function Greeting({ name, age }) {
  return (
    <div>
      <p>Hello, my name is {name} and I am {age} years old.</p>
    </div>
  );
}
```

## __✒️ Props with Default Values:__
- You can provide default values for props using defaultProps:
```
function Greeting({ name, age }) {
  return (
    <div>
      <p>Hello, my name is {name} and I am {age} years old.</p>
    </div>
  );
}

Greeting.defaultProps = {
  name: "Guest",
  age: 20,
};
```
- If no props are passed, the default values will be used.

## ✅ Functional Example: Button with Props
- Imagine a reusable button component where the label and action are customizable:
### __➡️ Parent Component:__
```
import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <Button label="Click Me" handleClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
```

### __➡️ Child Component:__
```
import React from 'react';

function Button({ label, handleClick }) {
  return (
    <button onClick={handleClick}>{label}</button>
  );
}

export default Button;
```

## **✏️ Benefits of Using Props:**
1. **Reusability:** Components can be reused with different configurations.
2. **Separation of Concerns:** Parent components control the data and pass it to children.
3. **Dynamic Content:** Components render dynamically based on the props provided.