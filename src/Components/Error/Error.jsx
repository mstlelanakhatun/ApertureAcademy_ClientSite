import { FaRegMeh } from "react-icons/fa";
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <FaRegMeh className='w-40 h-40 text-blue-600' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-blue-600'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-[#393E46] mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='button button-primary'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error;