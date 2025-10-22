import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    firstname: string
    lastname: string
    nickname: string
    telephone: number
    side: string
    join: string
    persons: string
}

const InputComponents = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<Inputs>()
    return (
        <div className="relative w-[210px]">
            <input
                id="floating_outlined_firstName"
                {...register('firstname', { required: true })}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
            />
            <label
                htmlFor="floating_outlined_firstName"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
            >
                <p className="flex flex-wrap">
                    ชื่อ
                    <span className="text-red-700">*</span>
                </p>
            </label>
            {errors.firstname && (
                <p className="w-full text-red-700 text-left text-xs">
                    กรุณากรอกข้อมูล
                </p>
            )}
        </div>
    )
}

export default InputComponents()
