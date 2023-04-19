import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { searchByCountry } from "../config";
import {Button} from '../components/UI/Button/Button';
import { CountryDetails } from "../components/CountryDetails/CountryDetails";
import { Loading } from "../components/Loading/Loading";


const Country = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [nameCountry, setNameCountry] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    axios
      .get(searchByCountry(name))
      .then(({ data }) => setNameCountry(data[0]))
      setLoading(false)

  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <BsArrowLeft />
        Back
      </Button>
      {loading && nameCountry ? (<Loading />) : (<CountryDetails nameCountry={nameCountry} navigate={navigate} />)}
    </div>
  );
};

export { Country };
