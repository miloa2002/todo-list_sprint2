import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import Button from "./Button"
import Filter from "./Filter"
import GenerarId from "../GenerarId"
import axios from "axios"
import Swal from "sweetalert2"

const Form = ({ cambioImg }) => {

    const [todos, setTodos] = useState([])
    const [todoUser, setTodoUser] = useState("")
    const [cantidad, setCantidad] = useState(0)

    const API = axios.create({
        baseURL: "https://api-todo-amber.vercel.app"
    })

    useEffect(() => {
        API.get("/todos")
            .then((response) => {
                setTodos(response.data)
            })
    }, [todos])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (todoUser === "") {
            Swal.fire("Por favor incluye una tarea")
            return;
        }
        const tareas = {
            id: GenerarId(),
            nombreTodo: todoUser,
            completado: false,
        }
        console.log(tareas);
        setTodoUser("")
        setCantidad(cantidad + 1)
        await axios.post("https://api-todo-amber.vercel.app/todos", tareas)
        setTodos([tareas, ...todos])

        localStorage.setItem("todo", JSON.stringify(todos))
    }


    return (
        <>
            <form
                onSubmit={(handleSubmit)}
                className={cambioImg ? "w-1/2 flex items-center gap-3 absolute top-40 right-0 left-0 mx-auto formulario-bg  p-4 rounded" : "w-1/2 flex items-center gap-3 absolute top-40 right-0 left-0 mx-auto bg-white  p-4 rounded"}
                action=""
            >
                <Button />
                <input
                    value={todoUser}
                    onChange={e => setTodoUser(e.target.value)}
                    className={cambioImg ? "placeholder:text-lg outline-none border-none w-full bg-transparent text-white" : "placeholder:text-lg outline-none border-none w-full bg-transparent"}
                    type="text"
                    placeholder="Crea una nueva tarea..."
                />
            </form>
            <div className="absolute top-60 left-0 right-0 flex flex-col w-1/2 container mx-auto shadow-lg bg-white rounded">
                {todos.map(todo => <TodoList key={todo.id} todo={todo} cambioImg={cambioImg} setTodos={setTodos} todos={todos} cantidad={cantidad} setCantidad={setCantidad} />)}
                <Filter
                    cambioImg={cambioImg}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    setTodos={setTodos}
                    todos={todos}
                />
            </div>
        </>
    )
}

export default Form
