import "ketcher-react/dist/index.css";
import { Editor } from "ketcher-react";
import "./App.css";
import { StandaloneStructServiceProvider } from "ketcher-standalone";

const structServiceProvider = new StandaloneStructServiceProvider();

function App() {
  return (
    <Editor
      errorHandler={(message: string) => {
        console.log(message);
      }}
      staticResourcesUrl={import.meta.env.VITE_PUBLIC_URL!}
      structServiceProvider={structServiceProvider}
    />
  );
}

export default App;
