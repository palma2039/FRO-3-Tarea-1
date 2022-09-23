import React from "react";

export const ConsumirAPIFunciones = () => {
    const [data, setData] = React.useState([]);

    async function getTodos() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const dataFromAPI = await response.json();
        setData(dataFromAPI);
    }

  React.useEffect(() => {
    getTodos();    
  }, []);
  
  return <div>
                <ul>
                    {data.map((todo) => (
                    <li>
                        <p><b>ID:</b> {todo.id}</p>
                        <p><b>Titulo:</b> {todo.title}</p>
                    </li>
                    ))}
                </ul>  
        </div>;
};