const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type:String,
    maxlength: 50
  },
  email:{
    type:String,
    trim: true,  
    /* trim: true // jake shim@naver.com에서 jakeshim space 없애주는 역할 */
    unique:1
  },
  password: {
    type:String,
    minlength:5
  },
  lastname:{
    type:String,
    maxlength:50
  },
  role: {
    type: Number,   /* Number:1 이면 관리자 0이면 일반유저 이런식*/
    default:0   /*role 지정 안하면 디폴트값으로 지정됨*/
  },
  image: String,
  token: {
    type: String
  },
  tokenExp:{
    type: Number
  }
})

const User= mongoose.model('User'/*모델이름*/, userSchema/*스키마명*/)

module.exports = {User}   /* 이모델을 다른 곳에서도 쓸 수 있게 익스포트처리 */




