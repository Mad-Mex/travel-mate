
export const locations = [

    {
      id: 1,
      city: "Ciudad de México",
      country: "México",
      places: [
        {

          hotelName: "Hotel Luxor",
          lodging: "Hotel - Negocios",
          image: require("../../../assets/images/hotel_indoor_2.jpg"),
          discount: false,
          discountPercentage: "",
          price: "35",
          previousPrice: ""
        },
  
        {
          hotelName: "Campiña Dorada",
          lodging: "Hotel - Restaurante", 
          image: require("../../../assets/images/hotel_outdoor_2.jpg"),
          discount: true,
          discountPercentage: "10%",
          price: "90",
          previousPrice: "100"
        },
      ]
    },
  

    {
      id: 2,
      city: "Buenos Aires",
      country: "Argentina",
      places: [
        {
          hotelName: "El Escorial",
          lodging: "Resort - Familiar",
          image: require("../../../assets/images/hotel_indoor_3.jpg"),
          discount: false,
          discountPercentage: "",
          price: "150",
          previousPrice: ""
        },
  
        {
          hotelName: "Le Grand Maison",
          lodging: "Hotel - familiar",
          image: require("../../../assets/images/hotel_wedding.jpg"),
          discount: false,
          discountPercentage: "",
          price: "90",
          previousPrice: ""
        },
      ]
    },
  

    {
      id: 3,
      city: "Nueva York",
      country: "Estados Unidos",
      places: [
        {
          hotelName: "Madison Square Palace",
          lodging: "Hotel - familiar",
          image: require("../../../assets/images/hotel_pool_4.jpg"),
          discount: true,
          discountPercentage: "20%",
          price: "240",
          previousPrice: "300"
        },
  
        {
          hotelName: "Avenue Seven Inn",
          lodging: "Hotel - Familiar",
          image: require("../../../assets/images/hotel_gourmet.jpg"),
          discount: false,
          discountPercentage: "",
          price: "500",
          previousPrice: ""
        }
      ]
    },    
];


  