# Implementation Details

A simple web application that displays a paginated list of users fetched and their data fetched from an API,  on a table.

<img src="./assets/demo.jpg" />

[See it Here](https://sage-centaur-f71cca.netlify.app)

## TECHNOLOGIES USED
1. Typescript
2. HTML
3. CSS
4. Parcel
5. Javascript fetch

## HOW THIS WORKS
1. On page load, a network request is made to fetch the user's data from an API. 
2. A loader is shown when the request is been made  and it does not show when the request is done. 
3. The table displays 5 rows of users data, depending on the page that was requested. 
4. When the next button is clicked, a new page is fetched and the data on the table is updated.
5. When the previous button is clicked, the previous page is fetched and the data on the table is also updated
6. If the current page is page one, the previous button is disabled, because we cannot fetch page '0' or a negative page number

## IMPLEMENTATION
1. CLone the repository and install the dependencies.
2. Run the project to see it live.
3. In the index.html file, we have the table, table row and table data cell with their appropriate classes.
4. In the app.ts file, some variables are initially declared to help with DOM manipulation.
5. A page number is also declared, which is initially set to zero. 
6. When the page loads, the `fetchData` function is called  which retrieves the data.
8. While trying to make the call, a loader is being added to the DOM.
7. If the call is successful, the loader is stopped and the data retrieved is manipulated into the DOM to render the table.
8. If the call is not successful, in the catch block, a message `An error occurred` is printed to the console. The loader is also stopped.
8. There's also a label displaying the current page number.
9. Fot the previous and next button, A DOM click event is listened to and a `type` parameter is passed to the function that handles navigation.
10. If a type `prev` is passed and we're not currently on page one, the current page number is reduced by one and new data is being fetched for the table with the new page number.
11. If a type `next` is passed, the current page number is increased by one and new data is being fetched for the table with the new page number.