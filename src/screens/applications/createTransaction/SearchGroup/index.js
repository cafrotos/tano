import { useRoute } from "@react-navigation/core";
import { Layout } from "@ui-kitten/components";
import { NAMES } from "configs/screens";
import React, { useEffect } from "react";
import SearchInput from "./SearchInput";

const SearchGroup = () => {
  const { params } = useRoute()

  useEffect(() => {
    console.log(params)
  }, [params])

  return (
    <Layout
      level="1"
      style={{
        height: "100%"
      }}
    >

    </Layout>
  )
}

export default {
  name: NAMES.SEARCH_GROUP,
  component: SearchGroup,
  options: {
    headerTitle: () => <SearchInput />,
    headerTitleAlign: "left",
  }
}