import { Routes, Route } from 'react-router-dom'

import { IRoute, routes } from '@shared/utils/navigation'

export const Navigation = () => {
  return (
    <Routes>
      <Route>
        {routes.map((route: IRoute) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}
