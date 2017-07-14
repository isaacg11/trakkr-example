link to schema:
https://docs.google.com/a/sonderagency.com/spreadsheets/d/1dcC_pwfGRojLkmUl-vIE_bkLbyTVpXR6-PLL6B-q7Sc/edit?usp=sharing


example spreadsheet:
https://docs.google.com/spreadsheets/d/1kPyMQVzigaB3UF9gXcaafflPP9fSf1c9UT8UNVFHSG4/edit#gid=1772710933

mongo db user/password:
u: trakkr
password: pw4trakkr

1. any user invited to a project can submit a bug - but it is pending until Project Admins accept it.
  - How is the Project Admin determined? What role can assign/unassign Admin role to other users?
2. the bugs can be prioritized as #1, 2, 3 etc by drag and drop in the list
  - pending issues working
3. The bugs can be color coded in the list view based on different states (these would be hardcoded, and sonder would change them in the code)
  - Use bootstrap panel colors, drop-down field of statuses
  - What states/colors are available by default/v.1.0?
4. Project Admin can assign bug to one (or multiple) devs/users
  - pending users working
5. any project should have an associated slack channel.
6. a bug will have a threaded conversation started in the project channel and a link from BugTracker to the the Slack thread
7. A bug should have an option for a repeater of images and a repeater of links

Questions:
1. Channels can't be created by app, but can post to a naming convention. What will that convention be?
2. How is the Project Admin determined? What role can assign/unassign Admin role to other users?
3. What information should be posted to the Slack channel?
4.

User types:
  User, Admin
Project Roles:
  Member, Lead
