function checkPwd(str){
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
};

module.exports = {checkPwd};
