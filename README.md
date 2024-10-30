# Netflix Clone

This project is a **Netflix**-like website design that dynamically retrieves content such as movie details, cast information, and images using **React** and **The Movie Database (TMDb) API**. The design is fully responsive and displays correctly across all devices.

## Screenshots

![](Netflix_Redux.gif)

## Features

- **Movies and Series**: Fetch popular movie and series information from the TMDb API.
- **Movie Details**: Display selected movie details such as title, description, cast, and images.
- **User Interface**: Modern, user-friendly Netflix-like interface.
- **Responsive Design**: Compatible with mobile and desktop devices.

## Technologies Used

- **React**: For building the user interface.
- **React Router Dom**: For page navigation and dynamic loading.
- **Redux & Redux Thunk**: For state management and handling asynchronous operations.
- **Axios**: To manage API requests.
- **Tailwind CSS**: For fast and responsive CSS design.
- **Millify**: To format numbers in a readable format.

## Setup

1. Clone this project:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/netflix-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Get your TMDb API key and add it to the `.env` file as `REACT_APP_TMDB_API_KEY`:
   ```plaintext
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```
5. Start the application:
   ```bash
   npm start
   ```

## API and Image Base URL

- **API**: [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started)
- **Image Base URL**: `https://image.tmdb.org/t/p/original`

## Project Structure

- **components**: Reusable components.
- **pages**: Page components (Home, Movie Details, etc.).
- **redux**: Redux store and slice files.
- **utils**: Helper functions and formatters.
