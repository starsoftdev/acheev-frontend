

import picture from '../../assets/member-default.jpg'

export default class User {

  constructor(userId){

    this._userId = userId

  }

  get profilePictureUrl(){

    return picture

  }

  get firstName(){

    return 'Kolby'

  }

  get lastName(){

    return 'Bothe'

  }

  get summary(){

    return 'Product Designer and Developer with 15 years of experience'

  }

  get address() {

    return {
      city: 'Texas'
    }

  }

  get joinDate() {

    return '2018'

  }

  get averageResponseTime() {

    return { number:1, unit: 'hour'}

  }

  get recentDelivery() {

    return { number: 11, unit: 'hours'}

  }

  get description() {

    return "My name is Kolby Bothe, I’m from Texas. \
    I'm a driven and flexible graphic designer with \
    a proven record of delivering creative and innovative design solutions. \
    I have 15+ years of experience in the field;\
    most of them working in Brand & Identity Design;\
    Lettering and typography. Let's talk!"

  }

  get languages() {
    return [{name:'english', level: 'basic'}, {name: 'spanish',level:'native'}]
  }

  get skills() {

    return ['graphic design', 'logoDesign','sketch app', 'adobe photoshop']

  }

  get organizations() {

    return [{ id: "1" , name: "1" },{ id: "2" , name: "2" }]


  }

  get socialMedias() {

    return [
      {
        id:'1',
        url: '<url>',
        type: 'facebook'
      },
      {
        id:'2',
        url: '<url>',
        type: 'twitter'
      },
      {
        id:'3',
        url: '<url>',
        type: 'instagram'
      },
      {
        id:'4',
        url: '<url>',
        type: 'linkedin'
      }

    ]

  }

  get certificates() {

    return [

      {
        title: 'Digital Marketing',
        date: '2014',
        institute: 'IESA Institude, Venezuela'
      },

      {
        title: 'Interface Design With Sketch',
        date: '2017',
        institute: 'Domestika'
      },

      {
        title: 'Introduction To Web Responsive, HTML And CSS',
        date: '2017',
        institute: 'Domestika'
      },

      {
        title: 'Techniques Of Web Development. HTML5 & CSS',
        date: '2017',
        institute: 'Domestika'
      },

    ]

  }

  get userServices() {

  }

  get portfolio() {

  }

  get projects() {

    return [
      {
        id:'<unique_id>',
        client: 'Nissan',
        role: 'Programmatic (Non-Freelance)'
      },
      {
        id:'<unique_id>',
        client: 'Culligan',
        role: 'Website/UX (Non-Freelance)'
      }
    ]

  }

  get reviews() {

    return {
      overAll: 4.0,
      quantity: 234
    }

  }

}
