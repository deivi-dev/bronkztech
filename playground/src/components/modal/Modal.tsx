import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  description?: React.ReactNode;
  content1?: React.ReactNode;
  content2?: React.ReactNode;
  content3?: React.ReactNode;
};

function Modal({ isOpen, title, description, content1, content2, content3 }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <div className="modalClose">
        <X size={16} />
      </div>
      <div className="modalTitle">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {content1}
      {content2}
      {content3}
    </div>,
    document.body
  );
}

export { Modal };
