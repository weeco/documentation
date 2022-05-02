import React, { useState, useEffect } from 'react'

const useGithubStars = (username = 'redpanda-data', repo_name = null) => {

  const localStorageExists = typeof window !== 'undefined'

  const [stars, setStars] = useState(localStorageExists ? localStorage.getItem('githubStars') || 0 : 0)
  const [loading, setLoading] = useState(false)
  
  const fetchStars = () => {
    setLoading(true)
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => {
        response.json().then((data) => {
          let totalStars = 0
          if (repo_name) {
            totalStars = data.filter(item => item.full_name === `${username}/${repo_name}`)[0]?.stargazers_count
          } else {
            totalStars = data.reduce((prev, curr) => prev + curr.stargazers_count, 0)
          }
          setLoading(false)
          setStars(totalStars || 0)
          localStorageExists && localStorage.setItem('githubStars', totalStars)
        })
      }).catch((response) => {
        if (response || response.status === 404) {
          setLoading(false)
          setStars(0)
        }
      })
  }

  useEffect(()=>{
    fetchStars()
  },[])

  return { stars, loading }
}

export default useGithubStars