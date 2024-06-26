import Link from "next/link";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import { Dialog } from "@headlessui/react";
import { AiOutlineBars } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import "@rainbow-me/rainbowkit/styles.css";

import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { arbitrum } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "8c3fa0027e9be7e3081fc6321e210c05",
  chains: [arbitrum],
  ssr: true,
});
const queryClient = new QueryClient();

const Header = () => {
  const { address } = useAccount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Create", subname: "an badge", href: "/Editor" },
    { name: "Approve", subname: "Loans", href: "/ApproveLoan" },
    { name: "Received", subname: "Loans", href: "/receivedapplications" },
    { name: "Provide", subname: "Loan", href: "/ProvideLoan" },
  ];

  const navigation2 = [
    { name: "My Badges", subname: "", href: "/Badges" },
    { name: "Apply", subname: "Loan", href: "/ApplyLoan" },
    { name: "Verify", subname: "Loan", href: "/VerifyLoan" },
    { name: "Pay", subname: "Loan", href: "/Payloan" },
    { name: "Learn", subname: "", href: "/Learn" },
  ];
  if (typeof window !== "undefined") {
    localStorage.setItem("walletaddress", address || "");
  }
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {" "}
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-16 w-auto"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhENUilxHHUTQharTQgs7IPU6cFMSv_h6KHSD82Wk6NjuzvW8Id97Z0TkZcgghsncWqSADiECjYlOJLpVOhVuDi0DWnrVLpqZOGHKlpS8c_or-RuHJ6fFot0yW8t4-EKvCIX10U7rCF9tvmltMCkayNSnxFrJbP-6lHMtJFIkAN9286YfBCi1nPU2DD/s320/Doc1%20(2).png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <AiOutlineBars className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-12 ">
                {address == "0x3907bAdE047531158c97c8C51b95c72a51E5e37e" ? (
                  <>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mt-2 pt-5 text-center text-lg font-semibold leading-6 text-white"
                      >
                        {item.name} &nbsp;
                        {item.subname}
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    {navigation2.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mt-2 pt-5 text-lg font-semibold leading-6 text-white"
                      >
                        {item.name} &nbsp;
                        {item.subname}
                      </Link>
                    ))}
                  </>
                )}
                <div className="pt-5">
                  <ConnectButton />
                </div>
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhENUilxHHUTQharTQgs7IPU6cFMSv_h6KHSD82Wk6NjuzvW8Id97Z0TkZcgghsncWqSADiECjYlOJLpVOhVuDi0DWnrVLpqZOGHKlpS8c_or-RuHJ6fFot0yW8t4-EKvCIX10U7rCF9tvmltMCkayNSnxFrJbP-6lHMtJFIkAN9286YfBCi1nPU2DD/s320/Doc1%20(2).png"
                      alt=""
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <HiXMark
                      className="h-8 w-8 rounded-lg border border-white text-gray-200"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="mt-5 space-y-6 py-6">
                      {address ==
                      "0x3907bAdE047531158c97c8C51b95c72a51E5e37e" ? (
                        <>
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="mt-2 flex text-lg font-semibold leading-6 text-white hover:bg-gray-700"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <>
                          {navigation2.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="mt-2 flex text-lg font-semibold leading-6 text-gray-200  hover:bg-gray-700"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                    <div className="py-6">
                      <p className=" block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                        <ConnectButton />
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Header;
