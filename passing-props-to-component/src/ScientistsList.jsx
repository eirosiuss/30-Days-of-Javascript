import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function ListItems({ people }) {
  return (
    <>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ScientistsList() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const nonChemists = people.filter((person) => person.profession !== "chemist");
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ListItems people={chemists}></ListItems>
      <h2>Everone Else</h2>
      <ListItems people={nonChemists}></ListItems>
    </article>
  );
}
