# Blitzcranky Champion Service
Visualizer for the latest League of Legends weekly free champion rotation

## Services
Blitzcranky is made up of multiple services, including:
- [Static Server Cluster/React Client](https://github.com/zlester/blitzcranky): A Node/Express Server Server Cluster for serving Blitzcranky's SPA. The server retrieves champions from the Champion Service and stores them in a Redis database.
- [Champion Service](https://github.com/zlester/blitzcranky-champion): A Node/Express Service that retrieves the free weekly champion rotation rotation and stores it in a MongoDB database.
- [Update Service/Job Scheduler](https://github.com/zlester/blitzcranky-worker): A Node/Express Worker that manages updating the Champion Service and Static Server Cluster. 

## Usage
- Clone down each Blitzcranky service via the links above
- Run `npm install` in each repo
- Install MongoDB and run it locally via `mongod`
- Install Redis and run it locally via `redis-server`
- Run `npm start` in each repo

## Requirements
- React 15.x
- Node 6.2.x
- Express 4.x
- Mongoose 4.x
- Redis 2.6.x
- Cron 1.x

## Architecture
![blitzcranky architecture diagram](http://i.imgur.com/OQXnuJZ.png "Blitzcranky Architecture Diagram")

> Note: To run the Champion Service locally you need to obtain a key from the [Riot Developer's API](https://developer.riotgames.com/) first. The Champion Service expects your API key to be found as the environment variable `LEAGUE_API_KEY`

## Demo
A deployed version of the static server cluster and React client can be found [here](https://blitzcranky.herokuapp.com). The Champion service can be found [here](https://blitzcranky-champion.herokuapp.com).
