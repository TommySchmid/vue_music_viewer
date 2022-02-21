Crate Companion is available for use at https://umlcc.surge.sh
Deployed manually using surge.sh

This application serves as a tool through which you can quickly reference top albums and tracks from your favorite band, or a completely new band. Before heading to the record store for a few hours of digging, make sure you know which albums to keep an eye out for!

Vue used as framework, Axios for network requests.

Crate Companion sends user input to last.fm/api endpoint and displays response data.

Ultimate Music List stores and displays user input from Firebase database
Gated state configured on user login managed through Vuex and Firebase Authentication

Project was converted from React into Vue and expanded

Repo Breakdown

- cc_components and uml_components contain files specific to the Crate Companion and Ultimate Music List pages.
- form file contains forms used throughout app.
- pages file contains the main front-end, user facing pages of the app.
- router file contains router pathing.
- store file contains Vuex configuration.

Setup and Execution

- After cloning project using Node.js, run npm install to install needed dependencies followed by npm run serve to build project locally.

Future Enhancements

- Delete individual music list entry, through existing pop up delete modal
- Mobile Styling
- Unit testing library
- Search and resopnse filtering for Crate Companion. Shouldn't be able to search for only special characters. Responses below a certain 'total plays' threshold (which is returned in payload) can be excluded, for example.
