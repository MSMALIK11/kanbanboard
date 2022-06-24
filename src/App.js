
import './App.css';
import Board from './components/board/Board';
import KanbanNav from './components/navbar/KanbanNav';
import BoardHome from './pages/BoardHome';

function App() {
  return (
    <div className="App">
      <div className='app_navbar'>
        <KanbanNav />

      </div>
<BoardHome />

      




    </div>
  );
}

export default App;
