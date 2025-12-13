function CountryCard({ country }) {
return (
<div className="card h-100 shadow">
<img
src={country.flags.png}
className="card-img-top"
alt={country.name.common}
/>
<div className="card-body">
<h5 className="card-title">{country.name.common}</h5>
<p className="card-text">
<strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}<br />
<strong>Población:</strong> {country.population.toLocaleString()}<br />
<strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
</p>
</div>
</div>
)
}


export default CountryCard