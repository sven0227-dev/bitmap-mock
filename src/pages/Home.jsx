import { useEffect, useState } from 'react'
import Table from '../components/Table'
// import { data } from '../utils/data'
import { formatTimeStamp } from '../utils/utils'
import axios from 'axios'

const boolRender = text => {
  if (text) return <span>&#x2705;</span>
  else return <span>&#x274C;</span>
}

const timeRender = text => {
  return <span>{formatTimeStamp(text)}</span>
}

const columns = [
  {
    title: 'valid',
    dataIndex: 'valid',
    render: boolRender
  },
  {
    title: 'inscriptionNumber',
    dataIndex: 'inscriptionNumber'
  },
  {
    title: 'Time',
    dataIndex: 'timestamp',
    render: timeRender
  },
  {
    title: 'inscriptionName',
    dataIndex: 'inscriptionName'
  },
  {
    title: 'inscriptionId',
    dataIndex: 'inscriptionId',
    render: (text, record) => {
      return <a href={'https://ordinals.com/inscription/' + text}>{text}</a>
    }
  },
  {
    title: 'firstClaim',
    dataIndex: 'firstClaim',
    render: boolRender
  },
  {
    title: 'blockExist',
    dataIndex: 'blockExist',
    render: boolRender
  }
]

const URL = 'https://api.dexordi.com/getbitmap/address/'
const URL2 = 'https://api.dexordi.com/getbitmap/bitmapnumber/'
//bc1pv506t4a8hg8cjd68w7ggxlf8ax6wmntzl0rx9825q7k40xm3cl8quawnkd
export default function Home () {
  const [address, setAddress] = useState('')
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const load = async address => {
    try {
      setIsLoading(true)
      setTableData([])
      const url = address.length >= 60 ? URL + address : URL2 + address
      const { data } = await axios.get(url)
      console.log('data :>> ', data, address.length)
      if (address.length >= 60) setTableData(data)
      else setTableData([data])
    } catch (error) {}
    setIsLoading(false)
  }

  const handleKeyDown = e => {
    console.log(e.key)
    if (e.key === 'Enter') {
      load(address)
    }
  }

  return (
    <>
      <h1>Bitmaps WTF Tool 🏆</h1>
      <div className='py-2 d-flex flex-row gap-2'>
        <input
          type='text'
          placeholder='Please input address or bitmap number'
          value={address}
          maxLength={100}
          onChange={e => setAddress(e.target.value)}
          style={{ width: '550px' }}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => load(address)}> Scan Bitmaps</button>
      </div>
      <div>
        {isLoading && <div>Loading...</div>}
        {tableData.length > 0 && (
          <Table dataSource={tableData} columns={columns} />
        )}
      </div>
    </>
  )
}
