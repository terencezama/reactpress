
// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import OAuth from 'oauth-1.0a'
import crypto from 'react-native-crypto'


const create = (baseURL = 'http://localhost:8888') => {

  //region Default Config
  //########################################################
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const consumerKey = 'ck_367f16877f17257f9c77d30b26ed4e768f015043';
  const consumerSecret = 'cs_eeb0551c6e6d2abb356d151a3ceb68cff1c16a3e';

  const oauth = OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
  });
  //########################################################
  //endregion

  //region Networking
  //########################################################
  _post = (path, data) => {
    const request_data = {
      url: baseURL + path,
      method: 'POST'
    };
    const authorization = oauth.toHeader(oauth.authorize(request_data));
    api.setHeader('Authorization', authorization.Authorization);
    return api.post(path, data);
  }

  _get = (path, params) => {
    const request_data = {
      url: baseURL + path,
      method: 'GET'
    };
    const authorization = oauth.toHeader(oauth.authorize(request_data));
    api.setHeader('Authorization', authorization.Authorization);
    return api.get(path, params);
  }
  _put = (path, data) => {
    const request_data = {
      url: baseURL + path,
      method: 'PUT'
    };
    const authorization = oauth.toHeader(oauth.authorize(request_data));
    api.setHeader('Authorization', authorization.Authorization);
    return api.put(path, data);
  }
  _delete = (path, params) => {
    const request_data = {
      url: baseURL + path,
      method: 'DELETE'
    };
    const authorization = oauth.toHeader(oauth.authorize(request_data));
    api.setHeader('Authorization', authorization.Authorization);
    return api.delete(path, params);
  }
  //########################################################
  //endregion

  //region API
  //########################################################
  //API START

  //region Auth Endpoints
  const login = (data) => api.post('/wp-json/jwt-auth/v1/token', data);
  const forgotPassword = (data) => api.post('/wp-json/wp/v2/users/lostpassword', data);
  //endregion
  //region Customer Endpoints
  const register = (data) => _post('/wp-json/wc/v2/customers', data);
  const getCustomer = (id) => _get(` /wp-json/wc/v2/customers/${id}`);

  /* List Customers
  page
  per_page
  search
  exclude
  include
  offset
  order asc|desc
  orderby id|name|registered_date
  email
  role
  */
  const listCustomers = (params) => _get('/wp-json/wc/v2/customers', params);
  /* Update Customer
  id of customer
  */
  const updateCustomer = (id, data) => _put(`/wp-json/wc/v2/customers/${id}`, data);
  /* Delete Customer
  force 
  reassign - user id to reassign posts to
  */
  const deleteCustomer = (id, params) => _delete(`/wp-json/wc/v2/customers/${id}`, params);
  /* Batch Update */
  const batchUpdateCustomer = (data) => _post('/wp-json/wc/v2/customers/batch', data);
  //endregion
  //region Orders
  /* Create Order
  */
  const createOrder = (data) => _post('/wp-json/wc/v2/orders', data);
  /* Retrieve Order
  dp - Number of decimal points to use in each resource.
  */
  const getOrder = (id, params) => _get(`/wp-json/wc/v2/orders/${id}`, params);
  /* List Orders
  page
  per_page
  search
  after - after a ISO8601 date (string)
  before - befire ISO8601 date (string)
  exclude - exclude id
  include - limit results to ids
  offset
  order asc|desc
  orderBy - date|id|include|title|slug
  parent - limit result result to parent id []
  parent_exclude - [ids]
  status - any|pending|processing|on-hold|completed|cancelled|refunded|failed
  customer - integer
  product - integer
  dp - integer default=2 decimal point
  */
  const listOrders = (params) => _get('/wp-json/wc/v2/orders', params);
  /* Update Order
  id
  */
  const updateOrder = (id, data) => _put(`/wp-json/wc/v2/orders/${id}`, data);
  /* Delete Order
  force
  */
  const deleteOrder = (id, params) => _delete(`/wp-json/wc/v2/orders/${id}`, params);
  /* Batch Update Orders
  */
  const batchUpdateOrder = (data) => _post('/wp-json/wc/v2/orders/batch', data);
  //endregion
  //region Order Note
  /*Create Order Note for a Specific Order
  */
  const createOrderNote = (orderId, data) => _post(`/wp-json/wc/v2/orders/${orderId}/notes`, data);
  /*Retrieve Order Note
  */
  const getOrderNote = (orderId, id) => _get(`/wp-json/wc/v2/orders/${orderId}/notes/${id}`);
  /*List Order Notes
  type - any|customer|internal
  */
  const listOrderNotes = (orderId, params) => _get(`/wp-json/wc/v2/orders/${orderId}/notes`, params);
  /*Delete Order note
  force
  */
  const deleteOrderNote = (orderId, id, params) => _delete(`/wp-json/wc/v2/orders/${orderId}/notes/${id}`, params);
  //endregion
  //region Refunds
  /* Create Refund
  {
    "amount": "10"
  }
  */
  const createRefund = (orderId, data) => _post(`/wp-json/wc/v2/orders/${orderId}/refunds`, data);
  /*Get Refund
  orderId
  refundId
  */
  const getRefund = (orderId, refundId) => _get(`/wp-json/wc/v2/orders/${orderId}/refunds/${refundId}`)
  /* List Refunds
  page int
  per_page int
  search  string
  after - string ISO8601 date
  before - string ISO8601 date
  exclude []
  include []
  offset int
  order string
  orderby - date | id| include | title | slug
  parent [] parent id
  parent_exclude [] parent id
  dp int decimal point
  */
  const listRefunds = (orderId, params) => _get(`/wp-json/wc/v2/orders/${orderId}/refunds`, params);
  /* Delete Refund 
  force
  */
  const deleteRefund = (orderId, refundId, params) => _delete(`/wp-json/wc/v2/orders/${orderId}/refunds/${refundId}`, params);
  //endregion
  //region Product
  /*Create Product
  Create product with valid properties
  */
  const createProduct = (data) => _post(`/wp-json/wc/v2/products`,data);
  /*Reatrive Product
  */
  const getProduct = (id) => _get(`/wp-json/wc/v2/products/${id}`);
  /*List Products
  page            int
  per_page        int
  search          string
  after           string ISO8601 DATE
  before          string ISO8601 DATE
  exclude         [] ids
  include         [] ids
  offset          int
  order           string asc|desc
  orderby         string date|id|include|title|slug|date
  parent          [] ids
  parent_exclude  [] ids
  slug            string 
  status          string - any|draft|pending|private|publish|
  type            string - simple|grouped|external|variable
  sku             string
  featured        boolean
  category        string - category id
  tag             string - tagId
  shipping_class  string - classId
  attribute       string 
  attribute_term  string - attribute term id
  tax_class       string - standard|reduced-rate|zero-rate
  in_stock        boolean
  on_sale         boolean
  min_price       string
  max_price       string
  */
  const listProducts = (params) => _get(`/wp-json/wc/v2/products`,params);
  /*Update Product
  id
  data
  */
  const updateProduct = (id,data) => _put(`/wp-json/wc/v2/products/${id}`,data);
  /*Delete Product
  force
  */
  const deleteProduct = (id,params) => _delete(`/wp-json/wc/v2/products/${id}`,params);
  /*Batch Update Products
  */
  const batchUpdateProducts = (data) => _post(`/wp-json/wc/v2/products/batch`,data);
  /*Retrieve Product Reviews
  */
  const getProductReviews = (productId,reviewId) => _get(`/wp-json/wc/v2/products/${productId}/reviews/${reviewId}`);
  /*List Products reviews
  */
  const listProductReviews = (productId) => _get(`/wp-json/wc/v2/products/${productId}/reviews`);
  //endregion
  //region Product Variation
  /*Create Product Variation
  */
  const createProductVariation = (productId,data) => _post(`/wp-json/wc/v2/products/${productId}/variations`,data);
  /*Retrive Product Variation
  productId
  */
  const getProductVariation = (productId,variationId) => _get(`/wp-json/wc/v2/products/${productId}/variations/${variationId}`);
  /*List All ProductVariations
  page        - int
  per_page    - int
  search      - string
  after       - string ISO8601 Date
  before      - string ISO8601 Date
  exclude     - [] ids
  include     - [] ids
  offset      - int
  order       - string asc|desc
  orderby     - string date|id|include|title|slug
  parent      - [] ids
  parent_exclude - [] ids
  slug        - string
  status      - string - any|draft|pending|private|publish
  type        - string - simple|grouped|external|variable
  sku         - string
  feature     - boolean
  category    - string categoryId
  tag         - string tagId
  shipping_class - string classId
  attribute   - string
  attribute_term - string
  tax_class   - string - standard|reduced-rate|zero-rate
  in_stock    - boolean
  on_sale     - boolean
  min_price   - string
  max_price   - string
  */
  const listProductVariations = (productId,params) => _get(`/wp-json/wc/v2/products/${productId}/variations`,params);
  /*Update ProductVariation
  productId
  variationId
  */
  const updateProductVariation = (productId,variationId,data) => _put(`/wp-json/wc/v2/products/${productId}/variations/${variationId}`,data);
  /*Delete ProductVariation
  force
  */
  const deleteProductVariation = (productId,variationId,params) => _delete(`/wp-json/wc/v2/products/${productId}/variations/${variationId}`,params);
  /*Batch Update ProductVariations
  */
  const batchUpdateProductVariation = (productId,data) => _post(`/wp-json/wc/v2/products/${productId}/variations/batch`,data);
  //endregion
  //region Product Attributes
  /*Create Product Attribute
  */
  const createProductAttribute = (data) => _post(`/wp-json/wc/v2/products/attributes`);
  /*Get Product Attribute
  attributeId
  */
  const getProductAttribute = (attributeId) => _get(`/wp-json/wc/v2/products/attributes/${attributeId}`);
  /*List All Product Attributes
  */
  const listProductAttributes =() => _get(`/wp-json/wc/v2/products/attributes`);
  /*Update Product Attribute
  */
  const updateProductAttribute = (attributeId,data) => _put(`/wp-json/wc/v2/products/attributes/${attributeId}`,data);
  /*Delete Product Attribute
  force
  */
  const deleteProductAttribute = (attributeId,params) => _delete(`/wp-json/wc/v2/products/attributes/${attributeId}`,params);
  /*Batch Update Product
  */
  const batchUpdateProductAttribute = (data) => _post(`/wp-json/wc/v2/products/attributes/batch`,data);
  //endregion
  //region Product Attribute Terms
  /*
  /wp-json/wc/v2/products/attributes/${attributeId}/terms/${termId}
  */
  /*Create Attribute Term
  */
  const createAttributeTerm = (data) => _post(`/wp-json/wc/v2/products/attributes/${attributeId}/terms`,data);
  /*Retrieve AttributeTerm
  attributeId
  */
  const getAttributeTerm = (attributeId,termId) => _get(`/wp-json/wc/v2/products/attributes/${attributeId}/terms/${termId}`);
  /*List All AttributeTerms
  page        - int
  per_page    - int
  search      - string
  after       - string ISO8601 Date
  before      - string ISO8601 Date
  exclude     - [] ids
  include     - [] ids
  offset      - int
  order       - string asc|desc
  orderby     - string date|id|include|title|slug
  hide_empty  - boolean
  parent      - int
  product     - int
  slug        - string
  */
  const listAttributeTerms = (attributeId,params) => _get(`/wp-json/wc/v2/products/attributes/${attributeId}/terms`,params);
  /*Update AttributeTerm
  */
  const updateAttributeTerm = (attributeId,termId,data) => _put(`/wp-json/wc/v2/products/attributes/${attributeId}/terms/${termId}`,data);
  /*Delete AttributeTerm
  */
  const deleteAttributeTerm = (attributeId,termId,params) => _delete(`/wp-json/wc/v2/products/attributes/${attributeId}/terms/${termId}`,params);
  /*Batch Update AttributeTerms
  */
  const batchUpdateAttributeTerms = (attributeId,data) => _post(`/wp-json/wc/v2/products/attributes/${attributeId}/terms/batch`,data);
  //endregion
  //region Product Categories
  /*
  /wp-json/wc/v2/products/categories/${categoryId}
  */
  /*Create ProductCategory
  */
  const createProductCategory = (data) => _post(`/wp-json/wc/v2/products/categories`,data);
  /*Retrive Product Category
  categoryId
  */
  const getProductCategory = (categoryId) => _get(`/wp-json/wc/v2/products/categories/${categoryId}`);
  /*List ProductCategories
  page        - int
  per_page    - int
  search      - string
  exclude     - [] ids
  include     - [] ids
  order       - string asc|desc
  orderby     - string id|include|name|slug|term_group|description|count
  hide_empty  - boolean
  parent      - int
  product     - int
  slug        - string
  */
  const listProductCategories = (params) => _get(`/wp-json/wc/v2/products/categories`,params);
  /*Update ProductCategory
  */
  const updateProductCategory = (categoryId,data) => _put(`/wp-json/wc/v2/products/categories/${categoryId}`,data);
  /*Delete ProductCategory
  force
  */
  const deleteProductCategory = (categoryId,params) => _delete(`/wp-json/wc/v2/products/categories/${categoryId}`,params);
  /*Batch UpdateProductCategories
  */
  const batchUpdateProductCategories = (data) => _post(`/wp-json/wc/v2/products/categories/batch`,data);
  //endregion
  //region Product ShippingClasses
  /*
  /wp-json/wc/v2/products/shipping_classes/${shippingClassId}
  */
  /*Create ShippingClass
  */
  const createShippingClass = (data) => _post(`/wp-json/wc/v2/products/shipping_classes`,data);
  /*Retrieve ShippingClass
  */
  const getShippingClass = (shippingClassId) => _get(`/wp-json/wc/v2/products/shipping_classes/${shippingClassId}`);
  /*List All ShippingClasses
  page        - int
  per_page    - int
  search      - string
  exclude     - [] ids
  include     - [] ids
  offset      - int
  order       - string asc|desc
  orderby     - string id|include|name|slug|term_group|description|count
  hide_empty  - boolean
  product     - int
  slug        - string
  */
  const listShippingClasses = (params) => _get(`/wp-json/wc/v2/products/shipping_classes`,params);
  /*Update ShippingClass
  */
  const updateShippingClass = (shippingClassId,data) => _put(`/wp-json/wc/v2/products/shipping_classes/${shippingClassId}`,data);
  /*Delete ShippingClass
  force
  */
  const deleteShippingClass = (shippingClassId,params) => _delete(`/wp-json/wc/v2/products/shipping_classes/${shippingClassId}`,params);
  /*Batch Update ShippingClasses
  */
  const batchUpdateShippingClasses = (data) => _post(`/wp-json/wc/v2/products/shipping_classes/batch`,data);
  //endregion
  //region Product Tags
  /*
  /wp-json/wc/v2/products/tags/${tagId}
  */
  /*Create ProductTag
  */
  const createProductTag = (data) => _post(`/wp-json/wc/v2/products/tags`,data);
  /*Retrive ProductTag
  tagId
  */
  const getProductTag = (tagId) => _get(`/wp-json/wc/v2/products/tags/${tagId}`);
  /*List All ProductTags
  page        - int
  per_page    - int
  search      - string
  exclude     - [] ids
  include     - [] ids
  offset      - int
  order       - string asc|desc
  orderby     - string id|include|name|slug|term_group|description|count
  hide_empty  - boolean
  product     - int
  slug        - string
  */
  const listProductTags = (params) => _get(`/wp-json/wc/v2/products/tags`,params);
  /*Update ProductTag
  */
  const updateProductTag = (tagId,data) => _put(`/wp-json/wc/v2/products/tags/${tagId}`,data);
  /*Delete ProductTag
  force
  */
  const deleteProductTag  = (tagId,params) => _delete(`/wp-json/wc/v2/products/tags/${tagId}`,params);
  /*BatchUpdate ProductTags
  */
  const batchUpdateProductTags = (data) => _post(`/wp-json/wc/v2/products/tags/batch`,data);
  //endregion
  //region Reports
  /*ListAllReports
  */
  const listReports = () => _get(`/wp-json/wc/v2/reports`);
  /*ListReportsSales
  period      - string - week|month|last_month|year
  date_min    - string - YYYY-MM-DD
  date_max    - string - YYYY-MM-DD
  */
  const listReportsSales = (params) => _get(`/wp-json/wc/v2/reports/sales`,params);
  /*List Top Sellers report 
  period      - string - week|month|last_month|year
  date_min    - string - YYYY-MM-DD
  date_max    - string - YYYY-MM-DD
  */
  const listReportsTopSellers = (params) => _get(`/wp-json/wc/v2/reports/top_sellers`,params);
  //endregion
  //region TaxRate
  const createTaxRate = (data) => _post(`/wp-json/wc/v2/taxes`,data);
  const getTaxtRate = (taxRateId) => _get(`/wp-json/wc/v2/taxes/${taxRateId}`);
  const listTaxRates = (params) => _get(`/wp-json/wc/v2/taxes`,params);
  const updateTaxRate = (taxRateId,data) => _put(`/wp-json/wc/v2/taxes/${taxRateId}`,data);
  const deleteTaxRate = (taxRateId,params) => _delete(`/wp-json/wc/v2/taxes/${taxRateId}`,params);
  const batchUpdateTaxRates = (data) => _post(`/wp-json/wc/v2/taxes/batch`);
  //endregion
  //region TaxClass
  const createTaxClass = (data) => _post(`/wp-json/wc/v2/taxes/classes`,data);
  const listTaxClasses = () => _get(`/wp-json/wc/v2/taxes/classes`);
  const deleteTaxClass = (slug,params) => _delete(`/wp-json/wc/v2/taxes/classes/${slug}`,params);

  //endregion
  //region Webhooks
  const createWebhook = (data) => _post(`/wp-json/wc/v2/webhooks`,data);
  const getWebhook = (webhookId) => _get(`/wp-json/wc/v2/webhooks/${webhookId}`);
  const listWebhooks = (params) => _get(`/wp-json/wc/v2/webhooks`,params);
  const updateWebhook = (webhookId,data) => _put(`/wp-json/wc/v2/webhooks/${webhookId}`,data);
  const deleteWebhook = (webhookId,params) => _delete(`/wp-json/wc/v2/webhooks/${webhookId}`,params);
  const batchUpdateWebhooks = (data) => _post(`/wp-json/wc/v2/webhooks/batch`,data);
  const getWebhookDelivery = (webhookId,deliveryId) => _get(`/wp-json/wc/v2/webhooks/${webhookId}/deliveries/${deliveryId}`);
  const listWebhookDeliveries = (webhookId) => _get(`/wp-json/wc/v2/webhooks/${webhookId}/deliveries`);
  //endregion 
  //region Settings
  const listSettingsGroups = () => _get(`/wp-json/wc/v2/settings`);
  const getSettingOption = (groupId,id) => _get(`/wp-json/wc/v2/settings/${groupId}/${id}`);
  const listSettingsOptions = (id) => _get(`/wp-json/wc/v2/settings/${id}`);
  const updateSettingOption = (groupId,id,data) => _put(`/wp-json/wc/v2/settings/${groupId}/${id}`,data);
  const batchUpdateSettingOptions = (id,data) => _post(`/wp-json/wc/v2/settings/${id}/batch`,data);

  //endregion
  //region PaymentGateways
  const getPaymentGateway = (id) => _get(`/wp-json/wc/v2/payment_gateways/${id}`);
  const listPaymentGateways = () => get(`/wp-json/wc/v2/payment_gateways`);
  const updatePaymentGateway = (id,data) => _put(`/wp-json/wc/v2/payment_gateways/${id}`,data);
  //endregion
  //region ShippingZones
  const createShippingZone = (data) => _post(`/wp-json/wc/v2/shipping/zones`,data);
  const getShippingZone = (id) => _get(`/wp-json/wc/v2/shipping/zones/${id}`);
  const listShippingZones = () => _get(`/wp-json/wc/v2/shipping/zones`);
  const updateShippingZone = (id,data) => _put(`/wp-json/wc/v2/shipping/zones/${id}`,data);
  const deleteShippingZone = (id,params) => _delete(`/wp-json/wc/v2/shipping/zones/${id}`,params);
  //endregion
  //region ShippingZoneLocations
  const listShippingZoneLocations = (id) => _get(`/wp-json/wc/v2/shipping/zones/${id}/locations`);
  const updateShippingZoneLocation = (id,data) => _put(`/wp-json/wc/v2/shipping/zones/${id}/locations`,data);
  //endregion
  //region ShippingZoneMethods
  const createShippinZoneMethod = (id,data) => _post(`/wp-json/wc/v2/shipping/zones/${id}/methods`,data);
  const getShippingZoneMethod = (zoneId,id) => _get(`/wp-json/wc/v2/shipping/zones/${zoneId}/methods/${id}`);
  const listShippingZoneMethods = (zoneId) => _get(`/wp-json/wc/v2/shipping/zones/${zoneId}/methods`);
  const updateShippingZoneMethod = (zoneId,id,data) => _put(`/wp-json/wc/v2/shipping/zones/${zoneId}/methods/${id}`,data);
  const deleteShippingZoneMethod = (zoneId,id,params) => _delete(`/wp-json/wc/v2/shipping/zones/${zoneId}/methods/${id}`,params);
  //endregion
  //region ShippinMethod
  const getShippingMethod = (id) => _get(`/wp-json/wc/v2/shipping_methods/${id}`);
  const listShippingMehthods = () => _get(`/wp-json/wc/v2/shipping_methods`);
  //endregion
  //region SystemStatus
  const listSystemStatusItems = () => _get(`/wp-json/wc/v2/system_status`);
  const getSystemStatusTool = (id) => _get(`/wp-json/wc/v2/system_status/tools/${id}`);
  const listSystemStatusTools = () => _get(`/wp-json/wc/v2/system_status/tools`);
  const runSystemStatusTool = (id) => _put(`/wp-json/wc/v2/system_status/tools/${id}`);
  //endregion
  //API END
  //########################################################
  //endregion

  return {
    // a list of the API functions from step 2
    login,
    forgotPassword,

    //region Customer
    register,
    getCustomer,
    listCustomers,
    updateCustomer,
    deleteCustomer,
    batchUpdateCustomer,
    //endregion 

    //region Order
    createOrder,
    getOrder,
    listOrders,
    updateOrder,
    deleteOrder,
    batchUpdateOrder,
    //endregion

    //region Order Notes
    createOrderNote,
    getOrderNote,
    listOrderNotes,
    deleteOrderNote,
    //endregion

    //region Refunds
    createRefund,
    getRefund,
    listRefunds,
    deleteRefund,
    //endregion

    //region Products
    createProduct,
    getProduct,
    listProducts,
    updateProduct,
    deleteProduct,
    batchUpdateProducts,
    getProductReviews,
    listProductReviews,
    //endregion

    //region Product Variations
    createProductVariation,
    getProductVariation,
    listProductVariations,
    updateProductVariation,
    deleteProductVariation,
    batchUpdateProductVariation,
    //endregion
 
    //region Product Attributes
    createProductAttribute,
    getProductAttribute,
    listProductAttributes,
    updateProductAttribute,
    deleteProductAttribute,
    batchUpdateProductAttribute,
    //endregion

    //region Product Attribute Terms
    createAttributeTerm,
    getAttributeTerm,
    listAttributeTerms,
    updateAttributeTerm,
    deleteAttributeTerm,
    batchUpdateAttributeTerms,
    //endregion
  
    //region Product Categories
    createProductCategory,
    getProductCategory,
    listProductCategories,
    updateProductCategory,
    deleteProductCategory,
    batchUpdateProductCategories,
    //endregion
  
    //region Product Shipping Class
    createShippingClass,
    getShippingClass,
    listShippingClasses,
    updateShippingClass,
    deleteShippingClass,
    batchUpdateShippingClasses,
    //endregion
  
    //region Product Tags
    createProductTag,
    getProductTag,
    listProductTags,
    updateProductTag,
    deleteProductTag,
    batchUpdateProductTags,
    //endregion

    //region Reports
    listReports,
    listReportsSales,
    listReportsTopSellers,
    //endregion
    
    //region TaxRates
    createTaxRate,
    getTaxtRate,
    listTaxRates,
    updateTaxRate,
    deleteTaxRate,
    batchUpdateTaxRates,
    //endregion

    //region TaxClasses
    createTaxClass,
    listTaxClasses,
    deleteTaxClass,
    //endregion

    //region Webhooks
    createWebhook,
    getWebhook,
    listWebhooks,
    updateWebhook,
    deleteWebhook,
    batchUpdateWebhooks,
    getWebhookDelivery,
    listWebhookDeliveries,
    //endregion

    //region Settings
    listSettingsGroups,
    //endregion

    //region Setting Options
    getSettingOption,
    listSettingsOptions,
    updateSettingOption,
    batchUpdateSettingOptions,
    //endregion

    //region Payment Gateways
    getPaymentGateway,
    listPaymentGateways,
    updatePaymentGateway,
    //endregion
  
    //region Shipping Zones
    createShippingZone,
    getShippingZone,
    listShippingZones,
    updateShippingZone,
    deleteShippingZone,
    //endregion
  
    //region Shipping Zone Locations
    listShippingZoneLocations,
    updateShippingZoneLocation,
    //endregion
  
    //region Shipping Zone Methods
    createShippinZoneMethod,
    getShippingZoneMethod,
    listShippingZoneMethods,
    updateShippingZoneMethod,
    deleteShippingZoneMethod,
    //endregion

    //region Shipping Methods
    getShippingMethod,
    listShippingMehthods,
    //endregion

    //region System Status
    listSystemStatusItems,
    //endregion

    //region Sytem Status Tools
    getSystemStatusTool,
    listSystemStatusTools,
    runSystemStatusTool,
    //endregion
  }
}

// let's return back our create method as the default.
export default {
  create
}