const LoadingCard = () => {
  return (
    <div className="border border-CurrentLine shadow-sm rounded-xl p-4 w-full">
      <div className="animate-pulse gap-7 grid grid-cols-4">
        <div className="col-span-3 gap-1 space-y-6">
          <div className="h-5 bg-slate-700 rounded-sm"></div>
          <div className="h-5 bg-slate-700 rounded-sm"></div>
          <div className="h-5 bg-slate-700 rounded-sm"></div>
          <div className="h-5 bg-slate-700 rounded-sm"></div>
        </div>
        <div className="col-span-1 self-center justify-self-center align-self">
          <div className="rounded-full bg-slate-700 h-20 w-20"></div>
        </div>
      </div>
      <div className="animate-pulse flex mt-4 gap-1 justify-center">
        <div className="h-12 w-[4.5rem] bg-slate-700 rounded-xl"></div>
        <div className="h-12 w-[4.5rem] bg-slate-700 rounded-xl"></div>
        <div className="h-12 w-[4.5rem] bg-slate-700 rounded-xl"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
