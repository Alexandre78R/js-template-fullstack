import { useRef } from "react";
import Counter from "../components/Counter";
import logo from "../assets/logo.svg";
import axios from "axios";

export default function Home() {
  const inputRef = useRef();
  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    console.log("inputRef.current.files[0]", inputRef.current.files[0]);
    formData.append("avatar", inputRef.current.files[0]);
    console.log("formData", formData);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/avatar`, formData);
  };

  return (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React !</p>

      <Counter />

      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p> */}

      <form enctype="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="monfichier" ref={inputRef} />
        <button type="submit">Envoyer</button>
      </form>
    </header>
  );
}
