import { BrowserRouter, Routes, Route } from 'react-router'
import { ROUTES } from "./constants/routes"
import { Homepage } from './pages/Homepage/Homepage'
import { AppLayout } from './layouts/AppLayout/AppLayout'
import { Detailpage } from './pages/Detailpage/Detailpage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout/>}>
            <Route path={ROUTES.HOME} element={<Homepage/>}/>
            <Route path={ROUTES.DETAIL} element={<Detailpage/>}/>
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}