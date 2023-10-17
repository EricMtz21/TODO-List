import './App.css';
import { View } from './Components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLock, faEnvelope, faPhone);

function App() {
  return (
    <View/>
  );
}

export default App;
