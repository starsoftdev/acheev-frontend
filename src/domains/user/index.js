

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

  }

  get socialMediaProfiles() {

  }

  get certifications() {

  }

  get userServices() {

  }

  get portfolio() {

  }

  get notableProjects() {

  }

  get reviews() {

    return {
      overAll: 4.0,
      quantity: 234
    }

  }

}
