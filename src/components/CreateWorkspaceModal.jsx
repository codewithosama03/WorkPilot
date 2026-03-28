import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrganization } from "../redux/organizationSlice";

export default function CreateWorkspaceModal({ isOpen, onClose }) {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  if (!isOpen) return null;

  const handleCreateWorkspace = () => {

    if (!name.trim()) return;

    dispatch(
      createOrganization({
        name,
        description,
        image
      })
    );

    setName("");
    setDescription("");
    setImage("");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white text-black w-[420px] rounded-xl shadow-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Create Workspace
        </h2>

        <input
          type="text"
          placeholder="Workspace Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {

            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onloadend = () => {
              setImage(reader.result);
            };

            reader.readAsDataURL(file);

          }}
          className="w-full p-2 mb-4 border rounded"
        />

        <div className="flex justify-end gap-2">

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleCreateWorkspace}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Create
          </button>

        </div>

      </div>

    </div>
  );
}