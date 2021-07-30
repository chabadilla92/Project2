# Project Overview

## Project Links

- [Github Link](https://github.com/chabadilla92/Project2)
- [Vercel Link](https://project2-8o4mrr410-chabadilla92.vercel.app/)

## Project Description

For this project, I plan to make a music sharing website similar to SoundCloud. The site will allow the user to search for their favorite artists/songs based on genre. They can then add selected songs to a Playlist page. I will be using React's Source and Link to view other pages. The artists/songs will be populated using an API call. 

## API

api: https://cdn.contentful.com/spaces/4mg01ki3nwhk/environments/master/entries?access_token=yJjftR-oMjy-EMJlCKBMPQSGHtDyuUktbMbFaD5gR0o&content_type=song

```
{
"fields": {
        "name": "All Apologies",
        "artist": "Nirvana",
        "image": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "2bocs5WoddJ06S4Ga54fNC"
          }
        },
        "genre": "Rock"
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
- Fully functional music sharing website
- Find and use external api
- Render data on page
- Allow user to click on songs to add them to their playlist
- Allow users to click on songs to remove them from their playlist

#### PostMVP EXAMPLE
- Search bar that filters songs based on genre
- Carousel for song lists

- Leaderboard that is updated using Firebase
- Create multiple leaderboards depending on selected difficulty

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content, contains Form and Song List |
| Song List | Renders the pulled API content - song name, artist |
| Song Card | Renders individual song information - genre, image |
| MyPlaylist | Renders the selected songs from the Song List |
| Form | Filters the songs based on search input |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 2 | -- | -- |
| Basic Navbar & Footer, Links | H | 2 | -- | -- |
| Set up basic React routing, switch | H | 2 | -- | -- |
| Set up API information to be pulled on contentful | H | 4 | -- | -- |
| Make song API call, parse important data | H | 2 | -- | -- |
| Display song list | H | 3 | -- | -- |
| Display Form and set input states and handleChange function | H | 3 | -- | -- |
| Make another API call in song Card to display correct data | H | 3 | -- | -- |
| addToPlaylist function | H | 3 | -- | -- |
| removeFromPlaylist function | H | 3 | -- | -- |
| Carousel for song list | H | 3 | -- | -- |
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