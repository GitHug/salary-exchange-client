import * as actions from '../actions/exchangeActions';

const form = {
  salary: 5000,
  currency: 'EUR',
  referenceCurrency: 'USD',
  period: '3months',
};
const initialState = {
  form,
  fetchData: {
    ...form,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_CURRENCY:
      return {
        ...state,
        form: {
          ...state.form,
          currency: action.payload.currency,
        },
      };
    case actions.CHANGE_REFERENCE_CURRENCY:
      return {
        ...state,
        form: {
          ...state.form,
          referenceCurrency: action.payload.currency,
        },
      };
    case actions.ADD_SALARY:
      return {
        ...state,
        form: {
          ...state.form,
          salary: action.payload.salary,
        },
      };
    case actions.CHANGE_PERIOD: {
      return {
        ...state,
        form: {
          ...state.form,
          period: action.payload.period,
        },
      };
    }
    case actions.FETCH_EXCHANGE_RATES:
      return {
        ...state,
        fetchData: {
          ...state.form,
        },
      };
    default:
      return state;
  }
};
