export default function FirstLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#f1f5f9] h-lvh lg:p-32 md:p-20 p-10">
      {children}
    </section>
  );
}
