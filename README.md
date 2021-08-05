# Project Overview

## Project Links

- [Github Link](https://github.com/chabadilla92/Project2)
- [Vercel Link](https://project2-o4tp890jt-chabadilla92.vercel.app/)

## Project Description

For this project, I plan to recreate a website called proguides.com. Pro Guides shares content for gamers looking to improve their skills in a particular game. The game that i chose to replicate is called League of Legends. The website will display the playable characters of the video game, show their designated roles in the game, and allow the user to create teams with the characters available. 

## API

api: https://cdn.contentful.com/spaces/4mg01ki3nwhk/environments/master/entries?access_token=yJjftR-oMjy-EMJlCKBMPQSGHtDyuUktbMbFaD5gR0o&content_type=character

```
"fields": {
          "title": "Anivia",
          "description": "Middle",
          "file": {
            "url": "//images.ctfassets.net/4mg01ki3nwhk/1hQjHO6oppAQ9vhMTM63r9/e8331457b42eecd0455c05c057c90949/Anivia.png",
            "details": {
              "size": 60509,
              "image": {
                "width": 120,
                "height": 120
              }
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://res.cloudinary.com/dd1i00sei/image/upload/v1627676266/Project_2_Wireframe_syctip.jpg)
- [wireframes](https://res.cloudinary.com/dd1i00sei/image/upload/v1627676266/Project_2_Wireframe1_axcuie.jpg)
- [react architecture](https://docs.google.com/drawings/d/1vlkWneK7cll4BBlNPFJcKriHC1WiNFnh1n2CND_5sAU/edit)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional gaming content website
- Find and use external api
- Render data on page
- Allow users to click on champions to add them to their team
- Allow users to click on champions to remove them from their team


#### PostMVP EXAMPLE
- Search bar that filters champions based on name or position
- Carousel for champion list


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content, contains Form and Song List |
| Character List | Renders the pulled API content - character name and image |
| Character Card | Renders individual character information - name, position, image |
| My Team | Renders the selected characters from the character list |
| Form | Filters the characters based on search input |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 2 | -- | -- |
| Basic Navbar & Footer, Links | H | 2 | -- | -- |
| Set up basic React routing, switch | H | 2 | -- | -- |
| Set up API information to be pulled on contentful | H | 4 | -- | -- |
| Make character API call, parse important data | H | 2 | -- | -- |
| Display character list | H | 3 | -- | -- |
| Display Form and set input states and handleChange function | H | 3 | -- | -- |
| Make another API call in Character Card to display correct data | H | 3 | -- | -- |
| addToTeam function | H | 3 | -- | -- |
| removeFromTeam function | H | 3 | -- | -- |
| Carousel for character list | H | 3 | -- | -- |
| useContext to hand down props | H | 1 | -- | -- |
| Additional styling for Header, Footer, Nav, Main, MyPlaylist pages | L | 5 | -- | - |
| Total | H | 36 | -- | -- |

## Additional Libraries


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

```

```
...
```

```