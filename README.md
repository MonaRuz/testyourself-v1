A self-testing app built with React, Redux Toolkit, React Query, React Hook Form, Tailwind CSS, and Firebase as the backend. It allows users to create their own categories of questions and answers, track their test progress, and monitor their best scores.

Features
--------
User authentication (Firebase Auth)
Create, edit, delete categories of questions
Custom questions & answers entry
Searchable and editable question lists
Run tests based on your own questions
Test progress is saved in local storage
High score tracking per category
Visual feedback on performance
Smart repetition: incorrect answers are repeated until mastered

Getting Started
---------------
To use the app:

Register or log in with your email and password.
After login, you’ll see your dashboard with all your categories.
Create a new category or manage existing ones.
Add questions and answers to a category.
Run a test using the "Run Test" button.

The Test Flow
-------------
Questions are pulled from a selected category and stored in local storage.
You answer mentally or on paper, then click "Display Correct Answer".
Mark your answer as correct or incorrect.
Correct answers are removed from the test.
Incorrect answers repeat until you get them right.
Progress and stats are shown throughout the test.
Final score is saved and compared with your best score.

⚠️ Clearing your browser’s local storage will erase your test progress.

Tech Stack
----------
React 
Redux for test state
React Query for Firebase data
React Hook Form for form handling
Tailwind CSS for styling
Firebase (Authentication + Firestore)

Why It Works
------------
You create your own questions → better understanding of the topic.
Encourages active recall instead of passive multiple choice.
Focuses on problem areas by repeating incorrect answers.
Works for any field — create unlimited custom categories.
Ideal for long-term learning and review.

Future Improvements
-------------------
Search across all categories
Add images to questions/answers
Edit login info / delete account
Improved mobile UX

Contact
--------
If you have questions or feedback, feel free to contact me at:
📧 mona.ruz@seznam.cz

License
--------
This project is subject to copyright.




