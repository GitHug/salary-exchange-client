export const CHANGE_CURRENCY = 'exchange/CHANGE_CURRENCY';
export const CHANGE_REFERENCE_CURRENCY = 'exchange/CHANGE_REFERENCE_CURRENCY';
export const ADD_SALARY = 'exchange/ADD_SALARY';
export const EXCHANGE_RATES_REQUESTED = 'exchange/EXCHANGE_RATES_REQUESTED';
export const EXCHANGE_RATES_RETRIEVED = 'exchange/EXCHANGE_RATES_RETRIEVED';

export const changeCurrency = currency => dispatch =>
  dispatch({
    type: CHANGE_CURRENCY,
    payload: {
      currency,
    },
  });

export const changeReferenceCurrency = currency => dispatch =>
  dispatch({
    type: CHANGE_REFERENCE_CURRENCY,
    payload: {
      currency,
    },
  });

export const addSalary = salary => dispatch =>
  dispatch({
    type: ADD_SALARY,
    payload: {
      salary,
    },
  });

export const fetchExchangeRates = () => (dispatch) => {
  dispatch({
    type: EXCHANGE_RATES_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: EXCHANGE_RATES_RETRIEVED,
    });
  }, 3000);
};
