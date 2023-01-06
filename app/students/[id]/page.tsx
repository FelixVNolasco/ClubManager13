import Link from "next/link";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import validator from "validator";
// import { FaAngleLeft } from "react-icons/fa";

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'



const StudentPage = () => {
    // const location = useLocation();
    // const MySwal = withReactContent(Swal)
    const studentId = location.pathname.split("/")[2];
    // const navigate = useNavigate();
    // const [student, setStudent] = useState({});
    // const estaincrito = student.signedUp;
    // const [modifying, setModifying] = useState(false);

    // useEffect(() => {
    //     const getStudent = async () => {
    //         try {
    //             const students = await axios.get(
    //                 `http://localhost:5000/students/${studentId}`
    //             );
    //             setStudent(students.data);
    //         } catch (error) {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: 'No ha sido posible ver la informacion del estudiante',
    //                 didOpen: () => {
    //                     navigate("/");
    //                 }
    //             });
    //             console.log(error);
    //         }
    //     };
    //     getStudent();
    // }, [studentId, navigate]);

    // const [formValues, handleInputChange] = useForm({
    //     boleta: "",
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    // });
    // const { boleta, firstName, lastName, email } = formValues;

    // const [errors, setErrors] = useState("");

    // const isFormValid = () => {
    //     if (validator.isEmpty(boleta) || !validator.isNumeric(boleta)) {
    //         setErrors(
    //             "El campo boleta es obligatorio y solo debe de contener numeros"
    //         );
    //         return false;
    //     } else if (validator.isEmpty(firstName)) {
    //         setErrors("El campo Nombre es obligatorio");
    //         return false;
    //     } else if (validator.isEmpty(lastName)) {
    //         setErrors("El campo Apellido es obligatorio");
    //         return false;
    //     } else if (!validator.isEmail(email)) {
    //         setErrors("El campo Correo es obligatorio y no es un email");
    //         return false;
    //     }
    //     setErrors("");
    //     return true;
    // };

    // const UpdateStudent = async () => {
    //     try {
    //         if (isFormValid()) {
    //             await axios.put(
    //                 `http://localhost:5000/students/${studentId}`,
    //                 formValues
    //             );
    //             MySwal.fire({
    //                 icon: 'success',
    //                 title: 'Actualizado Correctamente',
    //                 text: 'Se ha actualizado la información del estudiante',
    //                 didOpen: () => {
    //                     navigate("/");
    //                 }
    //             })
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'No ha sido actualizar el estudiante',
    //             didOpen: () => {
    //                 navigate("/");
    //             }
    //         })
    //     }
    // };

    // const DeleteStudent = async () => {
    //     try {
    //         await axios.delete(`http://localhost:5000/students/${studentId}`);
    //         MySwal.fire({
    //             icon: "success",
    //             title: "Eliminado Correctamente",
    //             text: "El estudiante se ha eliminado correctamente",
    //             didOpen: () => {
    //                 navigate("/");
    //             },
    //         });
    //     } catch (error) {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: "No ha sido posible eliminar al estudiante",
    //             didOpen: () => {
    //                 navigate("/");
    //             },
    //         });
    //     }
    // };

    return (
        <div className="flex flex-col mt-6 m-auto sm:mt-6 sm:m-auto md:mt-6 md:m-auto lg:mt-6 lg:m-auto xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6 h-full 2xl:h-screen sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10">
            <Link
                className="xl:hidden flex p-2 bg-yellow-200 hover:bg-yellow-300 justify-center items-center font-semibold cursor-pointer rounded-md mb-2"
                href="/"
            >
                {/* <FaAngleLeft /> */}
                <span>Regresar</span>
            </Link>
            <div className="flex flex-col p-6 w-full items-center">
                {/* {errors !== "" && (
                            <h5 className="w-full p-2 m-2 text-center font-semibold bg-red-200 rounded-md animate__animated animate__headShake animate__faster">
                                {errors}
                            </h5>
                        )} */}
                <div className="flex flex-col p-6 sm:p-16 md:p-16 lg:p-16 xl:p-24 2xl:p-24 lg:w-2/3 bg-gradient-to-r from-gray-100 via-gray-100/50 to-gray-200 border-2 border-slate-200 rounded-md">
                    <>
                        <div className="animate__animated animate__fadeInDown animate__faster">
                            <h4 className="text-2xl font-bold mb-6 text-center">
                                Datos del alumno
                            </h4>
                            <div className="flex text-xl">
                                <span className="w-24 font-semibold">Boleta: </span>
                                <span className="font-semibold ml-2 mb-4">
                                    {/* {student.boleta} */}
                                </span>
                            </div>

                            <div className="flex text-xl">
                                <span className="w-24 font-semibold">Nombre: </span>
                                <span className="font-semibold ml-2 mb-4">
                                    {/* {student.firstName} */}
                                </span>
                            </div>

                            <div className="flex text-xl">
                                <span className="w-24 font-semibold">Apellidos: </span>
                                <span className="font-semibold ml-2 mb-4">
                                    {/* {student.lastName} */}
                                </span>
                            </div>

                            <div className="flex text-xl">
                                <span className="w-16 font-semibold">Carrera: </span>
                                <span className="font-semibold ml-10 mb-4">
                                    {/* {student.career} */}
                                </span>
                            </div>

                            <div className="flex text-xl">
                                <span className="w-16 font-semibold">Plantel: </span>
                                <span className="font-semibold ml-10 mb-4">
                                    {/* {student.school} */}
                                </span>
                            </div>

                            <div className="flex text-xl">
                                <span className="w-16 font-semibold">Correo: </span>
                                <span className="font-semibold ml-10 mb-4">
                                    {/* {student.email} */}
                                </span>
                            </div>

                            <div className="flex text-xl items-center mt-4 mb-6">
                                <p className="font-semibold">
                                    Actualmente esta inscrito?
                                </p>
                                <div
                                // className={
                                //     !estaincrito
                                //         ? "ml-6 h-4 w-4 bg-red-400 rounded-full"
                                //         : "ml-6 h-4 w-4 bg-green-400 rounded-full"
                                // }
                                ></div>
                            </div>

                            <div className="flex justify-end p-2">
                                <div
                                    className="p-4 w-24 text-center font-semibold items-center bg-yellow-400 transition ease-in-out duration-300 hover:bg-yellow-500 hover:bg-green rounded-md cursor-pointer"
                                // onClick={() => setModifying(!modifying)}
                                >
                                    Modificar
                                </div>
                                <div
                                    className="ml-6 p-4 w-24 text-center font-semibold items-center bg-red-400 transition ease-in-out duration-300 hover:bg-red-500 hover:bg-green rounded-md cursor-pointer"
                                // onClick={DeleteStudent}
                                >
                                    Eliminar
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default StudentPage;