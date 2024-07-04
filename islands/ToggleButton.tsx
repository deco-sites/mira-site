import { useUI } from "$store/sdk/useUI.ts";

function ToggleButton() {
    const { displayProgram } = useUI();

    const handleTabClick = () => {
        displayProgram.value = !displayProgram.value
    };

    return (
        <div className="flex justify-center items-center mt-4 relative bg-transparent border border-b-200 rounded-full p-2 lg:p-3 w-full lg:max-w-[548px]">
            <button
                className={`w-1/2 px-6 py-2 lg:py-4 font-bold focus:outline-none transition duration-300 ${!displayProgram.value
                    ? "bg-main text-black rounded-full"
                    : "text-b-200"
                    }`}
                onClick={() => handleTabClick}
            >
                ABERTOS
            </button>
            <button
                className={`w-1/2 px-6 py-2 lg:py-4 font-bold focus:outline-none transition duration-300 ${displayProgram.value
                    ? "bg-main text-black rounded-full"
                    : "text-b-200"
                    }`}
                onClick={() => handleTabClick}
            >
                EXCLUSIVOS
            </button>
        </div>
    );
}

export default ToggleButton;

