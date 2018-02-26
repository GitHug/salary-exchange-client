export const CHANGE_CURRENCY = 'exchange/CHANGE_CURRENCY';
export const CHANGE_REFERENCE_CURRENCY = 'exchange/CHANGE_REFERENCE_CURRENCY';
export const ADD_SALARY = 'exchange/ADD_SALARY';
export const FETCH_EXCHANGE_RATES = 'exchange/EXCHANGE_RATES_REQUESTED';
export const CHANGE_PERIOD = 'exchange/CHANGE_PERIOD';

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

export const fetchExchangeRates = () => dispatch =>
  dispatch({
    type: FETCH_EXCHANGE_RATES,
  });


export const changePeriod = period => dispatch =>
  dispatch({
    type: CHANGE_PERIOD,
    payload: {
      period,
    },
  });
