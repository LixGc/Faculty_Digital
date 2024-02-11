# Admin Dashboard Faculty Digital

## Overview

A desktop website application built with Vue.js and JavaScript, featuring a product, product transaction, and product revenue.

For the deployed website, visit [facultydigital](https://faculty-digital-lixgc.web.app/).

## Tech Stack

### Backend

- PostgreSQL
- Express
- Sequelize
- Bcryptjs
- Json Web Token
- Google OAuth

### Frontend

- Vue.js
- Axios
- Pinia
- SweetAlert
- GoogleVue3Login

## List of Available Pages

### Login and Register Page

Page where users can register an account and log in to the application.

### Product Dashboard

Page with a list of all product information. It includes the following information:

- Total Product
- Total Stocks
- Table list of the products
- Searchbar, which can be used to filter/search a specific product's information by product name, and can also be used to see the searched product's total product and stock.

### Total Product Sold and Revenue Dashboard

Page with a list of all revenue information and table with a list of transaction history. It includes the following information:

- Total Revenue
- Today's Revenue
- Last 7 Days Ago Daily Average Revenue (Daily average revenue for the last 7 days)
- Last 7 Days Ago Revenue (Total Revenue last 7 days ago)
- Last 7-14 Days Ago Revenue(Total Revenue starting from 14 days ago and extending to the last 7 days)
- Last 7 Days Ago Vs Last 7-14 Days Ago Revenue (Comparison between total revenue on the last 7 days with total revenue starting from 14 days ago and extending to the last 7 days)
- Last 30 Days Ago Revenue (Total revenue last 30 days ago)
- Last 30-60 Days Ago Revenue (Total Revenue starting from 60 days ago and extending to the last 30 days)
- Last 30 Days Ago Vs Last 30-60 Days Ago Revenue (Comparison between total revenue on the last 30 days with total revenue starting from 60 days ago and extending to the last 30 days)
- Products Sold (Total Product Sold)
- Today's Product Sold
- Average Last 7 Days Product Sold
- Last 7 Days Ago Product Sold
- Last 7-14 Days Ago Product Sold
- Last 7 Days Ago Vs Last 7-14 Days Ago Product Sold
- Last 30 Days Ago Product Sold
- Last 30-60 Days Ago Product Sold
- Last 30 Days Ago Vs Last 30-60 Days Ago Product Sold
- Table list of the transaction history
- Searchbar, which can be used to filter/search a specific transaction history by product name, and can also be used to see searched product's revenue.

## API Documentation

Detailed API documentation can be found in [APIdocs.md](APIdocs.md).
