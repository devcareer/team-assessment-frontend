import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
  isChecked: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
      isChecked: state.isChecked,
    };
  }
  if (action.type === 'CHECKED') {
    return {
      isChecked: action.value,
      value: state.value,
      isTouched: state.value,
    };
  }
  if (action.type === 'BLUR') {
    return {
      isTouched: true,
      value: state.value,
      isChecked: state.isChecked,
    };
  }
  if (action.type === 'RESET') {
    return {
      isTouched: false,
      value: '',
      isChecked: false,
    };
  }

  return inputStateReducer;
};

const useInput = validateValue => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const checkChangeHandler = e => {
    dispatch({ type: 'CHECKED', value: e.target.checked });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    checkChangeHandler,
    reset,
  };
};

export default useInput;
