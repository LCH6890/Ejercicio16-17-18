import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { useList } from '../../hooks/useList';
import { TareasFormik } from '../TareasFormik';

 const Tasklist = () => {

    const defaultTask = {
      name: '',
      description: '',
      level: LEVELS.URGENT,
      done: false,
    };

    const tasks = useList([defaultTask]);

    return (
      <div>
      <h1>Task List</h1>
        <TareasFormik onAdd={(values) => tasks.push(values)} />
        {tasks.isEmpty() ? (
          <p>Task List is Empty</p>
          ) : (
          tasks.value.map((task, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }} role="button">
              <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
              <p>{task.description}</p>
            </div>
          ))
        )}
    </div>
  );
};

export default Tasklist;