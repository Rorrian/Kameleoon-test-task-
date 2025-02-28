export enum TestType {
  CLASSIC = 'Classic',
  MVT = 'MVT',
  SERVER_SIDE = 'Server-side',
}

export enum TestStatus {
  ONLINE = 'Online',
  PAUSED = 'Paused',
  DRAFT = 'Draft',
  STOPPED = 'Stopped',
}

export interface Test {
  id: string
  title: string
  type: TestType
  status: TestStatus
  site: string
}
