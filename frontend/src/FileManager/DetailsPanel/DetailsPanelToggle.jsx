import PropTypes from "prop-types";
import { MdInfoOutline } from "react-icons/md";
import { useTranslation } from "../../contexts/TranslationProvider";

const DetailsPanelToggle = ({ isOpen, onToggle }) => {
  const t = useTranslation();

  return (
    <button
      className={`item-action icon-only${isOpen ? " active" : ""}`}
      title={t("toggleDetailsPanel")}
      aria-label={t("toggleDetailsPanel")}
      aria-pressed={isOpen}
      onClick={onToggle}
    >
      <MdInfoOutline size={18} />
    </button>
  );
};

DetailsPanelToggle.displayName = "DetailsPanelToggle";

DetailsPanelToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DetailsPanelToggle;
