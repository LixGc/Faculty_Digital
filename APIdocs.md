# Product Admin Dashboard facultydigital

## Endpoints :

List of available user authentication endpoints:

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/google-login`

List of available user feature endpoints:

- `GET /product/revenue-dashboard`
- `GET /product/product-dashboard`
- `POST /product/add-product`
- `PUT /product/edit-product/:id`
- `DELETE /product/delete-product/:id`

## 1. POST /auth/register

### Description

> Register an account

### Request

- body:

```json
{
  "email": "string",
  "password": "string",
  "secondPassword": "string"
}
```

### Response (201 - Created)

```json
{
  "message": "Account succesfully created!"
}
```

### Response (400 - Bad Request)

```json
{
    "message": "Please type your email"
}
OR
{
    "message": "Please type your password"
}
OR
{
    "message": "Please fill all the fields"
}
OR
{
    "message": "Password doesn't match"
}
OR
{
    "message": "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
}
```

## 2. POST /auth/login

### Description

> login into an account

### Request

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

### Response (200 - OK)

```json
{
  "access_token": "string"
}
```

### Response (400 - Bad Request)

```json
{
  "message": "Email or Password is required"
}
OR
{
    "message": "Email or Password is required"
}

```

### Response (401 - Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

## 3. POST /auth/google-login

### Description:

> Login with google account or create user by google account

### Request:

- headers

```json
{
  "google_token": "string"
}
```

### Response (201 - Created)

OR

### Response (200 - OK)

```json
{
  "access_token": "string"
}
```

## 4. GET /product/revenue-dashboard

> Page with a list of all revenue information and table with a list of transaction history.

### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- query:

```json
{
  "productName": "string"
}
```

### Response (200 - OK)

```json
{
  "transactionHistory": [
    {
      "id": "integer",
      "name": "string",
      "amount": "integer",
      "category": "Estring",
      "price": "integer",
      "ProductId": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    ...
],
  "totalRevenue": "integer",
  "todayRevenue": "integer",
  "totalRevenueLast7Days": "integer",
  "totalRevenuePreviousWeek": "integer",
  "totalRevenueLast30DaysAgo": "integer",
  "totalRevenueLast60Days": "integer",
  "thisWeekRevenueComparedWithPreviousWeekRevenue": "integer",
  "last30DaysAgoComparedWithLast60DaysAgoRevenue": "integer",
  "averageLast7DaysRevenue": "float",
  "totalProductSold": "integer",
  "todayProductSold": "integer",
  "totalProdudctSoldLast7Days": "integer",
  "totalProductSoldPreviousWeek": "integer",
  "totalProductSoldLast30Days": "integer",
  "totalProductSoldLast60Days": "integer",
  "averageLast7DaysProductSold": "float",
  "thisWeekProductSoldComparedWithPreviousWeekRevenue": "integer",
  "last30DaysAgoComparedWithLast60DaysAgoProductSold": "integer"
}
```

## 5. GET /product/product-dashboard

> Page with a list of all product information.

### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- query:

```json
{
  "transactionProductName": "string"
}
```

### Response (200 - OK)

```json
[
  {
    "id": "integer",
    "name": "string",
    "category": "string",
    "price": "integer",
    "stock": "integer",
    "imageUrl": "string",
    "createdAt": "date",
    "updatedAt": "date",
    "Transactions": [
      {
        "id": "integer",
        "name": "string",
        "amount": "integer",
        "category": "string",
        "price": "integer",
        "ProductId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
      },
      ...
    ]
  },
  ...
]
```

## 6. POST /product/add-product

> Add a product

### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body

```json
{
  "name": "string",
  "imageUrl": "string",
  "category": "string",
  "price": "integer",
  "stock": "integer"
}
```

### Response (201- Created)

```json
{
  "message": "<name> has been succesfully added!"
}
```

### Response (400 - Bad Request)

```json
{
    "message": "Name can't be empty!"
}
OR
{
    "message": "imageUrl can't be empty!"
}
OR
{
    "message": "Category can't be empty!"
}
OR
{
    "message": "Price can't be empty!"
}
OR
{
    "message": "Image can't be empty!"
}
OR
{
    "message": "Price must be at least $1!"
}
```

## 7. PUT /product/edit-product/:id

> Edit product

### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

- body:

```json
{
  "name": "string",
  "imageUrl": "string",
  "category": "string",
  "price": "integer",
  "stock": "integer"
}
```

### Response (400 - Bad Request)

```json
{
    "message": "Name can't be empty!"
}
OR
{
    "message": "imageUrl can't be empty!"
}
OR
{
    "message": "Category can't be empty!"
}
OR
{
    "message": "Price can't be empty!"
}
OR
{
    "message": "Image can't be empty!"
}
OR
{
    "message": "Price must be at least $1!"
}
```

### Response (200 - OK)

```json
{
  "message": "Product successfully updated!"
}
```

### Response (404 - Not Found)

```json
{
  "message": "Data is not found!"
}
```

## 8. DELETE /product/delete-product/:id

> Delete product

### Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

### Response (200 - OK)

```json
{
  "message": "Product successfully deleted!"
}
```

### Response (404 - Not Found)

```json
{
  "message": "Data is not found!"
}
```

## GLOBAL RESPONSE

### (401 - Unauthenticated / JsonWebTokenError )

```json
{
  "message": "Invalid Token"
}
```

### Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```
