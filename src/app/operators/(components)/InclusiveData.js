import React from 'react'

const SampleInclusiveData = [
    {
        "Type of service": "customer",
        "customer": "Khizar",
        "Customer number": 1,
        "Service start": "02-07-2024",
        "Service end": "23-07-2024",
        "Service area": "khizarnot7@gmail.com",
        "Federal States": "United Shahdra",
        "Federal verification": true,
        "status": "Completed"
    },
];
SampleInclusiveData.forEach((data, index) => {
    data['Customer number'] = (index + 1).toString();
});

export default SampleInclusiveData;