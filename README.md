# React Challenge: Portfolio

## Project Description

This project is a portfolio created using React. It is a single-page application that contains a header, a section for content, and a footer. The header contains the developer's name and navigation with titles corresponding to different sections of the portfolio. The navigation titles are About Me, Projects and Contact me. The title corresponding to the current section is highlighted. When a navigation title is clicked, the corresponding section is presented below the navigation without the page reloading and that title is highlighted. When the portfolio is loaded the first time, the About Me title and section are selected by default. When the About Me section a short bio is displayed with a recent photo (will change). The footer contains text links to my GitHub and LinkedIn profile. The projects section shows all recents projects i have completed in the last 6 mnoths with links to both the deployed applications and the corresponding GitHub repository. The contact section shows a contact form with fields for a name, an email address, and a message. The resume section shows a link to a downloadable resume and a list of my proficiencies.

## Usage 

The application is deployed on GitHub Pages at the following link: https://aalexandr6.github.io/reactportfolio/

The application can be run locally by cloning the repository and running `npm start` in the terminal.

## Check it out

<img src="/src/assets/img/portfolio.png">


## Crititeria

```bash
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```
