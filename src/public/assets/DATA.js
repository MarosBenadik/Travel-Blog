import icons from '../icons/icons';

const continents = [
    {
        id: 0,
        name: "Europe",
        desc: "Europe is the continent of hopeless romantics. A place that radiates warmth, happiness, and enchantment in the form of hot summer nights, under the stars. By day, wander picturesque streets, laughing and chatting, or dip salty, sunkissed skin in beautiful blue waters. Continue to feed the soul by visiting the most sensational cities in the world! Each magical European city writes a love letter to the past, through its buildings and customs. For example, the abstract works of Gaudi in Barcelona, the love lock bridge of Paris, or the exotic grand bazaar of Istanbul. Alternatively, get ready for an epic adventure through the ages. Discover wonders like the majestic acropolis in Athens, the magnificent Colosseum in Rome, or the remarkable floating city of Venice."
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

const categories = [
    {
        id: 0,
        name: "Newest Blogs",
        image: icons.i_new
    },
    {
        id: 1,
        name: "Low Budget",
        image: icons.money,
    },
    {
        id: 2,
        name: "Exotic",
        image: icons.exotic
    },
    {
        id: 3,
        name: "Food Lowers",
        image: icons.food
    },
    {
        id: 4,
        name: "History",
        image: icons.history
    },
    {
        id: 5,
        name: "Beaches",
        image: icons.beach
    },
    {
        id: 6,
        name: "Culture",
        image: icons.culture
    },
]

const explore = [

    // 1: coold, 2: city life, 3: 

    {
        id: 0,
        name: "North America",
        states: [
            {
                id: 0,
                name: "Canada",
                icon: icons.canada,
            }, 
            {
                id: 1,
                name: "Mexico",
                icon: icons.mexico
            }, 
            {
                id:2,
                name: "United States",
                icon: icons.usa
            }
        ]
    },
    {
        id: 1,
        name: "South America",
        states: [
            {
                id: 0,
                name: "Argentina",
                icon: icons.argentina
            },{
                id: 1,
                name: "Bolivia",
                icon: icons.bolivia
            },
            {
                id: 2,
                name: "Brazil",
                icon: icons.brazil
            },
            {
                id: 3,
                name: "Chile",
                icon: icons.chile
            },
            {
                id: 4,
                name: "Colombia",
                icon: icons.columbia
            },
            {
                id: 5,
                name: "Peru",
                icon: icons.peru
            },
            {
                id: 6,
                name: "Venezuela",
                icon: icons.venezuela
            }
        ]
    },
    {
        id: 2,
        name: "Europe",
        states: [
            {
                id: 0,
                name: "Austria",
                icon: icons.austri
            }, 
            {
                id: 1,
                name: "Belgium",
                icon: icons.belgium
            }, 
            {
                id: 2,
                name: "Croatia",
                icon: icons.croatia
            }, 
            {
                id: 3,
                name: "Czech Republic",
                icon: icons.cz
            }, 
            {
                id: 4,
                name: "Denmark",
                icon: icons.denmark
            }, 
            {
                id: 5,
                name: "Finland",
                icon: icons.finland
            }, 
            {
                id: 6,
                name: "France",
                icon: icons.france
            }, 
            {
                id: 7,
                name: "Germany",
                icon: icons.germany
            },
            { 
                id: 8,
                name: "Greece",
                icon: icons.greece
            },
            { 
                id: 9,
                name: "Ireland",
                icon: icons.ireland
            },
            { 
                id: 10,
                name: "Italy",
                icon: icons.italy
            },
                
            { 
                id: 11,
                name: "Malta",
                icon: icons.malta
            },
            { 
                id: 12,
                name: "Netherlands",
                icon: icons.netherlands
            },
            { 
                id: 13,
                name: "Norway",
                icon: icons.norway
            },
            { 
                id: 14,
                name: "Portugal",
                icon: icons.portugal
            },
            { 
                id: 15,
                name: "Slovak Republic",
                icon: icons.sk
            },
            { 
                id: 16,
                name: "Spain",
                icon: icons.spain
            },
            { 
                id: 17,
                name: "Sweden",
                icon: icons.sweden
            },
            { 
                id: 18,
                name: "United Kingdom",
                icon: icons.uk
            }
        ]
    },
    {
        id: 3,
        name: "Australia",
        states: [
            {
                id: 0,
                name: "New Zeland",
                icon: icons.new_zeland
            },
            {
                id: 1,
                name: "New South Wales",
                icon: icons.australia
            }, 
            {
                id: 2,
                name: "Northern Territory",
                icon: icons.australia
            }, 
            {
                id: 3,
                name: "Queesland",
                icon: icons.australia
            }, 
            {
                id: 4,
                name: "South Australia",
                icon: icons.australia
            }, 
            {
                id: 5,
                name: "Tasmania",
                icon: icons.australia
            }, 
            {
                id: 6,
                name: "Western Australia",
                icon: icons.australia
            },
            
        ]
    },
    {
        id: 4,
        name: "Africa",
        states: [
            {
                id: 0,
                name: "Egypt",
                icon: icons.egypt
            }, 
            {
                id: 1,
                name: "Tanzania",
                icon: icons.tanzania
            }, 
            {
                id: 2,
                name: "South Africa",
                icon: icons.southAfrica
            }, 
            {
                id: 3,
                name: "Morocco",
                icon: icons.morocco
            }, 
            {
                id: 4,
                name: "Madagascar",
                icon: icons.madagascar
            }, 
            {
                id: 5,
                name: "Tunisia",
                icon: icons.tunisia
            }, 
            {
                id: 6,
                name: "Congo",
                icon: icons.congo
            }, 
            {
                id: 7,
                name: "Mauritania",
                icon: icons.mauritania
            },
            { 
                id: 8,
                name: "Mauritius",
                icon: icons.mauritius
            },
            { 
                id: 9,
                name: "Seychelles",
                icon: icons.seychelles
            }
        ]
    },
    {
        id: 5,
        name: "Asia",
        states: [
            {
                id: 0,
                name: "Honk Kong",
                icon: icons.honkkong
            },
            {
                id: 1,
                name: "Indonesia",
                icon: icons.indonesia
            },
            { 
                id: 2,
                name: "India",
                icon: icons.india
            },
            {
                id: 3,
                name: "Japan",
                icon: icons.japan
            },
            {
                id: 4,
                name: "China",
                icon: icons.china
            },
            {
                id: 5,
                name: "Philippines",
                icon: icons.philipines
            }, 
            {
                id: 6,
                name: "Vietnam",
                icon: icons.vietnam
            }, 
            {
                id: 7,
                name: "Thailand",
                icon: icons.thailand
            }, 
            {
                id: 8,
                name: "Malaysia",
                icon: icons.malaysia
            }, 
            {
                id: 9,
                name: "Sri Lanka",
                icon: icons.srilanka
            }, 
            {
                id: 10,
                name: "United Arab Emirates",
                icon: icons.uae
            }, 
            {
                id: 11,
                name: "Singapore",
                icon: icons.singapore
            }
        ]
    }
]



export default {

    continents,
    categories,
    explore
}