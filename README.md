#Sticky 
Create note online
## Overview

This is a simple application that lets you create notes online
	
   * Create and save a note.
   * Get all your notes at one place.
   * Edit your note or delete. 

## Prerequisites

   * Node V0.10+
   * MongoDB server
   
## Setting up the app

   * Run `npm install` at the root folder to download dependencies.
   * Run `bower install` at the root folder to download frontend dependencies.
   * Make sure Mongo server is running. After following [instructions to install](http://docs.mongodb.org/manual/installation/), you can start it by sudo mongod which starts at localhost:27017 with default configurations. The app creates a database called `sticky-dev` by default.
   * Run `node server/app.js` or `grunt serve` to start the application.
   * Navigate to http://localhost:8080/ or http://127.0.0.1:8080/ in your favourite browser. The default port can be changed in development mode by editing file in `server/config/environment` 

## Configuration

   Change files at `server/config` if you want custom configuration for the application/db.
   
## Repository 

   * Visit [Sticky](http://sticky.programminggeek.in/) to see the demo
   
