import React, { Component, Suspense } from "react";
import "./App.css";
import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";
// import AsyncComponent from "./components/AsyncComponent";

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
      const Page2 = React.lazy(() => import("./components/Page2"));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2 onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }

    if (this.state.route === "page3") {
      const Page3 = React.lazy(() => import("./components/Page3"));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3 onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
