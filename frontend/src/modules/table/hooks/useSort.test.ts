import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { act } from 'react'

import {
  mockTestsInAscOrderByName,
  mockTestsInDescOrderByName,
  mockTestsInDescOrderBySite,
  mockTestsInAscOrderByStatus,
  mockTestsInDescOrderByStatus,
} from '@shared/mocks/mockTests'
import { SortField, SortOrder } from '@shared/types'

import { useSort } from './useSort'

describe('useSort', () => {
  it('should initialize with specified initial value', () => {
    const initialData = {
      tests: mockTestsInAscOrderByName,
      initSortField: SortField.NAME,
      initSortOrder: SortOrder.ASC,
    }
    const { result } = renderHook(() => useSort(initialData))

    expect(result.current.sortedTests).toEqual(mockTestsInAscOrderByName)
    expect(result.current.sortField).toBe(SortField.NAME)
    expect(result.current.sortOrder).toBe(SortOrder.ASC)
  })

  it('should return unsorted tests if no sortField is provided', () => {
    const { result } = renderHook(() =>
      useSort({ tests: mockTestsInAscOrderByName }),
    )

    expect(result.current.sortField).toBeUndefined()
    expect(result.current.sortOrder).toBeUndefined()
    expect(result.current.sortedTests).toEqual(mockTestsInAscOrderByName)
  })

  it('should sort tests by name in ascending order', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInDescOrderByName,
        initSortField: SortField.NAME,
        initSortOrder: SortOrder.ASC,
      }),
    )
    expect(result.current.sortedTests).toEqual(mockTestsInAscOrderByName)
  })
  it('should sort tests by name in descending order', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInAscOrderByName,
        initSortField: SortField.NAME,
        initSortOrder: SortOrder.DESC,
      }),
    )
    expect(result.current.sortedTests).toEqual(mockTestsInDescOrderByName)
  })

  it('should sort tests by type in ascending order', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInAscOrderByName,
        initSortField: SortField.TYPE,
        initSortOrder: SortOrder.ASC,
      }),
    )
    expect(result.current.sortedTests).toEqual(mockTestsInAscOrderByName)
  })
  it('should sort tests by site in descending order', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInAscOrderByName,
        initSortField: SortField.SITE,
        initSortOrder: SortOrder.DESC,
      }),
    )
    expect(result.current.sortedTests).toEqual(mockTestsInDescOrderBySite)
  })

  it('should sort tests by status in ascending order', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInDescOrderByStatus,
        initSortField: SortField.STATUS,
        initSortOrder: SortOrder.ASC,
      }),
    )
    expect(result.current.sortedTests).toEqual(mockTestsInAscOrderByStatus)
  })
  it('should sort tests by status in descending order', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInAscOrderByStatus,
        initSortField: SortField.STATUS,
        initSortOrder: SortOrder.DESC,
      }),
    )
    expect(result.current.sortedTests).toEqual(mockTestsInDescOrderByStatus)
  })

  it('should toggle sort order when toggleSort is called', () => {
    const { result } = renderHook(() =>
      useSort({
        tests: mockTestsInAscOrderByStatus,
        initSortField: SortField.NAME,
        initSortOrder: SortOrder.ASC,
      }),
    )

    act(() => {
      result.current.toggleSort(SortField.NAME)
    })

    expect(result.current.sortOrder).toBe(SortOrder.DESC)
    expect(result.current.sortField).toBe(SortField.NAME)

    act(() => {
      result.current.toggleSort(SortField.NAME)
    })

    expect(result.current.sortOrder).toBe(SortOrder.ASC)
    expect(result.current.sortField).toBe(SortField.NAME)
  })

  it('should memoize sortedTests correctly', () => {
    const { result, rerender } = renderHook(() =>
      useSort({
        tests: mockTestsInAscOrderByName,
        initSortField: SortField.NAME,
        initSortOrder: SortOrder.ASC,
      }),
    )

    const initialSortedTests = result.current.sortedTests
    rerender()

    expect(result.current.sortedTests).toBe(initialSortedTests)
  })

  it('should handle empty tests array', () => {
    const { result } = renderHook(() => useSort({ tests: [] }))

    expect(result.current.sortedTests).toEqual([])
    expect(result.current.sortField).toBeUndefined()
    expect(result.current.sortOrder).toBeUndefined()
  })

  it('should throw error for unknown sort field in getValueForComparison', () => {
    expect(() => {
      renderHook(() =>
        useSort({
          tests: mockTestsInAscOrderByName,
          initSortField: 'INVALID' as SortField,
          initSortOrder: SortOrder.ASC,
        }),
      )
    }).toThrow('Unknown sort field: INVALID')
  })
})
