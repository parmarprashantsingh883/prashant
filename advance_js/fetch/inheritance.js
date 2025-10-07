class ParentComponent extends React.Component {
  parentMethod() {
    console.log("Parent method");
  }
}

class ChildComponent extends ParentComponent {
  render() {
    this.parentMethod(); // can call parent method
    return <h1>Child</h1>;
  }
}
