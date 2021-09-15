import React, { useState, useEffect } from "react";
import style from "../../styles/homeForm.module.scss";

import Table from "../../components/Table/Table";
import TableBody from "../../components/TableBody/TableBody";
import { Button } from "../../components/Button/Button";

import { Home, NewHome } from "../../interface/Home";

import Details from "../details/Details";

const HomeList = () => {
  const [home, setHome] = useState<Array<Home>>([]);
  const [refresh, setRefresh] = useState<Boolean>(true);
  const [showDetails, setShowDetails] = useState<Boolean>(false);

  const [details, setDetails] = useState<NewHome>({
    address: "",
    floorsNumber: 0,
    description: "",
    label: "",
  });
  const [newHome, setNewHome] = useState<NewHome>({
    address: "",
    floorsNumber: 0,
    description: "",
    label: "",
  });

  const handleDetails = (
    address: string,
    label: string,
    floorsNumber: number,
    description: string
  ): void => {
    setDetails({
      address: address,
      floorsNumber: floorsNumber,
      description: description,
      label: label,
    });
    setShowDetails(!showDetails);
  };

  const reload = (): void => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetch("http://mobile-reality-backend.sadek.usermd.net/houses/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setHome(data.results));
  }, []);

  useEffect(() => {
    fetch("http://mobile-reality-backend.sadek.usermd.net/houses/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setHome(data.results));
  }, [refresh]);

  const handleAdd = (event: React.FormEvent): void => {
    fetch("http://mobile-reality-backend.sadek.usermd.net/houses", {
      method: "POST",
      body: JSON.stringify(newHome),
      headers: {
        "Content-Type": "application/json",
      },
    });
    event.preventDefault();
    reload();
    setNewHome({
      address: "",
      floorsNumber: 0,
      description: "",
      label: "",
    });
  };

  return (
    <>
      <form
        className={style.form}
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleAdd(event)}
      >
        <label>
          Adress:
          <input
            type="text"
            value={newHome.address}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewHome({ ...newHome, address: event.target.value })
            }
          />
        </label>
        <label>
          Floor number:
          <input
            type="number"
            value={newHome.floorsNumber}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewHome({
                ...newHome,
                floorsNumber: parseInt(event.target.value),
              })
            }
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={newHome.description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewHome({ ...newHome, description: event.target.value })
            }
          />
        </label>
        <label>
          Label:
          <input
            type="text"
            value={newHome.label}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewHome({ ...newHome, label: event.target.value })
            }
          />
        </label>
        <Button type="submit">Add new home</Button>
      </form>

      <Table>
        {home.map(
          ({ _id, address, floorsNumber, description, label }: Home) => {
            return (
              <TableBody
                key={_id}
                id={_id}
                address={address}
                floorsNumber={floorsNumber}
                description={description}
                label={label}
                refresh={reload}
                handleDetails={handleDetails}
              />
            );
          }
        )}
      </Table>
      {showDetails && (
        <Details closeDetails={handleDetails} details={details} />
      )}
    </>
  );
};

export default HomeList;
