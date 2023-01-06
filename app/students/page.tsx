import React from 'react'

import StudentCard from '../components/Shared/Student/StudentCard';

// const getHomeProducts = () => {
//     return fetch("https://olympus-backend.vercel.app/api/products", { cache: "no-store" })
//         .then((res) => res.json())
// }

// const getAllStudents = () => {
//     return fetch("", { cache: "no-store" }).then((res) => res.json())
// }

export default async function HomeProducts() {
    // const students = await getAllStudents();

    return (
        <div className='mt-12 mb-12 w-10/12 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center'>
            {
                // students.slice(0, 6).map((student: any) => (
                //     <StudentCard key={student._id} student={student} />
                // ))
            }
        </div>
    )
}