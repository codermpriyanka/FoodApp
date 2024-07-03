# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





// const resList = [
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '121603',
//       name: 'Kannur Food Point',
//       uuid: '51983905-e698-4e31-b0d7-e376eca56320',
//       city: '1',
//       area: 'Tavarekere',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 24,
//       minDeliveryTime: 24,
//       maxDeliveryTime: 24,
//       slaString: '24 MINS',
//       lastMileTravel: 3,
//       slugs: {
//         restaurant: 'kannur-food-point-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
//       locality: 'SG Palya',
//       parentId: 20974,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: '',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '3 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '121603',
//         deliveryTime: 24,
//         minDeliveryTime: 24,
//         maxDeliveryTime: 24,
//         lastMileTravel: 3,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '3.9',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '229',
//       name: 'Meghana Foods',
//       uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
//       cuisines: [
//         'Biryani',
//         'Andhra',
//         'South Indian',
//         'North Indian',
//         'Chinese',
//         'Seafood',
//       ],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: '₹500 FOR TWO',
//       deliveryTime: 16,
//       minDeliveryTime: 16,
//       maxDeliveryTime: 16,
//       slaString: '16 MINS',
//       lastMileTravel: 1.399999976158142,
//       slugs: {
//         restaurant: 'meghana-foods-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
//       locality: '5th Block',
//       parentId: 635,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.3 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '229',
//         deliveryTime: 16,
//         minDeliveryTime: 16,
//         maxDeliveryTime: 16,
//         lastMileTravel: 1.399999976158142,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '428',
//       name: 'Biryani Pot',
//       uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
//       cuisines: ['North Indian', 'Biryani'],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: '₹500 FOR TWO',
//       deliveryTime: 19,
//       minDeliveryTime: 19,
//       maxDeliveryTime: 19,
//       slaString: '19 MINS',
//       lastMileTravel: 1.899999976158142,
//       slugs: {
//         restaurant: 'biryani-pot-madiwala-junction-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
//       locality: 'Maruti Nagar',
//       parentId: 21798,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '20% off',
//         shortDescriptionList: [
//           {
//             meta: '20% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '20% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.8 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '428',
//         deliveryTime: 19,
//         minDeliveryTime: 19,
//         maxDeliveryTime: 19,
//         lastMileTravel: 1.899999976158142,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.9',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '223',
//       name: 'Truffles',
//       uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
//       cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
//       tags: [],
//       costForTwo: 45000,
//       costForTwoString: '₹450 FOR TWO',
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 30,
//       slaString: '30 MINS',
//       lastMileTravel: 1.600000023841858,
//       slugs: {
//         restaurant: 'truffles-ice-spice-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
//       locality: '5th Block',
//       parentId: 218065,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6275692~p=4~eid=00000187-2c1c-96f0-0062-eea300b00430',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.6 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '223',
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 30,
//         lastMileTravel: 1.600000023841858,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '425',
//       name: 'Hotel Empire',
//       uuid: 'c0c37758-2e83-4429-aad6-eb94debb48f5',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
//       cuisines: ['North Indian', 'Kebabs', 'Biryani'],
//       tags: [],
//       costForTwo: 45000,
//       costForTwoString: '₹450 FOR TWO',
//       deliveryTime: 23,
//       minDeliveryTime: 23,
//       maxDeliveryTime: 23,
//       slaString: '23 MINS',
//       lastMileTravel: 1.2999999523162842,
//       slugs: {
//         restaurant: 'hotel-empire-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore',
//       locality: 'Koramangala',
//       parentId: 475,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '10% off',
//         shortDescriptionList: [
//           {
//             meta: '10% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '10% off up to ₹40 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '10% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '10% off up to ₹40 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.2 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '425',
//         deliveryTime: 23,
//         minDeliveryTime: 23,
//         maxDeliveryTime: 23,
//         lastMileTravel: 1.2999999523162842,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.1',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '201224',
//       name: 'Asha tiffins',
//       uuid: 'e32381cf-6468-4c10-9bad-47fa08e898a8',
//       city: '1',
//       area: 'HSR Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'n15vckntsiboiod3gpco',
//       cuisines: ['Indian', 'South Indian', 'Beverages'],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: '₹200 FOR TWO',
//       deliveryTime: 26,
//       minDeliveryTime: 26,
//       maxDeliveryTime: 26,
//       slaString: '26 MINS',
//       lastMileTravel: 4,
//       slugs: {
//         restaurant: 'asha-tiffins-hsr-hsr-2',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         'Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India',
//       locality: '7th Sector',
//       parentId: 236243,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '30% off',
//         shortDescriptionList: [
//           {
//             meta: '30% off | Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '30% off upto ₹80 | Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '30% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '30% off upto ₹80 | Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6196512~p=7~eid=00000187-2c1c-96f0-0062-eea400b00725',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '201224',
//         deliveryTime: 26,
//         minDeliveryTime: 26,
//         maxDeliveryTime: 26,
//         lastMileTravel: 4,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '59593',
//       name: 'Al Daaz',
//       uuid: 'c189b92c-d842-4595-9a1f-ff85bd67bc2a',
//       city: '1',
//       area: 'Hsr Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'rxsvhvcdip9dbfdijzk9',
//       cuisines: [
//         'American',
//         'Arabian',
//         'Chinese',
//         'Desserts',
//         'Mughlai',
//         'North Indian',
//       ],
//       tags: [],
//       costForTwo: 40000,
//       costForTwoString: '₹400 FOR TWO',
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       slaString: '36 MINS',
//       lastMileTravel: 4.5,
//       slugs: {
//         restaurant: 'al-daaz-hsr-hsr',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102',
//       locality: 'HSR',
//       parentId: 21640,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '59593',
//         deliveryTime: 36,
//         minDeliveryTime: 36,
//         maxDeliveryTime: 36,
//         lastMileTravel: 4.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.3',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '56589',
//       name: 'Roti-Wala',
//       uuid: '257a0889-b243-4252-b84a-6c9f1760d58f',
//       city: '1',
//       area: 'BTM Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'ptetuqkrhmpd8tiqiztg',
//       cuisines: [
//         'North Indian',
//         'Home Food',
//         'Thalis',
//         'Chinese',
//         'Punjabi',
//         'South Indian',
//         'Ice Cream',
//       ],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: '₹200 FOR TWO',
//       deliveryTime: 37,
//       minDeliveryTime: 37,
//       maxDeliveryTime: 37,
//       slaString: '37 MINS',
//       lastMileTravel: 4,
//       slugs: {
//         restaurant: 'roti-wala-lavelle-road-central-bangalore',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '#239, 7TH Cross, Btm Stage 2. NS Palya, 560076',
//       locality: '2nd Stage',
//       parentId: 415860,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹100 | Use code GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹100 | Use code GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '56589',
//         deliveryTime: 37,
//         minDeliveryTime: 37,
//         maxDeliveryTime: 37,
//         lastMileTravel: 4,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '560153',
//       name: 'Rice Bowl',
//       uuid: 'b5652b7d-5df8-4be5-8fe9-27648b668e79',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '1000+ ratings',
//       cloudinaryImageId: 'z2ahvclpmdv6lekyth39',
//       cuisines: ['North Indian', 'South Indian'],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 22,
//       minDeliveryTime: 22,
//       maxDeliveryTime: 22,
//       slaString: '22 MINS',
//       lastMileTravel: 2.5,
//       slugs: {
//         restaurant: 'rice-bowl-koramangala-koramangala-2',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '42A, Old House List No 148/11, Katha No 296, BBMP PID No 68-327-98/1, Jakkasandra Village, Sarjapur Main Road, Bengaluru -, BTM Layout , B.B.M.P South, Karnataka - 560034',
//       locality: 'Jakkasandra',
//       parentId: 169302,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: 'FLAT125 off',
//         shortDescriptionList: [
//           {
//             meta: 'FLAT125 off | Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: 'FLAT125 off | Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '₹125 OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: 'FLAT125 off | Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6081264~p=10~eid=00000187-2c1c-96f0-0062-eea500b00a3d',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '2.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '560153',
//         deliveryTime: 22,
//         minDeliveryTime: 22,
//         maxDeliveryTime: 22,
//         lastMileTravel: 2.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.1',
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '337335',
//       name: 'Kannur food kitchen',
//       uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
//       city: '1',
//       area: 'BTM Layout',
//       totalRatingsString: '5000+ ratings',
//       cloudinaryImageId: 'a27weqanhnszqiuzsoik',
//       cuisines: ['Kerala', 'Biryani', 'Beverages'],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: '₹200 FOR TWO',
//       deliveryTime: 24,
//       minDeliveryTime: 24,
//       maxDeliveryTime: 24,
//       slaString: '24 MINS',
//       lastMileTravel: 2.5,
//       slugs: {
//         restaurant: 'kannur-food-kitchen-btm-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
//       locality: '1st  Stage',
//       parentId: 114756,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//           {
//             meta: 'Free Limejuice on orders above ₹499',
//             discountType: 'Freebie',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//           {
//             meta: 'Free Limejuice on orders above ₹499',
//             discountType: 'Freebie',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: '',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//           {
//             meta: 'Free Limejuice on orders above ₹499',
//             discountType: 'Freebie',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '2.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '337335',
//         deliveryTime: 24,
//         minDeliveryTime: 24,
//         maxDeliveryTime: 24,
//         lastMileTravel: 2.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.8',
//       totalRatings: 5000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '601',
//       name: 'Litti Twist',
//       uuid: 'e7dcc8d7-fea9-4312-8c4e-7a6516a026db',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'zyahkuhlgnxp3prkvttv',
//       cuisines: ['North Indian'],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: '₹250 FOR TWO',
//       deliveryTime: 28,
//       minDeliveryTime: 28,
//       maxDeliveryTime: 28,
//       slaString: '28 MINS',
//       lastMileTravel: 4.5,
//       slugs: {
//         restaurant: 'litti-twist-2nd-stage-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
//       locality: '2nd Stage',
//       parentId: 3455,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6276197~p=13~eid=00000187-2c1c-96f0-0062-eea600b00d24',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '601',
//         deliveryTime: 28,
//         minDeliveryTime: 28,
//         maxDeliveryTime: 28,
//         lastMileTravel: 4.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '256957',
//       name: 'Shanmukha Restaurant',
//       uuid: 'c1972fbf-2e19-42d6-ac49-54f412f78d86',
//       city: '1',
//       area: 'Jayanagar',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'c5howge9hbdor7uqf949',
//       cuisines: [
//         'Biryani',
//         'Hyderabadi',
//         'Andhra',
//         'North Indian',
//         'South Indian',
//         'Chinese',
//         'Tandoor',
//         'Seafood',
//         'Beverages',
//       ],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       slaString: '36 MINS',
//       lastMileTravel: 5,
//       slugs: {
//         restaurant: 'shanmukha-restaurant-jayanagar-jayanagar',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '1313, Near Bangalore Central Mall, 25th Main, 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India',
//       locality: '9th Block',
//       parentId: 9954,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 4900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 4900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '4900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '256957',
//         deliveryTime: 36,
//         minDeliveryTime: 36,
//         maxDeliveryTime: 36,
//         lastMileTravel: 5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.1',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '642459',
//       name: 'Malnad Donne Biryani MDB',
//       uuid: '4ae022a0-9296-40ac-8ea9-3e764200e6a5',
//       city: '1',
//       area: 'Jayanagar',
//       totalRatingsString: '50+ ratings',
//       cloudinaryImageId: 'tjw67zgzfehxgfo1vio2',
//       cuisines: ['Biryani', 'South Indian', 'Kebabs'],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: '₹250 FOR TWO',
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       slaString: '36 MINS',
//       lastMileTravel: 5,
//       slugs: {
//         restaurant: 'malnad-donne-biryani-mdb-jayanagar-jayanagar',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '1384, 32nd E Cross , near Axis bank, opp sanjay gandhi university. 4th T Block , Jayanagar, Bengaluru, Karnataka 560041',
//       locality: 'T Block',
//       parentId: 130946,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 4900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 4900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '4900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 1,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '642459',
//         deliveryTime: 36,
//         minDeliveryTime: 36,
//         maxDeliveryTime: 36,
//         lastMileTravel: 5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'IT_IS_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.9',
//       totalRatings: 50,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '27643',
//       name: 'Ultimate Parathas',
//       uuid: '925340c8-7945-4cdf-894b-01a90f5445a2',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'm0bjo1ds8l6o4civx6ek',
//       cuisines: ['Bihari', 'North Indian', 'Desserts'],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: '₹250 FOR TWO',
//       deliveryTime: 29,
//       minDeliveryTime: 29,
//       maxDeliveryTime: 29,
//       slaString: '29 MINS',
//       lastMileTravel: 4.5,
//       slugs: {
//         restaurant: 'litti-twist-koramangala-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
//       locality: '2nd Stage',
//       parentId: 21591,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6276390~p=16~eid=00000187-2c1c-96f0-0062-eea700b01075',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '27643',
//         deliveryTime: 29,
//         minDeliveryTime: 29,
//         maxDeliveryTime: 29,
//         lastMileTravel: 4.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '42294',
//       name: 'Udupi Palace',
//       uuid: '7e5fb1de-707b-4851-a0f7-a70df335efe2',
//       city: '1',
//       area: 'HSR Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'dbfp4mqtidbjh9sectlk',
//       cuisines: [
//         'Beverages',
//         'Biryani',
//         'Chinese',
//         'Desserts',
//         'North Indian',
//         'South Indian',
//       ],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: '₹150 FOR TWO',
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 30,
//       slaString: '30 MINS',
//       lastMileTravel: 5.599999904632568,
//       slugs: {
//         restaurant: 'udupi-palace-00-hsr',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         'No 1188 HNR tower 24th main second SECTOR HSR LAYOUT BANGALORE 560102',
//       locality: '2nd Sector',
//       parentId: 6971,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '20% off',
//         shortDescriptionList: [
//           {
//             meta: '20% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '20% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 4900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 4900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '4900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '5.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '42294',
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 30,
//         lastMileTravel: 5.599999904632568,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
// ];

// export default resList;






// "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
const resList=[
  {
  type:"restaurant",
  
    "info": {
      "id": "831065",
      "name": "Chinese Wok",
      "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
      "locality": "Chandni Chowk",
      "areaName": "Omaxe mall",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4,
      "parentId": "61955",
      "avgRatingString": "4.0",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-chandni-chowk-omaxe-mall-delhi-831065",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "798674",
      "name": "Wow! Momo",
      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
      "locality": "Chandni Chowk",
      "areaName": "Omaxe Chowk",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.7,
      "parentId": "1776",
      "avgRatingString": "3.7",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Momos.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Momos.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/wow-momo-chandni-chowk-omaxe-chowk-delhi-798674",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "804071",
      "name": "Pizza Hut",
      "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
      "locality": "H.C. Sen Marg",
      "areaName": "Omaxe ChandniChowk",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-h-c-sen-marg-omaxe-chandnichowk-delhi-804071",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "286518",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "ru7j7x8qqtvuzfuw7cdh",
      "locality": "Janpath",
      "areaName": "Janpath",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "10804",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-janpath-delhi-286518",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "302684",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "v4ryntwbvxuogbwfg3kj",
      "locality": "Connaught Place",
      "areaName": "Connaught Place",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "2438",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/barbeque-nation-connaught-place-delhi-302684",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "804724",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
      "locality": "Kaccha Bagh",
      "areaName": "Chandni Chowk",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Rolls & Wraps",
        "Fast Food"
      ],
      "avgRating": 4,
      "parentId": "547",
      "avgRatingString": "4.0",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-kaccha-bagh-chandni-chowk-delhi-804724",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "253765",
      "name": "McDonald's",
      "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
      "locality": "Kumar Theatre",
      "areaName": "Chandni Chowk",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:58:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-kumar-theatre-chandni-chowk-delhi-253765",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "467130",
      "name": "Cheesecake & Co.",
      "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
      "locality": "Khan Market",
      "areaName": "Asaf Ali Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "387417",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cheesecake-and-co-khan-market-asaf-ali-road-delhi-467130",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "831067",
      "name": "Big Bowl",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/17/ba250866-5c67-4b04-9e59-a357e9faa378_831067.JPG",
      "locality": "Chandni Chowk",
      "areaName": "Omaxe mall",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "434792",
      "avgRatingString": "4.6",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-chandni-chowk-omaxe-mall-delhi-831067",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "21383",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_21383.JPG",
      "locality": "Connaught Place",
      "areaName": "Connaught Place",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "2",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-connaught-place-delhi-21383",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "807783",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_807783.JPG",
      "locality": "Omaxe Mall",
      "areaName": "Chandni Chowk",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 3.9,
      "parentId": "166",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹139"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-omaxe-mall-chandni-chowk-delhi-807783",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "38925",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Netaji Subhash Marg",
      "areaName": "Daryaganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 01:55:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "258198",
      "name": "Great Indian Khichdi by EatFit",
      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
      "locality": "Chuna Mandi",
      "areaName": "Paharganj",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "319582",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-chuna-mandi-paharganj-delhi-258198",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "798675",
      "name": "Wow! China",
      "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
      "locality": "Chandni Chowk",
      "areaName": "Omaxe Chowk",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Tibetan",
        "Chinese",
        "Asian",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.6,
      "parentId": "226836",
      "avgRatingString": "3.6",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/wow-china-chandni-chowk-omaxe-chowk-delhi-798675",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "659837",
      "name": "Bakingo",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/18/81e84b38-8b76-4c3f-8028-08e8061871d8_659837.jpg",
      "locality": "Krishna Market",
      "areaName": "Karol Bagh",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.5,
      "parentId": "3818",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-krishna-market-karol-bagh-delhi-659837",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "438612",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "Cannought Circus",
      "areaName": "Connaught Place",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "5588",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-cannought-circus-connaught-place-delhi-438612",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "58217",
      "name": "Theobroma",
      "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
      "locality": "Mezzanine",
      "areaName": "Connaught Place",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/theobroma-mezzanine-connaught-place-delhi-58217",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "586952",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "jas0375oy8wenyxumvnu",
      "locality": "Malka Ganj Road",
      "areaName": "Kamla Nagar",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Ice Cream Cakes"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "2093",
      "avgRatingString": "4.7",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-malka-ganj-road-kamla-nagar-delhi-586952",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "701049",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
      "locality": "JAWAHAR NAGAR",
      "areaName": "Block-Ua",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-jawahar-nagar-block-ua-delhi-701049",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "128116",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
      "locality": "Kamla Nagar",
      "areaName": "Kamla Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "4961",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 03:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
      "type": "WEBLINK"
    }
  }
]
export default resList;