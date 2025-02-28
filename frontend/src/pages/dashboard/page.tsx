import { useEffect, useState } from 'react'

import { Test } from '@shared/types'
import { Stub } from '@shared/components'
import { SearchField, useSearch } from '@modules/search'
import { mockTests } from '@shared/mocks/mockTests'
import { SearchIcon } from '@shared/icons'
import { Table } from '@modules/table'

export function DashboardPage() {
  const [tests, setTests] = useState<Test[]>(mockTests)
  const { searchTerm, setSearchTerm } = useSearch('')

  useEffect(() => {}, [])

  return (
    <div className="wrapper">
      <h1 className="title">Dashboard</h1>

      <SearchField
        className="dashboard__search"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        startContent={<SearchIcon width={13} height={14} />}
        endContent={<span>{tests.length} tests</span>}
      />

      {!!tests.length ? (
        <Table data={tests} />
      ) : (
        <Stub
          message="There are no tests to display."
          onReset={() => setSearchTerm('')}
        />
      )}
    </div>
  )
}
