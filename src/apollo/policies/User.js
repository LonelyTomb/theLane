import {makeVar} from '@apollo/client';

export const user = makeVar({isLoggedIn: false, email: '', _id: ''});

export default {
  read() {
    return user();
  },
};
