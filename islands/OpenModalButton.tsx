import { useUI } from "$store/sdk/useUI.ts";
import { h } from "preact";
import { useSignal } from "@preact/signals";
import { useCallback, useEffect, useState } from "preact/hooks";
import { invoke } from "deco-sites/mira-site/runtime.ts";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

interface ModalProps {
  label: string;
}

function OpenModal({ label }: ModalProps) {
    const { displayContactModal, displayConfirmationModal } = useUI();
    const formValues = useSignal({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      trainingInterest: "",
      trainingMonth: "",
      trainingDate: "",
    });
    const loading = useSignal(false);
    const feedbackMessage = useSignal({
      message: "",
      buttonMessage: "Reserve sua vaga",
    });
  
    const onRsvp = useCallback(async () => {
      loading.value = true;

      const invokeResponse = await invoke({
        key: "deco-sites/mira-sites/actions/submitRsvp.ts",
        props: {
          data: formValues.value,
        },
      });
  
        if (invokeResponse.ok) {
          feedbackMessage.value = {
            message: "Enviamos a confirmação para o seu e-mail.",
            buttonMessage: "Você está dentro!",
          };
        } else {
          feedbackMessage.value = {
            message: "Ops, houve um erro.",
            buttonMessage: "Tente novamente",
          };
        }
      
        loading.value = false;
    }, [formValues.value]);
  
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      displayContactModal.value = true;
    };
  
    const handleChange = (e: h.JSX.TargetedEvent<HTMLInputElement| HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.currentTarget;
      formValues.value = { ...formValues.value, [name]: value };
    };
  
    const handleSubmit = async (e: h.JSX.TargetedEvent<HTMLFormElement>) => {
      e.preventDefault();
      onRsvp();
      displayContactModal.value = false;
      displayConfirmationModal.value = true;
    };
  
    useEffect(() => {
      if (displayContactModal.value || displayConfirmationModal.value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [displayContactModal.value, displayConfirmationModal.value]);

  return (
    <div>
      <button
        className="flex flex-nowrap px-4 md:px-8 py-2 items-center rounded-3xl border border-main text-main text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-nowrap text-sm md:text-[1rem]">{label}</p>
        <Icon
          id="ExternalLink"
          class="hidden md:block text-main"
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
            <h2 className="text-main text-2xl font-bold mb-8">
              FALE CONOSCO
            </h2>
            <form onSubmit={handleSubmit} class="text-white">
              <div className="flex flex-col mb-8">
                <label class="font-medium">
                  Seu nome <span class="text-main">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.value.name}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-b-200 rounded-full bg-transparent mt-2 placeholder-opacity-50"
                  required
                />
              </div>
              <div className="flex flex-col mb-8">
                <label class="font-medium">
                  Seu e-mail <span class="text-main">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.value.email}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-b-200 rounded-full bg-transparent mt-2 placeholder-opacity-50"
                  required
                />
              </div>
              <div className="flex flex-col mb-8">
                <label class="font-medium">
                  Seu telefone <span class="text-main">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formValues.value.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-b-200 rounded-full bg-transparent mt-2 placeholder-opacity-50"
                  required
                  placeholder={"(00) 0000-0000"}
                />
              </div>
              <div className="flex flex-col mb-8">
                <label class="font-medium">
                  Para você, o treinamento ideal resolveria o quê?
                </label>
                <textarea
                  name="message"
                  value={formValues.value.message}
                  onChange={handleChange}
                  className="w-full p-6 border border-b-200 rounded bg-transparent mt-2 placeholder-opacity-50"
                  required
                  placeholder={"Escreva aqui..."}
                />
              </div>
              <div className="flex flex-col mb-8 relative">
                <label class="font-medium">
                  Em qual mês você gostaria de realizar o seu treinamento?{" "}
                  <span class="text-main">*</span>
                </label>
                <select
                  name="trainingMonth"
                  value={formValues.value.trainingMonth}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-b-200 rounded-full bg-transparent mt-2 placeholder-opacity-50"
                  required
                >
                  <option class="bg-black text-white">
                    Abril
                  </option>
                  <option class="bg-black text-white">
                    Maio
                  </option>
                  <option class="bg-black text-white">
                    Junho
                  </option>
                  {/* Add other options as needed */}
                </select>
                <div className="absolute right-6 top-2/3 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M26 12L16 22L6 12H26Z"
                      fill="#FFBC4E"
                    />
                    <path
                      d="M26.9236 11.6175C26.8479 11.4348 26.7198 11.2786 26.5553 11.1686C26.3909 11.0587 26.1976 11 25.9998 11H5.99981C5.80192 10.9998 5.60842 11.0584 5.44383 11.1683C5.27923 11.2782 5.15094 11.4344 5.07519 11.6172C4.99944 11.8 4.97963 12.0012 5.01828 12.1953C5.05693 12.3894 5.1523 12.5676 5.29231 12.7075L15.2923 22.7075C15.3852 22.8005 15.4955 22.8742 15.6169 22.9246C15.7383 22.9749 15.8684 23.0008 15.9998 23.0008C16.1312 23.0008 16.2614 22.9749 16.3828 22.9246C16.5041 22.8742 16.6144 22.8005 16.7073 22.7075L26.7073 12.7075C26.8471 12.5676 26.9423 12.3893 26.9808 12.1953C27.0193 12.0013 26.9994 11.8002 26.9236 11.6175ZM15.9998 20.5863L8.41356 13H23.5861L15.9998 20.5863Z"
                      fill="#FFBC4E"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col mb-8 relative">
                <label class="font-medium">
                  Qual dos treinamentos do nosso site você se interessa mais?
                </label>
                <select
                  name="trainingInterest"
                  value={formValues.value.trainingInterest}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-b-200 rounded-full bg-transparent mt-2 placeholder-opacity-50"
                  required
                >
                  <option value="Módulo I" class="bg-black text-white">
                    Módulo I
                  </option>
                  <option value="Módulo II" class="bg-black text-white">
                    Módulo II
                  </option>
                  {/* Add other options as needed */}
                </select>
                <div className="absolute right-6 top-2/3 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M26 12L16 22L6 12H26Z"
                      fill="#FFBC4E"
                    />
                    <path
                      d="M26.9236 11.6175C26.8479 11.4348 26.7198 11.2786 26.5553 11.1686C26.3909 11.0587 26.1976 11 25.9998 11H5.99981C5.80192 10.9998 5.60842 11.0584 5.44383 11.1683C5.27923 11.2782 5.15094 11.4344 5.07519 11.6172C4.99944 11.8 4.97963 12.0012 5.01828 12.1953C5.05693 12.3894 5.1523 12.5676 5.29231 12.7075L15.2923 22.7075C15.3852 22.8005 15.4955 22.8742 15.6169 22.9246C15.7383 22.9749 15.8684 23.0008 15.9998 23.0008C16.1312 23.0008 16.2614 22.9749 16.3828 22.9246C16.5041 22.8742 16.6144 22.8005 16.7073 22.7075L26.7073 12.7075C26.8471 12.5676 26.9423 12.3893 26.9808 12.1953C27.0193 12.0013 26.9994 11.8002 26.9236 11.6175ZM15.9998 20.5863L8.41356 13H23.5861L15.9998 20.5863Z"
                      fill="#FFBC4E"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col mb-8 relative">
                <label class="font-medium">
                  Data que deseja realizar o treinamento
                </label>
                <input
                  type="date"
                  name="trainingDate"
                  value={formValues.value.trainingDate}
                  onChange={handleChange}
                  className="w-full px-6 py-3 border border-b-200 rounded-full bg-transparent mt-2 placeholder-opacity-50"
                  required
                />
                <div className="absolute right-6 top-2/3 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M27 6V11H5V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6Z"
                      fill="#FFBC4E"
                    />
                    <path
                      d="M26 4H23V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2C21.7348 2 21.4804 2.10536 21.2929 2.29289C21.1054 2.48043 21 2.73478 21 3V4H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM9 6V7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7V6H21V7C21 7.26522 21.1054 7.51957 21.2929 7.70711C21.4804 7.89464 21.7348 8 22 8C22.2652 8 22.5196 7.89464 22.7071 7.70711C22.8946 7.51957 23 7.26522 23 7V6H26V10H6V6H9ZM26 26H6V12H26V26Z"
                      fill="#FFBC4E"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-4 bg-main text-black rounded-full hover:bg-opacity-75 transition-opacity duration-300 uppercase"
                >
                  Enviar Resposta
                  <Icon
                    id="ExternalLink"
                    class="hidden md:block text-black"
                    size={20}
                    strokeWidth={0.01}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {displayConfirmationModal.value && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-black p-8 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-[80vh]">
            <div class="flex items-center justify-between">
              <button
                className="absolute top-4 right-4"
                onClick={() => {
                  displayConfirmationModal.value = false;
                }}
              >
                <Icon
                  id="closeModal"
                  class="text-main"
                  size={32}
                  strokeWidth={0.01}
                />
              </button>
              <h2 className="text-main text-2xl font-bold mb-8">
                FALE CONOSCO
              </h2>
            </div>
            <div class="flex flex-col items-center justify-center gap-10">
              <Icon
                id="CheckModal"
                class="text-main"
                size={96}
              />
              <p className="text-white text-4xl font-semibold leading-[120%] text-center">
                Obrigada! Entraremos em contato em no máximo{" "}
                <span class="text-main f-roman font-bold">
                  24h
                </span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenModal;
