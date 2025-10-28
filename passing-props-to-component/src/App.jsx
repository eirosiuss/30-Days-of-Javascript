import ProfileThree from './ProfileThree.jsx'
import ProfileFour from './ProfileFour.jsx'
import PackingList from './PackingList.jsx'
import PackingListTwo from './PackingListTwo.jsx'
import DrinkList from './DrinkList.jsx'
import ScientistsList from './ScientistsList.jsx'
import RecipeList from './RecipeList.jsx'
import RecipeListTwo from './RecipeListTwo.jsx'
import "./App.css";

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

function Profile({ person, awardsQuantity = null }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl("szV5sdG")}
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: {person.profession}</b>
        </li>
        <li>
          <b>Awards: {awardsQuantity}</b>
          {person.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}

function ProfileTwo({ name, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl("YfeOqp2")}
        alt="Katsuko Saruhashi"
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        awardsQuantity={4}
        person={{
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          awards:
            "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovered: "polonium (chemical element)",
        }}
      ></Profile>
      <ProfileTwo
        name="Katsuko Saruhashi"
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered="a method for measuring carbon dioxide in seawater"
      >
      </ProfileTwo>
    </div>
  );
}

function App() {
  return (
    <>
    <RecipeListTwo/>
    <Gallery />
    <ProfileThree/>
    <ProfileFour/>
    <PackingList/>
    <PackingListTwo/>
    <DrinkList/>
    <ScientistsList/>
    <RecipeList/>
    </>

  ) 
}

export default App;
