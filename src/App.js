import React, { Component, Suspense } from "react";
import "./App.css";
import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";
// import AsyncComponent from "./components/AsyncComponent";
const Page2lazy = React.lazy(() => import("./components/Page2"));
const Page3lazy = React.lazy(() => import("./components/Page3"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "page1",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route });
  };

  render() {
    // if (this.state.route === "page1")
    //   return <Page1 onRouteChange={this.onRouteChange} />;

    // return <this.state.component onRouteChange={this.onRouteChange} />;

    if (this.state.route === "page1")
      return <Page1 onRouteChange={this.onRouteChange} />;

    if (this.state.route === "page2") {
      // const AsyncPage2 = AsyncComponent(() => import("./components/Page2"));
      // return <AsyncPage2 onRouteChange={this.onRouteChange} />;
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }

    if (this.state.route === "page3") {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
