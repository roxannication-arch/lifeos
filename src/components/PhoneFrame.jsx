export function PhoneFrame({ children }) {
  return (
    <main className="min-h-[100dvh] w-full overflow-hidden bg-black text-white sm:flex sm:items-center sm:justify-center sm:bg-[#0F0F10] sm:px-2 sm:py-2">
      <section className="relative h-[100dvh] w-full overflow-hidden bg-black sm:mx-auto sm:h-[844px] sm:max-h-[calc(100vh-16px)] sm:w-[390px] sm:max-w-[calc(100vw-16px)] sm:rounded-[44px] sm:shadow-2xl sm:shadow-black/70 sm:ring-1 sm:ring-white/10">
        {children}
      </section>
    </main>
  );
}
