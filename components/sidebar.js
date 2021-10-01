// import { useState } from 'react';

export default function Sidebar({ projects }) {
  return (
    <nav>
      <div>
        {projects.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </div>
      <style jsx>
        {`
          nav {
            color: green;
            width: 20%;
            margin-right: 5px;
            padding: 10px;
            position: sticky;
            top: 0;
            align-self: flex-start;
          }

          li {
            list-style-type: none;
          }

          .hidden {
            display: none;
          }

          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}

// STATE AND CLICK HANDLER FOR FUTURE DROPDOWN
// const [active, setActive] = useState(false);

// const handleClick = () => {
//   setActive(!active);
// };

// BUTTON AND DIV LOGIC FOR FUTURE DROPDOWN
// <button onClick={handleClick}>Click</button>
// <div className={`${active ? '' : 'hidden'}`}>
//   {projects.map(({ id, title }) => (
//     <li key={id}>{title}</li>
//   ))}
// </div>

// LEGACY CODE
// <li>
// <strong>Highlights</strong>
// </li>
// <li>
// <a href="tiny-list">Tiny List</a>
// </li>
// <li>
// <a href="#library-catalog">Library Catalog</a>
// </li>
// <li>
// <a href="#boxman-adventure-travel">Boxman Adventure Travel</a>
// </li>
// <li>
// <a href="#rock-paper-scissors">Rock, Paper, Scissors</a>
// </li>
// <li>
// <a href="#yelp-camp">Yelp Camp</a>
// </li>
// <li>
// <a href="#calculator">Calculator</a>
// </li>
// <li>
// <strong>Early Learning</strong>
// </li>
// <li>
// <a href="#etch-a-sketch">Etch-a-Sketch</a>
// </li>
// <li>
// <a href="#tic-tac-toe">Tic-Tac-Toe</a>
// </li>
// <li>
// <a href="#css-animation">CSS Animation</a>
// </li>
// <li>
// <a href="#google-homepage-copy">Google Homepage Copy</a>
// </li>
// <li>
// <a href="#flexbox">Flexbox</a>
// </li>
// <li>
// <a href="#fcc-projects">FCC Projects</a>
// </li>
// <li>
// <a href="#accessibility">Accessibility</a>
// </li>
// <li>
// <a href="#basic-form-validation">Basic Form Validation</a>
// </li>
