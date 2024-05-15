import React from 'react';


const SeventhLayout = () => {
    return (
        <>
            <main className="users-container-servicest-main">
                <div className="heading-container">Dokumente</div>
                <hr className='mb-4 mt-2' />
                <div className="row mt-2 mb-4">
                    <div className="col-lg-6">
                        <p className='my-3'>Dokumente Kunde</p>
                        <div className="ps-3">
                            <p>Dienstvertretungsvertrag</p>
                            <p className='text-muted'>Vertrag noch nicht zugestimmt.</p>
                            <div className="buttons d-flex my-3 gap-4">
                                <button className='bg-transparent border-1 px-3 py-1 rounded border-black text-uppercase text-[13px]'>
                                    Vertrag für Kunden bestätigen
                                </button>
                                <button className='bg-transparent border-1 px-3 py-1 rounded border-black text-uppercase text-[13px]'>
                                    Vertrag anzeigen
                                </button>
                            </div>
                            <p className=''>Tauschmeldung.</p>
                            <div className="buttons d-flex my-3 gap-4">
                                <button className='bg-transparent border-1 px-3 py-1 rounded border-black text-uppercase text-[13px]'>
                                    Tauschmeldung anzeigen
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className='my-3'>Dokumente Vertreter</p>
                        <div className="ps-3">
                            <p>Dienstvertretungsvertrag</p>
                            <p className='text-muted'>Vertrag noch nicht zugestimmt.</p>
                            <div className="buttons d-flex flex-wrap my-3 gap-4">
                                <button className='bg-transparent border-1 px-3 py-1 rounded border-black  text-uppercase text-[13px]'>
                                    Vertrag für Vertreter bestätigen
                                </button>
                                <button className='bg-transparent border-1 px-3 py-1 rounded border-black text-uppercase text-[13px]'>
                                    Vertrag anzeigen
                                </button>
                            </div>
                            <p className=''>Rechnungsvorlage</p>
                            <div className="buttons d-flex my-3 gap-4">
                                <button className='bg-transparent border-1 px-3 py-1 rounded border-black text-uppercase text-[13px]'>
                                    Rechnungsvorlage anzeigen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SeventhLayout;