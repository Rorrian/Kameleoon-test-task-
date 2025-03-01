import { Test, Status, Type, Site } from '@shared/types'

export const mockSites: Site[] = [
  {
    id: 1,
    url: 'market.company.com',
  },
  {
    id: 2,
    url: 'delivery.company.com',
  },
  {
    id: 3,
    url: 'games.company.com',
  },
  {
    id: 4,
    url: 'market.company.com',
  },
]

export const mockTests: Test[] = [
  {
    id: 1,
    name: 'Order basket redesing',
    type: Type.CLASSIC,
    status: Status.ONLINE,
    siteId: 1,
  },
  {
    id: 2,
    name: 'Prototype of the new map',
    type: Type.CLASSIC,
    status: Status.PAUSED,
    siteId: 2,
  },
  {
    id: 3,
    name: 'Dark theme test',
    type: Type.MVT,
    status: Status.DRAFT,
    siteId: 3,
  },
  {
    id: 4,
    name: "New Year's Sale",
    type: Type.MVT,
    status: Status.STOPPED,
    siteId: 4,
  },
]
