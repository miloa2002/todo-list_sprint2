import completed from '../assets/icon-check.svg'

const Button = () => {
    return (
        <button
            className="w-6 h-6 rounded-full flex items-center justify-center border-2  focus:bg-gradient-to-t from-purple-600 to-blue-600"
            type="submit"
        ><img src={completed} alt="" /></button>
    )
}

export default Button
