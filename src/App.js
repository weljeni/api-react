import TodoContextProvider from "./context/TodoContext";
import MyRoutes from "./MyRoutes";
function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MyRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
