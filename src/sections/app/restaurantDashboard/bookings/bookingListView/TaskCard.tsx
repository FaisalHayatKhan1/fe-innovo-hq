import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2Icon } from "lucide-react";
import { Id, Task } from "../MockData";
import Image from "next/image";
import { webLogoIcon } from "@root/assets";
interface Props {
  bookings: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ bookings, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: bookings.id,
    data: {
      type: "Task",
      bookings,
    },
    // disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  //   const toggleEditMode = () => {
  //     setEditMode((prev) => !prev);
  //     setMouseIsOver(false);
  //   };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-mainBackgroundColor p-2.5 h-[100px] min-h-[120px] items-center flex text-left rounded-xl border-2 border-primary  cursor-grab relative
      "
      >
        <div className=" space-y-3 tracking-wide">
          <div className="flex items-center font-semibold">
            <h1 className="  text-primary text-f18">
              #45622 <span className="text-black px-2">{bookings?.name}</span>
            </h1>
            <div className="text-f12  px-2 py-1 font-medium bg-primary/20 text-primary rounded-[6px]">
              New
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="text-f14 font-medium text-black px-3 py-1 bg-[#f5f5f5] rounded-[10px]">
              6 Servings
            </div>
            <div className="text-f14 font-medium text-black px-3 py-1 bg-[#f5f5f5] rounded-[10px]">
              $123,232
            </div>
          </div>
          <div className="flex space-x-3 font-medium">
            <div className="w-6 h-6 bg-success/25 flex items-center justify-center rounded-[5px]">
              <Image src={webLogoIcon} alt="logo" width={20} height={20} />
            </div>
            <h1 className="text-f14 font-medium whitespace-nowrap text-[#929292] tracking-wider">
              {bookings?.status}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      //   onClick={toggleEditMode}
      className=" bg-white dark:bg-theme-darkSecondary p-[14px]  items-center flex text-left rounded-[20px] hover:ring-2 hover:ring-inset hover:ring-primary cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className=" space-y-3 tracking-wide">
        <div className="flex items-center font-semibold">
          <h1 className="  text-primary text-f18">
            #45622 <span className="text-black px-2">{bookings?.name}</span>
          </h1>
          <div className="text-f12  px-2 py-1 font-medium bg-primary/20 text-primary rounded-[6px]">
            New
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="text-f14 font-medium text-black px-3 py-1 bg-[#f5f5f5] rounded-[10px]">
            6 Servings
          </div>
          <div className="text-f14 font-medium text-black px-3 py-1 bg-[#f5f5f5] rounded-[10px]">
            $123,232
          </div>
        </div>
        <div className="flex space-x-3 font-medium">
          <div className="w-6 h-6 bg-success/25 flex items-center justify-center rounded-[5px]">
            <Image src={webLogoIcon} alt="logo" width={20} height={20} />
          </div>
          <h1 className="text-f14 font-medium whitespace-nowrap text-[#929292] tracking-wider">
            {bookings?.status}
          </h1>
        </div>
      </div>

      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(bookings.id);
          }}
          className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
        >
          <Trash2Icon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
