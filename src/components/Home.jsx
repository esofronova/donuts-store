import './Home.scss';

export default function Home() {

  return (
    <>
      <div className="welcome centered" id="home">
        <h1 className="text-white text-center">Welcome to <b className="text-pink">Grandma's</b></h1>
        <button className="hovered fs-2 my-3 px-3 py-2 rounded text-uppercase bg-transparent text-dark">Explore</button>
      </div>
    </>
  );
};