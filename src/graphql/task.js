
import { gql, useMutation } from '@apollo/client';

export const ADD_TASK = gql`
  mutation ($title: String!, $content: String!) {
    insert_tasks(objects: { title: $title , content: $content }) {
      affected_rows
      returning {
        id
        title 
      }
    }
  }
`;

export const UPDATE_TASK = gql`
mutation UpdateTask($id: Int!, $title : String!) {
  update_tasks(
    where: { id: { _eq: $id } }
    _set: { title: $title }
  ) {
    affected_rows
  }
}
`;

export const DELETE_TASK = gql`
mutation RemoveTask ($id: Int!) {
  delete_tasks(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`;

