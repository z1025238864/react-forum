import {combineReducers} from 'redux' //把所有需要处理的值结合起来
import user from './user'
import list from './list'
import details from './details'


const Reducer = combineReducers({
    user,
    list,
    details
})
export default Reducer