import dotize from 'dotize';

export const rawMessages = {
  app: {
    companyName: 'Total Emotion',
    companySlogan: 'The fastest and most...',
    loginForm: {
      submit: 'Login'
    }
  }
};

export default {
  locales: 'en',
  messages: dotize.convert(rawMessages)
};