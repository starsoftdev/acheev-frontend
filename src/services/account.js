


export default class Account {


  static logIn = (username, password) => {

    const url = 'sampleUrl'
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return Promise.resolve({'data':'1234'})
    // return fetch(url, {
    //     method: 'post',
    //     body: formData,
    // })
  }
}
