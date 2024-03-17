export default function DaisyUiTest() {
  return (
    <div className="mx-auto max-w-layout bg-transparent" data-theme="theo">
      <div
        className="not-prose grid gap-3 rounded-box border border-base-content/5 bg-base-100 p-6 text-base-content"
        style={
          {
            // '--a': '0.5 0.5 0',
            // '--ac': '0.1345 0.0335 35.7915',
            // '--b1': '0.5 0.5 0',
            // '--b2': '0.5 0.5 0',
            // '--b3': '0.1948 0 0',
            // '--b3': '0.5 0.5 0',
            // '--bc': '0.8487 0 0',
            // '--er': '0.5161 0.1468 29.6745',
            // '--erc': '0.9032 0.0294 29.6745',
            // '--in': '0.6262 0.1435 240.0337',
            // '--inc': '0.1252 0.0287 240.0337',
            // '--n': '0.2744 0.0132 253.0412',
            // '--nc': '0.8549 0.0026 253.0412',
            // '--p': '0.417 0.0991 251.4739',
            // '--pc': '0.8834 0.0198 251.4739',
            // '--s': '0.6409 0.0274 229.3894',
            // '--sc': '0.1282 0.0055 229.3894',
            // '--su': '0.7023 0.0946 156.5961',
            // '--suc': '0.1405 0.0189 156.5961',
            // '--wa': '0.7748 0.1157 81.5192',
            // '--wac': '0.155 0.0231 81.5192',
          }
        }
      >
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-accent">Accent</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-error">Error</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="md:w-1/2">
              <div className="tabs tabs-lifted">
                <button className="tab">Tab</button>
                <button className="tab tab-active">Tab</button>
                <button className="tab">Tab</button>
              </div>
              <div className="flex flex-col">
                <span className="link">I&apos;m a simple link</span>
                <span className="link link-primary">
                  I&apos;m a simple link
                </span>
                <span className="link link-secondary">
                  I&apos;m a simple link
                </span>
                <span className="link link-accent">I&apos;m a simple link</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <progress className="progress" max="100" value="20">
                Default
              </progress>
              <progress
                className="progress progress-primary"
                max="100"
                value="25"
              >
                Primary
              </progress>
              <progress
                className="progress progress-secondary"
                max="100"
                value="30"
              >
                Secondary
              </progress>
              <progress
                className="progress progress-accent"
                max="100"
                value="40"
              >
                Accent
              </progress>
              <progress className="progress progress-info" max="100" value="45">
                Info
              </progress>
              <progress
                className="progress progress-success"
                max="100"
                value="55"
              >
                Success
              </progress>
              <progress
                className="progress progress-warning"
                max="100"
                value="70"
              >
                Warning
              </progress>
              <progress
                className="progress progress-error"
                max="100"
                value="90"
              >
                Error
              </progress>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="stats border border-base-300 bg-base-300 md:w-1/2">
              <div className="stat">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
              <div
                className="radial-progress"
                style={{
                  '--size': '3.5rem',
                  '--value': '60',
                }}
              >
                60%
              </div>
              <div
                className="radial-progress"
                style={{
                  '--size': '3.5rem',
                  '--value': '75',
                }}
              >
                75%
              </div>
              <div
                className="radial-progress"
                style={{
                  '--size': '3.5rem',
                  '--value': '90',
                }}
              >
                90%
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="md:w-1/2">
              <div>
                <input className="toggle" defaultChecked type="checkbox" />
                <input
                  className="toggle toggle-primary"
                  defaultChecked
                  type="checkbox"
                />
                <input
                  className="toggle toggle-secondary"
                  defaultChecked
                  type="checkbox"
                />
                <input
                  className="toggle toggle-accent"
                  defaultChecked
                  type="checkbox"
                />
              </div>
              <div>
                <input className="checkbox" defaultChecked type="checkbox" />
                <input
                  className="checkbox-primary checkbox"
                  defaultChecked
                  type="checkbox"
                />
                <input
                  className="checkbox-secondary checkbox"
                  defaultChecked
                  type="checkbox"
                />
                <input
                  className="checkbox-accent checkbox"
                  defaultChecked
                  type="checkbox"
                />
              </div>
              <div>
                <input
                  className="radio"
                  defaultChecked
                  name="radio-1"
                  type="radio"
                />
                <input
                  className="radio-primary radio"
                  name="radio-1"
                  type="radio"
                />
                <input
                  className="radio-secondary radio"
                  name="radio-1"
                  type="radio"
                />
                <input
                  className="radio-accent radio"
                  name="radio-1"
                  type="radio"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <input
                className="range range-xs"
                defaultValue="90"
                max="100"
                min="0"
                type="range"
              />
              <input
                className="range range-primary range-xs"
                defaultValue="70"
                max="100"
                min="0"
                type="range"
              />
              <input
                className="range range-secondary range-xs"
                defaultValue="50"
                max="100"
                min="0"
                type="range"
              />
              <input
                className="range range-accent range-xs"
                defaultValue="40"
                max="100"
                min="0"
                type="range"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex flex-col gap-3 md:w-1/2">
              <input
                className="input input-bordered w-full"
                placeholder="Default"
                type="text"
              />
              <input
                className="input input-bordered input-primary w-full"
                placeholder="Primary"
                type="text"
              />
              <input
                className="input input-bordered input-secondary w-full"
                placeholder="Secondary"
                type="text"
              />
              <input
                className="input input-bordered input-accent w-full"
                placeholder="Accent"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <input
                className="input input-bordered input-info w-full"
                placeholder="Info"
                type="text"
              />
              <input
                className="input input-bordered input-success w-full"
                placeholder="Success"
                type="text"
              />
              <input
                className="input input-bordered input-warning w-full"
                placeholder="Warning"
                type="text"
              />
              <input
                className="input input-bordered input-error w-full"
                placeholder="Error"
                type="text"
              />
            </div>
          </div>
          <div className="navbar rounded-box bg-neutral text-neutral-content">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  className="inline-block h-5 w-5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <button className="btn btn-ghost text-xl">daisyUI</button>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-grow flex-col gap-3">
              <div className="text-4xl font-bold">Text Size 1</div>
              <div className="text-3xl font-bold">Text Size 2</div>
              <div className="text-2xl font-bold">Text Size 3</div>
              <div className="text-xl font-bold">Text Size 4</div>
              <div className="text-lg font-bold">Text Size 5</div>
              <div className="text-sm font-bold">Text Size 6</div>
              <div className="text-xs font-bold">Text Size 7</div>
            </div>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Step 1</li>
              <li className="step step-primary">Step 2</li>
              <li className="step">Step 3</li> <li className="step">Step 4</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="alert">
            <svg
              className="h-6 w-6 shrink-0 stroke-info"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>12 unread messages. Tap to see.</span>
          </div>
          <div className="alert alert-info">
            <svg
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>New software update available.</span>
          </div>
          <div className="alert alert-success">
            <svg
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
          <div className="alert alert-warning">
            <svg
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
          <div className="alert alert-error">
            <svg
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
