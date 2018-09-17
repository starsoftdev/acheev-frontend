
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

  static getProfile = (userId) => {

    const url = Config.endPoints.profile.replace('[email]',userId)

    const accountPromise = fetch(`${url}&account`, {
        method: 'get',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })

    const promiseArray = [accountPromise]

    return Promise.all(promiseArray).then(responses=>{

      const jsonArray = responses.map(response=>response.json())
      return Promise.all(jsonArray)

    })

  }
}
