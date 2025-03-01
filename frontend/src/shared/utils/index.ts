/**
 * Форматирует ссылку, убирая из нее протокол и префикс 'www'
 * @param url - ссылка на внешний ресурс
 * @returns Отформатированная строка URL без протокола и префикса 'www'
 * */
export const formatUrl = (url: string): string =>
  url.replace(/^https?:\/\//, '').replace(/^www\./, '')

/**
 * Форматирует число с правильным склонением слова
 * По правилам: форма[0] для 1, форма[1] для 2–4, форма[2] для 5+
 * @param count - число
 * @param forms - формы слов для разных склонений
 * @returns Возвращает строку склонении соответвенно переданному числу
 * @example pluralize(1, ['тест', 'теста', 'тестов']) // = '1 тест'
 * @example pluralize(3, ['тест', 'теста', 'тестов']) // = '3 теста'
 * @example pluralize(5, ['тест', 'теста', 'тестов']) // = '5 тестов'
 * */
export const pluralize = (
  count: number,
  forms: [string, string, string],
): string => {
  if (count === 1) return `${count} ${forms[0]}`
  if (count > 1 && count < 5) return `${count} ${forms[1]}`
  return `${count} ${forms[2]}`
}

// TODO: доделать универсальный метод для сравнения
// export const compareValues = (
//   a: any,
//   b: any,
//   field: SortField,
//   order: SortOrder,
// ) => {
//   const makeComparison = (aValue: any, bValue: any): number => {
//     if (typeof aValue === 'string') {
//       return order === SortOrder.ASC
//         ? aValue.localeCompare(bValue)
//         : bValue.localeCompare(aValue)
//     } else if (typeof aValue === 'number') {
//       return order === SortOrder.ASC ? aValue - bValue : bValue - aValue
//     } else if (aValue in StatusOrder) {
//       const orderMarker = order === SortOrder.ASC ? 1 : -1
//       return (
//         (StatusOrder[aValue as Status] - StatusOrder[bValue as Status]) *
//         orderMarker
//       )
//     } else {
//       return 0
//     }
//   }

//   switch (field) {
//     case SortField.NAME:
//     case SortField.TYPE:
//     case SortField.SITE:
//       return makeComparison(a, b)
//     case SortField.STATUS:
//       return makeComparison(a, b)
//     default:
//       return 0
//   }
// }
