// class ParentComponent extends React.Component {
//   parentMethod() {
//     console.log("Parent method");
//   }
// }

// class ChildComponent extends ParentComponent {
//   render() {
//     this.parentMethod(); // can call parent method
//     return <h1>Child</h1>;
//   }
// }

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let userName = "Prashant";
  callback(userName); // Call the callback function
}

processUser(greet); // Output: Hello Prashant


