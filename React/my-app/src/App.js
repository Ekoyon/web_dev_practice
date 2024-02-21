import Todo from './components/Todo'

function App() {
    return (<div>
            <h1>My Todos</h1>
            <Todo text='Read my books' />
            {/*        if i wanted multiple todos, I just need to replicate, like so:*/}
            <Todo text ='Finish this sprint' />
            <Todo text='Write more' />
        </div>
    );
}

export default App;
