export default function Sidebar({ projects }) {
  return (
    <nav>
      {projects.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
      <style jsx>
        {`
          nav {
            color: green;
            width: 20vw;
            margin-right: 5px;
            padding: 10px;
          }

          li {
            list-style-type: none;
          }
        `}
      </style>
    </nav>
  );
}

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
