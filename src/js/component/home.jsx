import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [listaTarea, setlistaTarea] = useState([]);
	const [tareas, setTareas] = useState('')

	const handlekeyDown = (event) => {
		if (event.key === 'Enter') {
			const text = tareas.trim();
			if (text !== '') {
				setlistaTarea([...listaTarea, text])
				setTareas('')
			}
		}
	}

	const handleDelete = (index) => {
		const newTasks = listaTarea.filter((_, taskIndex) => taskIndex !== index);
		setlistaTarea(newTasks);
	};
	const tasksLeft = listaTarea.length

	return (
		<div className="baseLista">
			<div className="lista">
				<input type="text" placeholder="Que Necesitas Hacer?" value={tareas} onChange={(e) => setTareas(e.target.value)} onKeyDown={handlekeyDown} />
				<div className="pendientes">
					{listaTarea.map((text, index) => (
						<div className="txt">
							<div className="estiloTarea" key={index}>{text}</div>
							<button className="delete-button" onClick={() => handleDelete(index)}>X</button>
						</div>


					))}

				</div>
				<div className="footer">{tasksLeft} tarea{tasksLeft !== 1 ? 's' : ''} restantes</div>
			</div>
		</div>
	);
};

export default Home;
