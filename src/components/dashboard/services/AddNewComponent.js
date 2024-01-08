import { PlusIcon } from "@heroicons/react/solid";

const AddNewComponent = () => {
  return (
    <div className="border-4 border-dashed border-gray-200 w-200 h-200 p-20">
      <div className="h-full w-full flex items-center justify-center">
        <div>
          <button className="w-48 rounded-lg py-4 px-8 font-bold text-xl bg-gray-500 text-white hover:bg-red-400 transition-colors duration-300">
            Add New
          </button>
          <div className="text-gray-500 py-1 px-2">
            <span>Upload files in jpg format</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewComponent;
