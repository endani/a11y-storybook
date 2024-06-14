import "@testing-library/jest-dom"
import { configure as testingLibraryConfigure } from "@testing-library/dom"

import React from "react"

global.React = React

testingLibraryConfigure({ testIdAttribute: "data-qa" })
