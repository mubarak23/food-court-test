

## Description

[Live URL]: https://foodcourttest.vercel.app/

## Installation

# install package 
-- npm install

# run the migration
-- knex migrate:latest 



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
- URL: /category
- METHOD: GET
- REQUIRED AUTH TOKEN (Admin role): NO
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
- REQUIRED AUTH TOKEN (Admin role): NO
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


## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
