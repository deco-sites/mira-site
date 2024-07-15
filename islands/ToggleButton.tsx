import { useUI } from "$store/sdk/useUI.ts";

function ToggleButton() {
    const { displayProgram } = useUI();

    const handleCheckboxChange = () => {
        displayProgram.value = !displayProgram.value;
        console.log(displayProgram.value);
    };

    return (
        <div className="flex justify-center items-center mt-4 relative bg-transparent border border-b-200 rounded-full p-2 lg:p-3 w-full lg:max-w-[548px]">
            <label className="cursor-pointer relative w-full flex justify-center items-center">
                <input
                    type="checkbox"
                    checked={displayProgram.value}
                    onChange={handleCheckboxChange}
                    className="hidden"
                />
                <span
                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-300 ${
                        displayProgram.value ? 'translate-x-full' : ''
                    }`}
                    style={{
                        width: '50%',
                        backgroundColor: '#FFBC4E',
                        transform: displayProgram.value ? 'translateX(100%)' : 'translateX(0)',
                    }}
                ></span>
                <span
                    className={`w-1/2 text-center px-6 py-2 lg:py-4 font-extrabold transition duration-300 z-10 ${
                        !displayProgram.value ? 'text-black' : 'text-b-200'
                    }`}
                >
                    ABERTOS
                </span>
                <span
                    className={`w-1/2 text-center px-6 py-2 lg:py-4 font-extrabold transition duration-300 z-10 ${
                        displayProgram.value ? 'text-black' : 'text-b-200'
                    }`}
                >
                    EXCLUSIVOS
                </span>
            </label>
        </div>
    );
}

export default ToggleButton;
