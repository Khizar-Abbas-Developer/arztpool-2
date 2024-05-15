'use client'
import React from 'react'
import './ThirdLayout.css'
import { Form } from 'react-bootstrap'
import { useState } from 'react'

const ThirdLayout = ({ userId, drivingServicesAreaArray }) => {
  const [currentNumber, setCurrentNumber] = useState(null)
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const [listOfFederalStates, setListOfFederalStates] = useState([])
  const [newData, setNewData] = useState(drivingServicesAreaArray)
  const [update, setUpdate] = useState({
    surname: '',
    abbrevation: '',
    coordinates: '',
    legacy_id: '',
    comment: '',
    confidential_comment: '',
  })
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const handleInputChange = (event, index) => {
    const { name, value } = event.target
    const myData = [...newData] // Create a copy of data array
    myData[index][name] = value // Update the specific item at index
    setNewData(myData) // Update the state
  }
  const handleNewInputChange = (event) => {
    const { name, value } = event.target
    setUpdate((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleExistingServiceAreaUpdate = (e) => {
    e.preventDefault()
    try {
      console.log(newData)
    } catch (error) {}
  }
  const handleAddNewDriveServiceArea = (e) => {
    e.preventDefault()
    console.log(update)
  }
  return (
    <>
      <div className="user-table-containerst-2 my-16">
        <div className="text-business-heading">Fahrdienste</div>
        <main className="user-table-containerst" style={{ width: '100%' }}>
          <div className="flex flex-col gap-2">
            {Array.isArray(drivingServicesAreaArray) &&
              drivingServicesAreaArray.map((item, index) => {
                return (
                  <div
                    className="accordion-kk border border-gray-300 ml-2 rounded-md"
                    key={index}
                  >
                    <div className="accordions">
                      <div className="item" key={0}>
                        <div className="title" onClick={() => toggle(index)}>
                          <h2 className="question-heading">
                            Muldental HBD mit verpflichtendem Fahrservice (
                            82205f77-03af-4c6f-bcfe-b1a1cf2f2328 ){' '}
                          </h2>
                          {/* <span>{selected == i ? <FaPlus /> : <FaPlus />}</span> */}
                        </div>
                        <hr className="horizontal-line" />
                        <div
                          className={
                            selected == index ? 'content show' : 'content'
                          }
                        >
                          <form
                            className="mt-6"
                            onSubmit={handleExistingServiceAreaUpdate}
                          >
                            <div className="row mb-[50px] mr-4">
                              <div className="col-lg-9">
                                <div className="sub-container">
                                  <div className="entryarea">
                                    <input
                                      className="input-item-k"
                                      type={'text'}
                                      name={'surname'}
                                      value={newData[index].surname || ''} // Access data dynamically using index
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      } // Pass index to handleInputChange
                                      required
                                      autoComplete="off"
                                    />
                                    <div className="labelline bg-transparent">
                                      {'Name'}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="sub-container">
                                  <div className="entryarea">
                                    <input
                                      className="input-item-k"
                                      type={'text'}
                                      name={'abbreviation'}
                                      value={newData[index].abbreviation || ''} // Access data dynamically using index
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      } // Pass index to handleInputChange
                                      required
                                      autoComplete="off"
                                    />
                                    <div className="labelline bg-transparent">
                                      {'Kürzel'}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-[50px] mr-4">
                              <div className="col-lg-9">
                                <div className="sub-container">
                                  <div className="entryarea">
                                    <input
                                      className="input-item-k"
                                      type={'text'}
                                      name={'coordinates'}
                                      value={newData[index].coordinates || ''}
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      } // Pass index to handleInputChange
                                      autoComplete="off"
                                    />
                                    <div className="labelline bg-transparent">
                                      {'Koordinaten'}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="sub-container">
                                  <div className="entryarea">
                                    <input
                                      className="input-item-k"
                                      type={'text'}
                                      name={'legacy_id'}
                                      value={newData[index].legacy_id || ''}
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      } // Pass index to handleInputChange                                      required
                                      autoComplete="off"
                                    />
                                    <div className="labelline bg-transparent">
                                      {'Legacy ID'}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <main className="">
                              <div className="row mt-2 flex justify-center items-center">
                                <div className="col-lg-6">
                                  <div className="">
                                    <div className="sub-containerst-11">
                                      <div className="flex flex-col gap-3">
                                        <main className="users-container-servicest-another">
                                          <div className="sub-containerst-11">
                                            <div className="entryarea-1">
                                              <textarea
                                                className="input-item-kl"
                                                type="text"
                                                name={'comment'}
                                                value={
                                                  newData[index].comment || ''
                                                }
                                                onChange={(e) =>
                                                  handleInputChange(e, index)
                                                } // Pass index to handleInputChange                                                   required
                                                autoComplete="off"
                                              />
                                              <div className="labelline">
                                                {'Kommentar'}
                                              </div>
                                            </div>
                                          </div>
                                        </main>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="">
                                    <div className="sub-containerst-1">
                                      <div className="flex flex-col gap-3">
                                        <main className="users-container-servicest-another">
                                          <div className="sub-containerst-1">
                                            <div className="entryarea-1">
                                              <textarea
                                                className="input-item-kl"
                                                type="text"
                                                name={'confidential_comment'}
                                                value={
                                                  newData[index]
                                                    .confidential_comment || ''
                                                }
                                                onChange={(e) =>
                                                  handleInputChange(e, index)
                                                } // Pass index to handleInputChange                                                   required
                                                autoComplete="off"
                                              />
                                              <div className="labelline">
                                                {'Vertraulicher Kommentar'}
                                              </div>
                                            </div>
                                          </div>
                                        </main>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-end my-3 mx-4">
                                <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">
                                  Speichern
                                </button>
                              </div>
                            </main>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>

          <hr className="my-3" />
          {/* /////////// */}
          {/* /////////// */}
          {/* /////////// */}
          {/* /////////// */}
          {/* /////////// */}
          {/* /////////// */}
          <form className="" onSubmit={handleAddNewDriveServiceArea}>
            <div className="text-business2-heading">
              Neuen Fahrdienst hinzufügen
            </div>
            <div className="row mb-[50px] mr-4">
              <div className="col-lg-9">
                <div className="sub-container">
                  <div className="entryarea">
                    <input
                      className="input-item-k"
                      type={'text'}
                      name={'surname'}
                      value={update.surname}
                      onChange={handleNewInputChange}
                      required
                      autoComplete="off"
                    />
                    <div className="labelline bg-transparent">{'Name'}</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sub-container">
                  <div className="entryarea">
                    <input
                      className="input-item-k"
                      type={'text'}
                      name={'abbrevation'}
                      value={update.abbrevation}
                      onChange={handleNewInputChange}
                      required
                      autoComplete="off"
                    />
                    <div className="labelline bg-transparent">{'Kürzel'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ///////// */}
            {/* ///////// */}
            {/* ///////// */}
            {/* ///////// */}
            {/* ///////// */}
            {/* ///////// */}

            <div className="row mb-[50px] mr-4">
              <div className="col-lg-9">
                <div className="sub-container">
                  <div className="entryarea">
                    <input
                      className="input-item-k"
                      type={'text'}
                      name={'coordinates'}
                      value={update.coordinates}
                      onChange={handleNewInputChange}
                      required
                      autoComplete="off"
                    />
                    <div className="labelline bg-transparent">
                      {'Koordinaten'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sub-container">
                  <div className="entryarea">
                    <input
                      className="input-item-k"
                      type={'text'}
                      name={'legacy_id'}
                      value={update.legacy_id}
                      onChange={handleNewInputChange}
                      required
                      autoComplete="off"
                    />
                    <div className="labelline bg-transparent">
                      {'Legacy ID'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ////// */}
            {/* ////// */}
            {/* ////// */}
            {/* ////// */}

            <main className="">
              <div className="row mt-2 flex justify-center items-center">
                <div className="col-lg-6">
                  <div className="">
                    <div className="sub-containerst-11">
                      <div className="flex flex-col gap-3">
                        <main className="users-container-servicest-another">
                          <div className="sub-containerst-11">
                            <div className="entryarea-1">
                              <textarea
                                className="input-item-kl"
                                type="text"
                                name={'comment'}
                                value={update.comment}
                                onChange={handleNewInputChange}
                                required
                                autoComplete="off"
                              />
                              <div className="labelline">{'Kommentar'}</div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="">
                    <div className="sub-containerst-1">
                      <div className="flex flex-col gap-3">
                        <main className="users-container-servicest-another">
                          <div className="sub-containerst-1">
                            <div className="entryarea-1">
                              <textarea
                                className="input-item-kl"
                                type="text"
                                name={'confidential_comment'}
                                value={update.confidential_comment}
                                onChange={handleNewInputChange}
                                required
                                autoComplete="off"
                              />
                              <div className="labelline">
                                {'Vertraulicher Kommentar'}
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //Input and Date Fields */}
              <div className="flex justify-end my-4 mx-4">
                <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">
                  Speichern
                </button>
              </div>
            </main>
          </form>
          {/* ///////////// */}
          {/* ///////////// */}
          {/* ///////////// */}
          {/* ///////////// */}
        </main>
        {/* // */}
      </div>
    </>
  )
}

export default ThirdLayout
