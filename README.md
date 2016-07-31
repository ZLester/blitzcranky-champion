# Blitzcranky Champion Service
### Visualizer for the latest League of Legends weekly free champion rotation

## Components
### Blitzcranky is made up of three separate components:
- [Static Server Cluster/React Client](https://github.com/zlester/blitzcranky)
- [Champion Service](https://github.com/zlester/blitzcranky-champion)
- [Update Service/Job Scheduler](https://github.com/zlester/blitzcranky-worker)

## Stack
- React 15.x
- Node 6.2.x
- Express 4.x
- Mongoose 4.x
- Redis 2.6.x
- Cron 1.x

## Architecture
![blitzcranky architecture diagram](http://i.imgur.com/OQXnuJZ.png "Blitzcranky Architecture Diagram")

> Note: To run the Champion Service locally you need to obtain a key from the [Riot Developer's API](https://developer.riotgames.com/) first. The Champion Service expects your API key to be found as the environment variable `LEAGUE_API_KEY`
