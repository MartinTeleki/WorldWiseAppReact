import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useContext } from "react";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {

  const {cities, isLoading} = useCities()

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countriesUnique = new Set(
    cities.map((city) =>
      JSON.stringify({ country: city.country, emoji: city.emoji })
    )
  );
  const countries = [...countriesUnique].map((each) => JSON.parse(each));

  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.emoji} />;
      })}
    </ul>
  );
}

export default CountryList;
