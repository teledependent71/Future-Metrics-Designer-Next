import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Metrics Designer</title>
          <meta
            property="og:title"
            content="test-page - Future Metrics Designer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_k0dosw) => (
            <>
              <h1 id={context_k0dosw?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextK0doswProp}
          persistDataDuringLoading={true}
          key={props?.contextK0doswProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextK0doswProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextK0doswProp: contextK0doswProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
