import { Alert } from "../Alert";
import { Repo } from "../Repo";

export const Repos = ({ repos }) => {
  // check if repos length is 0 then render Alert
  // map through repos and for each repo render the Repo component
  return (
    <section>
      <Alert />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </section>
  );
};
