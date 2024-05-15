import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import RadioTypeSelect from "./radio-type-select.jsx";
import { FloatingLabel } from "react-bootstrap";

const QuickStartFormTwo = () => {
  const [checked, setChecked] = useState("fahrdienst");

  return (
    <Form className="py-4 px-3 d-flex flex-column justify-content-between h-100">
      <div className="p-3">
        <RadioTypeSelect
          list={[
            {
              label: "Fahrdienst",
              value: "fahrdienst",
            },
            {
              label: "Transport",
              value: "transport",
            },
          ]}
          type="checkbox"
          checked={checked}
          setChecked={setChecked}
        />

        <div className="mt-4">
          In welchem Zeitraum möchten Sie KV-Dienste vertreten?
        </div>

        <div className="border-bottom my-4 d-flex align-items-center">
          <svg
            height={20}
            width={20}
            className="svg-inline--fa fa-calendar-check fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="calendar-check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16zm-66.467-194.937l-134.791 133.71c-4.7 4.663-12.288 4.642-16.963-.046l-67.358-67.552c-4.683-4.697-4.672-12.301.024-16.985l8.505-8.48c4.697-4.683 12.301-4.672 16.984.024l50.442 50.587 117.782-116.837c4.709-4.671 12.313-4.641 16.985.068l8.458 8.527c4.672 4.709 4.641 12.313-.068 16.984z"
            ></path>
          </svg>
          <FloatingLabel className="w-100" label="Dienstbeginn">
            <Form.Control className="border-0" type="date" />
          </FloatingLabel>
        </div>

        <div className="border-bottom my-4 d-flex align-items-center">
          <svg
            height={20}
            width={20}
            className="svg-inline--fa fa-calendar-check fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="calendar-check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16zm-66.467-194.937l-134.791 133.71c-4.7 4.663-12.288 4.642-16.963-.046l-67.358-67.552c-4.683-4.697-4.672-12.301.024-16.985l8.505-8.48c4.697-4.683 12.301-4.672 16.984.024l50.442 50.587 117.782-116.837c4.709-4.671 12.313-4.641 16.985.068l8.458 8.527c4.672 4.709 4.641 12.313-.068 16.984z"
            ></path>
          </svg>
          <FloatingLabel className="w-100" label="Dienstende">
            <Form.Control className="border-0" type="date" />
          </FloatingLabel>
        </div>

        <div className="border-bottom my-4 d-flex align-items-center">
          <svg
            height={20}
            width={20}
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="map-marker-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"
            ></path>
          </svg>
          <FloatingLabel className="w-100" label="Bundesland">
            <Form.Select className="border-0">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </div>
      </div>

      <div className="">
        <Button type="submit" className="w-100">
          Weiter
        </Button>
      </div>
    </Form>
  );
};

export default QuickStartFormTwo;
