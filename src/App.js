import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import {Route} from "react-router-dom";
const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main>
        <Route path="/profile" 
              render={ () => <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost}
              updateNewPostText = {props.updateNewPostText} />} />
        <Route path="/messages" render={ () => <Dialogs state={props.state.messagesPage}/>} />
        <Route path="/news" render={ () => <News />} />
        <Route path="/music" render={ () => <Music />} />
        <Route path="/settings" render={ () => <Settings />} />
      </main>
    </div>
  );
}

export default App;