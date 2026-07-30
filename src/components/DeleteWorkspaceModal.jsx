
function DeleteWorkspaceModal({
  isOpen,
  workspaceName,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl p-6 animate-in fade-in zoom-in duration-200">

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <span className="text-2xl">🗑️</span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Delete Workspace
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Are you sure you want to delete{" "}
          <span className="font-semibold">
            "{workspaceName}"
          </span>
          ?
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700 transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}

export default DeleteWorkspaceModal;

