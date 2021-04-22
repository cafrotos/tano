import BlankHeader from "components/BlankHeader";
import { NAMES } from "configs/screens";
import React from "react";
import Icons from "screens/applications/Icons";
import CreateTransBook from "./CreateTransBook";

const screens = [
  CreateTransBook,
  Icons
]

export default (Screen) => screens.map((screen, index) => (
  <Screen {...screen} key={index} />
))