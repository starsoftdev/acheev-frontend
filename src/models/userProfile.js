


const UserProfile = {

  id: '<unique_id>',

  account: {
    firstName: '<string>',
    lastName: '<string>',
    avatar: '<image_url>',
    joinDate: '<timestamp>',
    tagline: '<string>',
    description: '<string>'
  }

  address: {
    home: '<string>'
    city: '<string>',
    state: '<string>'
    zip: '<string>'
  },

  stats: {
    avgResponseTime: '<unint_in_minitue>',
    recentDelivery: '<unint_in_minitue>',
  },

  rating: {
    overAll: '<float_from_0_to_5>',
    communication: '<float_from_0_to_5>',
    serviceIntegrity: '<float_from_0_to_5>'
    wouldRecommand: '<float_from_0_to_5>',
    quantity: '<uint>'
  },

  skills: [
    {
      id:'<unique_id>',
      name: '<string>'
    }
  ],

  organizations: [
    {
      id:'<unique_id>',
      name: '<string>',
    }
  ],

  socialMedia: [
    {
      id:'<unique_id>',
      url: '<url>',
      type: '<facebook_or_twitter_or_linkedin_or_else>'
    }
  ],

  projects: [
    {
      id:'<unique_id>',
      client: '<string>',
      role: '<string>'
    }
  ],

  certifcations: [
    {
      title: '<string>',
      date: '<timestamp>',
      institute: '<string>'
    }
  ]

  languages: [ {
                 id:'<unique_id>'
                 name: '<string>',
                 level: 'basic'
               }
             ],

  services: [ {
                id: '<unique_id>',
                title: '<string>',
                img: '<image_url>',
                rating: '<float_from_0_to_5>',
                startingPrice: '<float_greater_than_0>',
                currency: '<currency_type>',
                page:'<int_since_it_can_be_many_need_to_support_paging>'
              }
            ],

  portfolios: [
    {
      id:'<unique_id>',
      logo: '<image_url>',
      title: '<string>',
      page: '<int_since_it_can_be_many_need_to_support_paging>'
    }
  ],

  reviews: [
    {
      id: '<unique_id>',
      user: {
        id: '<review_poster_uid_which_is_user_uid>',
        avatar: '<image_url>'
      },
      rating: {
        overAll: '<float_from_0_to_5>',
        communication: '<float_from_0_to_5>',
        serviceIntegrity: '<float_from_0_to_5>'
        wouldRecommand: '<float_from_0_to_5>'
      }
      contents: '<string>',
      postDate: '<timestamp>',
      page: '<int_since_it_can_be_many_need_to_support_paging>'
    }
  ],
}
