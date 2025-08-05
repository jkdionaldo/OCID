import React from "react";
import { CircleAlert, AlertTriangle, Trash2, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  isDeleting = false,
  itemType = "item",
  warningMessage,
  canDelete = true,
  blockingMessage,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px] p-6">
        <DialogHeader className="sr-only">
          <DialogTitle>Delete Confirmation</DialogTitle>
          <DialogDescription>
            Confirm deletion of {itemType.toLowerCase()}
          </DialogDescription>
        </DialogHeader>

        {/* Icon */}
        <div className="flex justify-center mb-2">
          <div
            className={`flex-shrink-0 w-24 h-24 ${
              canDelete ? "bg-red-100" : "bg-red-100"
            } rounded-full flex items-center justify-center`}
          >
            {canDelete ? (
              <AlertTriangle className="h-14 w-14 text-red-600" />
            ) : (
              <Shield className="h-14 w-14 text-red-500" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Main message */}
          <p className="text-lg text-gray-900 text-center">
            {canDelete
              ? `Are you sure you want to delete this ${itemType.toLowerCase()}?`
              : `This ${itemType.toLowerCase()} cannot be deleted.`}
          </p>

          {/* Warning message for deletable items */}
          {canDelete && warningMessage && (
            <div className="flex gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <CircleAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800 text-left">
                {warningMessage}
              </p>
            </div>
          )}

          {/* Blocking message for non-deletable items */}
          {!canDelete && blockingMessage && (
            <div className="flex gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
              <CircleAlert className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-800 text-left">
                {blockingMessage}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-1 pt-4 border-t border-gray-100">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1"
          >
            {canDelete ? "Cancel" : "Close"}
          </Button>

          {canDelete && (
            <Button
              type="button"
              variant="destructive"
              onClick={onConfirm}
              disabled={isDeleting}
              className="flex-1"
            >
              {isDeleting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
