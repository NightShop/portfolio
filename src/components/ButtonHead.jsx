const ButtonHead = (prop) => {
    const { title } = prop;
    return (
        <button
            className="border-white border py-2 px-8 mr-8 flex-grow
            sm:flex-grow-0 border-opacity-70 tracking-widest text-xs
            hover:text-darkBlue hover:bg-white transition-all duration-300"
            type="button"
        >
            {title}
        </button>
    );
};

export default ButtonHead;
