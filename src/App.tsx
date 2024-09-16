import AppSidebar from "./app-sidebar/app-sidebar.tsx";
import AppHeader from "./app-header/app-header.tsx";
import AppContent from "./app-content/app-content.tsx";
import classNames from "classnames";
import {css} from "@emotion/css";


function App() {


  return (
    <div>
      <AppSidebar />
      <div className={classNames("d-flex flex-column min-vh-100", css`margin-left: 400px`)}>
        <AppHeader />
        <div className="d-flex flex-column flex-grow-1 px-3 py-4 position-relative">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default App
