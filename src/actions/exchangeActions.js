export const CHANGE_CURRENCY = 'exchange/CHANGE_CURRENCY';
export const CHANGE_REFERENCE_CURRENCY = 'exchange/CHANGE_REFERENCE_CURRENCY';
export const ADD_SALARY = 'exchange/ADD_SALARY';
export const CHANGE_PERIOD = 'exchange/CHANGE_PERIOD';
export const SWAP_CURRENCY = 'exchange/SWAP_CURRENCY';

export const changeCurrencyFrom = currency => dispatch =>
  dispatch({
    type: CHANGE_CURRENCY,
    payload: {
      currency,
    },
  });

export const changeCurrencyTo = currency => dispatch =>
  dispatch({
    type: CHANGE_REFERENCE_CURRENCY,
    payload: {
      currency,
    },
  });

export const swapCurrency = () => dispatch =>
  dispatch({
    type: SWAP_CURRENCY,
  });

export const addSalary = salary => dispatch =>
  dispatch({
    type: ADD_SALARY,
    payload: {
      salary,
    },
  });

export const changePeriod = period => dispatch =>
  dispatch({
    type: CHANGE_PERIOD,
    payload: {
      period,
    },
  });
