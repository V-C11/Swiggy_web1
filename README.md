#Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing 
- Code Splitting
- Different Bundling -support older browser
- Diagnostic
- Error Handling
- Host on HTTPs
- Tree Shaking (Remove Unused Code)
- Diffrent Dev and Prod Bundles



Two types of Exporta/Imports

- Default Expoer/Import

export default Component
import Component from "path"

- Named Export/Import

export const Component
import {Component} from "path"

# React Hooks
(Normal JS utility function)
- useState()
- useEffect()

# 2 types of Routing
- Client Side Routing
- Server Side Routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect Out Store to App
- Slice(cardSlice)
- dispatch Action
- Selector

# Types of Testing (developer)
- Unit testing
- Integration Testing
- Ene to End Testing (e2e Testing)


# Setting Up Testing In Our App
- Install React Testing Library
- Install jest
- Install Babel using jest
- Configure Babel 
- Configure Parcel Config file to disable babel transpilationnpm 
- npx jest (for test cases)
- jest configuration  (npx jest --init)
- Instal jsdom library
- Install @babel/preset_react - to make JSX work in test 
- Include @babel/preset_react insides my babel config
- Install @testing-library/jest-dom