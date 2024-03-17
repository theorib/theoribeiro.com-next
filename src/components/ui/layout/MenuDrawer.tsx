import Link from 'next/link';

function MenuDrawer() {
  return (
    <div>
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="menu-drawer"
          className="btn btn-square drawer-button sm:btn-lg"
        >
          {/* <MenuIcon className="h-5 w-5 fill-neutral-100 sm:h-7 sm:w-7" /> */}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="menu-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full w-80 flex-col gap-4 bg-base-200 p-4">
          <label
            htmlFor="menu-drawer"
            className="btn btn-square btn-secondary drawer-button self-end sm:btn-lg"
          >
            {/* <MenuCloseIcon className="h-5 w-5 fill-neutral-100 sm:h-7 sm:w-7" /> */}
          </label>

          <ul className="menu text-base-content sm:menu-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-theo-ribeiro">About</Link>
            </li>
            <li>
              <Link href="/daisy-ui-test">Daisy UI</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuDrawer;
