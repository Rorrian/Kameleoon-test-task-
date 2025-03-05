import { Test, Status, Site } from '@shared/types'

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

export const mockTestDraftWithoutSite: Test = {
  id: 1,
  name: 'Test Draft',
  type: 'Classic',
  status: Status.DRAFT,
  siteId: 1,
}

export const mockTestOnline: Test = {
  id: 2,
  name: 'Test Online',
  type: 'Server-side',
  status: Status.ONLINE,
  siteId: 2,
  siteUrl: 'https://example.com',
}

export const mockTestsInAscOrderByName: Test[] = [
  {
    id: 1,
    name: 'Test 1',
    type: 'Classic',
    status: Status.PAUSED,
    siteId: 1,
    siteUrl: 'market.company.com',
  },
  {
    id: 2,
    name: 'Test 2',
    type: 'Classic',
    status: Status.ONLINE,
    siteId: 2,
    siteUrl: 'delivery.company.com',
  },
  {
    id: 3,
    name: 'Test 3',
    type: 'MVT',
    status: Status.DRAFT,
    siteId: 3,
    siteUrl: 'games.company.com',
  },
  {
    id: 4,
    name: 'Test 4',
    type: 'Server-side',
    status: Status.STOPPED,
    siteId: 4,
    siteUrl: 'market.company.com',
  },
]
export const mockTestsInDescOrderByName: Test[] = [
  {
    id: 4,
    name: 'Test 4',
    type: 'Server-side',
    status: Status.STOPPED,
    siteId: 4,
    siteUrl: 'market.company.com',
  },
  {
    id: 3,
    name: 'Test 3',
    type: 'MVT',
    status: Status.DRAFT,
    siteId: 3,
    siteUrl: 'games.company.com',
  },
  {
    id: 2,
    name: 'Test 2',
    type: 'Classic',
    status: Status.ONLINE,
    siteId: 2,
    siteUrl: 'delivery.company.com',
  },
  {
    id: 1,
    name: 'Test 1',
    type: 'Classic',
    status: Status.PAUSED,
    siteId: 1,
    siteUrl: 'market.company.com',
  },
]

export const mockTestsInAscOrderByStatus: Test[] = [
  {
    id: 2,
    name: 'Test 2',
    type: 'Classic',
    status: Status.ONLINE,
    siteId: 2,
    siteUrl: 'delivery.company.com',
  },
  {
    id: 1,
    name: 'Test 1',
    type: 'Classic',
    status: Status.PAUSED,
    siteId: 1,
    siteUrl: 'market.company.com',
  },
  {
    id: 4,
    name: 'Test 4',
    type: 'Server-side',
    status: Status.STOPPED,
    siteId: 4,
    siteUrl: 'market.company.com',
  },
  {
    id: 3,
    name: 'Test 3',
    type: 'MVT',
    status: Status.DRAFT,
    siteId: 3,
    siteUrl: 'games.company.com',
  },
]
export const mockTestsInDescOrderByStatus: Test[] = [
  {
    id: 3,
    name: 'Test 3',
    type: 'MVT',
    status: Status.DRAFT,
    siteId: 3,
    siteUrl: 'games.company.com',
  },
  {
    id: 4,
    name: 'Test 4',
    type: 'Server-side',
    status: Status.STOPPED,
    siteId: 4,
    siteUrl: 'market.company.com',
  },
  {
    id: 1,
    name: 'Test 1',
    type: 'Classic',
    status: Status.PAUSED,
    siteId: 1,
    siteUrl: 'market.company.com',
  },
  {
    id: 2,
    name: 'Test 2',
    type: 'Classic',
    status: Status.ONLINE,
    siteId: 2,
    siteUrl: 'delivery.company.com',
  },
]

export const mockTestsInDescOrderBySite: Test[] = [
  {
    id: 1,
    name: 'Test 1',
    type: 'Classic',
    status: Status.PAUSED,
    siteId: 1,
    siteUrl: 'market.company.com',
  },
  {
    id: 4,
    name: 'Test 4',
    type: 'Server-side',
    status: Status.STOPPED,
    siteId: 4,
    siteUrl: 'market.company.com',
  },
  {
    id: 3,
    name: 'Test 3',
    type: 'MVT',
    status: Status.DRAFT,
    siteId: 3,
    siteUrl: 'games.company.com',
  },
  {
    id: 2,
    name: 'Test 2',
    type: 'Classic',
    status: Status.ONLINE,
    siteId: 2,
    siteUrl: 'delivery.company.com',
  },
]
