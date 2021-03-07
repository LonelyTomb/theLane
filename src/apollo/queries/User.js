import {gql} from '@apollo/client';

export default class UserQueries {
  static getUser() {
    return gql`
      query GetUser {
        User @client {
          email
        }
      }
    `;
  }
}
