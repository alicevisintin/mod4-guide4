import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const App = () => {
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <div className="App">
      <header>
        <HamburgerMenu
          links={navLinks}
          iconColor="#ff5733"
          menuBackground="#333"
        />
      </header>
      <main>
        <h1>Welcome to My Custom Hamburger Menu</h1>
        <p>Enjoy a customizable hamburger menu with hover effects using React!</p>
      </main>
    </div>
  );
};

export default App;
