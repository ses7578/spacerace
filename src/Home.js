import logo from './logo.svg';
import { useHistory } from "react-router";
import './App.css';

function Home() {
    let history = useHistory();

    function clickFile() {
        history.push("/test");
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is the home page
                </p>
                <button onClick = {clickFile}>Go to Test File</button>
            </header>
        </div>
    );
}

export default Home;
