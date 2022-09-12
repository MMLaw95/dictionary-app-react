import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>
            <a
              href="https://github.com/MMLaw95/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source
            </a>{" "}
            by <a href="mailto:mlawry95@gmail.com">M.M. Lawry</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
