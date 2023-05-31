import { Banner } from "./components/Banner";
import { Movies } from "./components/Movies";

const movies = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Movie 1",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    title: "Movie 2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1685444213745-fab7153181f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    title: "Movie 3",
  },
];

export const App = () => {
  return (
    <div>
      <Banner />
      <Movies movies={movies} />
    </div>
  );
};
