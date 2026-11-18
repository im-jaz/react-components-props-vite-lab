// Header Component
// Displays the blog title.
// Receives the name prop from App.jsx.

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;