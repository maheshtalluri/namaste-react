import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "h1 tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "h1 tag Mahesh"),
//     React.createElement("h2", {}, "h2 tag"),
//   ]),
// ]);

const title = (
  <h1 className="heading" tabIndex="5">
    Namaste React fron JSX 🚀
  </h1>
);

//React functional Components

const HeadingComponent = () => {
  return (
    <div>
      {title}
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
