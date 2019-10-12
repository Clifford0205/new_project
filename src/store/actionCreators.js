import {
  CHANGE_INPUT_VALUE,
  SEARCH_VALUE_CHANGE,
  ADD_STUDENT_ITEM,
  EDIT_STUDENT_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  SHOW_REGISTER_MODAL,
  CLOSE_REGISTER_MODAL,
  HANDLE_MODAL_FORM_INPUT_CHANGE,
  GET_INIT_LIST,
  SHOW_EDIT_MODAL,
  LANGUAGE_CHANGE,
  CASE_FILTER_CHANGE,
  HANDLE_INPUT_CHANGE,
  HANDLE_FORM_SEND,
  CLEAN_ALL_INPUT,
  GET_PRODUCT,
  PRODUCT_IN_LIST,
  PAGE_CHANGE,
  MEMBER_REGISTER,
  REGISTER_MODAL_SHOW,
  REGISTER_MODAL_CLOSE,
  LOGIN_MODAL_SHOW,
  LOGIN_MODAL_CLOSE,
  LOGOUT_MODAL_SHOW,
  LOGOUT_MODAL_CLOSE,
  CLEAN_STORAGE,
  MEMBER_LOGIN,
  LOGIN_STATE,
  EDIT_MEMBER,
  EDIT_PASSWORD,
  CHANGE_IMG,
  PLUS_NUM,
  MINUS_NUM,
  BIG_MESSAGE,
  LITTLE_MESSAGE,
  ADD_CART,
  DELETE_CART,
  CLEAN_RECIPIENT,
  ZONE_LOAD,
  ZONE_CHANGE,
  ZONE_STATE,
  CREDIT_CARD,
} from './actionTypes.js';

//窩窩專案的

export const cardNumberAction = cardnum => ({
  type: CREDIT_CARD,
  cardnum,
});

export const zoneSaveAction = (value, name) => ({
  type: ZONE_STATE,
  value,
  name,
});
export const zoneChangeAction = townops => ({
  type: ZONE_CHANGE,
  townops,
});

export const loadZoneAction = (cityops, townops) => ({
  type: ZONE_LOAD,
  cityops,
  townops,
});

export const cleanRecipientAction = () => ({
  type: CLEAN_RECIPIENT,
});
export const deleteCartAction = delItem => ({
  type: DELETE_CART,
  delItem,
});

export const addCartAction = cart_data => ({
  type: ADD_CART,
  cart_data,
});

export const littleMsgAction = little_message => ({
  type: LITTLE_MESSAGE,
  little_message,
});

export const bigMessageAction = big_message => ({
  type: BIG_MESSAGE,
  big_message,
});

export const plusNumAction = () => ({
  type: PLUS_NUM,
});

export const minusNumAction = () => ({
  type: MINUS_NUM,
});

export const changeImgAction = now_img => ({
  type: CHANGE_IMG,
  now_img,
});

export const editPasswordAction = edit_pswd => ({
  type: EDIT_PASSWORD,
  edit_pswd,
});

export const editMemberAction = edit_data => ({
  type: EDIT_MEMBER,
  edit_data,
});

export const checkLoginState = userdata => ({
  type: LOGIN_STATE,
  userdata,
});

export const cleanlocalstorage = () => ({
  type: CLEAN_STORAGE,
});

export const memberLoginAction = login_data => ({
  type: MEMBER_LOGIN,
  login_data,
});

export const logoutModalShowAction = () => ({
  type: LOGOUT_MODAL_SHOW,
});

export const logoutModalCloseAction = () => ({
  type: LOGOUT_MODAL_CLOSE,
});

export const loginModalShowAction = () => ({
  type: LOGIN_MODAL_SHOW,
});

export const loginModalCloseAction = () => ({
  type: LOGIN_MODAL_CLOSE,
});

export const memberModalShowAction = () => ({
  type: REGISTER_MODAL_SHOW,
});

export const memberModalCloseAction = () => ({
  type: REGISTER_MODAL_CLOSE,
});

export const memberRegisterAction = m_data => ({
  type: MEMBER_REGISTER,
  m_data,
});

export const setCaesfilter = id => ({
  type: CASE_FILTER_CHANGE,
  id,
});

export const InputChangeAction = (value, name) => ({
  type: HANDLE_INPUT_CHANGE,
  value,
  name,
});

export const sendmessageAction = item => ({
  type: HANDLE_FORM_SEND,
  item,
});

export const cleanInputAction = () => ({
  type: CLEAN_ALL_INPUT,
});

export const getProducteAction = () => ({
  type: GET_PRODUCT,
});

export const ProductInListActopn = data => ({
  type: PRODUCT_IN_LIST,
  data,
});

export const paginateChangeAction = item => ({
  type: PAGE_CHANGE,
  item,
});

//窩窩專案的

export const languageChangeAction = () => ({
  type: LANGUAGE_CHANGE,
});

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const searchChangeAction = value => ({
  type: SEARCH_VALUE_CHANGE,
  value,
});

export const modalInputChangeAction = (value, name) => ({
  type: HANDLE_MODAL_FORM_INPUT_CHANGE,
  value,
  name,
});

export const DeleteItemAction = item => ({
  type: DELETE_TODO_ITEM,
  item,
});

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data,
});

export const showregistermodal = () => ({
  type: SHOW_REGISTER_MODAL,
});

export const closeRegisterModal = () => ({
  type: CLOSE_REGISTER_MODAL,
});

export const getInitList = () => ({
  type: GET_INIT_LIST,
});

export const addItemAction = item => ({
  type: ADD_STUDENT_ITEM,
  item,
});

export const editItemAction = newData => ({
  type: EDIT_STUDENT_ITEM,
  newData,
});

export const showEditModal = id => ({
  type: SHOW_EDIT_MODAL,
  id,
});
