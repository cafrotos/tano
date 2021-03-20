import React from "react"
import { Icon } from "@ui-kitten/components";

/**
 * 
 * @param {import("@ui-kitten/components").IconProps} iconProps 
 */
export const renderIcon = (iconProps) => (props) => (<Icon {...props} {...iconProps} />)