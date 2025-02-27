import { ReactElement } from 'react'

import { DashboardPage, ResultsPage, FinalizePage } from '@pages/index'

export interface IRoute {
  path: string
  title: string
  element: ReactElement
}

export enum RoutePaths {
  DASHBOARD = '/',
  RESULTS = '/results/:testId',
  FINALIZE = '/finalize/:testId',
}

export const routes: IRoute[] = [
  {
    path: RoutePaths.DASHBOARD,
    title: 'Панель управления',
    element: <DashboardPage />,
  },
  {
    path: RoutePaths.RESULTS,
    title: 'Результаты',
    element: <ResultsPage />,
  },
  {
    path: RoutePaths.FINALIZE,
    title: 'Финализация',
    element: <FinalizePage />,
  },
]
