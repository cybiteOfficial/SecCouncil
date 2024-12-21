import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <button className="relative" onClick={() => setOpen(!open)}>
      <div className="flex items-center gap-x-2 hover:opacity-80 transition-opacity duration-300">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-gray-700 hover:text-black transition-colors duration-200" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          ref={ref}
          className="absolute top-[120%] right-0 z-50 min-w-[160px] origin-top-right divide-y divide-gray-200 rounded-lg border border-gray-300 bg-mwhite shadow-lg transition-transform duration-300 transform scale-95 opacity-0 animation-dropdown"
        >
          <Link
            to="/dashboard/my-profile"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-x-2 py-3 px-4 text-sm text-gray-700 hover:bg-yellow-700 hover:text-white transition-colors duration-200"
          >
            <VscDashboard className="text-lg" />
            Dashboard
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-2 py-3 px-4 text-sm hover:bg-yellow-700 text-gray-700 cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
      <style jsx>{`
        .animation-dropdown {
          animation: dropdown 0.3s ease-in-out forwards;
        }

        @keyframes dropdown {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </button>
  );
}
