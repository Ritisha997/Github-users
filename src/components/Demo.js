import React from 'react'
const rootUrl = 'https://api.github.com';

const Demo = () => {
    const fetchData = async(user) =>{
        const resp = await fetch(`${rootUrl}/users/${user}`)
        const data = await resp.json()
        console.log(data)
    if(data){

        const resp1 = await fetch(`${rootUrl}/users/${data.login}/repos?per_page=100`)
        const data1 = await resp1.json()
        console.log(data1)
        const demo = data1.map(item=>{
            return item.name
        })
        console.log(demo)
        const resp2 = await fetch(`${rootUrl}/users/${data.login}/repos?per_page=100`)
        const data2 = await resp2.json()
        console.log(data2)
    }
    }
    React.useEffect(()=>{
            fetchData('john-smilga')
    },[])
    // React.useEffect(()=>{
    //        followerFetch()
    // },[])
  return (
    <div>
      
    </div>
  )
}

export default Demo
