// Function to create associations



const entities = {
    Districts: require('./Districts').Districts,
    Travel_places: require('./Travel_places').Travel_places,
    Posts: require('./Posts').Posts,
    Transportations: require('./Transportations').Transportations,
    Hotels: require('./Hotels').hotels,
    Seasons: require('./Seasons').Seasons,
    Travel_products: require('./Travel_products').travel_products,
    Travel_product_details: require('./Travel_product_details').Travel_product_details
  };



function createAssociation() {
    entities.Districts.hasMany(entities.Travel_places, { foreignKey: 'district_id' });
    entities.Travel_places.belongsTo(entities.Districts, { foreignKey: 'district_id' });
  
    entities.Districts.hasMany(entities.Transportations, { foreignKey: 'district_id' });
    entities.Transportations.belongsTo(entities.Districts, { foreignKey: 'district_id' });
  
    entities.Travel_places.hasMany(entities.Posts, { foreignKey: 'travel_place_id' });
    entities.Posts.belongsTo(entities.Travel_places, { foreignKey: 'travel_place_id' });
  
    entities.Travel_products.hasMany(entities.Travel_product_details, { foreignKey: 'product_id' });
    entities.Travel_product_details.belongsTo(entities.Travel_products, { foreignKey: 'product_id' });
  
    entities.Travel_places.hasMany(entities.Hotels, { foreignKey: 'travel_place_id' });
    entities.Hotels.belongsTo(entities.Travel_places, { foreignKey: 'travel_place_id' });
  }
  
 
  
  module.exports = {
    createAssociation,
    
  };