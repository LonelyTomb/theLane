import {gql} from '@apollo/client';

export default class UserMutations {
  static loginUser() {
    return gql`
      mutation Login($email: String!, $password: String!) {
        login(
          email: $email
          password: $password
          input: {email: $email, password: $password}
        ) @rest(type: "User", path: "/signin", method: "POST") {
          user {
            _id
            email
          }
        }
      }
    `;
  }
}
