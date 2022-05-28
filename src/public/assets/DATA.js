import icons from '../icons/icons';
import images from '../images/images';

const curentLocation = {
    name: "SPAIN",
    longLat: [-2.9382763, 51.928374]
}

const continents = [
    {
        id: 0,
        name: "Europe",
        desc: "Europe is the continent of hopeless romantics. A place that radiates warmth, happiness, and enchantment in the form of hot summer nights, under the stars. By day, wander picturesque streets, laughing and chatting, or dip salty, sunkissed skin in beautiful blue waters. Continue to feed the soul by visiting the most sensational cities in the world! Each magical European city writes a love letter to the past, through its buildings and customs. For example, the abstract works of Gaudi in Barcelona, the love lock bridge of Paris, or the exotic grand bazaar of Istanbul. Alternatively, get ready for an epic adventure through the ages. Discover wonders like the majestic acropolis in Athens, the magnificent Colosseum in Rome, or the remarkable floating city of Venice.",
        image: images.europe1,
        image1: images.europe2
    },
    {
        id: 1,
        name: "Asia",
        desc: "While it would take years to truly explore every corner of this continent, most travellers begin in Southeast Asia. Backpacking is the most popular way to travel through the countries of Thailand, Laos, Vietnam, Cambodia, and Indonesia (hello, Bali!). While these countries attract a large backpacking crowd, there are luxury gems at every corner too. Bigger cities like Tokyo, Shanghai, and Hong Kong attract travellers from all over the world. And of course, I cant forget THE FOOD! With so much variety in cuisine, you will have lasting memories of the food, We promise."
    },
    {
        id: 2,
        name: "Australia",
        desc: "Australia! What a country, so vast, so beautiful. But also, so much variety, different animals and different types of the landscape! We travelled to Australia twice. The first time we only saw Cairns (for diving in the Great Barrier Reef) and Sydney. Road trip to explore the east coast of Australia. We share all our experiences, knowledge and impressions in blogs about Australia. Blogs with tips travel guides, nice hotels and possible itineraries for Australia! But also personal diary blogs about this beautiful country."
    },
    {
        id: 3,
        name: "Africa",
        desc: "Africa is a world of its own. A lot of travellers may only think of some top destinations like Morocco or South Africa when thinking about the continent. Still, there are so many different cultures, developed from each country’s history, and natural beauty that you can’t believe it until you see it. Africa as a whole is relatively untouched. Once you get a taste of Africa, though, you’ll only want to see more of it. Africa is a melange of unique cultures and sub-cultures, surrounded by epic landscapes and precious wildlife. Keep scrolling to learn more about travelling and read my Africa travel blogs."
    },
    {
        id: 4,
        name: "South Amerika",
        desc: "South America is made for travellers looking to delve deep into incredibly diverse cultures and explore the outdoors. The biggest draws to the continent are the beaches of Rio, the Galápagos Islands, Iguazu Falls, Machu Picchu, and, of course, Patagonia. As one of the most Southern National Parks in the world, Torres Del Paine is also a place you’ll want to visit at least once in your life. But, the city life all over the continent is also one of a kind! In Argentina, you can find authentic food culture throughout Buenos Aires, and the Mendoza wine region. Plus, Medellín, Colombia is becoming its own foodie destination!"
    },
    {
        id: 5,
        name: "North Amerika",
        desc: "Being the third-largest continent in the world, North America is home to Mexico, Canada, and the United States. Because of its size, there are SO many things you can do on a trip to North America—hit the ski slopes in Canada, drive the California coastline, pound the pavement in NYC, catch some rays in Mexico, go scuba diving off the coast of Florida, and explore the islands of Puerto Rico or Hawaii. There is a North American destination for every occasion and season—so many climates, landscapes, and hidden gems to see! You can literally hit the mountains, beaches, and desert all in one trip."
    }
]

const essentials = [
    {
        id: 1,
        image: require('../../bucket/images/camera.png'),
        link: "https://www.amazon.co.uk/Sony-ILCE6000LB-Compact-SELP1650-Electronic/dp/B00IE9XHE0/ref=sr_1_1_sspa?crid=4VHXHFZT32B9&keywords=camera%2Bsony&qid=1652817909&sprefix=camera%2Bsony%2Caps%2C67&sr=8-1-spons&th=1",
    },{
        id: 2,
        image: require('../../bucket/images/case.png'),
        link: "https://www.amazon.co.uk/Kono-Luggage-Lightweight-Trolley-Suitcase/dp/B07GR2RVL8/ref=sr_1_14?crid=3HI4N3Y123II&keywords=luggage&qid=1652818560&sprefix=ludgege%2Caps%2C66&sr=8-14&th=1",
    },{
        id: 3,
        image: require('../../bucket/images/sunglases.png'),
        link: "https://www.amazon.co.uk/dp/B07DFTDWS8/ref=sspa_dk_detail_2?psc=1p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMVNZRDdRSVlJMjZFJmVuY3J5cHRlZElkPUEwMTc2NzAyMkEwWUQ2REZXOUZXOCZlbmNyeXB0ZWRBZElkPUEwMDc3MTIxOTBHS0ZDSFEyMjJQJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    },{
        id: 4,
        image: require('../../bucket/images/purse.png'),
        link: "https://www.amazon.co.uk/SENDEFN-Blocking-Leather-Compact-Bi-fold/dp/B082Y41C6Q/ref=sr_1_34?crid=ABUUNFGDO4KT&keywords=purse&qid=1652819656&s=clothing&sprefix=purse%2Cclothing%2C72&sr=1-34",
    },{
        id: 5,
        image: require('../../bucket/images/drone.png'),
        link: "https://www.amazon.co.uk/DJI-Mini-Pro-Lightweight-Tri-Directional/dp/B09WDBDGBZ/ref=sr_1_10?keywords=dji&qid=1652819999&sr=8-10",
    }
]

const initial_explore = {
    id: 6,
    name: "Favorit Locations",
    states: [
      {
        id: 0,
        name: "Spain",
        icon: icons.spain,
        subTitle: "Spain is known for its food, Flamenco music and dance!",
        desc: "As you guys might have guessed, I adore Spain. Spain was the first destination on my first international trip. I did a study abroad program there in 2008, and it was one of the best experiences of my life. I spent a month studying Spanish between Salamanca and El Puerto de Santa Maria, exploring different cities along the way. With endless cultural festivals, world-class beaches, and renowned nightlife, Spain is impressive 365 days a year. I could spend years exploring Spain. From Madrid to Barcelona to Girona to Bilbao, it’s such a vibrant country. Whether you hit the slopes of the Sierra Nevada, wander the vineyards of Rioja, or worship the sun in the Canary Islands, Spain is guaranteed to impress you any day of the week.",
        image: images.spain,
        image1: images.spain1
      },{ 
        id: 0,
        name: "Italy",
        icon: icons.italy,
        desc: "Italy is a must-visit country and is one of the most-traveled destinations in Europe. There are so many highlights in this beautiful country — from the canals of Venice to the Tuscan wine lands to the cobblestone streets of Rome to the Arno river running through Florence to the cliffs of Positano… and beyond. Florence was one of my favorite cities because of the architecture and natural beauty— the sun setting over the Arno River is something you can’t soon forget. Rome is one of the most iconic and most traveled cities in Europe and you could spend days getting lost in this magnificent destination. The most picturesque spots in Italy might just be Cinque Terre and all the stops along the Amalfi Coast. Positano is the gem of the Amalfi Coast and is arguably the most picturesque and most romantic town in the whole of Italy—here are the best things to do on the Amalfi Coast!",
        image: images.italy,
      },{ 
        id: 0,
        name: "United Kingdom",
        icon: icons.uk,
        desc: "As COVID-19 restrictions have been relaxed in the UK and those missing travel – international trips or staycations – are preparing to make their returns to the outside world, we make a return to our Top UK Travel Blog ranking. Still First Class when it comes to sharing travel content is Lloyd Griffiths and Yaya Onalaja-Aliu’s Hand Luggage Only. Check out their Travel Journal, Travel Advice and Travel Inspiration sections for great trips, both home and away. Recently covered – the 14 best beaches to visit in Cornwall, a 7-day itinerary that will help you make the most of Malta and things to keep you busy in Rhode Island. And their new book, of course!",
        image: images.uk
      },{ 
        id: 0,
        name: "Norway",
        icon: icons.norway,
        desc: "If  you are planning a trip to Norway but are unsure where you want to go, click the different regions on the Norway map above to find out more about the particular draws and attractions of each region, as well as links to my posts from that region and recommendations for where to stay and how to get there. Some of the areas aren’t filled in yet – I only write about the places in Norway that I have visited myself and know really well! I’ve also written two 95-page Norway travel guide ebooks that cover my top recommendations for places to visit (both on and off the beaten path), the best times of year to visit, how long to visit for, the best accommodation choices, transportation, what to eat, what to pack, and tips for planning a Norway itinerary that you will love. You can purchase my Norway travel guides here. And if you’re looking for Norway itineraries I’ve written you can find a guide to my top 27 Norway itineraries here. If you’re planning a road trip in Norway, here is my guide to planning a Norwegian road trip, including car rental tips and how to find the most beautiful roads.",
        image: images.norway
      },{ 
        id: 0,
        name: "Greece",
        icon: icons.greece,
        desc: "Greece: where historic ruins, volcanic cliffs, and friendly locals meet the blue Mediterranean Sea. My first trip to Greece was a summer adventure through Athens and Mykonos. I returned again to sail the Saronic Islands on The Yacht Week Greece, and then again to explore the Cyclades islands of Santorini, Milos, Paros, and Naxos! There are some islands that are famous for their beaches and natural features, while others have a significant nightlife scene or strong cultural traditions. Mykonos is one of the most popular tourist destinations in the Greek islands and is famed for its incredible beaches and world-renowned party scene. I spent a week on the island and indulged in delicious food, epic sunsets, and some of the best parties I’ve ever been to.",
        image: images.greece
      },{ 
        id: 0,
        name: "United State",
        icon: icons.usa,
        desc: "Apart from my bias of being an American, I truly believe that everyone needs to explore the USA (yes, even those that already live here!) The more I travel around the states, the more I realize that they have SO much adventure to offer! Each state offers something unique—whether you’re looking to experience a relaxing tropical holiday, snow-filled adventure, or the wonders of our incredible National Parks, there’s something for every kind of traveler. The United States is the perfect destination for scenic drives, delicious food, cosmopolitan city life, wilderness, cultural diversity, beautiful beaches, and so much more.",
        image: images.us
      },{ 
        id: 0,
        name: "Slovakia",
        icon: icons.sk,
        desc: "Slovakia is a Central European country known for its dramatic mountainous landscapes, medieval history, and stunning architecture. As a land-locked country, it’s been part of numerous empires and governments throughout its history, all of which have left their own unique influence on the region. Slovakia is filled with beautiful rivers, lakes, national parks, tiny towns, and castle ruins. And compared to its neighbors it’s also quite affordable. It’s the perfect place to hike, road trip, and escape Europe’s summer crowds — all while on a budget!",
        image: images.slovakia
      } ]
  }

const categories = [
    {
        id: 0,
        name: "Short-break",
        value: 0,
        label: "Short-break",
        image: icons.break_i
    },
    {
        id: 1,
        name: "Low Budget",
        value: 1,
        label: "Low Budget",
        image: icons.money,
    },
    {
        id: 2,
        name: "Exotic",
        value: 2,
        label: "Exotic",
        image: icons.exotic
    },
    {
        id: 3,
        name: "Food Lowers",
        value: 3,
        label: "Food Lowers",
        image: icons.food
    },
    {
        id: 4,
        name: "History",
        value: 4,
        label: "History",
        image: icons.history
    },
    {
        id: 5,
        name: "Beaches",
        value: 5,
        label: "Beaches",
        image: icons.beach
    },
    {
        id: 6,
        name: "Culture",
        value: 6,
        label: "Culture",
        image: icons.culture
    },
    {
        id: 7,
        name: "Pet-friendly",
        value: 7,
        label: "Pet-friendly",
        image: icons.pet
    },
    {
        id: 8,
        name: "Camping",
        value: 8,
        label: "Camping",
        image: icons.camper
    }
]

const states = [
    {
        id: 0,
        name: "Canada",
        icon: icons.canada,
        value: 0,
        label: "Canada",
        desc: "Canada is one of those countries that continuously finds itself on “top 10” destination lists. Whether it’s for the country’s incredible natural beauty, delicious food, mountain resorts, unique culture, or unbeatable road trips—Canada has it all! And, Canada is home to 16 UNESCO World Heritage Sites! It also has the longest ski season in the world, polar bears, the Northern Lights, and poutine (fries covered in squeaky cheese and gravy! *drool*). On my first trip to the Great White North, I snowboarded the snowy mountains of Whistler and have since ticked off bucket list-worthy destinations like Banff National Park, Montreal, Mont Tremblant, and Vancouver."
    }, 
    {
        id: 1,
        name: "Mexico",
        icon: icons.mexico,
        value: 1,
        label: "Mexico",
        desc: "Ahh, Mexico, a country rich with diversity and culture, and one of my favorites! For travelers looking to relax resort-side, and sip on margaritas by the beach, visit Cancun or Los Cabos. For those in search of a bustling city where you can learn about the history of the country and have some amazing foodie experiences, take a trip to Mexico City. Or maybe you want to cool off in the gem-colored waters of the trendy town of Tulum. No matter which getaway you choose, you will be met with some of the best food in the world, colorful buildings, and friendly locals that want to help you experience what their country has to offer."
    }, 
    {
        id:2,
        name: "United States",
        icon: icons.usa,
        value: 2,
        label: "United States",
        desc: "Apart from my bias of being an American, I truly believe that everyone needs to explore the USA (yes, even those that already live here!) The more I travel around the states, the more I realize that they have SO much adventure to offer! Each state offers something unique—whether you’re looking to experience a relaxing tropical holiday, snow-filled adventure, or the wonders of our incredible National Parks, there’s something for every kind of traveler. The United States is the perfect destination for scenic drives, delicious food, cosmopolitan city life, wilderness, cultural diversity, beautiful beaches, and so much more."
    },
    {
        id: 3,
        name: "Argentina",
        icon: icons.argentina,
        value: 3,
        label: "Argentina",
        desc: "Argentina is a tricky country to travel in. Whilst removing the 'blue dollar' has made accessing the local currency is much easier, the inflation that has run rampant over the last few years means that planning a budget for your trip can be difficult. However, do not let this put you off visiting this vast, varied and infinitely beautiful country. Whether you crave beautiful European cities, lush vineyards and world class wines, stunning natural landscapes and once-in-a-lifetime wildlife or cowboys and cattle, Argentina will prove a worthy choice. Just don't try and do it all at once - Argentina needs time!"
    },{
        id: 4,
        name: "Bolivia",
        icon: icons.bolivia,
        value: 4,
        label: "Bolivia",
        desc: "There is no other place like Bolivia. Dubbed a country of extremes, that goes from sweltering Amazon lowlands to frozen cold mountain peaks, you can experience all kinds of climate in one country! I spent a month traveling around this incredible country, discovering its rich culture and unbelievable natural beauty. Some of my favorite experiences in Bolivia are cycling the World’s Deadliest Road in La Paz and taking a 4-day 4×4 tour to the incredible Uyuni Salt Flats. Bolivia is affordable, with beautiful natural landscapes, and it’s no wonder that many people consider it their favorite South American destination!"
    },
    {
        id: 5,
        name: "Brazil",
        icon: icons.brazil,
        value: 5,
        label: "Brazil",
        desc: "Brazil encompasses around half of South America’s landmass, making it the largest country on the continent. Because it’s so large, it’s not surprising that it is made up of a wide variety of landscapes, coastlines, and experiences. Wildlife lovers can explore the wetlands and the rainforest, while city lovers can wander the streets of Rio. Along with beautiful beaches, one of the world’s best soccer teams, and the world-famous Carnival celebration, Brazil is truly a melting pot, perfect for every kind of traveler."
    },
    {
        id: 6,
        name: "Chile",
        icon: icons.chile,
        value: 6,
        label: "Chile",
        desc: "Chile is one of the most slender and longest countries in the world — it’s just 150 miles across at its widest point! From the snow-capped volcanoes of Patagonia and blistering heights of the Andes to world-class wineries and Maoi sculptures of Easter Island, there are a lot of wonderful things to see in Chile. Traveling to Chile was one of the best experiences I’ve had in South America. It just constantly blew me away. It’s one of the most developed South American countries (the capital, Santiago, is a tech hub for the region), the people were awesome, the food was incredible, and the scenery made me feel in awe of nature."
    },
    {
        id: 7,
        name: "Colombia",
        value: 7,
        label: "Colombia",
        icon: icons.columbia,
        desc: "Colombia is fast becoming the travel highlight of South America. After decades of struggling with crime and cartels, Colombia has become a hub for digital nomads and budget backpackers. More and more people are visiting to soak up the sun and enjoy the country’s low cost of living."
    },
    {
        id: 8,
        name: "Peru",
        icon: icons.peru,
        value: 8,
        label: "Peru",
        desc: "After spending three months fundraising for Peruvian Hearts, an all-girls orphanage in Cusco, my friend and I embarked on an epic adventure to Peru to visit the orphanage and explore the beautiful country. We spent four days trekking the Inca Trail to Machu Picchu which was a major bucket list trip for me. Machu Picchu, one of the Seven Wonders of the World, is one of the biggest attractions for tourists around the world. This unique and fascinating country stands out from the crowd with its different cultural and natural treasures. Peru is also home to natural wonders like the Amazon, Lake Titicaca, and Rainbow Mountain as well as the beautiful coastal city of Lima. It’s a diverse country with countless destinations to discover!"
    },
    {
        id: 9,
        name: "Venezuela",
        icon: icons.venezuela,
        value: 9,
        label: "Venezuela",
        desc: "Rich with culture, history, and friendly locals, Venezuela is a chance to see something different. Located on the northern coast of South America, it is filled with many white-sand beaches, blue waters, and natural wonders, making it a great getaway. Fans of the outdoors will love Angel Falls, the highest waterfall in the world, or Pico Bolívar, the highest mountain in Venezuela. As English is not spoken here as much, it presents a great opportunity to immerse yourself in a new language."
    },
    {
        id: 10,
        name: "Austria",
        icon: icons.austri,
        value: 10,
        label: "Austria",
        desc: "When most people think of Austria, they think of rolling green hills, skiing, Christmas markets, and The Sound of Music. And while the country does have all of this, it also has so much more! For music lovers, it’s the home of Mozart. For foodies, it’s home to the Wienerschnitzel. For outdoor lovers, you can paraglide, raft, and hike in every corner of this picturesque country. No matter what your love is, Austria likely has something just for you. The minute you arrive, the country’s charming villages will take you by surprise and have you feeling like you stepped into a Disney fairytale."
    }, 
    {
        id: 11,
        name: "Belgium",
        icon: icons.belgium,
        value: 11,
        label: "Belgium",
        desc: "Belgium is a travel destination made for history buffs and chocolate addicts. Though the nation is small, it plays a big part in the world’s history. There are over 3,000 castles to explore, battlegrounds from the World Wars, and every museum imaginable. After you’ve had your history fill, you can kick your feet back and relax at one of the 1,000 breweries in the small country. Sip on a cold beer while you munch on frites—sounds dreamy to me! And to finish off the day? All the gourmet chocolate you can imagine! Many people tend to gloss over the country, visiting Brussels or Bruges for a day before moving on, but if you take the time, you’ll find that Belgium has so much more to explore!"
    }, 
    {
        id: 12,
        name: "Croatia",
        icon: icons.croatia,
        value: 12,
        label: "Croatia",
        desc: "With piercing turquoise seas and fairytale-like architecture, there is no denying Croatia is breathtakingly beautiful! Spanning most of the Adriatic Sea, you’re never too far away from the coast when traveling in Croatia. And even if it’s not pretty beaches you seek, stone castles and magnificent waterfalls await travelers of all kinds. Whether you are backpacking through Croatia or are wanting to splurge on Yacht Week, these travel tips will help you plan your next adventure to the Land of a Thousand Islands."
    }, 
    {
        id: 13,
        name: "Czech Republic",
        icon: icons.cz,
        value: 13,
        label: "Czech Republic",
    }, 
    {
        id: 14,
        name: "Denmark",
        icon: icons.denmark,
        value: 14,
        label: "Denmark",
    }, 
    {
        id: 15,
        name: "Finland",
        icon: icons.finland,
        value: 15,
        label: "Finland",
    }, 
    {
        id: 16,
        name: "France",
        icon: icons.france,
        value: 16,
        label: "France",
    }, 
    {
        id: 17,
        name: "Germany",
        icon: icons.germany,
        value: 17,
        label: "Germany",
    },
    { 
        id: 18,
        name: "Greece",
        icon: icons.greece,
        value: 18,
        label: "Greece",
    },
    { 
        id: 19,
        name: "Ireland",
        icon: icons.ireland,
        value: 19,
        label: "Ireland",
    },
    { 
        id: 20,
        name: "Italy",
        icon: icons.italy,
        value: 20,
        label: "Italy",
    },
        
    { 
        id: 21,
        name: "Malta",
        icon: icons.malta,
        value: 21,
        label: "Malta",
    },
    { 
        id: 22,
        name: "Netherlands",
        icon: icons.netherlands,
        value: 22,
        label: "Netherlands",
    },
    { 
        id: 23,
        name: "Norway",
        icon: icons.norway,
        value: 23,
        label: "Norway",
    },
    { 
        id: 24,
        name: "Portugal",
        icon: icons.portugal,
        value: 24,
        label: "Portugal",
    },
    { 
        id: 25,
        name: "Slovak Republic",
        icon: icons.sk,
        value: 25,
        label: "Slovak Republic",
    },
    { 
        id: 26,
        name: "Spain",
        icon: icons.spain,
        value: 26,
        label: "Spain",
    },
    { 
        id: 27,
        name: "Sweden",
        icon: icons.sweden,
        value: 27,
        label: "Sweden",
    },
    { 
        id: 28,
        name: "United Kingdom",
        icon: icons.uk,
        value: 28,
        label: "United Kingdom",
    },
    {
        id: 29,
        name: "New Zeland",
        icon: icons.new_zeland,
        value: 29,
        label: "New Zeland",
    },
    {
        id: 30,
        name: "New South Wales",
        icon: icons.australia,
        value: 30,
        label: "New South Wales",
    }, 
    {
        id: 31,
        name: "Northern Territory",
        icon: icons.australia,
        value: 31,
        label: "Northern Territory",
    }, 
    {
        id: 32,
        name: "Western Australia",
        icon: icons.australia,
        value: 32,
        label: "Western Australia",
    },
    {
        id: 33,
        name: "Queesland",
        icon: icons.australia,
        value: 33,
        label: "Queesland",
    }, 
    {
        id: 34,
        name: "South Australia",
        icon: icons.australia,
        value: 34,
        label: "Queesland",
    }, 
    {
        id: 35,
        name: "Tasmania",
        icon: icons.australia,
        value: 35,
        label: "Tasmania",
    }, 
    {
        id: 36,
        name: "Egypt",
        icon: icons.egypt,
        value: 36,
        label: "Egypt",
    }, 
    {
        id: 37,
        name: "Tanzania",
        icon: icons.tanzania,
        value: 37,
        label: "Tanzania",
    }, 
    {
        id: 38,
        name: "South Africa",
        icon: icons.southAfrica,
        value: 38,
        label: "South Africa",
    }, 
    {
        id: 39,
        name: "Morocco",
        icon: icons.morocco,
        value: 39,
        label: "Morocco",
    }, 
    {
        id: 40,
        name: "Madagascar",
        icon: icons.madagascar,
        value: 40,
        label: "Madagascar",
    }, 
    {
        id: 41,
        name: "Tunisia",
        icon: icons.tunisia,
        value: 41,
        label: "Tunisia",
    }, 
    {
        id: 42,
        name: "Congo",
        icon: icons.congo,
        value: 42,
        label: "Congo",
    }, 
    {
        id: 43,
        name: "Mauritania",
        icon: icons.mauritania,
        value: 43,
        label: "Mauritania",
    },
    { 
        id: 44,
        name: "Mauritius",
        icon: icons.mauritius,
        value: 44,
        label: "Mauritius",
    },
    { 
        id: 45,
        name: "Seychelles",
        icon: icons.seychelles,
        value: 45,
        label: "Seychelles",
    },
    {
        id: 46,
        name: "Honk Kong",
        icon: icons.honkkong,
        value: 46,
        label: "Honk Kong",
    },
    {
        id: 47,
        name: "Indonesia",
        icon: icons.indonesia,
        value: 47,
        label: "Indonesia",
    },
    { 
        id: 48,
        name: "India",
        icon: icons.india,
        value: 48,
        label: "India",
    },
    {
        id: 49,
        name: "Japan",
        icon: icons.japan,
        value: 49,
        label: "Japan",
    },
    {
        id: 50,
        name: "China",
        icon: icons.china,
        value: 50,
        label: "China",
    },
    {
        id: 51,
        name: "Philippines",
        icon: icons.philipines,
        value: 51,
        label: "Philippines",
    }, 
    {
        id: 52,
        name: "Vietnam",
        icon: icons.vietnam,
        value: 52,
        label: "Vietnam",
    }, 
    {
        id: 53,
        name: "Thailand",
        icon: icons.thailand,
        value: 53,
        label: "Thailand",
    }, 
    {
        id: 54,
        name: "Malaysia",
        icon: icons.malaysia,
        value: 54,
        label: "Malaysia",
    }, 
    {
        id: 55,
        name: "Sri Lanka",
        icon: icons.srilanka,
        value: 55,
        label: "Sri Lanka",
    }, 
    {
        id: 56,
        name: "United Arab Emirates",
        icon: icons.uae,
        value: 56,
        label: "United Arab Emirates",
    }, 
    {
        id: 57,
        name: "Singapore",
        icon: icons.singapore,
        value: 57,
        label: "Singapore",
    },
    {
        id: 58,
        name: "Poland",
        icon: icons.poland,
        value: 58,
        label: "Poland",
    },
]

const explore = [

    // 1: coold, 2: city life, 3: 

    {
        id: 5,
        name: "North America",
        value: 5,
        label: "North America",
        states: [
            {
                id: 0,
                name: "Canada",
                value: 0,
                label: "Canada",
                icon: icons.canada,
                desc: "Canada is one of those countries that continuously finds itself on “top 10” destination lists. Whether it’s for the country’s incredible natural beauty, delicious food, mountain resorts, unique culture, or unbeatable road trips—Canada has it all! And, Canada is home to 16 UNESCO World Heritage Sites! It also has the longest ski season in the world, polar bears, the Northern Lights, and poutine (fries covered in squeaky cheese and gravy! *drool*). On my first trip to the Great White North, I snowboarded the snowy mountains of Whistler and have since ticked off bucket list-worthy destinations like Banff National Park, Montreal, Mont Tremblant, and Vancouver."
            }, 
            {
                id: 1,
                name: "Mexico",
                value: 1,
                label: "Mexico",
                icon: icons.mexico,
                desc: "Ahh, Mexico, a country rich with diversity and culture, and one of my favorites! For travelers looking to relax resort-side, and sip on margaritas by the beach, visit Cancun or Los Cabos. For those in search of a bustling city where you can learn about the history of the country and have some amazing foodie experiences, take a trip to Mexico City. Or maybe you want to cool off in the gem-colored waters of the trendy town of Tulum. No matter which getaway you choose, you will be met with some of the best food in the world, colorful buildings, and friendly locals that want to help you experience what their country has to offer."
            }, 
            {
                id:2,
                name: "United States",
                value: 2,
                label: "United States",
                icon: icons.usa,
                desc: "Apart from my bias of being an American, I truly believe that everyone needs to explore the USA (yes, even those that already live here!) The more I travel around the states, the more I realize that they have SO much adventure to offer! Each state offers something unique—whether you’re looking to experience a relaxing tropical holiday, snow-filled adventure, or the wonders of our incredible National Parks, there’s something for every kind of traveler. The United States is the perfect destination for scenic drives, delicious food, cosmopolitan city life, wilderness, cultural diversity, beautiful beaches, and so much more."
            }
        ]
    },
    {
        id: 4,
        name: "South America",
        value: 4,
        label: "South America",
        states: [
            {
                id: 3,
                name: "Argentina",
                value: 3,
                label: "Argentina",
                icon: icons.argentina,
                desc: "Argentina is a tricky country to travel in. Whilst removing the 'blue dollar' has made accessing the local currency is much easier, the inflation that has run rampant over the last few years means that planning a budget for your trip can be difficult. However, do not let this put you off visiting this vast, varied and infinitely beautiful country. Whether you crave beautiful European cities, lush vineyards and world class wines, stunning natural landscapes and once-in-a-lifetime wildlife or cowboys and cattle, Argentina will prove a worthy choice. Just don't try and do it all at once - Argentina needs time!"
            },{
                id: 4,
                name: "Bolivia",
                value: 4,
                label: "Bolivia",
                icon: icons.bolivia,
                desc: "There is no other place like Bolivia. Dubbed a country of extremes, that goes from sweltering Amazon lowlands to frozen cold mountain peaks, you can experience all kinds of climate in one country! I spent a month traveling around this incredible country, discovering its rich culture and unbelievable natural beauty. Some of my favorite experiences in Bolivia are cycling the World’s Deadliest Road in La Paz and taking a 4-day 4×4 tour to the incredible Uyuni Salt Flats. Bolivia is affordable, with beautiful natural landscapes, and it’s no wonder that many people consider it their favorite South American destination!"
            },
            {
                id: 5,
                name: "Brazil",
                value: 5,
                label: "Brazil",
                icon: icons.brazil,
                desc: "Brazil encompasses around half of South America’s landmass, making it the largest country on the continent. Because it’s so large, it’s not surprising that it is made up of a wide variety of landscapes, coastlines, and experiences. Wildlife lovers can explore the wetlands and the rainforest, while city lovers can wander the streets of Rio. Along with beautiful beaches, one of the world’s best soccer teams, and the world-famous Carnival celebration, Brazil is truly a melting pot, perfect for every kind of traveler."
            },
            {
                id: 6,
                name: "Chile",
                value: 6,
                label: "Chile",
                icon: icons.chile,
                desc: "Chile is one of the most slender and longest countries in the world — it’s just 150 miles across at its widest point! From the snow-capped volcanoes of Patagonia and blistering heights of the Andes to world-class wineries and Maoi sculptures of Easter Island, there are a lot of wonderful things to see in Chile. Traveling to Chile was one of the best experiences I’ve had in South America. It just constantly blew me away. It’s one of the most developed South American countries (the capital, Santiago, is a tech hub for the region), the people were awesome, the food was incredible, and the scenery made me feel in awe of nature."
            },
            {
                id: 7,
                name: "Colombia",
                value: 7,
                label: "Colombia",
                icon: icons.columbia,
                desc: "Colombia is fast becoming the travel highlight of South America. After decades of struggling with crime and cartels, Colombia has become a hub for digital nomads and budget backpackers. More and more people are visiting to soak up the sun and enjoy the country’s low cost of living."
            },
            {
                id: 8,
                name: "Peru",
                value: 8,
                label: "Peru",
                icon: icons.peru,
                desc: "After spending three months fundraising for Peruvian Hearts, an all-girls orphanage in Cusco, my friend and I embarked on an epic adventure to Peru to visit the orphanage and explore the beautiful country. We spent four days trekking the Inca Trail to Machu Picchu which was a major bucket list trip for me. Machu Picchu, one of the Seven Wonders of the World, is one of the biggest attractions for tourists around the world. This unique and fascinating country stands out from the crowd with its different cultural and natural treasures. Peru is also home to natural wonders like the Amazon, Lake Titicaca, and Rainbow Mountain as well as the beautiful coastal city of Lima. It’s a diverse country with countless destinations to discover!"
            },
            {
                id: 9,
                name: "Venezuela",
                value: 9,
                label: "Venezuela",
                icon: icons.venezuela,
                desc: "Rich with culture, history, and friendly locals, Venezuela is a chance to see something different. Located on the northern coast of South America, it is filled with many white-sand beaches, blue waters, and natural wonders, making it a great getaway. Fans of the outdoors will love Angel Falls, the highest waterfall in the world, or Pico Bolívar, the highest mountain in Venezuela. As English is not spoken here as much, it presents a great opportunity to immerse yourself in a new language."
            }
        ]
    },
    {
        id: 0,
        name: "Europe",
        value: 0,
        label: "Europe",
        states: [
            {
                id: 10,
                name: "Austria",
                value: 10,
                label: "Austria",
                icon: icons.austri,
                desc: "When most people think of Austria, they think of rolling green hills, skiing, Christmas markets, and The Sound of Music. And while the country does have all of this, it also has so much more! For music lovers, it’s the home of Mozart. For foodies, it’s home to the Wienerschnitzel. For outdoor lovers, you can paraglide, raft, and hike in every corner of this picturesque country. No matter what your love is, Austria likely has something just for you. The minute you arrive, the country’s charming villages will take you by surprise and have you feeling like you stepped into a Disney fairytale."
            }, 
            {
                id: 11,
                name: "Belgium",
                value: 11,
                label: "Belgium",
                icon: icons.belgium,
                desc: "Belgium is a travel destination made for history buffs and chocolate addicts. Though the nation is small, it plays a big part in the world’s history. There are over 3,000 castles to explore, battlegrounds from the World Wars, and every museum imaginable. After you’ve had your history fill, you can kick your feet back and relax at one of the 1,000 breweries in the small country. Sip on a cold beer while you munch on frites—sounds dreamy to me! And to finish off the day? All the gourmet chocolate you can imagine! Many people tend to gloss over the country, visiting Brussels or Bruges for a day before moving on, but if you take the time, you’ll find that Belgium has so much more to explore!"
            }, 
            {
                id: 12,
                name: "Croatia",
                value: 12,
                label: "Croatia",
                icon: icons.croatia,
                desc: "With piercing turquoise seas and fairytale-like architecture, there is no denying Croatia is breathtakingly beautiful! Spanning most of the Adriatic Sea, you’re never too far away from the coast when traveling in Croatia. And even if it’s not pretty beaches you seek, stone castles and magnificent waterfalls await travelers of all kinds. Whether you are backpacking through Croatia or are wanting to splurge on Yacht Week, these travel tips will help you plan your next adventure to the Land of a Thousand Islands."
            }, 
            {
                id: 13,
                name: "Czech Republic",
                value: 13,
                label: "Czech Republic",
                icon: icons.cz
            }, 
            {
                id: 14,
                name: "Denmark",
                value: 14,
                label: "Denmark",
                icon: icons.denmark
            }, 
            {
                id: 15,
                name: "Finland",
                value: 15,
                label: "Finland",
                icon: icons.finland
            }, 
            {
                id: 16,
                name: "France",
                value: 16,
                label: "France",
                icon: icons.france
            }, 
            {
                id: 17,
                name: "Germany",
                value: 17,
                label: "Germany",
                icon: icons.germany
            },
            { 
                id: 18,
                name: "Greece",
                value: 18,
                label: "Greece",
                icon: icons.greece
            },
            { 
                id: 19,
                name: "Ireland",
                value: 19,
                label: "Ireland",
                icon: icons.ireland
            },
            { 
                id: 20,
                name: "Italy",
                value: 20,
                label: "Italy",
                icon: icons.italy
            },
                
            { 
                id: 21,
                name: "Malta",
                value: 21,
                label: "Malta",
                icon: icons.malta
            },
            { 
                id: 22,
                name: "Netherlands",
                value: 22,
                label: "Netherlands",
                icon: icons.netherlands
            },
            { 
                id: 23,
                name: "Norway",
                value: 23,
                label: "Norway",
                icon: icons.norway
            },
            { 
                id: 24,
                name: "Portugal",
                value: 24,
                label: "Portugal",
                icon: icons.portugal
            },
            { 
                id: 25,
                name: "Slovak Republic",
                value: 25,
                label: "Slovak Republic",
                icon: icons.sk
            },
            { 
                id: 26,
                name: "Spain",
                value: 26,
                label: "Spain",
                icon: icons.spain
            },
            { 
                id: 27,
                name: "Sweden",
                value: 27,
                label: "Sweden",
                icon: icons.sweden
            },
            { 
                id: 28,
                name: "United Kingdom",
                value: 28,
                label: "United Kingdom",
                icon: icons.uk
            }
        ]
    },
    {
        id: 2,
        name: "Australia",
        value: 2,
        label: "Australia",
        states: [
            {
                id: 29,
                name: "New Zeland",
                value: 29,
                label: "New Zeland",
                icon: icons.new_zeland
            },
            {
                id: 30,
                name: "New South Wales",
                value: 30,
                label: "New South Wales",
                icon: icons.australia
            }, 
            {
                id: 31,
                name: "Northern Territory",
                value: 31,
                label: "Northern Territory",
                icon: icons.australia
            }, 
            {
                id: 32,
                name: "Queesland",
                value: 32,
                label: "Queesland",
                icon: icons.australia
            }, 
            {
                id: 33,
                name: "South Australia",
                value: 33,
                label: "South Australia",
                icon: icons.australia
            }, 
            {
                id: 34,
                name: "Tasmania",
                value: 34,
                label: "Tasmania",
                icon: icons.australia
            }, 
            {
                id: 35,
                name: "Western Australia",
                value: 35,
                label: "Western Australia",
                icon: icons.australia
            },
            
        ]
    },
    {
        id: 3,
        name: "Africa",
        value: 3,
        label: "Africa",
        states: [
            {
                id: 36,
                name: "Egypt",
                value: 36,
                label: "Egypt",
                icon: icons.egypt
            }, 
            {
                id: 37,
                name: "Tanzania",
                value: 37,
                label: "Tanzania",
                icon: icons.tanzania
            }, 
            {
                id: 38,
                name: "South Africa",
                value: 38,
                label: "South Africa",
                icon: icons.southAfrica
            }, 
            {
                id: 39,
                name: "Morocco",
                value: 39,
                label: "Morocco",
                icon: icons.morocco
            }, 
            {
                id: 40,
                name: "Madagascar",
                value: 40,
                label: "Madagascar",
                icon: icons.madagascar
            }, 
            {
                id: 41,
                name: "Tunisia",
                value: 41,
                label: "Tunisia",
                icon: icons.tunisia
            }, 
            {
                id: 42,
                name: "Congo",
                value: 42,
                label: "Congo",
                icon: icons.congo
            }, 
            {
                id: 43,
                name: "Mauritania",
                value: 43,
                label: "Mauritania",
                icon: icons.mauritania
            },
            { 
                id: 44,
                name: "Mauritius",
                value: 44,
                label: "Mauritius",
                icon: icons.mauritius
            },
            { 
                id: 45,
                name: "Seychelles",
                value: 45,
                label: "Seychelles",
                icon: icons.seychelles
            }
        ]
    },
    {
        id: 1,
        name: "Asia",
        value: 1,
        label: "Asia",
        states: [
            {
                id: 46,
                name: "Honk Kong",
                value: 46,
                label: "Honk Kong",
                icon: icons.honkkong
            },
            {
                id: 47,
                name: "Indonesia",
                value: 47,
                label: "Indonesia",
                icon: icons.indonesia
            },
            { 
                id: 48,
                name: "India",
                value: 48,
                label: "India",
                icon: icons.india
            },
            {
                id: 49,
                name: "Japan",
                value: 49,
                label: "Japan",
                icon: icons.japan
            },
            {
                id: 50,
                name: "China",
                value: 50,
                label: "China",
                icon: icons.china
            },
            {
                id: 51,
                name: "Philippines",
                value: 51,
                label: "Philippines",
                icon: icons.philipines
            }, 
            {
                id: 52,
                name: "Vietnam",
                value: 52,
                label: "Vietnam",
                icon: icons.vietnam
            }, 
            {
                id: 53,
                name: "Thailand",
                value: 53,
                label: "Thailand",
                icon: icons.thailand
            }, 
            {
                id: 54,
                name: "Malaysia",
                value: 54,
                label: "Malaysia",
                icon: icons.malaysia
            }, 
            {
                id: 55,
                name: "Sri Lanka",
                value: 55,
                label: "Sri Lanka",
                icon: icons.srilanka
            }, 
            {
                id: 56,
                name: "United Arab Emirates",
                value: 56,
                label: "United Arab Emirates",
                icon: icons.uae
            }, 
            {
                id: 57,
                name: "Singapore",
                value: 57,
                label: "Singapore",
                icon: icons.singapore
            }
        ]
    }
]

const questions = [
    {
        id: 0,
        title: "HOW DO YOU MANAGE TO TRAVEL THE WORLD? 🌍",
        response: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit con sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum."
    },
    {
        id: 1,
        title: "HOW DID YOU BUILD AND MARKET YOUR BLOG? 🤔",
        response: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit con sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu."
    },
    {
        id: 2,
        title: "WHAT RESTAURANTS DO YOU RECOMMEND? 🍕",
        response: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit con sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum."
    },
    {
        id: 3,
        title: "WHAT GEAR & SOFTWARE DO YOU USE? 📷",
        response: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit con sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum."
    },
    {
        id: 4,
        title: "HOW TO TRAVEL WITH YOUR CAT? 🐶",
        response: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit con sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue."
    },
    {
        id: 5,
        title: "WHAT LOW BUDGET DESTINATIONS DO YOU RECOMMEND? 💸",
        response: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit con sagittis Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
]

const instagram = [
    {
        id: 0,
        post: images.europe1
    },
    {
        id: 1,
        post: images.greece
    },
    {
        id: 2,
        post: images.italy
    },
]


export default {
    instagram,
    curentLocation,
    questions,
    continents,
    categories,
    explore,
    initial_explore,
    essentials,
    states

}