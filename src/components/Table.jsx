export default function Table ({ dataSource, columns }) {
  return (
    <table className='table table-bordered table-sm'>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.title} className="px-2">{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map(row => (
          <tr key={row._id}>
            {columns.map(column => {
              if (column.render) {
                return (
                  <td className="text-center" key={column.dataIndex}>
                    {column.render(row[column.dataIndex])}
                  </td>
                )
              } else
                return <td className="px-2" key={column.dataIndex}>{row[column.dataIndex]}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
