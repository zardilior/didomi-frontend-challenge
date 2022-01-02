import logo from '../resources/logo.svg';
import './MainLayout.css';
function MainLayout() {
  return (
    <div className="MainLayout">
      <header className="MainLayout-header">
        <img src={logo} className="MainLayout-logo" alt="logo" />
        <p>
          Edit <code>src/MainLayout.js</code> and save to reload.
        </p>
        <a
          className="MainLayout-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainLayout;
