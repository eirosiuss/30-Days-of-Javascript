function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  let biggerSmaller
if (size < 90) {
 biggerSmaller = "s"
} else {
  biggerSmaller = "b"
}
// Change the Avatar component to request the closest image size based on the size prop. Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.
  return (
    <img
      className="avatar"
      src={getImageUrl(person, biggerSmaller)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function ProfileThree() {
  return (
    <>
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
        <Avatar
      size={100}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    </>
  );
}