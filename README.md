# Multi-Step Form Project

## Description

This project implements a multi-step form with a dark mode toggle. The form collects personal and address information and provides a confirmation step.

## Project Structure
```
/src
/components
MultiStepForm.jsx
Navigation.jsx
Step1.jsx
Step2.jsx
Step3.jsx
App.css
App.jsx
main.jsx
index.html
package.json
README.md
```

## Assumptions and Decisions

Form data is persisted to local storage on every state change.
Basic client-side validation is implemented for required fields.
Navigation between steps is disabled unless the current step's fields are valid.


## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ThakurRohitSingh/MultiStepForm.git
   cd MultiStepForm

2. **Install dependencies:**
     ```
     npm install

3. **Start the development server:**
    ```
    npm start


