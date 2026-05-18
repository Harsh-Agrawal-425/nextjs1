export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="bg-black text-white text-center py-3 text-sm font-semibold">
        Flat 50% OFF on all plans! Limited time offer.
      </div>

      {/* Signin Page */}
      <div className="flex-1 flex justify-center items-center">
        {children}
      </div>

    </div>
  );
}