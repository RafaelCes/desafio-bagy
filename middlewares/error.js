const errorHandler = (err) => {
  const decoder = {
    SQLITE_CONSTRAINT: { status: 409, message: 'Customer already registered' },
    INVALID_FIELDS: { status: 400, message: 'Invalid fields' },
    CUSTOMER_NOT_FOUND: { status: 404, message: 'Customer does not exist' },
    PRODUCT_NOT_FOUND: { status: 404, message: 'Product does not exist' },
    ORDER_NOT_FOUND: { status: 404, message: 'Order does not exist' },
    ITEMS_NOT_FOUND: {status: 404, message: 'Product or Customer does not exist'},
    INSUFICIENT_STOCK: { status: 409, message: 'Product out of stock' },
    ER_NO_REFERENCED_ROW_2: { status: 400, message: '"categoryIds" not found' },
  };
  console.log(err);
  let response;
  if (err.parent) response = decoder[err.parent.code];
  else response = decoder[err.message];
  console.log(response);
  return response
};

module.exports = errorHandler;