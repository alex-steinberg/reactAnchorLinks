# Broken page anchors in React

In a React job sim day, the task was to add a section at the top of the page of a production React app with links to certain sections on the page. It was a straightforward task, but the first pass of adding anchor tags with hrefs pointing to a hash symbol plus an id, and then adding those ids to the sections, didn't work.

We pivoted to a solution using refs and got it to work. However, I still don't understand why the original solution, which is more semantic, didn't work.

This app is an attempt to create the case where this pattern _does not_ work in a React app.

Currently, the app is a failure because the links work. In time, I hope to update it and break it in order to understand what about our production app caused this pattern not to work.

## To run

Clone the repo and then

`npm install`

`npm run dev`

Navigate to http://127.0.0.1:5173/
