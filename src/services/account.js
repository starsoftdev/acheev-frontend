
import Config from '../config'


export default class Account {

  static logIn = (username, password) => {

    const url = Config.endPoints.logIn

    const data = {
      logemail: username,
      logpassword: password
    }

    return fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
  }
}
