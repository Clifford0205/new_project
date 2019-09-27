import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_INIT_LIST,
  ADD_STUDENT_ITEM,
  EDIT_STUDENT_ITEM,
  DELETE_TODO_ITEM,
  HANDLE_FORM_SEND,
  GET_LUNG_CASE,
  MEMBER_REGISTER,
  MEMBER_LOGIN,
} from './actionTypes.js';
import {
  initListAction,
  closeRegisterModal,
  cleanInputAction,
  LungInListAction,
  memberModalCloseAction,
  checkLoginState,
} from './actionCreators';

//窩窩專案

//拿到首頁文章
function* getInitList() {
  try {
    const response = yield fetch('http://localhost:5555/article', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    // if (!response.ok) throw new Error(response.statusText);
    const jsonObject = yield response.json();
    jsonObject.reverse();
    const action = initListAction(jsonObject);
    console.log(action);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

//送出顧客意見
function* saveclientmessage(newItem) {
  console.log(newItem.item);
  try {
    const data = newItem.item;
    const response = yield fetch('http://localhost:5555/clientmessage', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const jsonObject = yield response.json();

    console.log(jsonObject);
    yield alert('您的意見已經提交');
    const action = cleanInputAction();
    console.log(action);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

//拿到肺部資料
function* getLungCaseInstate() {
  try {
    const response = yield fetch('http://localhost:5555/lungcase', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    // if (!response.ok) throw new Error(response.statusText);
    const jsonObject = yield response.json();
    jsonObject.reverse();
    const action = LungInListAction(jsonObject);
    console.log(action);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* addMemberAction(newItem) {
  console.log(newItem.m_data);
  try {
    const data = newItem.m_data;
    const response = yield fetch('http://localhost:5555/memberdata', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const jsonObject = yield response.json();

    console.log(jsonObject);
    yield alert('註冊成功');
    let action = '';
    action = cleanInputAction();
    // console.log(action);
    yield put(action);
    action = memberModalCloseAction();
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* MemberLogin(newItem) {
  try {
    const mail = newItem.login_data.login_email;
    const pswd = newItem.login_data.login_password;
    const response = yield fetch(
      'http://localhost:5555/memberdata?m_mail=' + mail + '&m_password=' + pswd,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    );
    // if (!response.ok) throw new Error(response.statusText);
    const jsonObject = yield response.json();
    yield console.log(jsonObject);
    if (jsonObject.length !== 0) {
      alert('對');
      localStorage.setItem('user', jsonObject[0].m_name);
      console.log(localStorage.getItem('user'));
      let login_user = localStorage.getItem('user');
      const action = checkLoginState(login_user);
      yield put(action);
    } else {
      alert('錯');
    }
  } catch (e) {
    console.log(e);
  }
}
//窩窩專案

function* addItemAction(newItem) {
  console.log(newItem);
  console.log(newItem.item);
  try {
    const data = newItem.item;

    const response = yield fetch('http://localhost:5555/students', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const jsonObject = yield response.json();

    console.log(jsonObject);
    yield getInitList();
    const action = closeRegisterModal();
    yield put(action);
    // console.log(action);
    // yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* deleteItem(newItem) {
  try {
    const data = newItem.item.id;
    console.log(data);
    const response = yield fetch('http://localhost:5555/students/' + data, {
      method: 'DELETE',
    });
    const jsonObject = yield response.json();

    console.log(jsonObject);
    yield getInitList();
    // console.log(action);
    // yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* editItem(newItem) {
  console.log(newItem.newData);
  try {
    const studentID = newItem.newData.id;
    const data = newItem.newData;

    const response = yield fetch(
      'http://localhost:5555/students/' + studentID,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    );
    const jsonObject = yield response.json();

    console.log(jsonObject);
    yield getInitList();
    const action = closeRegisterModal();
    yield put(action);
    // console.log(action);
    // yield put(action);
  } catch (e) {
    console.log(e);
  }
}

//generator 函數
function* mySaga() {
  yield takeEvery(ADD_STUDENT_ITEM, addItemAction);
  yield takeEvery(DELETE_TODO_ITEM, deleteItem);
  yield takeEvery(EDIT_STUDENT_ITEM, editItem);

  //窩窩專案
  yield takeEvery(GET_INIT_LIST, getInitList);
  yield takeEvery(HANDLE_FORM_SEND, saveclientmessage);
  yield takeEvery(GET_LUNG_CASE, getLungCaseInstate);
  yield takeEvery(MEMBER_REGISTER, addMemberAction);
  yield takeEvery(MEMBER_LOGIN, MemberLogin);
  //窩窩專案
}

export default mySaga;
