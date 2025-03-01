export enum Type {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

export type FormattedTestType = 'Classic' | 'Server-side' | 'MVT'

export const FormattedTypeNames: Record<Type, FormattedTestType> = {
  [Type.CLASSIC]: 'Classic',
  [Type.SERVER_SIDE]: 'Server-side',
  [Type.MVT]: 'MVT',
}

export enum Status {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export interface Site {
  id: number
  url: string
}

export interface Test {
  id: number
  name: string
  type: FormattedTestType
  status: Status
  siteId: number
  siteUrl?: string
}

export enum SortField {
  NAME = 'name',
  TYPE = 'type',
  STATUS = 'status',
  SITE = 'site',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export const StatusOrder: Record<Status, number> = {
  [Status.ONLINE]: 0,
  [Status.PAUSED]: 1,
  [Status.STOPPED]: 2,
  [Status.DRAFT]: 3,
}
