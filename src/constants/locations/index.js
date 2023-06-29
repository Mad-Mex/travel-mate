
export const locations = [

    {
      id: 1,
      city: "Buenos Aires",
      places: [
        {
          id: "escorial",
          location: "Argentina, Buenos Aires",
          hotelName: "El Escorial",
          hotelImage: require("../../../assets/images/hotel_indoor_3.jpg"),
          typeOfLodging: "Resort - Familiar",
          ranking: "8.2 - Muy bien",
          numberOfReviews: "20",
          price: "120",
          description: "Resort familiar, ideal para relajarse el fin de ",
          description2: "semana. Contamos con piscina y servicio",
          description3: "de buffet.",
          bedSize: "King size",
          bedSizeIconName: "bed-king-outline",
          cancelationDays: "3",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Piscina",
              iconName: "pool"
            },

            {
              name: "Comida",
              iconName: "silverware-variant"
            }, 

            {

              name: "Televisión",
              iconName: "television"
            },
      
            {
              name: "Wi-fi",
              iconName: "wifi"
            },
          ]
        },

        {
          id: "grand_maison",
          location: "Argentina, Buenos Aires",
          hotelName: "Le Grand Maison",
          hotelImage: require("../../../assets/images/hotel_wedding.jpg"),
          typeOfLodging: "Hotel para eventos",
          ranking: "9.3 - Excelente",
          numberOfReviews: "90",
          price: "300",
          discount: false,
          discountPercentage: "",
          description: "Hotel especializado en bodas, reuniones y",
          description2: "conferencias. Hacemos de tu evento una experiencia",
          description3: "inolvidable ",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "14",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Comida",
              iconName: "silverware-variant"
            },

            {
              name: "Floristería",
              iconName: "flower"
            },
            
            {
              name: "Planchado",
              iconName: "iron-outline"
            },

            {

              name: "Televisión",
              iconName: "television"
            },
      
            {
              name: "Wi-fi",
              iconName: "wifi"
            },
          ]
        },
      ]
    },


    {
      id: 2,
      city: "Quebec",
      places: [
        {
          id: "bedford",
          location: "Canadá, Quebec",
          hotelName: "Bedford",
          hotelImage: require("../../../assets/images/hotel_indoor_2.jpg"),
          typeOfLodging: "Hotel",
          ranking: "8.2 - Muy bien",
          numberOfReviews: "40",
          price: "40",
          discount: false,
          discountPercentage: "",
          description: "Hotel confortable para viajeros ocasionales.  ",
          description2: "El cuarto incluye cocina, estudio y televisión",
          description3: "de paga.",
          bedSize: "Cama sencilla",
          bedSizeIconName: "bed-single-outline",
          cancelationDays: "3",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Cocina",
              iconName: "bowl-mix-outline"
            },

            {
              name: "Planchado",
              iconName: "iron-outline"
            },
            

            {
              name: "Televisión",
              iconName: "television"
            },
      
            {
              name: "Wi-fi",
              iconName: "wifi"
            },
          ]
        },

        {
          id: "snowflake",
          location: "Canadá, Quebec",
          hotelName: "Snowflake Obsidian",
          hotelImage: require("../../../assets/images/cottage.jpg"),
          typeOfLodging: "Cabaña - pareja",
          ranking: "8.7 - Muy bien",
          numberOfReviews: "200",
          price: "80",
          discount: true,
          discountPercentage: "20",
          description: "Cabaña acogedora con servicio de calefacción.",
          description2: "La cabaña está rodeada de naturaleza y en los  ",
          description3: "alrededores hay un local de comida casera.",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "20",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Cocina",
              iconName: "bowl-mix-outline"
            },

            {
              name: "Calefacción",
              iconName: "thermostat-box"
            },

            {
              name: "Televisión",
              iconName: "television"
            },
            
            {
              name: "Wi-fi",
              iconName: "wifi"
            },
          ]
        },
      ]
    },


    {
      id: 3,
      city: "Seattle",
      places: [
        {
          id: "sky_garden",
          location: "E.U.A., Seattle",
          hotelName: "Sky Garden",
          hotelImage: require("../../../assets/images/hotel_pool_4.jpg"),
          typeOfLodging: "Hotel Prémium",
          ranking: "9.4 - Excelente",
          numberOfReviews: "90",
          price: "340",
          discount: true,
          discountPercentage: "10",
          description: "Hotel con piscina en la terraza y spa",
          description2: "",
          description3: "",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "7",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Piscina",
              iconName: "pool"
            },

            {
              name: "Spa",
              iconName: "spa-outline"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            },
          ]
          
        },

        {
          id: "royal_inn",
          location: "E.U.A., Seattle",
          hotelName: "Royal Inn",
          hotelImage: require("../../../assets/images/hotel_indoor_5.jpg"),
          typeOfLodging: "Hotel - pareja",
          ranking: "8.8 - Muy bien",
          numberOfReviews: "70",
          price: "160",
          discount: true,
          discountPercentage: "20",
          description: "Habitaciones elegantes y espaciosas. Ofrecemos",
          description2: "servicio de lavandería y planchado.",
          description3: "",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "5",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Lavandería",
              iconName: "washing-machine"
            },

            {
              name: "Planchado",
              iconName: "iron-outline"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            },
          ]
        },

        {
          id: "magnum",
          location: "E.U.A., Seattle",
          hotelName: "Magnum",
          hotelImage: require("../../../assets/images/hotel_indoor_6.jpg"),
          typeOfLodging: "Hotel Prémium",
          ranking: "8.8 - Muy bien",
          numberOfReviews: "70",
          price: "160",
          discount: true,
          discountPercentage: "20",
          description: "Habitaciones elegantes, espaciosas y con piscina",
          description2: "interior. A 2km del mirador Space",
          description3: "Needle.",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "12",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Piscina",
              iconName: "pool"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            },

            {
              name: "Seguridad",
              iconName: "cctv"
            },

          ]
        },
      ]
    },

    {
      id: "4",
      city: "Ciudad de México",
      places: [
        {
          id: "luxor",
          location: "México, Ciudad de México",
          hotelName: "Luxor",
          hotelImage: require("../../../assets/images/hotel_lobby.jpg"),
          typeOfLodging: "Hotel - Negocios",
          ranking: "7.4 - Bien",
          numberOfReviews: "24",
          price: "35",
          discount: false,
          discountPercentage: "",
          description: "Hotel especializado en reuniones ejecutivas.",
          description2: "Servicio de comida y repostería gourmet",
          description3: "",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "3",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Restaurante",
              iconName: "silverware-variant"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            },

            {
              name: "Cámaras en el exterior",
              iconName: "cctv"
            },

          ]
        },

        {
          id: "camp_dorada",
          location: "México, Ciudad de México",
          hotelName: "Campiña Dorada",
          hotelImage: require("../../../assets/images/hotel_outdoor_2.jpg"),
          typeOfLodging: "Hotel - restaurante",
          ranking: "8.1 - Muy Bien",
          numberOfReviews: "12",
          price: "70",
          discount: true,
          discountPercentage: "15",
          description: "Hotel con servicio de bufet y cafetería.",
          description2: "El hotel está rodeado por un bosque y un lago.",
          description3: "Ofrecemos sesiones de yoga al aire libre.",
          bedSize: "King size",
          bedSizeIconName: "bed-king-outline",
          cancelationDays: "5",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Restaurante",
              iconName: "silverware-variant"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            },

            {
              name: "Yoga",
              iconName: "yoga"
            },

          ]
        },

        {
          id: "barranquita",
          location: "México, Ciudad de México",
          hotelName: "La Barranquita",
          hotelImage: require("../../../assets/images/la_barranquita.jpg"),
          typeOfLodging: "Hotel - restaurante",
          ranking: "7.5 - Bien",
          numberOfReviews: "100",
          price: "28",
          discount: false,
          discountPercentage: "",
          description: "Hotel con servicio de comida típica mexicana",
          description2: "",
          description3: "",
          bedSize: "Cama sencilla",
          bedSizeIconName: "bed-single-outline",
          cancelationDays: "2",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Restaurante",
              iconName: "silverware-variant"
            },

            {
              name: "Televisión",
              iconName: "television"
            }
          ]
        },
      ]
    },

    {
      id: "5",
      city: "Lima",
      places: [
        { 
          id: "madison",
          location: "Perú, Lima",
          hotelName: "Madison",
          hotelImage: require("../../../assets/images/hotel_indoor.jpg"),
          typeOfLodging: "Hotel",
          ranking: "7.0 - Bien",
          numberOfReviews: "56",
          price: "12",
          discount: false,
          discountPercentage: "",
          description: "Habitaciones sencillas a un precio accesible",
          description2: "",
          description3: "",
          bedSize: "Cama sencilla",
          bedSizeIconName: "bed-single-outline",
          cancelationDays: "2",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            }
          ]
        },
  
        {
          id: "seven_inn",
          location: "Perú, Lima",
          hotelName: "Seven Inn",
          hotelImage: require("../../../assets/images/hotel_indoor_7.jpg"),
          typeOfLodging: "Hotel",
          ranking: "8.8 - Muy Bien",
          numberOfReviews: "76",
          price: "42",
          discount: false,
          discountPercentage: "",
          description: "Habitaciones cómodas y espaciosas. Gimnasio",
          description2: "en el sótano",
          description3: "",
          bedSize: "Queen size",
          bedSizeIconName: "bed-queen-outline",
          cancelationDays: "7",
          services: [
            {
              name: "Agua potable",
              iconName: "water-outline"
            },

            {
              name: "Regadera",
              iconName: "shower-head"
            },

            {
              name: "Restaurante",
              iconName: "silverware-variant"
            },

            {
              name: "Televisión",
              iconName: "television"
            },

            {
              name: "Wi-fi",
              iconName: "wifi"
            },

            {
              name: "Gimnasio",
              iconName: "dumbbell"
            },
          ]
        }
      ]
    },    
];


  