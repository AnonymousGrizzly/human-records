# Human Records
Human Records, assignment for 'Osnove Računalniškega Programiranja'

@Author: AnonymousGrizzly, 2023

## Description

This is a simple program that allows you to store information about people in a table. It is written in React (JavaScript) and uses SCSS for styling.

## Installation

Development environment:

    git clone https://github.com/AnonymousGrizzly/human-records.git

    cd human-records

    npm install

    npm start

Production environment (localhost:3000):

    npm run build

    npm install -g serve

    serve -s build

## Usage

The program allows you to add, edit and delete people from the table. You can also sort the table by clicking on the column headers. Search bar allows you to search for people by name, surname, age, etc. On second page you can see the statistics of the table. You can also upload the XML file with the data.

## Requirements

- The program must be written in JavaScript.
- First web page must enable the user to enter data about people (name, surname, age, etc.) and save it in a table.
- Show the use of radio buttons and a dropdown menu
- Enable deletion of a record from the table.
- The table must be sortable by clicking on the column headers.
- The table must have a search bar that allows you to search for people by name, surname, age, etc.
- Second web page must show statistics about the data in the table (average age, number of people, etc.).
- Second web page must have a button that allows you to upload the XML file with the data.
- Display the calculation of at least one result based on fields from the table
- Provide a XML file with the data for testing purposes with 5 records.
- Use a confirmation field to display the output based on a constraint
- Use a JavaScript array to store the sums. Also, display a summary row
