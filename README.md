# Angular Task with Enhanced Features

This project is an Angular application built with the latest Angular version 18. It includes various features to improve performance, user experience, and functionality.

## Features

### 1. Native Caching Implementation

Implemented native caching mechanisms to avoid redundant HTTP requests, optimizing the application's performance.

### 2. User Experience Enhancements

- **Loading Indicator**: Display a loading bar to indicate pending network requests, ensuring a smoother user experience during data retrieval.
- **Custom Directives**: Implemented custom directives for improved UI interactions or functionalities.
- **Observables from RxJS**: Utilized observables from RxJS to manage asynchronous operations.
- **Styling and Animations**: Applied proper styling and animations to enhance the user interface.

### 3. Navigation

Enabled click functionality on the user cards to navigate to a new page displaying detailed information about the selected user.

### 4. Search Functionality

- **Instant Search**: Implemented an instant search field within the header to search for users by ID without requiring a separate button.
- **Search Results**: Display search results and allow navigation to the user details page if the user exists.

### 5. User Details Page

Included a back button on each individual user's page to navigate back to the main user list.

## Technical Details

### Angular Version

This project uses Angular version 18.

### State Management

- **Caching**: Utilized native caching mechanisms within the `UserService` to store and retrieve data efficiently.

### Dependencies

- **RxJS**: For managing asynchronous operations.
- **PrimeNG**: For UI components like progress spinner and paginator.
- **Tailwind CSS**: For styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AhMEedMOStfa/MaidsCC_task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd maids-task
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   ng serve
   ```

## Usage

### Home Page

- Displays a list of users with pagination.
- Allows instant search by user ID in the header.
- Shows a loading spinner during data fetching.

### User Details Page

- Displays detailed information about a selected user.
- Includes a back button to return to the main user list.

## Conclusion

This project demonstrates an optimized and user-friendly Angular application with effective state management, caching, and enhanced UI/UX features.
