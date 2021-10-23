import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./middlewares/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    );
}

export default App;
