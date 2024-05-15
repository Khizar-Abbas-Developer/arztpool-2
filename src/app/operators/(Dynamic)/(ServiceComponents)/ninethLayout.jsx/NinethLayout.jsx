import React, { useState } from 'react';
import "./NinethLayout.css";
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

const NinethLayout = ({ serviceId, num_of_death_insured, num_of_legal_insured, num_of_privately_insured, num_of_telephone_consultations }) => {
  const currentUser = useSelector((state) => state.user?.currentUser);
  const userAccessToken = currentUser?.accessToken;
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
  const updateService = `${URL}/api/service/v1/update_service/${serviceId}`;
  const [data, setData] = useState({
    num_of_legal_insured: num_of_death_insured || "",
    num_of_privately_insured: num_of_legal_insured || "",
    num_of_death_insured: num_of_privately_insured || "",
    num_of_telephone_consultations: num_of_telephone_consultations || ""
  })
  const handleInputFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleInsuredForm = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
        'Content-Type': 'application/json', // Specify content type as JSON
      },
    };
    try {
      const response = await axios.patch(updateService, data, config);
      if (response.data.message === "Success") {
        toast.success("Services Info updated successfully")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form className="users-container-servicest-main-12" onSubmit={handleInsuredForm}>
        <div className="heading-container">Patientenanzahlen</div>
        <hr className='mb-4 mt-2' />
        <div className="row mt-2">
          <div className="col-lg-6">
            <p className='my-3 mx-2'>Bestätigung Patientenanzahlen Kunde</p>
            <div className="">
              <div className="sub-containerst-12">
                <div className="flex flex-col gap-3">
                  <p className='my-1 mx-2'>Bestätigung steht noch aus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p className='my-3'>Patientenanzahlen vom Vertreter</p>
            <div className="">
              <div className="sub-containerst-12">
                <div className="flex flex-col gap-8">
                  {/* //input fields here */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                    <div className="sub-container" style={{ width: "500px" }}>
                      <div className="entryarea">
                        <input
                          className='input-item-k'
                          type="text"
                          name="num_of_legal_insured"
                          value={data.num_of_legal_insured}
                          onChange={handleInputFields}
                          required
                          autoComplete="off"
                        />
                        <div className="labelline bg-transparent">
                          {"Anzahl Gesetztlich Versicherte"}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //input fields here */}
                  {/* //input fields here */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                    <div className="sub-container" style={{ width: "500px" }}>
                      <div className="entryarea">
                        <input
                          className='input-item-k'
                          type="text"
                          name="num_of_privately_insured"
                          value={data.num_of_privately_insured}
                          onChange={handleInputFields}
                          required
                          autoComplete="off"
                        />
                        <div className="labelline bg-transparent">
                          {"Anzahl Private Versicherte"}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //input fields here */}
                  {/* //input fields here */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                    <div className="sub-container" style={{ width: "500px" }}>
                      <div className="entryarea">
                        <input
                          className='input-item-k'
                          type="text"
                          name="num_of_death_insured"
                          value={data.num_of_death_insured}
                          onChange={handleInputFields}
                          required
                          autoComplete="off"
                        />
                        <div className="labelline bg-transparent">
                          {"Anzahl Totenscheine"}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //input fields here */}
                  {/* //input fields here */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                    <div className="sub-container" style={{ width: "500px" }}>
                      <div className="entryarea">
                        <input
                          className='input-item-k'
                          type="text"
                          name="num_of_telephone_consultations"
                          value={data.num_of_telephone_consultations}
                          onChange={handleInputFields}
                          required
                          autoComplete="off"
                        />
                        <div className="labelline bg-transparent">
                          {"Anzahl Telefonischer Beratungen"}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //input fields here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // */}
        <div className="flex justify-end mr-8 mt-12">
          <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
        </div>
      </form>
    </>
  )
}

export default NinethLayout;