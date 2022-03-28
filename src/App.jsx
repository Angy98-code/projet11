import { Routes, Route } from 'react-router-dom'
//import Essai from './pages/Essai'
import Header from './components/Header'
//import Cards from './components/Cards'
//import Footer from './components/Footer'
//import Error from './components/Error'
import PageNotFound from './components/404page'

import Home from './pages/Home'
//import PresentationPages from './pages/PresentationPages'
import Propos from './pages/Propos'
import AppartmentChoice from './pages/AppartmentChoice'
import { GlobalStyle } from './styles/GlobalStyle'
//import { data } from './data'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/error" element={<Error />} /> */}
        <Route path="/propos" element={<Propos />} />
        <Route path="/appartmentchoice/:id" element={<AppartmentChoice />} />
      </Routes>
    </div>
  )
}
export default App

// import { Routes, Route } from 'react-router-dom'

// import Header from './components/Header'
// //import Cards from './components/Cards'
// import Footer from './components/Footer'
// import Error from './components/Error'

// import Home from './pages/Home'
// import PresentationPages from './pages/PresentationPages'
// import Propos from './pages/Propos'

// import GlobalStyle from './utils/style/GlobalStyle'

// function App() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/presentationpages" element={<PresentationPages />} />
//         <Route path="/presentationpages/*" element={<Error />} />

//         <Route path="/propos" element={<Propos />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }
// export default App

// function App() {
//   return (
//     <div>

//           <GlobalStyle />
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />

//             <Route path="/survey/:questionNumber" element={<Survey />} />
//             <Route path="/survey/*" element={<Error />} />

//             <Route path="/service" element={<Service />}>
//               <Route path="/service/Service-perso" element={<Perso />} />
//               <Route path="/service/Service-pro" element={<Pro />} />
//             </Route>
//             <Route path="/freelances" element={<Freelances />} />
//             <Route path="/results" element={<Results />} />
//           </Routes>
//           <Footer />

//     </div>
//   )
// }
// export default App
