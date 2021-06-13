import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../graphql/task';
import { render } from '@testing-library/react';

function UpdateTask() {
  let input;
  const [UpdateTask, { data }] = useMutation(UPDATE_TASK);

  return (
    <div>
      <hr />
      <h3>Update</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          UpdateTask({ variables: { id: 3 , title: input.value } });
console.log(input.value)
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default UpdateTask;