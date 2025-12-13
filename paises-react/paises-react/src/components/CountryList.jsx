import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'


function CountryList() {
const [countries, setCountries] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,languages,population')
.then(res => res.json())
.then(data => {
setCountries(data)
setLoading(false)
})
}, [])


if (loading) {
return <div className="text-center">La pagina esta cargando</div>
}


return (
<div className="row">
{countries.map((country, index) => (
<div className="col-md-4 mb-4" key={index}>
<CountryCard country={country} />
</div>
))}
</div>
)
}


export default CountryList