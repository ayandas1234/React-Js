## ✍️ there is two way to use `npm create vite@latest` 
**1. first method -->>**
- run the `npm create vite@latest` command in terminal
- then enter the `project-name` which is basically folder name
- then choose the `framework` as `react`
- then choose the `variant` as `javascript`
- and it finally create the app and necessary files

__2. second method -->>__
- run the `npm create vite@latest` command in terminal
- then enter the `project-name` as `Dot(.)`
- then enter the `package-name` as `Parent-Folder-name`
- then choose the `framework` as `react`
- then choose the `variant` as `javascript`
- and it finally create the app and necessary files


### 👉 `code -r folder_name` -->> using this commad we can directly open vs code for particular folder 

# 🚀 `<StrictMode>` in react
### __🔧 [why use StrictMode](https://chatgpt.com/share/675af8db-11f4-8011-be60-9bf69d1c0d20)__

#### The useEffect hook in React lets you perform side effects in function components. Here's a breakdown of its usage: 
**What is a side effect?**
- A side effect is any operation that affects something outside the scope of the function it's called in. Examples include:
    - Fetching data from an API
    - Updating the DOM directly
    - Setting up subscriptions or timers
    - Logging to the console


# ✅ UseEffect Hook
- This is a Basic UseEffect Hook Template
```
useEffect(() => {
    alert("Hey Welcome To My Page")
  }, [])
```
- The useEffect Hook in React is a fundamental tool for handling side effects in functional components. It lets you perform operations like data fetching, subscriptions, or manually updating the DOM in response to changes in state or props.

### __❇️ Syntax:-__
```
useEffect(() => {
  // Effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

### __❇️ Parameters:-__  
**1. Effect Function:** A function where you perform your side effects. It can optionally return a cleanup function to clean up resources like timers, subscriptions, or event listeners.  
**2. Dependencies Array (optional):** A list of variables that the effect depends on. The effect re-runs whenever any dependency changes. If omitted, the effect runs after every render.

➡️ __Common Usage Patterns:-__  
__1. Run on Every Render:__ If no dependencies array is provided, the effect runs after every render.  
```
useEffect(() => {
  console.log('Component rendered');
});
```
__2. Run Once on Mount:__ Pass an empty dependencies array to run the effect only once when the component is mounted.  
```
useEffect(() => {
  console.log('Component mounted');
}, []);
```
__3. Run on Dependency Change:__ Include specific variables in the dependencies array. The effect runs whenever those variables change.  
```
useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);
```
__4. Cleanup:__ Return a cleanup function to clean up resources or prevent memory leaks.  
```
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Interval running');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('Interval cleared');
  };
}, []);
```

### __📝 Key Points:-__
- **Always Declare Dependencies:** React warns if dependencies are missing. This ensures the effect behaves predictably.
- **Avoid Unnecessary Re-Runs:** Use a dependency array to optimize performance by controlling when the effect runs.
- **Sync with the Lifecycle:** `useEffect` combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.

#### 🖌 All The below code are same if we write anything inside curley braces `<Navbar color={cyan}/>` or inside the invited comma `<Navbar color="cyan"/>` or using both `<Navbar color={"cyan"}/>` all are treated as `javascript code`
```
<Navbar color={cyan}/>
<Navbar color="cyan"/>
<Navbar color={"cyan" + "blue"}/>
```

unmounted
```
useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    } -->> whenever we want to delete any coponent from rendering then we write this return statement using this statement we can unmounted any component
  }, [])
  ```
  conditional rerendering

  #### NOTE:- Whenwver state is changing then Re-reder is triggered

  #### [More About UseRef](https://react.dev/reference/react/useRef)