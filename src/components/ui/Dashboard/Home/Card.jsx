import { cards } from "./Data";
export const Card = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-5 w-[100%]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="justify-center rounded-lg  flex-1 flex items-center bg-white space-x-4 md:w-1/4 h-28  p-1"
        >
         <div className={`w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center
          ${card.blue?'':(card.yellow?'w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center'
          :(card.red?'w-16 h-16 bg-red-50 rounded-full flex items-center justify-center':'w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center'))}`}>
           {card.icon}</div>
          <div>
             <h3 className="font-bold text-2xl text-gray-600">{card.title}</h3>
             <p className="text-sm text-gray-500">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
