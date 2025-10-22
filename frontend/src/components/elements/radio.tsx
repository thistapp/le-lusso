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

const RadioComponents = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div className="">
            <Controller
                rules={{
                    required: true,
                }}
                name="join"
                control={control}
                render={({ field }) => (
                    <div>
                        <div className="flex items-center my-4">
                            <input
                                type="radio"
                                value="yes"
                                id="radioYes"
                                onChange={field.onChange}
                                checked={field.value === 'yes'}
                                name={field.name}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                className="ms-2 text-sm font-medium text-gray-900 "
                                htmlFor="radioYes"
                            >
                                ได้
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="radio"
                                value="no"
                                id="radioNo"
                                onChange={field.onChange}
                                checked={field.value === 'no'}
                                name={field.name}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                className="ms-2 text-sm font-medium text-gray-900 "
                                htmlFor="radioNo"
                            >
                                ไม่ได้
                            </label>
                        </div>
                    </div>
                )}
            />
            {errors.join && (
                <p className="w-full text-red-700 text-left text-xs">
                    กรุณาเลือกข้อมูล
                </p>
            )}
        </div>
    )
}

export default RadioComponents()
