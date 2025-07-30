import React from "react";
import { CircleAlert, AlertTriangle, Trash2 } from "lucide-react";
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
        <div className="flex justify-center mb-4">
          <div className="flex-shrink-0 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Simple confirmation text */}
          <p className="text-md text-gray-600">
            Are you sure you want to delete this {itemType.toLowerCase()}? This
            action cannot be undone.
          </p>

          {/* Warning message */}
          {warningMessage && (
            <div className="flex gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <CircleAlert className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800 text-left">
                {warningMessage}
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
            Cancel
          </Button>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
