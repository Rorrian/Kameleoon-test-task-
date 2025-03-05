import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useSort } from '@modules/table/hooks/useSort'
import { SortField, SortOrder } from '@shared/types'
import {
  mockTestOnline,
  mockTestsInAscOrderByName,
} from '@shared/mocks/mockTests'

import { TestsTable } from './TestsTable'

vi.mock('@modules/table/hooks/useSort', () => ({
  useSort: vi.fn(),
}))

describe('TestsTable', () => {
  const mockToggleSort = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useSort).mockReturnValue({
      sortField: SortField.TYPE,
      sortOrder: SortOrder.ASC,
      sortedTests: mockTestsInAscOrderByName,
      toggleSort: mockToggleSort,
    })
  })

  it('renders tests list', () => {
    render(<TestsTable tests={mockTestsInAscOrderByName} />)

    expect(
      screen.getByText(mockTestsInAscOrderByName[0].name),
    ).toBeInTheDocument()
    expect(
      screen.getByText(mockTestsInAscOrderByName[1].name),
    ).toBeInTheDocument()
  })

  it('renders table headers based on SortField', () => {
    const { getByRole } = render(
      <TestsTable tests={mockTestsInAscOrderByName} />,
    )

    Object.values(SortField).forEach(field => {
      expect(
        getByRole('button', { name: `Sort by ${field}` }),
      ).toBeInTheDocument()
    })
  })

  it('calls toggleSort when header is clicked', () => {
    const { getByRole } = render(<TestsTable tests={[mockTestOnline]} />)

    const nameHeader = getByRole('button', {
      name: `Sort by ${SortField.NAME}`,
    })
    fireEvent.click(nameHeader)

    expect(mockToggleSort).toHaveBeenCalledWith(SortField.NAME)
  })

  it('toggles the active list item with up/down keys', () => {
    render(<TestsTable tests={mockTestsInAscOrderByName} />)

    const listItems = screen.getAllByRole('row')

    listItems[0].focus()
    expect(document.activeElement).toBe(listItems[0])

    fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(listItems[1])

    fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(listItems[0])
  })
})
