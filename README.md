# This is a rebuild of my website using Next.js

## To-do - high priority

## To-do - medium priority

- Rename Projects to Portfolio and add resume?
- Crop and shape (optional rounded border version) home page image
- Make a robots.txt file

## To-do - low priority

- Make decision about extra section elements and whether to remove them
- Change default Netlify success form to custom.
- Revisit different fonts

### Success page notes

- Netlify generic form successful submission page.
  - https://distracted-shaw-01b0df.netlify.app/contact?success=true
  - Attempted to route to /success to prevent query string from affecting result. Page still went to Netlify default success page. At this point it is not important, no easy fixes have been found and there are more important things to address.

### CSS style notes

- CSS Modules appear to play more nicely with imported Nextjs components than styled-jsx
  - I am able to apply classes directly to imported components from the module without having to do wrapper divs.
  - Point for modules.
