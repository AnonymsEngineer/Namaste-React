const heading = React.createElement("h1", {}, "Hello World from React!");  // unlike JS in react create element takes 3 arguements, first one being the tag(element) to be created, second one being "THE OBJECT" and the last one works similar to innerHTML function in JS.

const root = ReactDOM.createRoot(document.getElementById("root"));  // React deals with creation of elements but as we know DOM manipulation part is handled by ReactDOM hence creating a root node is also a ReactDOM function. 

root.render(heading);  // To render the heading in our root 
