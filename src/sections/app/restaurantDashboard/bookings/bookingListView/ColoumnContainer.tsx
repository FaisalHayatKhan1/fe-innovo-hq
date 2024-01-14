import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../MockData";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { PlusCircleIcon, Trash2Icon } from "lucide-react";

interface Props {
  column: Column;
  updateColumn: (id: Id, title: string) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  updateColumn,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className=" bg-columnBackgroundColor opacity-40 border-2 border-primary/50 w-full h-full rounded-md flex flex-col "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-[#FAFAFA] px-3 h-[75vh] dark:bg-grayScale-secondary max-h-[75vh] w-full rounded-[16px] overflow-hidden flex flex-col"
    >
      <div
        {...attributes}
        {...listeners}
        className=" text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-medium  flex items-center"
      >
        <div className="text-f20 font-semibold text-[#2B2B2B]">{column.title}</div>
        <div className="h-[27px] w-[27px] rounded-full dark:bg-theme-darkSecondary bg-primary mx-3 flex justify-center items-center text-white">
          4
        </div>
      </div>

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((booking) => (
            <TaskCard
              key={booking.id}
              bookings={booking}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default ColumnContainer;
