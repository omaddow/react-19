import './App.css'
import { User, Countries } from "./Person";
import { UserProvider } from "./UserContextProvider";


function App() {
  return (
    <UserProvider>
      < User name = {"Osman"} age = {25} isMarried = {false} country = {Countries.Somalia} />{" "}
      < User name = {"Anjuu"} age = {5} isMarried = {false} country = {Countries.Somalia} />{" "}
      < User name = {"Fowsa"} age = {7} isMarried = {false} country = {Countries.Somalia} />{" "}
    </UserProvider>
  );
}

export default App
