import completed from '../assets/icon-check.svg'
import drop from '../assets/icon-cross.svg'
import { useState } from 'react'
import axios from 'axios'

const TodoList = ({ cambioImg, todo, setTodos, todos, cantidad, setCantidad }) => {

    const [tachado, setTachado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setTachado(true)
        setCantidad(cantidad - 1 )
        todo.completado = true
    }
    
    
    const handleDelete = () => {
        axios
        .delete(`http://localhost:3000/todos/${todo.id}`)
        .then(res => {
            setTodos(todos.filter(i=>i.id !== todo.id))
        })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={cambioImg ? " flex items-center justify-between gap-3  p-4 border-b-2 formulario-bg formulario-color" : " flex items-center justify-between gap-3  p-4 border-b-2 bg-white"}
            >
                <div className='flex gap-3'>
                    <button
                        className="w-6 h-6 rounded-full flex items-center justify-center border-2  focus:bg-gradient-to-t from-purple-600 to-blue-600"
                        type="submit"
                    ><img src={completed} alt="" /></button>
                    {tachado ? <p className='line-through'>{todo.nombreTodo}</p> : <p>{todo.nombreTodo}</p>}
                </div>

                <div className="cursor-pointer">
                    <img
                        onClick={handleDelete}
                        src={drop}
                        alt="eliminar tarea"
                    />
                </div>
            </form>
        </>

    )
}

export default TodoList
