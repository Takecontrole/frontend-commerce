import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
 const {user} = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Профиль
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Заказы
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Возврат
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Сообщения
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Отследить заказ
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Сменить пароль
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Адрес
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "#D58E88" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[#D58E88]" : ""
              } 800px:block hidden`}
            >
             Админ Панель 
            </span>
          </div>
        </Link>
      )}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "#D58E88" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[#D58E88]" : ""
          } 800px:block hidden`}
        >
          Выйти
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
