import { useUI } from "$store/sdk/useUI.ts";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

interface ModalProps {
  label: string;
}

function OpenModal({ label }: ModalProps) {
  const { displayContactModal } = useUI();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    displayContactModal.value = true;
    console.log("abriu");
  };

  const handleSubmit = (e: h.JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission here
    // for now, just simulate success message
    alert("Obrigado! Entraremos em contato em no máximo 24h.");
    displayContactModal.value = false;
  };

  useEffect(() => {
    if (displayContactModal.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [displayContactModal.value]);

  return (
    <div>
      <button
        className="flex flex-nowrap px-4 lg:px-8 py-2 items-center rounded-3xl border border-main text-main text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-nowrap text-sm lg:text-[1rem]">{label}</p>
        <Icon
          id="ExternalLink"
          class="hidden lg:block text-main"
          size={20}
          strokeWidth={0.01}
        />
      </button>

      {displayContactModal.value && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-black p-8 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-screen">
            <button
              className="absolute top-4 right-4"
              onClick={() => {
                displayContactModal.value = false;
              }}
            >
              <Icon
                id="closeModal"
                class="text-main"
                size={32}
                strokeWidth={0.01}
              />
            </button>
            <h2 className="text-main text-2xl font-bold mb-8">FALE CONOSCO</h2>
            <form onSubmit={handleSubmit} class="text-white">
              <div className="flex flex-col mb-8">
                <label>
                  Seu nome <span class="text-main">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-b-200 rounded-full bg-transparent mt-2"
                  required
                />
              </div>
              <div className="flex flex-col mb-8">
                <label>
                  Seu e-mail <span class="text-main">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-b-200 rounded-full bg-transparent mt-2"
                  required
                />
              </div>
              <div className="flex flex-col mb-8">
                <label>
                  Seu telefone <span class="text-main">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-b-200 rounded-full bg-transparent mt-2"
                  required
                />
              </div>
              <div className="flex flex-col mb-8">
                <label>Para você, o treinamento ideal resolveria o quê?</label>
                <textarea
                  className="w-full p-2 border border-b-200 rounded bg-transparent mt-2"
                  required
                >
                </textarea>
              </div>
              <div className="flex flex-col mb-8">
                <label>
                  Em qual mês você gostaria de realizar o seu treinamento?{" "}
                  <span class="text-main">*</span>
                </label>
                <select
                  className="w-full p-2 border border-b-200 rounded-full bg-transparent mt-2"
                  required
                >
                  <option>Abril</option>
                  <option>Maio</option>
                  <option>Junho</option>
                  {/* Add other options as needed */}
                </select>
              </div>
              <div className="flex flex-col mb-8">
                <label>
                  Qual dos treinamentos do nosso site você se interessa mais?
                </label>
                <select
                  className="w-full p-2 border border-b-200 rounded-full bg-transparent mt-2"
                  required
                >
                  <option>Módulo I</option>
                  <option>Módulo II</option>
                  {/* Add other options as needed */}
                </select>
              </div>
              <div className="flex flex-col mb-8">
                <label>Agende uma conversa conosco:</label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border border-b-200 rounded-full bg-transparent mt-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex flex-nowrap px-6 lg:px-8 py-2 mt-2 items-center rounded-3xl border border-main text-black text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main"
              >
                <p className="text-nowrap text-sm lg:text-[1rem]">
                  ENVIAR RESPOSTAS
                </p>
                <Icon
                  id="ExternalLink"
                  class="text-black"
                  size={20}
                  strokeWidth={0.01}
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenModal;
