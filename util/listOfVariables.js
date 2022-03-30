const eapProfile = []

const data = {
  "override": "",

  "accentColor": "#fc0",
  "textAccentColor": "#0e2459",

  "reviewsTitle": "What Our Clients Are Saying",
  "reviewsSubTitle": "Read real reviews from buyers and sellers we've had the pleasure of serving.",
  "reviewsBtnText": "Read Reviews",

  "blogTitle": "Latest From The Blog",
  "blogSubTitle": "Tips and Tricks to help save you time and money.",
  "blogBtnText": "Read More Posts",

  "areasTitle": "FEATURED AREAS",
  "areasSubTitle": "Start your search",

  "socialTitle": "Follow Me",

  "formTitle": "GET IN TOUCH",
  "formSubTitle": "Send us a message below or schedule a call, we’re happy to help.",
  "formBtnText": "Schedule Now",

  "idxFormEnabled": true,
  "idxIsOffCtaText": "Get In Touch",
  "idxIsOffCtaLink": "/contact",

  "idxSearchButtonEnabled": true,

  "idxTilesTitle": "Featured Properties",
  "idxTilesSubTitle": "Let's find a home you'll love.",
  "settingsIdxShortcode": "[settingsIdxShortcode]",

  "idxTilesTitle_02": "Recently Listed Properties",
  "idxTilesSubTitle_02": "Here are real homes just listed nearby.",
  "settingsIdxShortcode_02": "[settingsIdxShortcode]",

  "settingsTitle": "Work with me to find",
  "settingsSubTitle": "A Home You Love.",
  "settingsHomeBtn": "Get In Touch",
  "settingsHomeBtnLink": "/contact",

  "settingsCtaTitle": "Curious About The Value Of Your Home?",
  "settingsCtaText": "We're here to help with any questions you may have.",
  "settingsCtaLink": "/contact",
  "settingsCtaBtnText": "Schedule A Call",
  "settingsCtaImage": "https://files.easyagentpro.com/dev/images/default.jpg",

  "settingsAboutTitle": "Let’s Work Together To Find A Home That YOU Love.",
  "settingsAboutDesc": "I can help you search through thousands of up-to-date listings with accurate listing information to help you choose the home you like best.",
  "settingsAboutBtnTxt": "Meet Our Team",
  "settingsAboutBtnLink": "/my-team",
  "settingsMediaAboutUsImage": "https://files.easyagentpro.com/dev/images/default.jpg",

  "mainBackgroundVideo": "FLRoPjjlT7k",
  "settingsMediaPrimaryImage": setEapProfile(),
  "settingsMediaSecondaryImage": "https://files.easyagentpro.com/dev/images/default.jpg",
  "settingsAgentVideo": "https://www.youtube.com/embed/HgPF42pYshw",

  "kitchen_image_01": "https://files.easyagentpro.com/homes/kitchen.jpeg",
  "kitchen_image_02": "https://files.easyagentpro.com/homes/kitchen_02.jpeg",

  "startMySearch": "Start my search",
  "idxLink": "/search",

  "settingsMediaOgImage": "",

  // The Rochester
  "welcomeTitle": "Real Estate Agent in Rochester NY",
  "welcomeText": "Whether you’re moving to the Rochester area or already live here and are looking to make a move, I’d love to at the very least talk with you, with no strings attached! You can reach me by call or text on my cell phone at 585-704-7095.",
  "welcomeCtaBtnLink": "/contact",
  "welcomeCtaBtnText": "Contact Agent",

  "buyerMessage": "Enjoy a clear and simple home-buying experience.",
  "sellerMessage": "Enjoy a clear and simple home-selling experience.",
  "buyerCTA": "Schedule an appointment today to learn how we can help save you money",
  "buyerCTALink": "/schedule",
  "buyerCTAText": "SHOW ME HOW!",
  "sellerCTA": "Unique Advantage: See how we can help market and sell YOUR home",
  "sellerCTALink": "/contact",
  "sellerCTAText": "Get In Touch",

  "first_featured_title": "Featured Areas Near By",
  "first_featured_btn_text": "View All Areas",
  "first_featured_btn_link": "/featured-neighborhoods",

  "featured_01_text": "Brighton",
  "featured_01_link": "/featured-neighborhoods",
  "featured_01_desc": "The Town of Brighton real estate market is one that is in high demand, year after...",
  "featured_01_img": "https://files.easyagentpro.com/static/buyer/1.jpg",
  "featured_02_text": "Pittsford",
  "featured_02_link": "/featured-neighborhoods",
  "featured_02_desc": "The Town of Brighton real estate market is one that is in high demand, year after...",
  "featured_02_img": "https://files.easyagentpro.com/static/buyer/2.jpg",
  "featured_03_text": "Rochester",
  "featured_03_link": "/featured-neighborhoods",
  "featured_03_desc": "The Town of Brighton real estate market is one that is in high demand, year after...",
  "featured_03_img": "https://files.easyagentpro.com/static/buyer/3.jpg",
  "featured_04_text": "Webster",
  "featured_04_link": "/featured-neighborhoods",
  "featured_04_desc": "The Town of Brighton real estate market is one that is in high demand, year after...",
  "featured_04_img": "https://files.easyagentpro.com/static/buyer/4.jpg",

  "sidebar_cta_01_text": "Useful Tools And Resources",
  "sidebar_cta_01_link": "/real-estate-blog/",
  "sidebar_cta_02_text": "Local Neighborhoods",
  "sidebar_cta_02_link": "/featured-neighborhoods",
  "sidebar_cta_03_text": "Guide To Buying A Home",
  "sidebar_cta_03_link": "/guide-to-buying-a-home",

  // end the rochester

  // 6&7
  "lux_contact": "Contact Us",
  "lux_re_tips": "Real estate tips",
  "lux_about_us": "About Us",
  "lux_about_us_top": "Meet Your Agent",
  "lux_search_p": "Search Properties",

  // template 0 defaults
  "eap_01_circle_title": "Search For Homes",
  "eap_01_circle_link": "/basic-search",
  "eap_01_circle_btn_text_short": "We can search through thousands of listings and find the perfect home of your dreams.",
  "eap_01_circle_text": "Search through thousands of listings to find the perfect home for you and your family. I’m always here to help answer any questions you may have.",
  "eap_01_circle_btn_text": "Search",
  "eap_02_circle_btn_text_short": "Let's analyze your situation and determine the most accurate value of your home.",
  "eap_01_circle_image": "https://files.easyagentpro.com/static/home-search.png",
  "eap_02_circle_title": "Find Your Home Value",
  "eap_02_circle_link": "/home-value-analysis",
  "eap_02_circle_text": "Trust our experts to give you a personalized Value Assessment within 24 hours. Our market snapshot will give you the true value of your home.",
  "eap_02_circle_btn_text": "Free Estimate",
  "eap_02_circle_image": "https://files.easyagentpro.com/static/home-value.png",
  "eap_03_circle_title": "Save Time And Money",
  "eap_03_circle_link": "/real-estate-blog",
  "eap_03_circle_text": "Our blog provides awesome tips for buyers and sellers to help save time and money, keeping you informed along the way.",
  "eap_03_circle_btn_text": "Read The Blog",
  "eap_03_circle_image": "https://files.easyagentpro.com/static/home-blog.png",

  "eap_things_i_can_help_w": "Things I Can Help You With",
  "eap_01_grid_title": "Buying A Home",
  "eap_01_grid_text": "We can search through thousands of listings and find the perfect home of your dreams. It doesn’t have to be scary and I’ll be there every step of the way.",
  "eap_01_grid_link": "/basic-search",
  "eap_02_grid_title": "Selling Your Home",
  "eap_02_grid_text": "I can get your home on the market in no time and get exposure to thousands of potential buyers. Sell your home for top value and save time.",
  "eap_02_grid_link": "/schedule",
  "eap_03_grid_title": "Accurate Home Value",
  "eap_03_grid_text": "Home valuation done online can often be inaccurate by up to 30%. Let me analyze your situation and determine the most accurate value of your home.",
  "eap_03_grid_link": "/home-value-analysis",
  "eap_04_grid_title": "Save Time Searching",
  "eap_04_grid_text": "We can complete a needs analysis together and create a plan to find you the home you want in as little time as possible.",
  "eap_04_grid_link": "/schedule",
  "eap_05_grid_title": "Neighborhood Information",
  "eap_05_grid_text": "Whether you need information about school districts, specific neighborhoods, I can get you accurate answers fast.",
  "eap_05_grid_link": "/schedule",
  "eap_06_grid_title": "Tips and Tricks",
  "eap_06_grid_text": "Make sure you check out my blog full of tips and guides for buying and selling your home! Save time and money.",
  "eap_06_grid_link": "/real-estate-blog",

  "iconOne": "home",
  "iconTwo": "attach_money",
  "iconThree": "insert_chart",
  "iconFour": "access_time",
  "iconFive": "check_circle",
  "iconSix": "blur_on"
}

function setEapProfile() {
  // return eapProfile.length !== 0
  //   ? eapProfile["profileLocationImage"]
  //   : "https://files.easyagentpro.com/dev/images/default.jpg"
  return "https://files.easyagentpro.com/dev/images/default.jpg"
}

export function getAppSettings() {
  return data
}

