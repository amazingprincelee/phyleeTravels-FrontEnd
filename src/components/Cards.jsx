import React from 'react'

function Cards() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Lorem heading </h3>
                                <p>Fusce dapibus urna ut libero aliquam, ensuring your safety as you traverse new and exciting landscapes. Nulla facilisi in ensuring your peace of mind, while vivamus ultricies quam eu turpis dapibus brings </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col ">
                        <div className="card card-cover h-100 overflow-hidden text-bg-danger rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Lorem heading</h3>
                                <p className='text-center'>Fusce dapibus urna ut libero aliquam, ensuring your safety as you traverse new and exciting landscapes. Nulla facilisi in ensuring your peace of mind, while vivamus ultricies quam eu turpis dapibus brings </p>
                              
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Lorem heading</h3>
                                <p>Fusce dapibus urna ut libero aliquam, ensuring your safety as you traverse new and exciting landscapes. Nulla facilisi in ensuring your peace of mind, while vivamus ultricies quam eu turpis dapibus brings </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Cards