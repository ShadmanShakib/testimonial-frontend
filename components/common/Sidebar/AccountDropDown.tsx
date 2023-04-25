import React from "react";
interface AccountDropDownProps {
  onClick: () => void;
}
function AccountDropDown({ onClick }: AccountDropDownProps) {
  return (
    <div
      className="absolute  right-0 z-50 mt-1 w-56 origin-bottom-right"
      style={{
        position: "fixed",
        inset: "0px auto auto 0px",
        margin: "0px",
        transform: "translate3d(16px, 52px, 0px)",
      }}
      data-popper-placement="bottom-start"
    >
      <div className="rounded-md bg-white shadow-lg">
        <button
          id="headlessui-menu-item-31"
          role="menuitem"
          onClick={onClick}
          className="block w-full focus:outline-none focus:ring-0"
        >
          <div className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm leading-5 text-gray-700">
            <div className="flex items-center gap-2">
              <div>Sign Out</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AccountDropDown;
