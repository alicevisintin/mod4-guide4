import React from "react";
import HamburgerMenu from "./HamburgerMenu";

function App() {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div>
      <HamburgerMenu
        menuItems={menuItems}
        backgroundColor="#f8f8f8"
        iconColor="#333"
        iconSize="40px"
        transitionDuration={0.4}
      />
    </div>
  );
}

export default App;

import React from "react";
import Weather from "./weather.tsx";

const App: React.FC = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  );
};

export default App;
