let config = {
  mysql: {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'talaria',
    DIALECT: 'mysql',
    POOL: {
      max: 1000,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  secret: 'secret-key',
  firebase: {
    apiKey: 'AIzaSyCk1LgEUhXjSfdjfzjTCqr6F_mEhTn_hDw',
    authDomain: 'talaria-270af.firebaseapp.com',
    projectId: 'talaria-270af',
    storageBucket: 'talaria-270af.appspot.com',
    messagingSenderId: '464833975213',
    appId: '1:464833975213:web:eb65c5c6ea377bef45c724',
    measurementId: 'G-X3F0BV7ECF',
    serviceAccount: 'firebase-adminsdk-e97ey@talaria-270af.iam.gserviceaccount.com',
  },
  plaid: {
    PLAID_CLIENT_ID: '5ee69e7df9c7ee0013150dc8',
    PLAID_SECRET: '8519b849cce770ff99ffc35e69c291',
  },
}

module.exports = config
