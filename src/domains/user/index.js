

import picture from '../../assets/member-default.jpg'
import servicePicture from '../../assets/service-sample.jpeg'

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

  get name(){
    return this.firstName + ' ' + this.lastName
  }

  get summary(){

    return 'Product Designer and Developer with 15 years of experience'

  }

  get address() {

    return {
      city: 'Texas'
    }

  }

  get stats() {

    return {
      avgResponseTime: '1 hour',
      recentDelivery: 'About 11 hours',
      memberSince: '2018'
    }

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

  get services() {

    return [

      {
        id: '1',
        title: 'Hire me to create your logo and brand identity package',
        image: servicePicture,
        rating: '4.0',
        startingPrice: '1000',
        currency: '$',
        page:'1'
      },

      {
        id: '2',
        title: 'I will design a hand lettering signature logo',
        image: servicePicture,
        rating: '4.0',
        startingPrice: '360',
        currency: '$',
        page:'1'

      }

    ]


  }

  get portfolios() {

    return [

        {
          id: '1',
          logo: servicePicture,
          title: 'Playstation Logo Concept',
          page: 1,
        },

        {
          id: '2',
          logo: servicePicture,
          title: 'Shield Logo Concept',
          page: 1,
        },

        {
          id: '3',
          logo: servicePicture,
          title: 'Flower Logo Concept',
          page: 1,
        },

        {
          id: '4',
          logo: servicePicture,
          title: 'Playstation Logo Concept',
          page: 1,
        },

        {
          id: '5',
          logo: servicePicture,
          title: 'Shield Logo Concept',
          page: 1,
        },

        {
          id: '6',
          logo: servicePicture,
          title: 'Flower Logo Concept',
          page: 1,
        },

    ]


  }

  get projects() {

    return [
      {
        id:'1',
        client: 'Nissan',
        role: 'Programmatic (Non-Freelance)'
      },
      {
        id:'2',
        client: 'Culligan',
        role: 'Website/UX (Non-Freelance)'
      }
    ]

  }

  get rating() {

    return {
      overAll: 4.0,
      communication: 4.0,
      serviceIntegrity: 4.0,
      wouldRecommand: 4.0,
      quantity: 234
    }
  }

  get reviews(){

    return [
      {
      id: '2',
      user: {
        id: '2',
        name: 'Gary Ruiz',
        avatar: servicePicture
      },
      rating: {
        overAll: 4.0,
        communication: 4.0,
        serviceIntegrity: 4.0,
        wouldRecommand: 4.0
      },
      contents: 'sample 2',
      postDate: '2 days ago',
      page: '2'
    },

    {
    id: '3',
    user: {
      id: '3',
      name: 'Gary Ruiz',
      avatar: servicePicture
    },
    rating: {
      overAll: 4.0,
      communication: 4.0,
      serviceIntegrity: 4.0,
      wouldRecommand: 4.0,
    },
    contents: 'sample 3',
    postDate: '3 days ago',
    page: '1'
  }
  ]

  }

}
