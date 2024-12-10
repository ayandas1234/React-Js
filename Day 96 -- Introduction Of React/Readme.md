# Why React?
- We can use states which means that once we update the state variable, it changes across the page
- We can split our app into multiple components and reuse those components
- React uses a virtual DOM to efficiently update the UI which is better than updating content using DOM Manipulation
- Debugging and maintainance is easy


```<script>
        setTimeout(() => {
            document.querySelector(".box1").innerHTML = "Hey"
        }, 1000); -->> This Change the cotent of box 1 after 1 second

        setTimeout(() => {
            document.querySelector(".box2").innerHTML = "Hi"
        }, 2000); -->> This Change the cotent of box 1 after 2 second

        setTimeout(() => {
            document.querySelector(".box3").innerHTML = "Hello"
        }, 3000); -->> This Change the cotent of box 1 after 3 second
    </script>
```
