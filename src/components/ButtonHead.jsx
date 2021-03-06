const ButtonHead = (prop) => {
    const { title, setSection } = prop;
    return (
        <button
            className="border-white border py-3 px-10 mt-4 mr-8 flex-grow
            sm:flex-grow-0 border-opacity-70 tracking-widest text-sm
            hover:text-darkBlue hover:bg-white transition-all duration-300"
            type="button"
            onClick={setSection}
        >
            {title}
        </button>
    );
};

export default ButtonHead;
