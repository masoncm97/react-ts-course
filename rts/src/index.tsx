import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponnt';
import UserSearch from './refs/UserSearch';

export default function App() {
  return (
    <div>
      <UserSearch></UserSearch>
      {/* <GuestList></GuestList> */}
      {/* <EventComponent></EventComponent> */}
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
