import { DetailsProps } from "../../interface/Props";

import style from "../../styles/details.module.scss";
import { Button } from "../../components/Button/Button";

const Details = ({ closeDetails, details }: DetailsProps) => {
  return (
    <section className={style.details}>
      <h1>Home details</h1>
      <h2>Addres: {details.address}</h2>
      <h2>Floors number: {details.floorsNumber}</h2>
      <h2>Description: {details.description}</h2>
      <h2>Label: {details.label}</h2>
      <Button onClick={() => closeDetails()}>Close</Button>
    </section>
  );
};

export default Details;
