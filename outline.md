# Portfolio / Blog Application

## Goals

The aim of this project is to create a fully functional website portfolio that contains homepage, bio, work samples, and links to social media profile. Website must have blog posts.

## Prerequisites

Node, Express and PostgreSQL to write from a postgres database. Final product must be hosted on Heroku.

## Stylistic Inspiration

Strangers I stalked on the internet:

http://mattfarley.ca/

http://www.dejan-markovic.com/

https://caferati.me/



## Data Models

| Column    | Type                 |
|-----------|----------------------|
|`id`       | SERIAL (PRIMARY KEY) |
|`title`    | VARCHAR (NOT NULL)   |
|`body`     | VARCHAR              |
|`timestamp | TIMESTAMP DEFAULT    |

```json
{
"id": label posts
"title": the subject of the blog posts
"body": descriptive rants about posts
"timestamp": shows the time and date of blog post
};
