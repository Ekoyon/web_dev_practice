import { Route} from 'react-router-dom';
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import Favourites from "./pages/Favourites";

function App() {
  return (
      <div>
        <Route path='/'>
          <AllMeetUps />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUp/>
        </Route>
        <Route path='/favourites'>
          <Favourites />
        </Route>
      </div>
  );
}

export default App;
