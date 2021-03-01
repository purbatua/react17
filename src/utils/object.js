export const isEmpty = (v) => {
  return (
    v === null ||
    v === undefined ||
    (typeof v === 'number' && isNaN(v)) ||
    (typeof v === 'object' && Object.keys(v).length === 0) ||
    (typeof v === 'string' && (v.trim().length === 0))
  )
}