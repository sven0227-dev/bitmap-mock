

export default function Table ({ dataSource, columns }) {
  return (
    <table className='table table-bordered table-sm'>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.title}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map(row => (
          <tr key={row._id}>
            {columns.map(column => (
              <td key={column.dataIndex}>{row[column.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
