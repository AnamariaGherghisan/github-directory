import { Banner } from "./components/Banner";
import { Repos } from "./components/Repos";
import repos from "./data/repos.json";

export const App = () => {
  return (
    <main>
      <Banner />
      <Repos repos={repos} />
    </main>
  );
};
