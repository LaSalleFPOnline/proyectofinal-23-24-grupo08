import { getLangText } from "../../../helpers";
import Option from "./Option";
import clsx from "clsx";
import __isEmpty from "lodash/isEmpty";
import styles from "./formInput.module.scss";

const InputRadio = (props) => {
    const { className, style, name, options, value, onChange, error } = props;

    const helperText = getLangText(props.helperText);
    const stylesInputRadio = clsx({
        [styles.contentInputRadio]: true,
        [className]: !__isEmpty(className),
        [styles[style]]: true,
    });
    return (
        <div className={stylesInputRadio}>
            {options.map((opt, index) => {
                return (
                    <Option
                        key={`option-${opt.value}-${index}`}
                        name={name}
                        value={opt.value}
                        text={opt.text}
                        selected={value === opt.value}
                        onChange={onChange}
                        style={style}
                    />
                );
            })}
            {error && (
                <span className={`${styles.error} xs`}>{helperText}</span>
            )}
        </div>
    );
};

export default InputRadio;

InputRadio.defaultProps = {
    className: null,
    style: "gris",
};
