import React , {useState , useEffect} from 'react';
import axios from 'axios';
function Table() {
   //// console.log(props);
   /// const {name , age} = props; // This will print the object in the Heading component
   /// const { title , completed } = props.todo; // This will print the object in the Heading component
   // // console.log(props); // This will print the text in the Heading component

    const [todos, setTodos] = useState ([])

    function getTodos(){
        // console.log('testing functions')
        axios({
            method : 'GET',
            url : 'http://localhost:3000/todos'
        })
            .then(todos =>{
                //  console.log(todos.data)
                setTodos(todos.data)
            }).catch(err =>{
            console.log(err)
        })
    }

    useEffect(() => {
        getTodos()
        //  console.log('use Efect jalan')
    }, [])
    return (
        <div className="App-table">
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo => {
                        return (
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{JSON.stringify(todo.completed)}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table;

