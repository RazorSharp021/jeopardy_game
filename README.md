# Jeopardy Game: [Click Here](https://rezas-quiz.herokuapp.com/)
This is a SPA and a recreation of the televison game show ***Jeopardy!***, where the user is allowed to play 
through a set of quiz questions, by picking the difficulty of the question.

![Screen Shot 2022-03-25 at 5 52 00 pm](https://user-images.githubusercontent.com/97995268/160069679-9eb6f71f-5b0a-4985-a251-e9032e2e77d7.png)
![Screen Shot 2022-03-25 at 5 54 22 pm](https://user-images.githubusercontent.com/97995268/160069894-d62c116b-05d9-475c-b289-3cb89b6f1bb7.png)

### Approach 
The app is developed on express framework, where it allows us to simply get information from an API by using axios,
rendering the data for user and then storing the user data into the database:
- **Express** to allow us utalize a back end environment 
- **Axios** to receive the desired data from an API
- **JavaScript** to write the game logic and set up the different routes and components
- **HTML/CSS** for viewing the final result and styling
- **SQL/PSQL** for storing and reading data from the database

### Features
- user is able to select the question difficulty
- user responsive design, mobile friendly
- sign Up / Login system
- show player records of all played questions
- shows all records of all played questions
- display a global percentage of correct answers
- plays Jeopardy music as an easter egg
- plays alert sounds for correct and incorrect answers
- a tally of current score for user

### Known Limitations 
- API will not let us choose a category
- single player only, cannot vs another user
- online only, no offline use

### Future Features
- record score into database
- choose a category
- voice dictation of each question
- display individual user percentage of correct answers
