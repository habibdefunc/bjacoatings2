import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {
    return (
        <>
            {/* Tombol WhatsApp */}
            <a
                href="https://api.whatsapp.com/send?phone=6281263449454"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 hidden rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors duration-300 hover:bg-green-600 lg:flex"
            >
                <FaWhatsapp className="mr-2 inline-block text-2xl" />
                Hubungi Kami
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=6281263449454"
                target="_blank"
                rel="noopener noreferrer"
                className="i fixed bottom-4 right-4 z-50 flex rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors duration-300 hover:bg-green-600 lg:hidden"
            >
                <FaWhatsapp className="mr-2 ml-2 inline-block text-3xl" />
            </a>
        </>
    );
};
