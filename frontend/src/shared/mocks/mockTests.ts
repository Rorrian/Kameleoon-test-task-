import { Test, TestStatus, TestType } from '@shared/types'

export const mockTests: Test[] = [
  {
    id: '1',
    title: 'Order basket redesing',
    type: TestType.CLASSIC,
    status: TestStatus.ONLINE,
    site: 'market.company.com',
  },
  {
    id: '2',
    title: 'Prototype of the new map',
    type: TestType.CLASSIC,
    status: TestStatus.PAUSED,
    site: 'delivery.company.com',
  },
  {
    id: '3',
    title: 'Dark theme test',
    type: TestType.MVT,
    status: TestStatus.DRAFT,
    site: 'games.company.com',
  },
  {
    id: '4',
    title: "New Year's Sale",
    type: TestType.MVT,
    status: TestStatus.STOPPED,
    site: 'market.company.com',
  },
]
