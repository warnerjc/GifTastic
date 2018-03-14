# GifTastic
GIPHY API Application

### Overview

Used the GIPHY API to make a dynamic web page that populates with gifs of your choice. Initially start with sport topics, but you can add any topic of your choice. However, the application will not display 'R' or 'PG13' rated gifs.

This application calls the GIPHY API, uses JavaScript and jQuery to dynamically change the HTML.

### Application Instructions

1. Created a topic array, containing strings to generate initial topics

2. The app takes initial topics in the array and creates buttons in my HTML.

3. When the user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stops playing.

5. Gifs displayed will not be 'R' or 'PG13' rated, and each gif displays the corresponding rating underneath.

6. Added an input form to take the value from a user input box. The topic is then added into the `topics` array. A function call then takes each topic in the array, remaking the buttons on the page.

7. The application utilizes HTML, CSS / Bootstrap, JavaScript, jQuery, and AJAX.
