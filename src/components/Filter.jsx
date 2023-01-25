const Filter = ({ cambioImg, cantidad, setTodos, todos }) => {


  const handleCompletos = () => {
    const completados = todos.filter(todo => todo.completado)
    setTodos(completados)
  }

  const handleActivos = () => {
    const activos = todos.filter(todo => !todo.completado)
    setTodos(activos)

  }

  const handleTodos = () => {
    const todosJuntos = todos.filter(todo => todo.completado && !todo.completado)
    setTodos(todosJuntos)
  }


  return (
    <div className={cambioImg ? "items flex items-center justify-between p-4 formulario-bg formulario-color" : "items flex items-center justify-between p-4"}>
      <p>{cantidad} items left</p>
      <div className="filtro flex items-center gap-3">

        <button
          onClick={(handleTodos)}
          className="hover:text-black"
        >Todos</button>


        <button
          onClick={handleActivos}
          className="hover:text-black">Activo
        </button>


        <button
          onClick={handleCompletos}
          className="hover:text-black"
        >Completos</button>
      </div>

      <button
        className="hover:text-black"
      >Limpiar completados
      </button>


    </div>
  )
}

export default Filter
