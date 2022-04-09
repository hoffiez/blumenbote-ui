import React, { useEffect, useState } from 'react'
import { useLanguage, useApi } from 'ordering-components'
import { HomeHero } from '../../../src/components/HomeHero'
import { useHistory } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import Skeleton from 'react-loading-skeleton'

import {
  HomeContainer,
  SkeletonContainer,
  SkeletonHeader,
  SkeletonContent,
  SkeletonInformation,
  SkeletonSide
} from './styles'

const makeRequest = () => {
  const promise = new Promise(function (resolve, reject) {
    const xhr = new window.XMLHttpRequest()
    xhr.open("GET", "https://test.inyourinterests.ru/blumenbote.php")

    xhr.onload = function () {
      const data = JSON.parse(this.response);

      resolve({
        request: this,
        data,
        status: this.status,
        statusText: this.statusText
      })
    }

    xhr.send()

  });

  return promise;
}

export const HomePage = (props) => {
  const history = useHistory()
  const [homeState, setHomeState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const requestsState = {}

  const handlerFindBusiness = () => {
    history.push('/search')
  }

  const getPage = async () => {
    setHomeState({ ...homeState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await makeRequest()
      setHomeState({ ...homeState, loading: false })
      if (!error) {
        setHomeState({ ...homeState, body: result.body })
      } else {
        setHomeState({ ...homeState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setHomeState({ ...homeState, loading: false, error: [err.message] })
      }
    }
  }

  useEffect(() => {
    getPage()
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel()
      }
    }
  }, [])

  const homeHeroProps = {
    ...props,
    onFindBusiness: handlerFindBusiness
  }

  return (
    <>
      <HelmetTags page='home' />
      <HomeContainer>
        <HomeHero
          {...homeHeroProps}
        />
        {
          homeState.loading && (
            <SkeletonContainer>
              <SkeletonHeader>
                <Skeleton width='100%' height='100%' />
              </SkeletonHeader>
              <SkeletonContent>
                <SkeletonInformation>
                  <Skeleton width='100%' height='100px' />
                  <Skeleton width='100%' height='100px' />
                  <Skeleton width='100%' height='100px' />
                  <Skeleton width='100%' height='100px' />
                </SkeletonInformation>
                <SkeletonSide>
                  <Skeleton width='100%' height='100%' />
                </SkeletonSide>
              </SkeletonContent>
            </SkeletonContainer>
          )
        }
        {
          homeState.body && (
            <div dangerouslySetInnerHTML={{
              __html: homeState.body
            }}
            />
          )
        }
      </HomeContainer>
    </>
  )
}
