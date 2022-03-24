Title:  Earthquake Summary

Description:  This project was designed as a final project for my first JavaScript class with a nod to my interest in . The webpage is designed to take an address and return the recent earthquakes for that address, limited to 5 returned values.  The HTML file contains the form and will display the results with some minor CSS included for formatting.  The dominant language used was JavaScript.  The challenge with this project was to get the information from one API to feed into a second API to return the desired results. In the future, I hope to have the site become more dynamic with more pertinent validations as well as making it visually more appealing while provided more detailed information such as date and earthquake depth.

Installing and Running the Project:  As this file is not yet hosted on the web, the files will need to be saved locally to run.  An API key is also needed which can be given from http://api.positionstack.com  or by contacting the developer.  Once the files are saved, please be sure to add the variable  const API_KEY_Zip = enter key here to line 31 of the JavaScript file.  Save the files to your computer and run the HTML file in your browser.

Using the Program:  The user enters the address they want to search.  The fields should validate to have a minumum of 3 characters in the street and city fields, a valid state abbreviation, and a valid zipcode format (later versions to validate the zipcode is an actual zipcode).  They submit the form and then the form returns the coordinates and the recent earthquakes from the USGS API which are appended and displayed on the HTML.

Credits:  This program uses API pulls from api.positionstack.com and the USGS.  These are free API's made graciously available to the public and we are appreciative to be able to incorporate them into the project.

License: Copyright (c) 2022, Karen Cameron

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


 
