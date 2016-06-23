import dotize from 'dotize';

export const rawMessages = {
  app: {
  }
};

export default {
  locales: 'en',
  messages: dotize.convert(rawMessages)
};