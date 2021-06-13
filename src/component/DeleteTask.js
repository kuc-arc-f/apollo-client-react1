import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../graphql/task';
import { render } from '@testing-library/react';

function DeleteTask() {
  let input;
  const [RemoveTask, { data }] = useMutation(DELETE_TASK);

  return (
    <div>
      <hr />
      <h3>Delete</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          RemoveTask({ variables: { id: 5 } });
console.log(input.value)
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
export default DeleteTask;
