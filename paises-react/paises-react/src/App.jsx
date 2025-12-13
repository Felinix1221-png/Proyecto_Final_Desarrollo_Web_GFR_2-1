import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CountryList from './components/CountryList'


function App() {
return (
<div className="container mt-4">
<h1 className="text-center mb-4">Paises de el mundo y sus respectivas banderas </h1>
<CountryList />
</div>
)
}


export default App