import { useState } from "react";


export default function useFetch(url, method) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
}