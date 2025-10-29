// mano versija
// import { useState } from "react";

// export default function EditProfile() {
//   const [name, setName] = useState("Jane");
//   const [lastName, setLastName] = useState("Jacobs");
//   const [status, setStatus] = useState("showText");

//   function handleClick() {
//     if (status === "showInput") {
//       setStatus("showText");
//     } else {
//       setStatus("showInput");
//     }
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <label>
//         First name:
//         {status === "showText" && <p>{name}</p>}
//         {status === "showInput" && (
//           <input onChange={(e) => setName(e.target.value)} value={name} />
//         )}
//       </label>
//       <label>
//         Last name:
//         {status === "showText" && <p>{lastName}</p>}
//         {status === "showInput" && (
//           <input
//             onChange={(e) => setLastName(e.target.value)}
//             value={lastName}
//           />
//         )}
//       </label>
//       <button onClick={handleClick} type="submit">
//         {status === "showInput" && "Save "}
//         {status === "showText" && "Edit "}
//         Profile
//       </button>
//       <p>
//         Hello, {name} {lastName}!
//       </p>
//     </form>
//   );
// }

import { useState } from "react";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        First name:{" "}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
