import { combineReducers } from 'redux';
import user from './ducks/user';
import jobs from './ducks/jobs';
import onBoard from './ducks/onboarding';
import upload from './ducks/upload';

const rootReducer = combineReducers({
  user,
  jobs,
  onBoard,
  upload
});
export default rootReducer;
