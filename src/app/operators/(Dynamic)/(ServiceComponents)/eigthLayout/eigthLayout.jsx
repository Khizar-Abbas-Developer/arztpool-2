import React from 'react';
import "./eightLayout.css";


const EightLayout = () => {
    return (
        <>
            <main className="users-container-servicest-mains">
                <div className="heading-containerst">Checkliste</div>
                <hr className='mb-4 mt-2' />
                <div className="row mt-2">
                    <div className="col-lg-6">
                        <p className='my-3 mx-2'>Checklisten Informationen vom Kunden</p>
                        <div className="">
                            <div className="sub-containerst-11">
                                <div className="flex flex-col gap-3">
                                    <main className="users-container-servicest-another">
                                        <div className="sub-containerst-11">
                                            <div className="entryarea-1">
                                                <textarea
                                                    className='input-item-kl'
                                                    type="text"
                                                    name={"name"}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline">
                                                    {"Kommentar (öffentlich)"}
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                    <main className="users-container-servicest-another">
                                        <div className="sub-containerst-1">
                                            <div className="entryarea-1">
                                                <textarea
                                                    className='input-item-kl'
                                                    type="text"
                                                    name={"name"}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline">
                                                    {"Kommentar (öffentlich)"}
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                    <main className="users-container-servicest-another">
                                        <div className="sub-containerst-1">
                                            <div className="entryarea-1">
                                                <textarea
                                                    className='input-item-kl'
                                                    type="text"
                                                    name={"name"}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline">
                                                    {"Kommentar (öffentlich)"}
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className='my-3'>Checkliste Bestätigung vom Vertreter</p>
                        <div className="">
                            <div className="sub-containerst-1">
                                <div className="flex flex-col gap-3">
                                    <p className=''>Bestätigung steht noch aus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EightLayout;