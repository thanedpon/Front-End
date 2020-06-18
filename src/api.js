import axios from 'axios';
import HTTP from './config/environment';
// const { HTTP } = require('config/environment');

const api = {
    getDataAll : function(){
        return axios.get(HTTP + '/show');
    }
}

module.exports = {api}

// function getDataAll(){
//     return axios.get(HTTP + '/show')
// }

// module.exports = {getDataAll}