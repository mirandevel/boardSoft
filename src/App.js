import AppRouter from "./routers/AppRouter";
import AuthProvider from "./middlewares/AuthProvider";
import FirestoreProvider from "./firebase/FirestoreProvider";

function App() {
    return (
        <AuthProvider>
                <AppRouter/>
        </AuthProvider>


    );
}

export default App;
