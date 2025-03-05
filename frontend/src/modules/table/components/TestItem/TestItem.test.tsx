import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import {
  mockTestDraftWithoutSite,
  mockTestOnline,
} from '@shared/mocks/mockTests'
import styles from '@modules/table/components/TestItem/TestItem.module.scss'

import { BORDER_COLORS, TestItem } from './TestItem'

describe('TestItem', () => {
  it('renders test data correctly for DRAFT status and without siteUrl', () => {
    const { getByText, getByRole } = render(
      <TestItem test={mockTestDraftWithoutSite} />,
    )

    expect(getByText(mockTestDraftWithoutSite.name)).toBeInTheDocument()
    expect(getByText(mockTestDraftWithoutSite.type)).toBeInTheDocument()
    expect(getByText(mockTestDraftWithoutSite.status)).toBeInTheDocument()
    expect(getByText('Site not set')).toBeInTheDocument()
    expect(
      getByRole('link', { name: 'Finalize test Test Draft' }),
    ).toBeInTheDocument()
    expect(getByRole('link')).toHaveAttribute('href', '/finalize/1')
  })
  it('renders test data correctly for ONLINE status', () => {
    const { getByText, getByRole } = render(<TestItem test={mockTestOnline} />)

    expect(getByText('https://example.com')).toBeInTheDocument()
    expect(
      getByRole('link', { name: 'View results for test Test Online' }),
    ).toBeInTheDocument()
    expect(getByRole('link')).toHaveAttribute('href', '/results/2')
  })

  it('set random border-color ', () => {
    vi.spyOn(global.Math, 'random').mockReturnValue(0)
    const { getByText } = render(<TestItem test={mockTestOnline} />)

    const testItem = getByText(mockTestOnline.name).closest('div')
    expect(testItem).toHaveStyle(`border-color: ${BORDER_COLORS[0]}`)

    vi.restoreAllMocks()
  })

  it('applies correct classes for DRAFT status', () => {
    const { getByText } = render(<TestItem test={mockTestDraftWithoutSite} />)
    const statusEl = getByText(mockTestDraftWithoutSite.status)

    expect(statusEl).toHaveClass(styles.status, styles.draft)
  })
  it('applies correct classes for ONLINE status', () => {
    const { getByText } = render(<TestItem test={mockTestOnline} />)

    const statusEl = getByText(mockTestOnline.status)
    expect(statusEl).toHaveClass(styles.status, styles.online)
  })

  it('has correct aria-label for links', () => {
    const { getByRole } = render(<TestItem test={mockTestDraftWithoutSite} />)
    const finalizeLink = getByRole('link', {
      name: 'Finalize test Test Draft',
    })

    expect(finalizeLink).toHaveAttribute(
      'aria-label',
      'Finalize test Test Draft',
    )
  })

  it('use classNames correctly for button classes', () => {
    const { getByRole } = render(<TestItem test={mockTestDraftWithoutSite} />)
    const finalizeButton = getByRole('link', {
      name: 'Finalize test Test Draft',
    })

    expect(finalizeButton).toHaveClass('button')
    expect(finalizeButton).toHaveClass(styles.button)
    expect(finalizeButton).toHaveClass(styles.finalize)
  })
})
