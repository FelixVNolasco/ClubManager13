import React from 'react'
import { Sidebar } from '../../components/Shared/Sidebar/Sidebar';
import Link from "next/link";

export default function NewStudent() {
    return (
        <div className="mt-2 w-full sm:w-5/6 p-4 sm:m-auto sm:mt-2 sm:p-10 md:m-auto md:mt-2 lg:m-auto lg:mt-2 xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 animate__animated animate__fadeIn animate__faster">
            <div className="flex flex-col p-2 border-2 border-slate-400 shadow-slate-500 rounded-md">
                <Link
                    className="xl:hidden w-1/3 flex p-2 bg-yellow-200 hover:bg-yellow-300 justify-center items-center font-semibold cursor-pointer rounded-md mb-4"
                    href="/"
                >
                    {/* <FaAngleLeft /> */}
                    <span>Regresar</span>
                </Link>
                <h5 className="font-semibold text-center sm:text-left text-2xl ml-6 mt-2 mb-6">
                    Agregar un nuevo estudiante
                </h5>
                {/* {errors !== "" && (
                            <h5 className="p-2 m-2 text-center font-semibold bg-red-200 rounded-md animate__animated animate__headShake animate__faster">
                                {errors}
                            </h5>
                        )} */}
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex md:flex-row p-6 items-start md:items-center">
                        <span className="w-full md:w-3/12 lg:w-2/12 mb-2 md:mb-0 font-semibold">Boleta</span>
                        <input
                            className="w-full md:w-9/12 lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="boleta"
                            type="text"
                        // onChange={handleInputChange}
                        // value={boleta}
                        />
                    </div>
                    <div className="flex flex-col md:flex md:flex-row p-6 items-start md:items-center">
                        <span className="w-full md:w-3/12 lg:w-2/12 mb-2 md:mb-0 font-semibold">Nombre(s)</span>
                        <input
                            className="w-full md:w-9/12 lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="firstName"
                            type="text"
                        // onChange={handleInputChange}
                        // value={firstName}
                        />
                    </div>
                    <div className="flex flex-col md:flex md:flex-row p-6 items-start md:items-center">
                        <span className="w-full md:w-3/12 lg:w-2/12 mb-2 md:mb-0 font-semibold">Apellidos</span>
                        <input
                            className="w-full md:w-9/12 lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="lastName"
                            type="text"
                        // onChange={handleInputChange}
                        // value={lastName}
                        />
                    </div>
                    <div className="flex flex-col md:flex md:flex-row p-6 items-start md:items-center">
                        <span className="w-full md:w-3/12 lg:w-2/12 mb-2 md:mb-0 font-semibold">Correo</span>
                        <input
                            className="w-full md:w-9/12 lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="email"
                            type="text"
                        // onChange={handleInputChange}
                        // value={email}
                        />
                    </div>
                    <div className="flex flex-col md:flex md:flex-row p-6 items-start md:items-center">
                        <span className="w-full md:w-3/12 lg:w-2/12 mb-2 md:mb-0 font-semibold">Carrera</span>
                        <input
                            className="w-full md:w-9/12 lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="career"
                            type="text"
                        // onChange={handleInputChange}
                        // value={career}
                        />
                    </div>
                    <div className="flex flex-col md:flex md:flex-row p-6 items-start md:items-center">
                        <span className="w-full md:w-3/12 lg:w-2/12 mb-2 md:mb-0 font-semibold">Plantel</span>
                        <select
                            className="w-full md:w-9/12 lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="school"
                            id=""
                        // onChange={handleInputChange}
                        // value={school}
                        >
                            <option disabled>Seleccione una opción</option>
                            <option value="UPIICSA" defaultChecked>
                                UPIICSA
                            </option>
                            <option value="ESIME">ESIME</option>
                            <option value="UPIITA">UPIITA</option>
                            <option value="ESCOM">ESCOM</option>
                        </select>
                    </div>
                    <div className="flex flex-col lg:flex lg:flex-row p-6 items-start lg:items-center">
                        <span className="w-full lg:w-2/12 mb-2 lg:mb-0 font-semibold">
                            Situación Escolar
                        </span>
                        <select
                            className="w-full lg:w-10/12 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                            name="signedUp"
                            id=""
                        // onChange={handleInputChange}
                        // value={signedUp}
                        >
                            <option disabled>Seleccione una opción</option>
                            <option value="true">Regular</option>
                            <option value="false" disabled>
                                Irregular
                            </option>
                        </select>
                    </div>

                    <div className="flex justify-end">
                        <div
                            className="p-4 w-24 text-center font-semibold items-center bg-green-400 hover:bg-green-500 hover:bg-green rounded-md cursor-pointer"
                        // onClick={CreateStudent}
                        >
                            Agregar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
