"use client";
import LottieAnimation from "@/components/home/lottie-desktop";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] [background-size:24px_24px] opacity-20 dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-green-500/10 blur-3xl dark:bg-green-400/10"></div>
        <div className="absolute right-10 bottom-20 h-40 w-40 animate-pulse rounded-full bg-purple-500/10 blur-3xl delay-1000 dark:bg-purple-400/10"></div>

        <div className="relative z-10 container mx-auto px-6 py-20 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content Section */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 dark:border-green-800 dark:bg-green-950/50">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    ✨ Professional Financial Planning
                  </span>
                </div>

                <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-300">
                    ISTAD
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                    Full Stack
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-300">
                    Course
                  </span>
                </h1>
              </div>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0 lg:text-xl dark:text-slate-300">
                We will build a full stack application using Next.js and Spring
                Boot. The project is designed to help you understand the
                concepts of full stack development and how to integrate frontend
                and backend technologies effectively.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/25"
                >
                  <span>Get Started</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="#learn-more"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-lg font-semibold text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8 dark:border-slate-700">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-100">
                    500+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Clients Served
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-100">
                    $50M+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Assets Managed
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-100">
                    98%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-gradient-to-br from-green-500/20 to-purple-500/20 blur-xl"></div>
                <div className="absolute -right-4 -bottom-4 h-full w-full rounded-3xl bg-gradient-to-tl from-green-500/10 to-purple-500/10"></div>

                {/* Main Image Container */}
                <div className="relative flex flex-col items-center rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
                  {/*  dotlottie-player*/}
                  <LottieAnimation />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 animate-bounce rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                  <div className="text-center text-2xl">🇳</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Next.js
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 animate-bounce rounded-2xl border border-slate-200 bg-white p-4 shadow-xl delay-500 dark:border-slate-700 dark:bg-slate-800">
                  <div className="text-center text-2xl">🌱</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Spring Boot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
