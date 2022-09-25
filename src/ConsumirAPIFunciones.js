import React from "react";
import { ItemTodo } from "./ItemTodo";

export const ConsumirAPIFunciones = () => {
    const [cargando, setCargando] = React.useState(true);
    const [todos, setTodos] = React.useState([]);
    const [usuarios, setUsuarios] = React.useState([]);

    async function getData() {
        try{
            const [respuestaTodos, respuestaUsuarios] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/todos"),
                fetch("https://jsonplaceholder.typicode.com/users"),
              ]);
        
              const [datosTodos, datosUsuarios] = await Promise.all([
                respuestaTodos.json(),
                respuestaUsuarios.json(),
              ]);

              setTodos(datosTodos);
              setUsuarios(datosUsuarios);
              setCargando(false);
        }catch(error){
            console.log(error);
        }       
    }

  React.useEffect(() => {
    getData();    
  }, []);

  const getUsuarioPorId = (id) => {
    return usuarios.find((usuario) => usuario.id === id);
  };
  
  return (
    <div>
        {cargando ? (
            <p>Cargando datos del API. Espere....</p>
            ) : (
            <ul>
                {todos.map((todo) => (
                    <ItemTodo 
                        key={todo.id}
                        todo={todo}
                        usuario={getUsuarioPorId(todo.userId)}
                    />                
                ))}
            </ul>  
            )}
    </div>);
};