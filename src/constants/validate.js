const emailreg = new RegExp(
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
);

let validation = {
  msg: '',
  acceptance: true,
};

const login = (email, password) => {
  console.log(email);
  if (!email) {
    validation.msg = 'Email is empty';
    validation.acceptance = false;
    return validation;
  }
  if (emailreg.test(email) === false) {
    validation.msg = 'Please enter valid email';
    validation.acceptance = false;
    return validation;
  }
  if(!password)
  if (!password) {
    validation.msg = 'Password is empty';
    validation.acceptance = false;
    return validation;
  }
  if (password.length <= 1) {
    validation.msg = 'Password should have minimum 8 ';
    validation.acceptance = false;
    return validation;
  }

  return validation;
};

const signup = (email, password, name, mobileno) => {
  console.log(email);
  if (!email) {
    validation.msg = 'Email is empty';
    validation.acceptance = false;
    return validation;
  }
  if (emailreg.test(email) === false) {
    validation.msg = 'Please enter valid email';
    validation.acceptance = false;
    return validation;
  }
  if (!password) {
    validation.msg = 'Password is empty';
    validation.acceptance = false;
    return validation;
  }
  if (password.length <= 1) {
    validation.msg = 'Password should have minimum 4 ';
    validation.acceptance = false;
    return validation;
  }
  if (!name) {
    validation.msg = 'Name is empty';
    validation.acceptance = false;
    return validation;
  }
  if (!mobileno) {
    validation.msg = 'Mobileno is empty';
    validation.acceptance = false;
    return validation;
  }

  return validation;
};

export {login, signup};
