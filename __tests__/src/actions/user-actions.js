import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  CLEAN_USER_AUTHENTICATION_ERRORS,
  USER_AUTHENTICATED,
  USER_ERRORS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_SENDING_DATA,
  USER_SET,
  VISITOR_LOGIN
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import {
  asyncUserLogin,
  asyncUserLogout,
  visitorLogin,
  userSet,
  userErrors,
  userSendingData,
  userLogin,
  userLogout
} from '../../../src/actions/user-actions';

describe("User Actions", () => {
  it("Set the entire user to the reducer", () => {
    const userData = {
      ...initialState.user,
      id: 1, name: 'user test', email: 'testing@email.com', password: 'testingPassword'
    };

    const reducerAction = userSet(userData);

    expect(reducerAction.type).to.equal(USER_SET);
    expect(reducerAction.user.id).to.equal(userData.id);
    expect(reducerAction.user.name).to.equal(userData.name);
    expect(reducerAction.user.email).to.equal(userData.email);
    expect(reducerAction.user.password).to.equal(userData.password);

  });

  it("Set the user errors to the reducer", () => {
    const errorData = {
      name: ["Can't be blank"],
      email: ["Can't be blank"],
      password: ["Can't be blank"]
    };

    const reducerAction = userErrors(errorData);



    expect(reducerAction.type).to.equal(USER_ERRORS);
    expect(reducerAction.errors.name).to.contains(errorData.name[0]);
    expect(reducerAction.errors.email).to.contains(errorData.email[0]);
    expect(reducerAction.errors.password).to.contains(errorData.password[0]);
  });

  it("Set the user sending data to the reducer", () => {
    const sendingData = true;

    const reducerAction = userSendingData(sendingData);

    expect(reducerAction.type).to.equal(USER_SENDING_DATA);
    expect(reducerAction.sendingData).to.equal(sendingData);
  });

  it("Sets a visitor", () => {
    const isVisitor = true;

    const reducerAction = visitorLogin(isVisitor);

    expect(reducerAction.type).to.equal(VISITOR_LOGIN);
    expect(reducerAction.isVisitor).to.equal(isVisitor);
  });

  it("Logs in an user", () => {
    const userData = {
      email: 'testing@email.com', password: 'testingPassword'
    };

    const reducerAction = userLogin(userData);

    expect(reducerAction.type).to.equal(USER_LOGIN);
    expect(reducerAction.user.email).to.equal(userData.email);
    expect(reducerAction.user.password).to.equal(userData.password);
    expect(reducerAction.user.isVisitor).to.equal(false);
  });

  it("Logs out an user", () => {

    const reducerAction = userLogout();

    expect(reducerAction.type).to.equal(USER_LOGOUT);
    expect(reducerAction.user.email).to.equal('');
    expect(reducerAction.user.password).to.equal('');
    expect(reducerAction.user.isVisitor).to.equal(false);
  });

});