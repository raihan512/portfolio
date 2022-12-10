export const Button = ({ children }) => {
    return <button
        className='bg-black text-white text-base lg:text-lg font-medium py-2 px-8 mr-5 hover:bg-white hover:text-black bg-gradient-to-r from-cyan-500 to-blue-500 transition-all hover:shadow-xl hover:-translate-y-1 mt-5'>
        {children}
    </button>
}
