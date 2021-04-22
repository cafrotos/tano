import { Layout, Spinner, Tab, TabView } from "@ui-kitten/components";
import { commonStyles } from "assets/styles";
import React, { Children, useState } from "react";

export default ({
  loading,
  children
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    loading ?
      (
        <Layout
          level="1"
          style={[
            commonStyles.flexHorizontalCenter,
            {
              height: "100%"
            }
          ]}
        >
          <Spinner size="large" />
        </Layout>
      ) : (
        <TabView
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
          style={{
            height: "100%",
            paddingBottom: 16
          }}
        >
          {
            Children.map(children, (child, index) => (
              <Tab title={child.props.title} key={index}>
                {child}
              </Tab>
            ))
          }
        </TabView >
      )
  )
}