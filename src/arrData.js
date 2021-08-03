import React, {useState} from 'react'


const arrData = () => {
    const [arr, setArr] = useState(null)
    const url = `https://cdn.contentful.com/spaces/4mg01ki3nwhk/environments/master/entries?access_token=yJjftR-oMjy-EMJlCKBMPQSGHtDyuUktbMbFaD5gR0o&content_type=character`
    const getData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setArr(data)
    }
    console.log('Array- ', arr)

    return (

    )
}

export default arrData