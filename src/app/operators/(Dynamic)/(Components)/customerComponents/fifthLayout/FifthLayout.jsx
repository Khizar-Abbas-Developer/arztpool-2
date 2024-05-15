import React, { useState } from 'react';
import "./FifthLayout.css";
import { FaPlus } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';


const FifthLayout = () => {
    const [listOfFederalStates, setListOfFederalStates] = useState([]);
    const [data, setData] = useState({
        plant_name: "",
        plant_number: "",
    })
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, federal_state: selectedValue });
    };
    return (
        <>
            <div className="user-table-containerst-2">
                <div className="text-business-heading">Business premises</div>
                <main className="user-table-containerst" >
                    <div className="accordion-kk">
                        <div className="accordions">
                            <div className="item" key={0} >
                                <div className="title" onClick={() => toggle(0)}>
                                    <h2 className='question-heading'>Anesthesia practice - Erik Faller</h2>
                                    {/* <span>{selected == i ? <FaPlus /> : <FaPlus />}</span> */}
                                </div>
                                <hr className='horizontal-line' />
                                <div className={selected == 0 ? "content show" : "content"}>
                                    <form className="">
                                        <div className="mt-10">ID: e928f4d3-bd24-4d9d-bec4-41cd1fa6057c</div>
                                        <div className="row justify-content-between mt-[50px] my-10 px-2">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Betriebsstättenname"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Betriebsstättennummer"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        <div className="">Rechnungsadresse</div>
                                        <div className="row justify-content-between mt-[50px] my-10 px-2">
                                            <div className="col-lg-8 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Betriebsstättenname"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Betriebsstättennummer"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        <div className="row justify-content-between mt-[50px] my-10 px-2">
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Name"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"LANR"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /////// */}
                                        {/* /////// */}
                                        {/* /////// */}
                                        <div className="mt-16">
                                            <div className="set z-50">
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    className='w-[45%] border-none border-bottom'
                                                    value={data.federal_state}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option>KV Sitze</option>
                                                    {listOfFederalStates.map((state, i) => {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                <option value={state.id}>{state.title}</option>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </Form.Select>
                                            </div>
                                        </div>
                                        {/* //////////// */}
                                        {/* //////////// */}
                                        {/* //////////// */}
                                        <div className="flex justify-end mr-8 my-4">
                                            <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                        </div>
                                    </form>
                                    <hr />
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* /// */}
                                    {/* /// */}
                                    {/* /// */}
                                    {/* /// */}
                                    <div className="my-10 px-4">
                                        <div className="">Dienstgebiet</div>
                                        <div className="row justify-content-between mt-[50px] my-4 px-4">
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <p>Derzeitiges Dienstgebiet</p>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <p>Karlsruhe - Stadt (Baden-Württemberg)</p>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <button className="py-[10px] px-[32px] rounded-md text-[#173968] border border-red-200 bg-[white] text-[16px] font-[500]">Editieren</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        <div className="">Betriebsstättenärzte</div>
                                        <div className="row justify-content-center mt-[50px] my-4 px-4">
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Name"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"LANR"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 col-lg-3 col-md-6 col-sm-12">
                                                <div className="set z-50">
                                                    <Form.Select
                                                        aria-label="Default select example"
                                                        className='w-[100%] border-none border-bottom'
                                                        value={data.federal_state}
                                                        onChange={handleSelectChange}
                                                    >
                                                        <option>KV Sitze</option>
                                                        {listOfFederalStates.map((state, i) => {
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    <option value={state.id}>{state.title}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="mt-2 col-lg-3 col-md-6 col-sm-12">
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                                    <button className="py-[10px] px-[0px] flex justify-center items-center gap-2 w-full rounded-md text-[#173968] border border-[#173968] border-solid bg-[white] text-[16px] font-[500]">
                                                        <div className="w-4 h-4">
                                                            <svg className="w-full h-full svg-inline--fa fa-ban fa-w-16 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ban" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg>
                                                        </div>
                                                        <div className="">Löschen</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        {/* /// */}
                                        <div className="">Betriebsstättenarzt hinzufügen</div>
                                        <div className="row justify-content-center mt-[50px] my-4 px-4">
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Name"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="sub-container">
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"post_code"}
                                                            value={data.post_code}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"LANR"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 col-lg-3 col-md-6 col-sm-12">
                                                <div className="set z-50">
                                                    <Form.Select
                                                        aria-label="Default select example"
                                                        className='w-[100%] border-none border-bottom'
                                                        value={data.federal_state}
                                                        onChange={handleSelectChange}
                                                    >
                                                        <option>KV Sitze</option>
                                                        {listOfFederalStates.map((state, i) => {
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    <option value={state.id}>{state.title}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="mt-2 col-lg-3 col-md-6 col-sm-12">
                                                <div className="flex flex-col justify-center items-center gap-2">
                                                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /// */}
                                    {/* /// */}
                                    {/* /// */}
                                    {/* /// */}
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default FifthLayout;