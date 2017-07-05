function checkUname(str){
  var re = /^([a-zA-Z0-9_-]){5,}$/;
  return re.test(str);
};

module.exports = {checkUname};
