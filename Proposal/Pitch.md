# Proposal

## Requirements

- The presentation runs on an android tablet
- Pages support text, images, and interactive graphical widgets
- Pages are arranged in a structure that can be navigated ("next slide", "more info", "back to start")
- Text language can be changed
- The presentation can be updated with new content by either party

## Proposed Solution

We essentially create a website that can be viewed in a web-browser running on the tablet. We will research how to lock users into this browser.

This lets us build upon existing web-technologies, HTML, CSS & JavaScript, where many of the requirements' underlying prerequisites are already solved or supported:

- rendering text, images and animations
- page layouts
- handling user input
- navigation

## Proposed Deliverables

1) We will set up software project, living on "GitHub", a free online service that houses code repositories. This

    - allows all parties easy, safe access
    - tracks changes over time, so they can be rolled back if needed
    - can be used to host static websites

2) The project will compile to a static website, meaning it only contains files and has no server-side logic. Static content

    - can be hosted on any web-server, on GitHub's free hosting service or in a local folder
    - can be cached locally so it works without an internet connection

3) The project will
  
    - have a presentation-like structure
    - support multiple languages
    - include ready-made, styled, reusable components for different page layouts, navigation buttons, language switcher etc.
    - allow adding content by placing files in specific folders or editing configuration files
    - support text styling via a markup language like "Markdown"
    - come with instructions on how to edit content, compile the project and troubleshoot common issues
