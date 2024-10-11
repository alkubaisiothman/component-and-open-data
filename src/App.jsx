import './App.css';
import ComponentUI from './ComponentUI';
import OrderForm from './OrderForm';
import AppRouter from './AppRouter';

function App() {
    return (
        <>
            <ComponentUI image="/sunset.jpg" title="Welcome to product page!" />
            <OrderForm />
            <AppRouter />
        </>
    );
}

export default App;