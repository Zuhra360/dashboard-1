import { cards } from "./Data";
export const Card = ({ icon, title, value }) => {
  return (
    <div className="flex flex-row gap-10 w-[100%] mb-8 bg-zinc-50">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-8 border rounded-lg  flex items-center bg-white space-x-4 w-1/4 h-24 gap-8"
        >
          <div className="text-3xl text-blue-500">{card.icon}</div>
          <div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
