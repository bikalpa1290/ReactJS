export const Name="bikalpa"
const card =(props) => {
  return (
    <div className="card">
      <img src="/src/assets/image1.jpeg" alt="image1" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <button>View profile</button>
    </div>
  )
}

export default card;
