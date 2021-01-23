import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Map = () => {
  const data = useStaticQuery(graphql`
    query StaticMapQuery {
      staticMap {
        childFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data ? (
        <Img
          fluid={data.staticMap.childFile.childImageSharp.fluid}
          alt={`image of the map showing fake store's location`}
        />
      ) : null}
    </div>
  )
}

export default Map
