import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { Site, Test, Type, FormattedTypeNames } from '@shared/types'
import { API_URL } from '@shared/helpers/constants'
import { formatUrl } from '@shared/utils'

type BackendTestData = Omit<Test, 'type'> & { type: Type }

export const useTests = () => {
  const [tests, setTests] = useState<Test[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true)
        const [testsResponse, sitesResponse] = await Promise.all([
          axios.get<BackendTestData[]>(`${API_URL}/tests`),
          axios.get<Site[]>(`${API_URL}/sites`),
        ])
        const testsData = testsResponse.data
        const sitesData = sitesResponse.data

        if (testsData && sitesData) {
          const fullTestsData: Test[] = testsData.map(test => ({
            ...test,
            type: FormattedTypeNames[test.type],
            siteUrl: formatUrl(
              sitesData.find(site => site.id === test.siteId)?.url ?? '',
            ),
          }))
          setTests(fullTestsData)
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          return
        }
        console.error(error)
        setError(`Error loading tests: ${error}`)
      } finally {
        setLoading(false)
      }

      isFirstRender.current = false
    }

    fetchTests()
  }, [])

  return {
    tests,
    loading,
    error,
  }
}
