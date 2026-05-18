// it's like layout.tsx 
// wherever there is async function taking 
// time it will render this file

function Loading() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        Loading...
      </div>
    </div>
  );
}

export default Loading;