import React from 'react'

const UpdateStudent = () => {
    return (
        <div className="mb-12 animate__animated animate__fadeIn animate__faster">
            <h5 className="text-2xl font-bold mb-10 text-center">
                Modificar Datos
            </h5>

            <div className="mb-4 items-center flex text-xl ">
                <span className="w-1/4 font-semibold">Boleta: </span>
                <input
                    className="p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 w-3/4"
                    type="text"
                    name="boleta"
                // value={boleta}
                // onChange={handleInputChange}
                // placeholder={student.boleta}
                />
            </div>

            <div className="mb-4 items-center flex text-xl ">
                <span className="w-1/4 font-semibold">Nombre: </span>
                <input
                    className="p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 w-3/4"
                    type="text"
                    name="firstName"
                // value={firstName}
                // onChange={handleInputChange}
                // placeholder={student.firstName}
                />
            </div>

            <div className="mb-4 items-center flex text-xl ">
                <span className="w-1/4 font-semibold">Apellidos: </span>
                <input
                    className="p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 w-3/4"
                    type="text"
                    name="lastName"
                // value={lastName}
                // onChange={handleInputChange}
                // placeholder={student.lastName}
                />
            </div>

            <div className="mb-4 items-center flex text-xl ">
                <span className="w-1/4 font-semibold">Correo: </span>
                <input
                    className="p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 w-3/4"
                    type="text"
                    name="email"
                // value={email}
                // onChange={handleInputChange}
                // placeholder={student.email}
                />
            </div>

            <div className="flex justify-end p-2">
                <div
                    className="p-4 text-center font-semibold items-center bg-red-400 transition ease-in-out duration-300 hover:bg-red-500 hover:bg-green rounded-md cursor-pointer"
                // onClick={() => setModifying(!modifying)}
                >
                    Cancelar
                </div>
                <div
                    className="ml-6 p-4 text-center font-semibold items-center bg-green-400 transition ease-in-out duration-300 hover:bg-green-500 hover:bg-green rounded-md cursor-pointer"
                // onClick={UpdateStudent}
                >
                    Confirmar
                </div>
            </div>
        </div>
    )
}


export default UpdateStudent;