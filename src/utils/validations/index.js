import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required.')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter valid email.',
    ),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Please enter a valid password. It must contain one capital letter, one digit, and one special character.',
    )
    .required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match.')
    .required('Confirm password is required.'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required.')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter valid email.',
    ),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Please enter a valid password. It must contain one capital letter, one digit, and one special character.',
    )
    .required('Password is required.'),
});

export const forgorPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required.')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter valid email.',
    ),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Please enter a valid password. It must contain one capital letter, one digit, and one special character.',
    )
    .required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match.')
    .required('Confirm password is required.'),
});

export const otpValidationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, 'OTP must be exactly 6 digits.')
    .required('OTP is required.'),
});

export const feedbackValidationSchema = Yup.object().shape({
  queryText: Yup.string()
    .min(10, 'Please explain with more words.')
    .max(300, 'Max limit of 300 characters only.')
    .required('Please enter your query or feedback.'),
});
