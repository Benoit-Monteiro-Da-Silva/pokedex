import { BrowserRouter, Routes, Route } from 'react-router'
import { ROUTES } from "./constants/routes"
import { Homepage } from './pages/Homepage/Homepage'
import { AppLayout } from './layouts/AppLayout/AppLayout'

export default function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout/>}>
            <Route path={ROUTES.HOME} element={<Homepage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}