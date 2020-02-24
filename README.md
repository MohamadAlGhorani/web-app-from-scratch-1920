# Dead by Daylight Musketeers

<img width="1264" alt="Screenshot 2020-02-24 at 12 55 48" src="https://user-images.githubusercontent.com/45425087/75150659-2c6cc400-5705-11ea-9f1d-aea3cb14ab73.png">

## [Live demo](https://mohamadalghorani.github.io/web-app-from-scratch-1920/dist/index.html#home)

## Description

Its a web app for all characters of Dead by Daylight game. with this app can you learn about each character and read their backstory.

## Installation

These instructions will get you a copy of the project up and running on your local machine.

- If you dont have node js on your device download it first from [here](https://nodejs.org/en/).
- Download the project.
- Open the terminal and navigate to the project folder and run `npm install` to install the node modules.
- Run in your terminal `npm start` to open the project in your favorite browser localhost:1234.

## Actor diagram

<img width="677" alt="Screenshot 2020-02-24 at 16 04 59" src="https://user-images.githubusercontent.com/45425087/75163415-7d89b180-571f-11ea-9299-f59b0ff2614d.png">

## interaction diagram

<img width="604" alt="Screenshot 2020-02-24 at 16 07 18" src="https://user-images.githubusercontent.com/45425087/75163589-cb061e80-571f-11ea-829b-1fedb2418d9a.png">


## Features

- Filter.
- Details page for each chrachter.
- loading state.
- cool micro animations.

## [Data](https://github.com/Nexure/DBD-API)

I used the data from the game and i used the endpoint characters.
https://dbd-stats.info/api/endpoint

### Endpoints

- "maps": "GET /api/maps(?branch=live)",
- "perks": "GET /api/perks(?branch=live)",
- "offerings": "GET /api/offerings(?branch=live)",
- "characters": "GET /api/characters(?branch=live)",
- "tunables": "GET /api/tunables(?branch=live\u0026killer=)",
- "emblemtunnables": "GET /api/emblemtunables(?branch=live)",
- "gameconfigs": "GET /api/gameconfigs(?branch=live)",
- "ranksthresholds": "GET /api/ranksthresholds(?branch=live)",
- "customizationitems": "GET /api/customizationitems(?branch=live)",
- "itemaddons": "GET /api/itemaddons(?branch=live)",
- "items": "GET /api/items(?branch=live)",
- "stats": "GET /api/stats/:steam_64: (Profile needs to be public)",
- "shrine": "GET /api/shrineofsecrets(?pretty=true\u0026branch=live)",
- "store": "GET /api/storeoutfits(?branch=live)",
- "config": "GET /api/config(?branch=live)",
- "catalog": "GET /api/catalog(?branch=live)",
- "news": "GET /api/news(?branch=live)",
- "featured": "GET /api/featured(?branch=live)",
- "schedule": "GET /api/schedule(?branch=live)",
- "bloodpointEvents": "GET /api/bpevents(?branch=live)",
- "specialevents": "GET /api/specialevents(?branch=live)",
- "archive": "GET /api/archive(?branch=ptb\u0026tome=Tome01)",
- "achiveRewardData": "GET /api/archiverewarddata(?branch=live)"

### Api call limit

there is no call limit

### Data type

Data type is json

## Licens is [MIT](https://github.com/MohamadAlGhorani/web-app-from-scratch-1920/blob/master/LICENSE)
