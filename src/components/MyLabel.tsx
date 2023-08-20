import "./MyLabel.css";
//TODO: si mofificamos las interfaces entonces hay que cancelar la ejecución y volverlo a ejecutar
//para que las detecte.
//Las explicaciones de las props en el docs se tienen que especificar entre comentarios como aparecen debajo.
//  (barra asterisco asterisco /** + intro para que quede igual)
interface Props {
  /**
   * Texto para mostrar
   */
  label: string;
  /**
   * Tamaño del label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   *  Texto en mayúscula o minúscula
   */
  allCaps?: boolean;
  /**
   *  Color del texto
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   *  Font Color
   */
  fontColor?: string; //color del span
  /**
   *  Background color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No LAbel",
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
