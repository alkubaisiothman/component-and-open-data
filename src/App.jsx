import './App.css';
import ComponentUI from './ComponentUI';
import OrderForm from './OrderForm';
import OpenData from './OpenData';

function App() {
    return (
        <>
            <ComponentUI image="/sunset.jpg" title="Welcome to  product page!" />
            <OrderForm />
            <OpenData />
        </>
    );
}

export default App;
