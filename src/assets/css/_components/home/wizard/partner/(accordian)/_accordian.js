import React, { useState } from 'react';
import './accordian.css';
import Form from 'react-bootstrap/Form';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Input from '@/app/(Operator_layout)/components/Input/Input';
import Password from '@/app/(Operator_layout)/components/Password/Password';

const Accordian = () => {
  const [selectedFirstForm, setSelectedFirstForm] = useState(true);
  const [secondPartStatus, setSecondPartStatus] = useState(true);
  const [formOneSectionOne, setFormOneSectionOne] = useState("block");
  const [formOneSectionTwo, setFormOneSectionTwo] = useState("none");
  const [formOneSectionThree, setFormOneSectionThree] = useState("none");
  const [AccordionHeight, setAccordionHeight] = useState("25vh");
  const [data, setData] = useState({
    name: ""
  })
  const [selected, setSelected] = useState(null);

  const handleRadioChange = (event, index) => {
    setSelected(index);
    setAccordionHeight("100vh");
  };
  const handleClickContinue = () => {
    if (selectedFirstForm && formOneSectionOne === "block") {
      setFormOneSectionOne("none")
      setFormOneSectionTwo("block")
      setSecondPartStatus(false)
    } else if (selectedFirstForm && formOneSectionOne === "none") {
      setFormOneSectionTwo("none");
      setFormOneSectionThree("block")
    }
  }
  return (
    <>
      <div className="accordion" style={{ height: AccordionHeight, transition: "all 0.3s smooth" }}>
        <div className="items" key={0}>
          <div className="titles" style={{ display: secondPartStatus ? "flex" : "none" }}>
            <div className="form-check" onClick={() => handleRadioChange(null, 0)}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked={selected === 0}
                onChange={(event) => handleRadioChange(event, 0)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                MVZ
              </label>
            </div>
          </div>
          <div className={selected === 0 ? 'content show' : 'content'}>
            <form action="" className="form-one-radio">
              <div className='hidden' style={{ display: formOneSectionOne }}>
                <Input label={'Name des MVZ'} />
                <p className="form-one-text-1">

                  Als MVZ haben Sie später im Bereich &quot;Meine Daten&quot; die
                  Möglichkeit, einzelne Betriebsstätten anzulegen.
                </p>
                <p className="form-one-text-2 my-4">Zu vertretender Arzt</p>
                <Input label={'Titel'} />
                <Input label={'Name (Vor- und Nachname)'} />
                <Input label={'LANR'} />
              </div>
              {/* //2nd section */}
              <div className='' style={{ display: formOneSectionTwo }}>
                <div className='select-containerst'>
                  <Form.Select
                    aria-label="Default select example"
                    className='w-80 border-none border-bottom'
                  // value={data.federal_state}
                  // onChange={handleSelectChange}
                  >
                    <option>Bundesland</option>
                    <option value="1">temp</option>
                  </Form.Select>
                </div>
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    className='w-80 border-none border-bottom'
                  // value={data.federal_state}
                  // onChange={handleSelectChange}
                  >
                    <option>Bundesland</option>
                    <option value="1">temp</option>
                  </Form.Select>
                </div>
              </div>
              {/* //3rd section */}
              <div className='' style={{ display: formOneSectionThree }}>
                <div className='email-input-container'>
                {/* <Input label="E-Mail" name="email" value={data.email} onChange={handleInputChange} /> */}
                <Input label="E-Mail" name="email" />
                </div>
                <div>
                {/* <Password label={"Passwort"} name="password" value={data.password} onChange={handleInputChange} /> */}
                <Password label={"Passwort"} name="password" />
                </div>
                <div>
                {/* <Password label={"Passwort bestätigen"} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> */}
                <Password label={"Passwort bestätigen"} name="confirmPassword" />
                </div>
              <p className='px-2'>Mit Erstellung eines Accounts stimmen Sie unseren <span className='text-[rgb(31,185,229)]'>AGB</span> und <span className='text-[rgb(31,185,229)]'>Datenschutzbestimmungen</span> zu.</p>
              </div>
            </form>
          </div>
        </div>
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        {/* ///Section Partition */}
        <div className="items" key={1} style={{ display: secondPartStatus ? "block" : "none" }}>
          <div className="titles">
            <div className="form-check" onClick={() => handleRadioChange(null, 1)}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={selected === 1}
                onChange={(event) => handleRadioChange(event, 1)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Einzelpraxis/Gemeinschaftspraxis
              </label>
            </div>
          </div>
          <div className={selected === 1 ? 'content show' : 'content'}>
            <form action="" className="form-two-radio">
              <Input label={'Name bzw. Praxisname'} />
              <p className="form-two-text-1">
                Falls Sie nicht wissen, welchen Praxisnamen Sie hier angeben
                sollen, nutzen Sie einfach Ihren Namen als „Praxis Vorname
                Nachname“. Dies können Sie später jederzeit editieren
              </p>
              <p className="form-one-text-2 my-4">Zu vertretender Arzt</p>
              <Input label={'Titel'} />
              <Input label={'Name (Vor- und Nachname)'} />
              <Input label={'LANR'} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;