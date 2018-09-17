

const endPointsBase = 'http://localhost:8000'

module.exports = {

  endPoints: {
    base: endPointsBase,
    logIn: `${endPointsBase}/login`,
    profile: `${endPointsBase}/profile?email=[email]`
  },

  facebook:{
    appId: 1088597931155576
  },

  google: {
    clientId: '123456'

  }
}
