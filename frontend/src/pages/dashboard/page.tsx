import { useMemo } from 'react'

import { Test } from '@shared/types'
import { Stub } from '@shared/components'
import { SearchField, useSearch } from '@modules/search'
import { SearchIcon } from '@shared/icons'
import { TestsTable, useTests } from '@modules/table'
import { pluralize } from '@shared/utils'

export function DashboardPage() {
  const { tests, loading, error } = useTests()
  const { searchTerm, setSearchTerm } = useSearch('')

  const unfilteredTests = useMemo(() => tests, [tests])
  const filteredTests = useMemo(() => {
    return tests.filter((test: Test) =>
      test.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [tests, searchTerm])

  if (loading) return <div className="center">Loading...</div>
  if (error) return <div className="center">{error}</div>

  return (
    <div className="wrapper">
      <h1 className="title">Dashboard</h1>

      <SearchField
        className="dashboard__search"
        startContent={<SearchIcon width={13} height={14} />}
        endContent={
          <span>
            {pluralize(filteredTests.length, ['test', 'test', 'tests'])}
          </span>
        }
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {!!unfilteredTests.length ? (
        <TestsTable tests={searchTerm ? filteredTests : unfilteredTests} />
      ) : (
        <Stub
          message="There are no tests to display."
          onReset={() => setSearchTerm('')}
        />
      )}
    </div>
  )
}
