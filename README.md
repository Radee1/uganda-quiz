# **The UG Quiz**

The UG quiz is an online quiz about Uganda. It is written in pure HTML, CSS and JavaScript.
The site/program contains two HTML (index.html and page1.html) pages, one CSS file and one JavaScript file.

The UG Quiz is a website that aims to show how pure JavaScript works in a practical setting. The site will be aimed at persons who are interested in not just advanced JavaScript principles, but also history, geography, and a passion for foreign nations, particularly Uganda. The UG Quiz is a completely responsive JavaScript quiz game that allows players to setup usernames or gamer identities, take the quiz, and display their scores.

![The UG Quiz mockups](assets/images/UG-Quiz-mockup.jpg)

## Features

This section provides brief descriptions about the existing features of the UG quiz game.

1. **The Navigation Bar**

* The name of the site "UG Quiz" is in the left corner of the navigation bar, and it appears on all six pages of the quiz.

![The navigation bar](assets/images/navbar.PNG)

2. **The landing image**

* The hero image is an image of a couple of dices. The image aims to prepare the user mentally to expect to play a game in the form of a quiz.

![The landing image](assets/images/landingimage.PNG)

3. **create username or gamer name**

* The create username also known as the gamer name feature allows the user to set up a name for which they would like to be identified as in the quiz.

![create username](assets/images/username.PNG)

4. **username lenth validation**

* When a user creates their gamer name for the quiz, the site checks whether the input submitted meets the requirements put in place. If the username chosen by the user is less than 3 characters, the site will notify them and the user will not be able to proceed to the quiz.

![username length validation](assets/images/lengthvalidation.PNG)

5. **correct input validation**

* If the user inputs a username with 3 characters or more, the site welcomes them and allows the user to proceed to the UG quiz game.

![The correct username validation](assets/images/correctinputvalidation.PNG)

6. **Selecting a choice of answer**

* On loading the quiz, the UG quiz game allows the user to select or choose an answer from the multiple options presented for each question. There are five questions in total for the quiz and all these questions are presented on their own page.

![Select option of answer](assets/images/chooseanswer.PNG)

7. **The Back and Next buttons**

* The quiz has two buttons on each page on which the questions are found. The two buttons back and next, allow the user to easily navigate through the questions and from one page to another.

![Back and Next buttons](assets/images/backnforthnavigation.PNG)

8. **The See results button**

* After the user selects his or her choice of answers, the page containing the fifth question has a see results button. The see results button calculates the scores and prompts the user to the next page which has the score obtained by the user.

![The see results button](assets/images/seeresults.PNG)

9. **The Score Count**

* The score count feature simply returns the value of correct answers out of a total of the five questions answered by the user.

![The score count](assets/images/scorecount.PNG)

10. **The correct answers**

* After receiving a score, the site allows the user to view the questions answered correctly. The color green is used to highlight the correct answers in the quiz.

![The correct answers](assets/images/correctanswer.PNG)

11. **The wrong answers**

* The site allows the user to view the questions failed too. The UG quiz game highlights the answers failed together with the correct answers for the user to use as a learning opportunity.

![The wrong answer](assets/images/wronganswer.PNG)

## Testing
------
1. **The functionality of the site**

* TUHC site consists of features three pages namely: the Home page, About page, and History page. TUHC site has a navigation bar that runs across all the pages of the site for easy navigation. 

* The navigation bar has an active menu. When a user opens the TUHC site, they will navigate from page to page using this feature. Also, the color of the active menu items is white whereas the inactive pages remain colored yellow. The white color shows the user which page they are on.

* The Home page contains two links in the case section. The first link allows the user to connect or link to the About page from the home page and the second link allows the user to go straight to the history page from the home page.

* TUHC site has a form on the about page to encourage users to subscribe. The users will be able to enter their names, emails, and passwords and thereafter subscribe to be part of the Ugandan history community and use that subscription to get new updates from TUHC.

* The history page of TUHC also contains a search form. The ‘search our history’ section will allow the user to search for any piece of history about Uganda. This search form when clicked by a user opens up in a new tab linked to the google search page.

* I have tested the functionality through code inspection and am happy to report that the UG Quiz game features function as intended.

2. **Responsiveness**

* The UG Quiz is responsive to different media devices. Media queries are set for different device views with a maximum width of 768 pixels and 600 pixels or below. 

* I have tested the responsiveness of the UG Quiz and therefore, I am happy to report that through code inspection, the UG Quiz responds well to different device views.

3. **Bugs and fixes**

* **Bug 1:** Aside element on the about page going below the footer in small device views.

* *FIX 1:* Hiding the element in small device views and displaying a fitting form using media queries. The fix. also includes hiding the created form on large displays.

* **Note:** For this project, two forms for the about page are created and each displays using a different view. One subscribe-form for the large screens and the other for the small device views.

**Why two forms?**

* *Unresolved Challenge:* the initial code had one subscribe-form for all the different views. However, during the code inspection and while checking the responsiveness of the site. The subscribe-form on the about page was overlapping the footer on the about page. The footer however remains static on the Home and History pages, and I could not resolve this challenge no matter how I changed the code.

![overlapping sidebar for small view device](assets/images/Overlappingsidebar.png)


* For this project, the challenge as seen in the screenshot is partially resolved (using the two forms above). 

* **Bug 2:** Hidden overflow in about page of the site.

* *FIX 2:* Removing the hidden overflow for the parent class of the overflowing article by changing giving the overflow property a value of auto.

### Validator Testing

* HTML

No errors were returned when passing through the official W3C validator

* CSS

No errors were found when passing through the official (Jigsaw) validator

* Accessibility

![Accessibility](assets/images/accessibility.PNG)

### Unfixed Bugs

All the errors are fixed, however, one warning on the about page is ignored during validation. The warning pertains to assigning the section a heading. The warning is ignored because the section in question already has several headings within it.

## Deployment
------
The site was deployed to GitHub pages. The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab

* From the source section drop-down menu, select the Master Branch

* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

* The live link can be found here -https://radee1.github.io/the-ugandan-history-channel/

## Credits
--------

1. **Content**

 * The text for the Home page about the independence monument was taken from Lakato safaris https://www.lakatosafaris.com/the-independence-monument/

 * Text for the home page about the Uganda national emblem was taken from- https://berlin.mofa.go.ug/data-dnews-24-THE-CRESTED-CRANE---UGANDA'S-NATIONAL-EMBLEM.html

 * Text about the economic activity in the about page was taken from- https://www.peacecorps.gov/educators/resources/cuisine-and-etiquette-uganda/

 * Text on the about page and history page was taken from- https://visituganda.com/explore/category/history-of-uganda and https://www.britannica.com/summary/Uganda

 * Text on the history page was taken from BBC news-https://www.bbc.com/news/world-africa-14112446
 
 * The font-family applied in the CSS page and over all TUHC site was adopted from Google fonts- https://fonts.google.com/

 * Some CSS code inspired from Lecture slides and love running project for things such as images, and zoom effects.

 2. **Media**

 * The photos used on the home, about and history page are from this open-source site- https://commons.wikimedia.org/wiki/File:Uganda_Independence_Monument.jpg

 * https://berlin.mofa.go.ug/data-dnews-24-THE-CRESTED-CRANE---UGANDA%27S-NATIONAL-EMBLEM.html

 * Pixabay-https://pixabay.com/images/search/uganda/

 * Google free image downloads.


---


