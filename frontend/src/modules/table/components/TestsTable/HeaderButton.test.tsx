import { screen, render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import styles from '@modules/table/components/TestsTable/TestsTable.module.scss'
import { SortField, SortOrder } from '@shared/types'

import { HeaderButton } from './HeaderButton'

describe('HeaderButton', () => {
  const mockOnSort = vi.fn()

  it('render button with correct title and aria-label without icon', () => {
    const { getByRole } = render(
      <HeaderButton
        title="Name"
        field={SortField.NAME}
        sortField={undefined}
        sortOrder={undefined}
        onSort={mockOnSort}
      />,
    )

    const button = getByRole('button', { name: 'Sort by Name' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'Sort by Name')
    expect(button).toHaveClass(styles.headerButton)
    expect(screen.queryByTestId('arrow-icon')).not.toBeInTheDocument()
  })

  it('display arrow up icon, if field is active for sorting(ASC)', () => {
    render(
      <HeaderButton
        title="Status"
        field={SortField.STATUS}
        sortField={SortField.STATUS}
        sortOrder={SortOrder.ASC}
        onSort={mockOnSort}
      />,
    )

    const arrowIcon = screen.getByRole('button').lastChild
    expect(arrowIcon).toHaveClass(styles.iconUp)
  })
  it('display arrow down icon, if field is active for sorting(DESC)', () => {
    render(
      <HeaderButton
        title="Site"
        field={SortField.SITE}
        sortField={SortField.SITE}
        sortOrder={SortOrder.DESC}
        onSort={mockOnSort}
      />,
    )

    const arrowIcon = screen.getByRole('button').lastChild
    expect(arrowIcon).toHaveClass(styles.iconDown)
  })

  it('calls onSort with correct field onClick', () => {
    render(
      <HeaderButton
        title="Type"
        field={SortField.TYPE}
        sortField={undefined}
        sortOrder={undefined}
        onSort={mockOnSort}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Sort by Type' }))
    expect(mockOnSort).toHaveBeenCalledWith(SortField.TYPE)
  })
})
