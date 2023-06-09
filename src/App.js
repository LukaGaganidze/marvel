import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ROOT
import Root from "./pages/Root";
import Home from "./pages/Home";

// CHARACTER
import CharactersRoot from "./pages/RootCharacters";
import CharactersHome from "./pages/HomeCharacters";
import ChosenCharacter, {
  loader as characterLoader,
  loader,
} from "./pages/ChosenCharacter";

// CREATOR
import CreatorsRoot from "./pages/RootCreators";
import CreatorsHome from "./pages/HomeCreators";
import ChosenCreator, { loader as creatorsLoader } from "./pages/ChosenCreator";

// COMICS
import ComicsRoot from "./pages/RootComics";
import ComicsHome from "./pages/HomeComics";
import ChosenComic, { loader as comicLoader } from "./pages/ChosenComic";

// SERIES
import SeriesRoot from "./pages/RootSeries";
import SeriesHome from "./pages/HomeSeries";
import ChosenSeries, { loader as seriesLoader } from "./pages/ChosenSeries";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "characters",
          element: <CharactersRoot />,

          children: [
            {
              index: true,
              element: <CharactersHome />,
            },
            {
              path: ":charID",
              element: <ChosenCharacter />,
              loader: characterLoader,
            },
          ],
        },
        {
          path: "creators",
          element: <CreatorsRoot />,
          children: [
            { index: true, element: <CreatorsHome /> },
            {
              path: ":crID",
              element: <ChosenCreator />,
              loader: creatorsLoader,
            },
          ],
        },
        {
          path: "comics",
          element: <ComicsRoot />,
          children: [
            { index: true, element: <ComicsHome /> },
            {
              path: ":comicID",
              element: <ChosenComic />,
              loader: comicLoader,
            },
          ],
        },
        {
          path: "series",
          element: <SeriesRoot />,
          children: [
            { index: true, element: <SeriesHome /> },
            {
              path: ":seriesID",
              element: <ChosenSeries />,
              loader: seriesLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
