export function PhoneFrame({ children }) {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0F0F10] px-2 py-2 text-white sm:flex sm:items-center sm:justify-center">
      <section className="relative mx-auto h-[844px] max-h-[calc(100vh-16px)] w-[390px] max-w-[calc(100vw-16px)] overflow-hidden rounded-[44px] bg-black shadow-2xl shadow-black/70 ring-1 ring-white/10">
        {children}
      </section>
    </main>
  );
}
