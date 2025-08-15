function Dashboard() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                Dashboard
              </p>
              <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                Overview of the Eco Points system perfomance
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#293238]">
              <p className="text-white text-base font-medium leading-normal">
                Total Eco Points
              </p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">
                1,234,567
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#293238]">
              <p className="text-white text-base font-medium leading-normal">
                Daily collections
              </p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">
                567
              </p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#293238]">
              <p className="text-white text-base font-medium leading-normal">
                Active Alerts
              </p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">
                12
              </p>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Waste type
          </h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3c4a53] p-6">
              <p className="text-white text-base font-medium leading-normal">
                Waste types
              </p>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <div className="border-[#9daeb8] bg-[#293238] border-t-2 w-full style={height: 60%}"></div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Plastic
                </p>
                <div className="border-[#9daeb8] bg-[#293238] border-t-2 w-full style={height: 70%}"></div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Paper
                </p>
                <div className="border-[#9daeb8] bg-[#293238] border-t-2 w-full style={height: 10%}"></div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Glass
                </p>
                <div className="border-[#9daeb8] bg-[#293238] border-t-2 w-full style={height: 0%}"></div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Metal
                </p>
                <div className="border-[#9daeb8] bg-[#293238] border-t-2 w-full style={height: 80%}"></div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Organic
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Location Performance
          </h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3c4a53] p-6">
              <p className="text-white text-base font-medium leading-normal">
                Location Performance
              </p>
              <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Downtown
                </p>
                <div className="h-full flex-1">
                  <div className="border-[#9daeb8] bg-[#293238] border-r-2 h-full style={width: 40%}"></div>
                </div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Uptown
                </p>
                <div className="h-full flex-1">
                  <div className="border-[#9daeb8] bg-[#293238] border-r-2 h-full style={width: 70%}"></div>
                </div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Midtown
                </p>
                <div className="h-full flex-1">
                  <div className="border-[#9daeb8] bg-[#293238] border-r-2 h-full style={width: 70%}"></div>
                </div>
                <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Suburbia
                </p>
                <div className="h-full flex-1">
                  <div className="border-[#9daeb8] bg-[#293238] border-r-2 h-full style={width: 30%}"></div>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Weekly Trends
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#3c4a53] p-6">
                <p className="text-white text-base font-medium leading-normal">
                  Weekly Trends
                </p>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg
                    width="100%"
                    height="148"
                    viewBox="-3 0 478 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#9daeb8"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1131_5935"
                        x1="236"
                        y1="1"
                        x2="236"
                        y2="149"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#293238"></stop>
                        <stop
                          offset="1"
                          stop-color="#293238"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Mon
                    </p>
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Tue
                    </p>
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Wed
                    </p>
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Thu
                    </p>
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Fri
                    </p>
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Sat
                    </p>
                    <p className="text-[#9daeb8] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Sun
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
