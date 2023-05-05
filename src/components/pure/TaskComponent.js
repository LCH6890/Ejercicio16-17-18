import React from 'react';
import PropTypes from 'prop-types';
import { tasks } from '../../models/tasks';

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h2>
                Apellido: { task.surname }
            </h2>
            <h3>
                Email: { task.email }
            </h3>
            <h4>
                Nivel: { task.level }
            </h4>
            <h5>
                Este usuario está: { task.completed ? 'CONTACTO EN LINEA':'CONTACTO NO DISPONIBLE' }
            </h5>

        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(tasks)
};


export default TaskComponent;
