function checkUname(str){
  var re = /^.{5,}$/;
  return re.test(str);
};

module.exports = {checkUname};
