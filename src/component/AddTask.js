import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../graphql/task';
import { render } from '@testing-library/react';

function AddTask() {
  let input;
  const [addTask, { data }] = useMutation(ADD_TASK);

  return (
    <div>
      <h3>Add</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTask({ variables: { title: input.value , content: "c99" } });
console.log(input.value)
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
export default AddTask;