import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_INIT_LIST,
  ADD_STUDENT_ITEM,
  EDIT_STUDENT_ITEM,
  DELETE_TODO_ITEM,
  HANDLE_FORM_SEND,
  GET_LUNG_CASE,
} from './actionTypes.js';
import {
  initListAction,
  closeRegisterModal,
  cleanInputAction,
  LungInListAction,
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
  //窩窩專案
}

export default mySaga;
