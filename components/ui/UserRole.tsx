import React, { useState, useTransition } from 'react'
import { UseAppDispatch } from '../../hooks/ReduxType'
import { isShowRoleUi } from '../../lib/features/ShowRoleUi'
import { saveUserRole } from '../../utils/utils.client'
function UserRole() {
    const dispatch = UseAppDispatch()
    const [transition, setTransition] = useState(false)
    return (
        <div tabIndex={2} onClick={() => {
            setTransition(true)
            setTimeout(() => {
                dispatch(isShowRoleUi())
            }, 200)
        }} className='w-full h-screen absolute bottom-0 left-0 backdrop-blur-sm transition-all duration-200 ease-out'>
            <div tabIndex={1} onClick={evt => evt.stopPropagation()} className={`w-full absolute bottom-0 rounded-t-full left-0 h-[calc(100vh/1.5)] flex justify-center items-center bg-primary animate-fadeUp ${transition && "translate-y-[50vh] transition-transform ease-out duration-200"} `}>
                <div className='flex items-center flex-col gap-10'>
                    <div>
                        <h1 className=' text-2xl'>Join as Employee or Organization</h1>

                    </div>
                    <div className='flex items-center justify-around gap-5 *:border *:hover:border-2 *:p-2.5 *:rounded-lg'>
                        <button onClick={(evt) => {
                            evt.stopPropagation()
                            saveUserRole("company")
                            setTransition(true)
                            setTimeout(() => {
                                dispatch(isShowRoleUi())
                            }, 200)
                        }}>
                            <svg
                                width={100}
                                height={100}
                                fill="#000000"
                                viewBox="0 0 50 50"
                                xmlns="http://www.w3.org/2000/svg"/*  */
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" />
                                </g>
                            </svg>
                            Organization
                        </button>
                        <button onClick={() => {
                            saveUserRole("employee")
                            setTransition(true)
                            setTimeout(() => {
                                dispatch(isShowRoleUi())
                            }, 200)
                        }}>
                            <svg
                                fill="#000000"
                                height={100}
                                width={100}
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 278.56 278.56"
                                xmlSpace="preserve"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g>
                                        {" "}
                                        <g>
                                            {" "}
                                            <g>
                                                {" "}
                                                <path d="M122.16,153h34.24c29.701,0,53.38-24.201,53.38-53.38c0-9.531,0-36.995,0-46.23C209.78,23.951,185.833,0,156.4,0 c-41.724,0-25.524,0-34.24,0C92.726,0,68.78,23.951,68.78,53.39c0,9.649,0,35.362,0,46.23C68.78,128.765,92.409,153,122.16,153z M156.4,15c19.633,0,38.38,15.029,38.38,40.35h-17.27c-23.715,0-43.636-17.179-47.261-40.35H156.4z M83.78,53.39 c0-18.277,13.016-34.176,31.042-37.678c-1.752,17.775-14.279,32.674-31.042,37.757V53.39z M83.78,68.946 c17.039-3.769,31.307-14.962,39.309-29.903c10.912,18.862,31.293,31.307,54.421,31.307h17.27v29.27 c0,21.03-17.077,38.38-38.38,38.38h-34.24c-21.37,0-38.38-17.402-38.38-38.38V68.946z" />{" "}
                                                <path d="M170.109,166.663c-0.003-0.001-0.005-0.002-0.008-0.003c-0.003-0.001-0.007-0.002-0.01-0.003 c-18.722-5.07-42.913-5.069-61.632,0.003c-0.003,0.001-0.005,0.002-0.008,0.003C61.429,179.364,28.59,222.291,28.59,271.06 c0,4.142,3.358,7.5,7.5,7.5c4.472,0,201.908,0,206.38,0c4.142,0,7.5-3.358,7.5-7.5 C249.97,222.269,217.131,179.342,170.109,166.663z M105.773,254.167l11.899,9.393h-73.78 c3.018-37.395,28.402-69.64,64.249-81.168l10.091,10.627l-15.03,53.223C102.378,249.16,103.392,252.288,105.773,254.167z M139.28,261.505l-20.281-16.008l14.829-52.509c0.719-2.546,0.043-5.284-1.779-7.203l-6.74-7.098 c9.083-1.089,18.859-1.09,27.941,0.001l-6.739,7.097c-1.822,1.919-2.499,4.656-1.779,7.203l14.829,52.509L139.28,261.505z M160.888,263.559l11.898-9.392c2.381-1.879,3.395-5.007,2.571-7.925l-15.03-53.223c7.786-8.2,5.478-5.769,10.092-10.629 c35.848,11.511,61.233,43.755,64.248,81.169H160.888z" />{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                            Employee
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRole