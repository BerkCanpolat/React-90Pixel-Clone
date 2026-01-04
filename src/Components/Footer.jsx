import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";



const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-30 pb-50 px-8 md:px-0">
        <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="mb-10 md:mb-0">
                <p className="mb-3 text-gray-500">Tanışalım</p>
                <p className="flex items-center gap-2.5 text-2xl font-light mb-10"><CiMail /> hi@90pixel.com</p>

                <p className="mb-3 text-gray-500">Konuşalım</p>
                <p className="flex items-center gap-2.5 text-2xl font-light"><FaPhoneAlt /> +90 232 229 00 90</p>

                <p className="mb-3 text-gray-500 mt-10">Ofis</p>
                <p className="flex items-start gap-2.5 text-sm font-light"><LuMapPin className="text-2xl"/> Mansuroğlu Mah. 1593/1 Sok. Lider <br /> Centrio B Blok Kat.8 Daire.85 Bayraklı. <br /> İzmir. Türkiye</p>
            </div>

            <div className="flex flex-col gap-9.5">
                <ul className="text-2xl md:text-4xl font-extralight">
                    <li className="mb-3">Ana sayfa</li>
                    <li className="mb-3">Ürünler</li>
                    <li className="mb-3">Projeler</li>
                    <li className="mb-3">Hizmetler</li>
                    <li className="">Hakkımızda</li>
                </ul>
                <p className="text-gray-500 text-sm hidden md:block">&copy; 90pixel 2021. All rights reserverd.</p>
            </div>
            <div>
                <ul className="text-2xl mt-10 md:mt-0 mb-10 md:mb-0 md:text-4xl font-extralight">
                    <li className="mb-3">Kariyer</li>
                    <li className="mb-3">Akademi</li>
                    <li className="mb-3">İletişim</li>
                    <li className="mb-3">Gizlilik Politikası</li>
                    <li className="">Hakkımızda</li>
                </ul>
            </div>
            <div>
                <ul className="text-xl font-light text-gray-500">
                    <li>Dribble</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer