

## Description

[Live URL]: 

## Installation

# install package 
-- npm install

# run the migration
-- knex migrate:latest 



## Setup .env Variables
- DATABASE_URL=
- JWT_KEY=

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## Endpoint 

# Create a Brand
 - URL brand/new
 - METHOD: POST
 - REQUIRED AUTH TOKEN (Admin role): YES
 - PAYLOAD SAMPLE: {
    "name": "Jumia Food"
    }
- RESPONSE SAMPLE: {
  "name": "Jumia Food",
  "id": 1,
  "createdAt": "2023-01-08T11:46:33.175Z",
  "updatedAt": "2023-01-08T11:46:33.175Z"
}

# GET ALL BRANDS
- URL: /brand/all
- METHOD: GET
- REQUIRED AUTH TOKEN (Admin role): YES
- RESPONSE SAMPLE: [
  {
    "id": 1,
    "name": "Jumia Food",
    "createdAt": "2023-01-08T11:46:33.175Z",
    "updatedAt": "2023-01-08T11:46:33.175Z"
  }
]

# CREATE A CATEGORY
- URL: /category/{brandId}
- METHOD: GET
- REQUIRED AUTH TOKEN (Admin role): YES
- PAYLOAD SAMPLE: {
  "name": "swallo",
  "brandId": 1
}
- RESPONSE SAMPLE: {
  "name": "swallo",
  "brandId": 1,
  "id": 1,
  "createdAt": "2023-01-08T11:51:45.367Z",
  "updatedAt": "2023-01-08T11:51:45.367Z"
}
# GET ALL CATEGORIES
- URL: /category/all
- METHOD: GET
- REQUIRED AUTH TOKEN (Admin role): YES
- SAMPLE RESPONSE: [
  {
    "id": 1,
    "name": "swallo",
    "brandId": 1,
    "createdAt": "2023-01-08T11:51:45.367Z",
    "updatedAt": "2023-01-08T11:51:45.367Z"
  }
]

# CREATE BRAND ADDON
- URL: /brand/{brandId}/addons
- METHOD: POST
- REQUIRED AUTH TOKEN (Admin role): YES
- SAMPLE PAYLOAD: {
  "name": "test",
  "description": "Another move",
  "price": 450,
  "category": "Swallo"
}
- SAMPLE RESPONSE: {
  "name": "test",
  "description": "Another move",
  "price": 450,
  "brandId": 1,
  "category": "Swallo",
  "id": 1,
  "createdAt": "2023-01-08T11:59:26.496Z",
  "updatedAt": "2023-01-08T11:59:26.496Z"
}

# GET ALL ADDONS BELONGING TO A BRAND
- URL:  /brand/{brandId}/addons
- METHOD: GET
- REQUIRED AUTH TOKEN (Admin role): YES
- SAMPLE RESPONSE: [
  {
    "id": 1,
    "name": "test",
    "description": "Another move",
    "price": 450,
    "category": "Swallo",
    "brandId": 1,
    "createdAt": "2023-01-08T11:59:26.496Z",
    "updatedAt": "2023-01-08T11:59:26.496Z"
  }
]

# GET SINGLE BRAND ADDON
- URL: /brand/{brandId}/addons/{addonId}
- METHOD: GET
- REQUIRED AUTH TOKEN (Admin role): YES
- SAMPLE RESPONSE: {
  "id": 1,
  "name": "pepe combo",
  "description": "Spicy Food",
  "price": 450,
  "category": "Swallo",
  "brandId": 1,
  "createdAt": "2023-01-08T11:59:26.496Z",
  "updatedAt": "2023-01-08T11:59:26.496Z"
}

// UPDATE
# UPDATE ADDONS
-  URL: /brand/{brandId}/addons/{addonId}
- REQUIRED AUTH TOKEN (Admin role): YES
- METHOD: PUT
- SAMPLE REQUEST PAYLOAD: {
  "description": "Spicy Food",
  "name": "pepe combo"
}
- SAMPLE RESPONSE: {
  "id": 1,
  "name": "pepe combo",
  "description": "Spicy Food",
  "price": 450,
  "category": "Swallo",
  "brandId": 1,
  "createdAt": "2023-01-08T11:59:26.496Z",
  "updatedAt": "2023-01-08T11:59:26.496Z"
}


// DELETE 

# DELETE AN ADDON
- URL: /brand/{brandId}/addons/{addonId}
- REQUIRED AUTH TOKEN (Admin role): YES
- METHOD: DELETE
- SAMPLE RESPONSE: {
  "id": 4,
  "name": "Fest Food",
  "description": "goat meat",
  "price": 1500,
  "category": "Swallo",
  "brandId": 1,
  "createdAt": "2023-01-08T15:26:32.387Z",
  "updatedAt": "2023-01-08T15:26:32.387Z"
} 

# USER SIGNUP 
- URL: auth/signup
- METHOD: POST
- REQUEST PAYLOAD: {
  "name":"defaultO1",
  "email": "default01@gmail.com",
  "password": "pass123",
  "role": "ADMIN"
}
- RESPONSE DATA: {
  "response": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVmYXVsdE8xIiwiZW1haWwiOiJkZWZhdWx0MDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkT2VKLjlwUGtIcjJqdW1Wd3M1Mk83ZTFZcFNyTFkxY0NnYmNE"
  }
}

# USER LOGIN
- URL: auth/login
- METHOD: POST
- REQUEST PAYLOAD: {
  "email": "default01@gmail.com",
  "password": "pass123"
}
- RESPONSE DATA:  {
  "response": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVmYXVsdE8xIiwiZW1haWwiOiJkZWZhdWx0MDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkT2VKLjlwUGtIcjJqdW1Wd3M1Mk83ZTFZcFNyTFkxY0NnYmNE"
  }
}
