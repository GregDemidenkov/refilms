import React from "react"
import ContentLoader from "react-content-loader"

export const FilmLoading = (props) => (
  <ContentLoader 
  className = "card card_item card_margin"  
  speed={2}
    width={220}
    height={330}
    viewBox="0 0 220 330"
    backgroundColor="#3a3a3a"
    foregroundColor="#8e8e8e"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="220" height="330" /> 
    <rect x="96" y="188" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
)
