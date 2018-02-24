import * as actions from '../actions/exchangeActions';

const initialState = {
  salary: 5000,
  currency: 'EUR',
  referenceCurrency: 'USD',
  exchangeRatesRequested: false,
  exchangeRates: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
      };
    case actions.CHANGE_REFERENCE_CURRENCY:
      return {
        ...state,
        referenceCurrency: action.payload.currency,
      };
    case actions.ADD_SALARY:
      return {
        ...state,
        salary: action.payload.salary,
      };
    case actions.EXCHANGE_RATES_REQUESTED:
      return {
        ...state,
        exchangeRatesRequested: true,
      };
    case actions.EXCHANGE_RATES_RETRIEVED:
      return {
        ...state,
        exchangeRates: action.payload.exchangeRates,
        exchangeRatesRequested: false,
      };
    default:
      return state;
  }
};
