import { useSignal } from "@preact/signals";
import { h } from 'preact';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: h.JSX.TargetedEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handle form submission here
        // for now, just simulate success message
        alert('Obrigado! Entraremos em contato em no máximo 24h.');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <button className="absolute top-4 right-4" onClick={onClose}>×</button>
                <h2 className="text-2xl font-bold mb-4">FALE CONOSCO</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Seu nome</label>
                        <input type="text" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label>Seu e-mail</label>
                        <input type="email" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label>Seu telefone</label>
                        <input type="tel" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4">
                        <label>Para você, o treinamento ideal resolveria o quê?</label>
                        <textarea className="w-full p-2 border rounded" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label>Em qual mês você gostaria de realizar o seu treinamento?</label>
                        <select className="w-full p-2 border rounded" required>
                            <option>Abril</option>
                            <option>Maio</option>
                            <option>Junho</option>
                            {/* Add other options as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label>Qual dos treinamentos do nosso site você se interessa mais?</label>
                        <select className="w-full p-2 border rounded" required>
                            <option>Módulo I</option>
                            <option>Módulo II</option>
                            {/* Add other options as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label>Agende uma conversa conosco:</label>
                        <input type="datetime-local" className="w-full p-2 border rounded" required />
                    </div>
                    <button type="submit" className="bg-main text-white px-4 py-2 rounded">ENVIAR RESPOSTAS</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
