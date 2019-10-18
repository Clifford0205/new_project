import {
  INIT_LIST_ACTION,
  SEARCH_VALUE_CHANGE,
  CHANGE_INPUT_VALUE,
  SHOW_REGISTER_MODAL,
  CLOSE_REGISTER_MODAL,
  HANDLE_MODAL_FORM_INPUT_CHANGE,
  SHOW_EDIT_MODAL,
  LANGUAGE_CHANGE,
  PRODUCT_FILTER_CHANGE,
  HANDLE_INPUT_CHANGE,
  CLEAN_ALL_INPUT,
  PRODUCT_IN_LIST,
  PAGE_CHANGE,
  REGISTER_MODAL_SHOW,
  REGISTER_MODAL_CLOSE,
  LOGIN_MODAL_SHOW,
  LOGIN_MODAL_CLOSE,
  LOGOUT_MODAL_SHOW,
  LOGOUT_MODAL_CLOSE,
  CLEAN_STORAGE,
  LOGIN_STATE,
  CHANGE_IMG,
  PLUS_NUM,
  MINUS_NUM,
  CLEAN_RECIPIENT,
  ZONE_LOAD,
  ZONE_CHANGE,
  ZONE_STATE,
  CREDIT_CARD,
  PAY_WAY,
  NEW_RECIPIENT,
  LITTLE_TOTAL_TO_ZERO,
} from './actionTypes.js';

const defaultState = {
  inputValue: '',
  // 學生的資料，注意應該預設值是空陣列，而不是null或空物件
  list: [],
  //Modal的開關狀態
  chinese: false,
  showModal: false,
  // 控制是否讓學號(id)欄位變為不可變更(disabled)
  disableIdField: false,
  // 給跳出視窗中的表單欄位對照變動用的state
  // 預設資料應該為要處理的各種資料類型的初始值
  id: 0,
  name: '',
  birth: 0,
  // 搜尋用的字串，可控元件使用
  searchText: '',

  //窩窩專案
  productfilter: '',
  clientname: '',
  phonenumber: '',
  mail: '',
  message: '',
  productList: [],
  loading: false,
  currentPage: 1,
  postPerPage: 9,
  m_mail: '',
  m_password: '',
  m_repassword: '',
  m_name: '',
  m_mobile: '',
  m_birthday: '',
  showModalRegister: false,
  showModalLogin: false,
  showModalLogout: false,
  login_email: '',
  login_password: '',
  login_state: false,
  my_name: '',
  o_name: '',
  my_mail: '',
  my_pswd: '',
  my_mobile: '',
  my_birthday: '',
  my_cart: [],
  my_buy_record: [],
  my_id: '',
  old_password: '',
  new_password: '',
  new_password2: '',
  now_img: '',
  little_total: 0,
  Big_message: '',
  bigTotal: 0,
  new_recipient: false,
  recipient_name: '',
  recipient_mail: '',
  recipient_mobile: '',
  cityops: [],
  townops: [],
  delivery_city: '',
  delivery_town: '',
  recipient_road: '',
  card_number: '',
  valid_month: '',
  valid_year: '',
  back_num: '',
  pay_way: '',
  //窩窩專案
};

//reducer 可以接受state, 但絕不能修改state
export default (state = defaultState, action) => {
  //窩窩專案

  if (action.type === LITTLE_TOTAL_TO_ZERO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.little_total = 0;
    return newState;
  }

  if (action.type === NEW_RECIPIENT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.new_recipient = true;
    return newState;
  }

  if (action.type === PAY_WAY) {
    const newState = JSON.parse(JSON.stringify(state));
    for (var s in newState) {
      if (s === action.name) {
        newState[s] = action.value;
        if (action.value !== 'credit_card') {
          newState.card_number = '';
          newState.valid_month = '';
          newState.valid_year = '';
          newState.back_num = '';
        }
      }
    }

    return newState;
  }

  if (action.type === CREDIT_CARD) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.card_number = action.cardnum;
    return newState;
  }

  //存取地區進入state
  if (action.type === ZONE_STATE) {
    const newState = JSON.parse(JSON.stringify(state));
    for (var s in newState) {
      if (s === action.name) {
        newState[s] = action.value;
      }
    }
    return newState;
  }

  //換城市時更換地區
  if (action.type === ZONE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.townops = action.townops;
    return newState;
  }

  //載入預設地區
  if (action.type === ZONE_LOAD) {
    const newState = JSON.parse(JSON.stringify(state));
    // console.log(action.cityops);
    newState.cityops = action.cityops;
    newState.townops = action.townops;
    return newState;
  }

  if (action.type === CLEAN_RECIPIENT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.recipient_name = '';
    newState.recipient_mail = '';
    newState.recipient_mobile = '';
    newState.new_recipient = false;
    return newState;
  }

  if (action.type === PLUS_NUM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.little_total =
      state.little_total === 10 ? 10 : state.little_total + 1;
    return newState;
  }

  if (action.type === MINUS_NUM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.little_total =
      state.little_total === 0 ? 0 : state.little_total - 1;
    return newState;
  }

  if (action.type === CHANGE_IMG) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.now_img = action.now_img;
    return newState;
  }

  if (action.type === LOGIN_STATE) {
    const newState = JSON.parse(JSON.stringify(state));
    // console.log(action.userdata);
    newState.my_name = action.userdata.m_name;
    newState.o_name = action.userdata.m_name;
    newState.my_mail = action.userdata.m_mail;
    newState.my_pswd = action.userdata.m_password;
    newState.my_mobile = action.userdata.m_mobile;
    newState.my_birthday = action.userdata.m_birthday;
    newState.my_cart = action.userdata.shopping_cart;
    newState.my_id = action.userdata.id;
    newState.my_buy_record = action.userdata.buy_record;
    if (action.userdata.shopping_cart.length !== 0) {
      let l_total = action.userdata.shopping_cart.map(
        item => item.amount * item.price
      );
      let b_total = l_total.reduce((prev, element) => prev + element);
      newState.bigTotal = b_total;
    } else {
      newState.bigTotal = 0;
    }

    return newState;
  }

  if (action.type === CLEAN_STORAGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.my_name = '';
    newState.my_mail = '';
    newState.my_pswd = '';
    newState.my_mobile = '';
    newState.my_birthday = '';
    newState.my_id = '';
    return newState;
  }

  if (action.type === LOGOUT_MODAL_SHOW) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModalLogout = true;
    return newState;
  }

  if (action.type === LOGOUT_MODAL_CLOSE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModalLogout = false;
    return newState;
  }

  if (action.type === LOGIN_MODAL_SHOW) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModalLogin = true;
    return newState;
  }

  if (action.type === LOGIN_MODAL_CLOSE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModalLogin = false;
    return newState;
  }

  if (action.type === REGISTER_MODAL_SHOW) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModalRegister = true;
    return newState;
  }

  if (action.type === REGISTER_MODAL_CLOSE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModalRegister = false;
    return newState;
  }

  if (action.type === HANDLE_INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    for (var s in newState) {
      if (s === action.name) {
        newState[s] = action.value;
        // 注意：id(學號)與生日，需先轉為數字類型再進入state中
        if (action.name === 'm_birthday') action.value = +action.value;
        // console.log(s, newState[s]);
      }
    }
    return newState;
  }

  if (action.type === PRODUCT_FILTER_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.productfilter = action.id;
    newState.currentPage = 1;
    // console.log(newState);
    return newState;
  }

  if (action.type === CLEAN_ALL_INPUT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.clientname = '';
    newState.phonenumber = '';
    newState.mail = '';
    newState.message = '';
    newState.m_mail = '';
    newState.m_password = '';
    newState.m_repassword = '';
    newState.m_name = '';
    newState.m_mobile = '';
    newState.m_birthday = '';
    // console.log(newState);
    return newState;
  }

  if (action.type === PRODUCT_IN_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.productList = action.data;
    return newState;
  }

  if (action.type === PAGE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    // console.log(action.item);
    newState.currentPage = action.item;
    return newState;
  }

  //窩窩專案

  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === HANDLE_MODAL_FORM_INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    for (var r in newState) {
      if (r === action.name) {
        newState[r] = action.value;
        // 注意：id(學號)與生日，需先轉為數字類型再進入state中
        if (action.name === 'id' || action.name === 'birth')
          action.value = +action.value;
        // console.log(r, newState[r]);
      }
    }
    return newState;
  }

  if (action.type === LANGUAGE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.chinese = !state.chinese;
    // console.log(newState.chinese);
    return newState;
  }

  if (action.type === SEARCH_VALUE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.searchText = action.value;
    // console.log(newState.searchText);
    return newState;
  }

  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }

  if (action.type === SHOW_REGISTER_MODAL) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.disableIdField = false;
    newState.showModal = true;
    return newState;
  }

  if (action.type === SHOW_EDIT_MODAL) {
    const newState = JSON.parse(JSON.stringify(state));
    // console.log(action.id);
    const item = newState.list.find(item => item.id === action.id);
    // console.log(item);
    newState.id = item.id;
    newState.name = item.name;
    newState.birth = item.birth;
    newState.disableIdField = true;
    newState.showModal = true;
    return newState;
  }

  if (action.type === CLOSE_REGISTER_MODAL) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.showModal = false;
    newState.id = 0;
    newState.name = '';
    newState.birth = 0;
    return newState;
  }

  // console.log(state, action);
  return state;
};
