 ## Objectives

1. Build a site with HTML, CSS, and JavaScript
2. Use JavaScript to create a functionable, demonstrable, _presentable_ web
application

## Background

Weddings. They're so stressful they often undermine the success of the endeavor
they were meant to celebrate. We're going to help those newly-engaged by
helping them face one of the big stressors: choosing an invitation format.

Here's a .gif demonstrating what your implementation should do.

![Sample GIF of Final Product][demo]

### Requirements

1. Couples should be able to choose between 3 possible invitation styles. Upon
selecting a design, the screen should instantly update with the new
look-and-feel
2. Couples should be provided the appropriate input fields so that they can put
in their vital data. Data, as it is entered, should appear _inside_ the
currently active look-and-feel.
3. If you can think of ways to improve user experience, please do so! Our
stressed couples appreciate thoughtful user experience (UX) that helps soother
their addled nerves and nervous bank accounts
4. Be Creative! If you want to corner the market on Goth-asthetic invitations,
**DO IT**. If you think that super-kawaii anime invitations are your fast-track
to riches and wealth **MAKE IT HAPPEN**. Remember this goes in _your_
portfolio. Make sure your work is authentic and true to _you_.

### Non-Requirements

While you're going to use form input elements, you will not be submitting data
to a remote server. You'll be using the power of JavaScript to do live,
on-screen updates. Adding persistence will come in a later iteration ;).


[demo]: http://curriculum-content.s3.amazonaws.com/fswb-assets/wedding_demo2.gif

<p class='util--hide'>View <a href='https://learn.co/lessons/wedding-invitation-previewer'>Wedding Invitation Previewer</a> on Learn.co and start learning to code for free.</p>

/*
Brainstorm
*/

/* HTML */
/* 
Header
  - <h1>
Tabs/Preset background
  - <nav>, <h3>, <p>, <radio>
Form,
  - <form>, <input type="text">, <label>
Display
  - <div>
    <h1 id="names"></h1>
    <p>
    <h3>
    </div>
*/

/* CSS */
/* display: flex/grid
if grid, grid-template-columns: 1fr 1fr
if flex in one container (width: 50%)
if each side has its own flex, wrap it
if float, float: left
input selection changes text box to blue
*/

/* JS (event) */
/* event? keydown? on every time */
/* transition between backgrounds
    - transition when clicking
    - actually change the background
  something like this: display.style.color = 'red'
  onClick new image loads for background
  also change the fonts when updating background
  First Initials in the display slice() maybe?
*/

