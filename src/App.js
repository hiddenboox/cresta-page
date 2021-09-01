import './App.css';
import { CrestaWidget } from './components/CrestaWidget';

const crestaConfig = {
  namespace: "fis-ethos"
}

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    <CrestaWidget config={crestaConfig} src="https://cdn.cresta.com/visitor_chat_widget/bundle/cresta-chat-widget.js" />
    </>
  );
}

export default App;
