import {Route, Switch} from 'react-router-dom';
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import Favourites from "./pages/Favourites";

function App() {
    return (
        <div>
            <Switch>
                <Route path='/'>
                    <AllMeetUps/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetUp/>
                </Route>
                <Route path='/favourites'>
                    <Favourites/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
