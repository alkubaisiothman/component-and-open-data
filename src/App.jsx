import './App.css';
import ComponentUI from './ComponentUI';
import OrderForm from './OrderForm';

function App() {
    return (
        <>
            <ComponentUI image="/sunset.jpg" title="Welcome to the product page!" />
            <OrderForm />
        </>
    );
}

export default App;
