import Todo from './components/Todo'
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
    return (<div>
            <h1>My Todos</h1>
            <Todo text='Read my books' />
            {/*        if i wanted multiple todos, I just need to replicate, like so:*/}
            <Todo text ='Finish this sprint' />
            <Todo text='Write more' />
            <Modal />
            <Backdrop />
        </div>
    );
}

export default App;
