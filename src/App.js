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
