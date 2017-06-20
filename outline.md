# Portfolio / Blog Application

## Goals

Develop a fully functional Portfolio | Blog app, using Node, Express and PostgreSQL to write
from a postgres database.

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
}
