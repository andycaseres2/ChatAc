import { Message } from "./Message";

export const Messages = () => {
  return (
    <div className="bg-[#23272a] p-4 w-full h-full overflow-scroll overflow-x-hidden">
      <Message owner={true} />
      <Message />
    </div>
  );
};
