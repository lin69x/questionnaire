import { AppTypes } from '../constants';

export const showToast = ({ message }) => (dispatch) =>
  dispatch({ type: AppTypes.SHOW_TOAST, payload: { message } });

export const hideToast = () => (dispatch) =>
  dispatch({ type: AppTypes.HIDE_TOAST });
