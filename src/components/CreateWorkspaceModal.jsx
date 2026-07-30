
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/clerk-react";

import { createOrganization } from "../redux/organizationSlice";

export default function CreateWorkspaceModal({
  isOpen,
  onClose,
}) {
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const closeModal = () => {
    setName("");
    setDescription("");
    setImage("");
    setError("");

    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleCreateWorkspace = () => {
    if (!isLoaded || !user?.id) {
      setError("User not loaded.");
      return;
    }

    if (!name.trim()) {
      setError("Workspace name is required.");
      return;
    }

    dispatch(
      createOrganization({
        id: Date.now(),
        name: name.trim(),
        description: description.trim(),
        image,
        userId: user.id,
      })
    );

    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative z-10 w-[420px] rounded-xl bg-white p-6 text-black shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">
          Create Workspace
        </h2>

        {error && (
          <div className="mb-4 rounded border border-red-300 bg-red-50 p-2 text-red-600">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Workspace Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          className="mb-3 w-full rounded border p-2"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-3 w-full rounded border p-2"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {
              setImage(reader.result);
            };

            reader.readAsDataURL(file);
          }}
          className="mb-4 w-full"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="rounded bg-gray-300 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleCreateWorkspace}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

