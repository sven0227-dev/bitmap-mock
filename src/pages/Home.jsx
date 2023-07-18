import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { data } from '../utils/data'
import axios from 'axios'

const columns = [
  {
    title: 'valid',
    dataIndex: 'valid'
  },
  {
    title: 'inscriptionNumber',
    dataIndex: 'inscriptionNumber'
  },
  {
    title: 'Time',
    dataIndex: 'timestamp'
  },
  {
    title: 'inscriptionName',
    dataIndex: 'inscriptionName'
  },
  {
    title: 'inscriptionId',
    dataIndex: 'inscriptionId'
  }
]

const URL = 'https://api.dexordi.com/getbitmap/address/'
//bc1pv506t4a8hg8cjd68w7ggxlf8ax6wmntzl0rx9825q7k40xm3cl8quawnkd
export default function Home () {
  const [address, setAddress] = useState('')
  const [tableData, setTableData] = useState([])

  const load = async address => {
    try {
      const { data } = await axios.get(URL + address)
      console.log('data :>> ', data)
      setTableData(data)
    } catch (error) {}
  }

  return (
    <>
      <h1>Bitmaps WTF Tool 🏆</h1>
      <div className='py-2 d-flex flex-row gap-2'>
        <input
          type='text'
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <button onClick={() => load(address)}> Scan Bitmaps</button>
        <button> Export as CSV</button>
      </div>
      <div>
        {tableData.length > 0 && (
          <Table dataSource={tableData} columns={columns} />
        )}
      </div>
    </>
  )
}
