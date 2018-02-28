import * as actions from '../actions/exchangeActions';

const initialState = {
  salary: 5000,
  currency: 'EUR',
  referenceCurrency: 'USD',
  period: 'THREE_MONTHS',
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
    case actions.CHANGE_PERIOD: {
      return {
        ...state,
        period: action.payload.period,
      };
    }
    default:
      return state;
  }
};
